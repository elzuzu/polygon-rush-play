var k0=Object.defineProperty;var H0=(i,e)=>{for(var t in e)k0(i,t,{get:e[t],enumerable:!0})};var V0=0,Ff=1,G0=2;var pc=1,W0=2,Ui=3,yi=0,$t=1,At=2,_i=0,Cr=1,Dr=2,Of=3,Bf=4,qu=5,Fi=100,X0=101,q0=102,Y0=103,Z0=104,K0=200,Yu=201,$0=202,J0=203,Nl=204,Do=205,j0=206,Q0=207,eg=208,tg=209,ng=210,ig=211,sg=212,rg=213,og=214,Ul=0,Fl=1,Ol=2,Nr=3,Bl=4,zl=5,kl=6,Hl=7,Zu=0,ag=1,cg=2,fs=0,Ku=1,$u=2,Ju=3,Go=4,lg=5,ju=6,Qu=7,zf="attached",ug="detached",ip=300,Ur=301,Fr=302,Vl=303,Gl=304,mc=306,ki=1e3,Oi=1001,No=1002,sn=1003,eh=1004;var Ar=1005;var Rn=1006,Co=1007;var Yn=1008;var Hi=1009,sp=1010,rp=1011,Uo=1012,th=1013,Gs=1014,li=1015,En=1016,nh=1017,ih=1018,Or=1020,op=35902,ap=1021,cp=1022,Zn=1023,lp=1024,up=1025,Ir=1026,Br=1027,sh=1028,rh=1029,hp=1030,oh=1031;var ah=1033,za=33776,ka=33777,Ha=33778,Va=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Zl=36196,Kl=37492,$l=37496,Jl=37808,jl=37809,Ql=37810,eu=37811,tu=37812,nu=37813,iu=37814,su=37815,ru=37816,ou=37817,au=37818,cu=37819,lu=37820,uu=37821,Ga=36492,hu=36494,fu=36495,fp=36283,du=36284,pu=36285,mu=36286;var zr=2300,kr=2301,tl=2302,kf=2400,Hf=2401,Vf=2402,hg=2500;var dp=0,gc=1,Wo=2,fg=3200,dg=3201;var ch=0,pg=1,ls="",wt="srgb",_n="srgb-linear",xc="linear",Mt="srgb";var cr=7680;var Gf=519,mg=512,gg=513,xg=514,pp=515,_g=516,yg=517,vg=518,Mg=519,gu=35044,Mi=35048;var Wf="300 es",Bi=2e3,Wa=2001,ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xf=1234567,Io=Math.PI/180,Hr=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function lh(i,e){return(i%e+e)%e}function Sg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bg(i,e,t){return i!==e?(t-i)/(e-i):0}function Po(i,e,t){return(1-t)*i+t*e}function Eg(i,e,t,n){return Po(i,e,1-Math.exp(-t*n))}function Tg(i,e=1){return e-Math.abs(lh(i,e*2)-e)}function wg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cg(i,e){return i+Math.random()*(e-i)}function Ig(i){return i*(.5-Math.random())}function Pg(i){i!==void 0&&(Xf=i);let e=Xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(i){return i*Io}function Dg(i){return i*Hr}function Ng(i){return(i&i-1)===0&&i!==0}function Ug(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Og(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var mp={DEG2RAD:Io,RAD2DEG:Hr,generateUUID:ui,clamp:gn,euclideanModulo:lh,mapLinear:Sg,inverseLerp:bg,lerp:Po,damp:Eg,pingpong:Tg,smoothstep:wg,smootherstep:Ag,randInt:Rg,randFloat:Cg,randFloatSpread:Ig,seededRandom:Pg,degToRad:Lg,radToDeg:Dg,isPowerOfTwo:Ng,ceilPowerOfTwo:Ug,floorPowerOfTwo:Fg,setQuaternionFromProperEuler:Og,normalize:Et,denormalize:ci},$e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],_=s[0],m=s[3],d=s[6],y=s[1],v=s[4],g=s[7],T=s[2],E=s[5],M=s[8];return r[0]=o*_+a*y+c*T,r[3]=o*m+a*v+c*E,r[6]=o*d+a*g+c*M,r[1]=l*_+h*y+u*T,r[4]=l*m+h*v+u*E,r[7]=l*d+h*g+u*M,r[2]=f*_+p*y+x*T,r[5]=f*m+p*v+x*E,r[8]=f*d+p*g+x*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,x=t*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nl=new lt;function gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bg(){let i=Fo("canvas");return i.style.display="block",i}var qf={};function Ao(i){i in qf||(qf[i]=!0,console.warn(i))}function zg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?xc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yf=[.64,.33,.3,.6,.15,.06],Zf=[.2126,.7152,.0722],Kf=[.3127,.329],$f=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jf=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[_n]:{primaries:Yf,whitePoint:Kf,transfer:xc,toXYZ:$f,fromXYZ:Jf,luminanceCoefficients:Zf,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:Yf,whitePoint:Kf,transfer:Mt,toXYZ:$f,fromXYZ:Jf,luminanceCoefficients:Zf,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});var lr,xu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=Fo("canvas")),lr.width=e.width,lr.height=e.height;let n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Xa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(il(s[o].image)):r.push(il(s[o]))}else r=il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gg=0,rn=class i extends ds{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=Rn,o=Yn,a=Zn,c=Hi,l=i.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ui(),this.name="",this.source=new Xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ip)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=ip;rn.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],x=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,g=(p+1)/2,T=(d+1)/2,E=(h+f)/4,M=(u+_)/4,w=(x+m)/4;return v>g&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=M/n):g>T?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=E/s,r=w/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=M/r,s=w/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_u=class extends ds{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends _u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qa=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yu=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==f||l!==p||h!==x){let m=1-a,d=c*f+l*p+h*x+u*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,d*y);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let g=a*y;if(c=c*m+f*g,l=l*m+p*g,h=h*m+x*g,u=u*m+_*g,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*p-l*f,e[t+1]=c*x+h*f+l*u-a*p,e[t+2]=l*x+h*p+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*x,this._y=l*p*u-f*h*x,this._z=l*h*x+f*p*u,this._w=l*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+l*p*x,this._y=l*p*u-f*h*x,this._z=l*h*x-f*p*u,this._w=l*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-l*p*x,this._y=l*p*u+f*h*x,this._z=l*h*x+f*p*u,this._w=l*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-l*p*x,this._y=l*p*u+f*h*x,this._z=l*h*x-f*p*u,this._w=l*h*u+f*p*x;break;case"YZX":this._x=f*h*u+l*p*x,this._y=l*p*u+f*h*x,this._z=l*h*x-f*p*u,this._w=l*h*u-f*p*x;break;case"XZY":this._x=f*h*u-l*p*x,this._y=l*p*u-f*h*x,this._z=l*h*x+f*p*u,this._w=l*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new O,jf=new Qt,Kn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),ua.subVectors(this.max,go),ur.subVectors(e.a,go),hr.subVectors(e.b,go),fr.subVectors(e.c,go),is.subVectors(hr,ur),ss.subVectors(fr,hr),Us.subVectors(ur,fr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Us.z,Us.y,is.z,0,-is.x,ss.z,0,-ss.x,Us.z,0,-Us.x,-is.y,is.x,0,-ss.y,ss.x,0,-Us.y,Us.x,0];return!rl(t,ur,hr,fr,ua)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,ur,hr,fr,ua))?!1:(ha.crossVectors(is,ss),t=[ha.x,ha.y,ha.z],rl(t,ur,hr,fr,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ci=[new O,new O,new O,new O,new O,new O,new O,new O],si=new O,la=new Kn,ur=new O,hr=new O,fr=new O,is=new O,ss=new O,Us=new O,go=new O,ua=new O,ha=new O,Fs=new O;function rl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fs.fromArray(i,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Wg=new Kn,xo=new O,ol=new O,Fn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(ol)),this.expandByPoint(xo.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new O,al=new O,fa=new O,rs=new O,cl=new O,da=new O,ll=new O,Vr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){al.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(al);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=rs.dot(this.direction),c=-rs.dot(fa),l=rs.lengthSq(),h=Math.abs(1-o*o),u,f,p,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(al).addScaledVector(fa,f),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){cl.subVectors(t,e),da.subVectors(n,e),ll.crossVectors(cl,da);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);let c=a*this.direction.dot(da.crossVectors(rs,da));if(c<0)return null;let l=a*this.direction.dot(cl.cross(rs));if(l<0||c+l>o)return null;let h=-a*rs.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,x,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,x,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,x,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/dr.setFromMatrixColumn(e,0).length(),r=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+x*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,x=l*h,_=l*u;t[0]=f+_*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,x=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=x*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,qg)}lookAt(e,t,n){let s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),os.crossVectors(n,Nn),os.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),os.crossVectors(n,Nn)),os.normalize(),pa.crossVectors(Nn,os),s[0]=os.x,s[4]=pa.x,s[8]=Nn.x,s[1]=os.y,s[5]=pa.y,s[9]=Nn.y,s[2]=os.z,s[6]=pa.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],d=n[14],y=n[3],v=n[7],g=n[11],T=n[15],E=s[0],M=s[4],w=s[8],b=s[12],S=s[1],R=s[5],F=s[9],B=s[13],L=s[2],V=s[6],H=s[10],j=s[14],z=s[3],te=s[7],fe=s[11],ge=s[15];return r[0]=o*E+a*S+c*L+l*z,r[4]=o*M+a*R+c*V+l*te,r[8]=o*w+a*F+c*H+l*fe,r[12]=o*b+a*B+c*j+l*ge,r[1]=h*E+u*S+f*L+p*z,r[5]=h*M+u*R+f*V+p*te,r[9]=h*w+u*F+f*H+p*fe,r[13]=h*b+u*B+f*j+p*ge,r[2]=x*E+_*S+m*L+d*z,r[6]=x*M+_*R+m*V+d*te,r[10]=x*w+_*F+m*H+d*fe,r[14]=x*b+_*B+m*j+d*ge,r[3]=y*E+v*S+g*L+T*z,r[7]=y*M+v*R+g*V+T*te,r[11]=y*w+v*F+g*H+T*fe,r[15]=y*b+v*B+g*j+T*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],y=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,v=x*f*l-h*m*l-x*c*p+o*m*p+h*c*d-o*f*d,g=h*_*l-x*u*l+x*a*p-o*_*p-h*a*d+o*u*d,T=x*u*c-h*_*c-x*a*f+o*_*f+h*a*m-o*u*m,E=t*y+n*v+s*g+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/E;return e[0]=y*M,e[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*M,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*M,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*M,e[4]=v*M,e[5]=(h*m*r-x*f*r+x*s*p-t*m*p-h*s*d+t*f*d)*M,e[6]=(x*c*r-o*m*r-x*s*l+t*m*l+o*s*d-t*c*d)*M,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*M,e[8]=g*M,e[9]=(x*u*r-h*_*r-x*n*p+t*_*p+h*n*d-t*u*d)*M,e[10]=(o*_*r-x*a*r+x*n*l-t*_*l-o*n*d+t*a*d)*M,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*M,e[12]=T*M,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*m+t*u*m)*M,e[14]=(x*a*s-o*_*s-x*n*c+t*_*c+o*n*m-t*a*m)*M,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*M,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,x=r*u,_=o*h,m=o*u,d=a*u,y=c*l,v=c*h,g=c*u,T=n.x,E=n.y,M=n.z;return s[0]=(1-(_+d))*T,s[1]=(p+g)*T,s[2]=(x-v)*T,s[3]=0,s[4]=(p-g)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(x+v)*M,s[9]=(m-y)*M,s[10]=(1-(f+_))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),a=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);let l=1/r,h=1/o,u=1/a;return ri.elements[0]*=l,ri.elements[1]*=l,ri.elements[2]*=l,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Bi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(a===Bi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Wa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Bi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,p=(n+s)*h,x,_;if(a===Bi)x=(o+r)*u,_=-2*u;else if(a===Wa)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dr=new O,ri=new et,Xg=new O(0,0,0),qg=new O(1,1,1),os=new O,pa=new O,Nn=new O,Qf=new et,ed=new Qt,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yg=0,td=new O,pr=new Qt,Pi=new et,ma=new O,_o=new O,Zg=new O,Kg=new Qt,nd=new O(1,0,0),id=new O(0,1,0),sd=new O(0,0,1),rd={type:"added"},$g={type:"removed"},mr={type:"childadded",child:null},ul={type:"childremoved",child:null},Lt=class i extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new hi,n=new Qt,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new lt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(_o,ma,this.up):Pi.lookAt(ma,_o,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(Pi),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($g),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new O(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new O,Li=new O,hl=new O,Di=new O,gr=new O,xr=new O,od=new O,fl=new O,dl=new O,pl=new O,ml=new gt,gl=new gt,xl=new gt,us=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){oi.subVectors(s,t),Li.subVectors(n,t),hl.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Li),c=oi.dot(hl),l=Li.dot(Li),h=Li.dot(hl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ml.setScalar(0),gl.setScalar(0),xl.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),xl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(e,t,n,s){return oi.subVectors(n,t),Li.subVectors(e,t),oi.cross(Li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),oi.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,n),xr.subVectors(r,n),fl.subVectors(e,n);let c=gr.dot(fl),l=xr.dot(fl);if(c<=0&&l<=0)return t.copy(n);dl.subVectors(e,s);let h=gr.dot(dl),u=xr.dot(dl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gr,o);pl.subVectors(e,r);let p=gr.dot(pl),x=xr.dot(pl);if(x>=0&&p<=x)return t.copy(r);let _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(xr,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return od.subVectors(r,s),a=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(od,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(gr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ga={h:0,s:0,l:0};function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=lh(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return ht.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=wt){ht.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(ga);let n=Po(as.h,ga.h,t),s=Po(as.s,ga.s,t),r=Po(as.l,ga.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ae;Ae.NAMES=xp;var Jg=0,Sn=class extends ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ui(),this.name="",this.blending=Cr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Do,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new O,xa=new $e,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}};var Za=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ka=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jg=0,qn=new et,yl=new Lt,_r=new O,Un=new Kn,yo=new Kn,nn=new O,pt=class i extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Ka:Za)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Un.min,yo.min),Un.expandByPoint(nn),nn.addVectors(Un.max,yo.max),Un.expandByPoint(nn)):(Un.expandByPoint(yo.min),Un.expandByPoint(yo.max))}Un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)nn.fromBufferAttribute(a,l),c&&(_r.fromBufferAttribute(e,l),nn.add(_r)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new O,c[w]=new O;let l=new O,h=new O,u=new O,f=new $e,p=new $e,x=new $e,_=new O,m=new O;function d(w,b,S){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(f),x.sub(f);let R=1/(p.x*x.y-x.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(R),a[w].add(_),a[b].add(_),a[S].add(_),c[w].add(m),c[b].add(m),c[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,b=y.length;w<b;++w){let S=y[w],R=S.start,F=S.count;for(let B=R,L=R+F;B<L;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new O,g=new O,T=new O,E=new O;function M(w){T.fromBufferAttribute(s,w),E.copy(T);let b=a[w];v.copy(b),v.sub(T.multiplyScalar(T.dot(b))).normalize(),g.crossVectors(E,b);let R=g.dot(c[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,R)}for(let w=0,b=y.length;w<b;++w){let S=y[w],R=S.start,F=S.count;for(let B=R,L=R+F;B<L;B+=3)M(e.getX(B+0)),M(e.getX(B+1)),M(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,x=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[x++]=l[p++]}return new xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ad=new et,Os=new Vr,_a=new Fn,cd=new O,ya=new O,va=new O,Ma=new O,vl=new O,Sa=new O,ld=new O,ba=new O,ot=class extends Lt{constructor(e=new pt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(vl.fromBufferAttribute(u,e),o?Sa.addScaledVector(vl,h):Sa.addScaledVector(vl.sub(t),h))}t.add(Sa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(_a.containsPoint(Os.origin)===!1&&(Os.intersectSphere(_a,cd)===null||Os.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ad.copy(r).invert(),Os.copy(e.ray).applyMatrix4(ad),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,T=v;g<T;g+=3){let E=a.getX(g),M=a.getX(g+1),w=a.getX(g+2);s=Ea(this,d,e,n,l,h,u,E,M,w),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){let y=a.getX(m),v=a.getX(m+1),g=a.getX(m+2);s=Ea(this,o,e,n,l,h,u,y,v,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let m=f[x],d=o[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let g=y,T=v;g<T;g+=3){let E=g,M=g+1,w=g+2;s=Ea(this,d,e,n,l,h,u,E,M,w),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){let y=m,v=m+1,g=m+2;s=Ea(this,o,e,n,l,h,u,y,v,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qg(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===yi,a),c===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ba);return l<t.near||l>t.far?null:{distance:l,point:ba.clone(),object:i}}function Ea(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ya),i.getVertexPosition(c,va),i.getVertexPosition(l,Ma);let h=Qg(i,e,t,n,ya,va,Ma,ld);if(h){let u=new O;us.getBarycoord(ld,ya,va,Ma,u),s&&(h.uv=us.getInterpolatedAttribute(s,a,c,l,u,new $e)),r&&(h.uv1=us.getInterpolatedAttribute(r,a,c,l,u,new $e)),o&&(h.normal=us.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new O,materialIndex:0};us.getNormal(ya,va,Ma,f.normal),h.face=f,h.barycoord=u}return h}var on=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function x(_,m,d,y,v,g,T,E,M,w,b){let S=g/M,R=T/w,F=g/2,B=T/2,L=E/2,V=M+1,H=w+1,j=0,z=0,te=new O;for(let fe=0;fe<H;fe++){let ge=fe*R-B;for(let Ee=0;Ee<V;Ee++){let de=Ee*S-F;te[_]=de*y,te[m]=ge*v,te[d]=L,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[d]=E>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ee/M),u.push(1-fe/w),j+=1}}for(let fe=0;fe<w;fe++)for(let ge=0;ge<M;ge++){let Ee=f+ge+V*fe,de=f+ge+V*(fe+1),ne=f+(ge+1)+V*(fe+1),$=f+(ge+1)+V*fe;c.push(Ee,de,$),c.push(de,ne,$),z+=6}a.addGroup(p,z,b),p+=z,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Gr(i[t]);for(let s in n)e[s]=n[s]}return e}function ex(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _p(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Si={clone:Gr,merge:Mn},tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$a=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new O,ud=new $e,hd=new $e,qt=class extends $a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,ud,hd),t.subVectors(hd,ud)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yr=-90,vr=1,vu=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(yr,vr,e,t);s.layers=this.layers,this.add(s);let r=new qt(yr,vr,e,t);r.layers=this.layers,this.add(r);let o=new qt(yr,vr,e,t);o.layers=this.layers,this.add(o);let a=new qt(yr,vr,e,t);a.layers=this.layers,this.add(a);let c=new qt(yr,vr,e,t);c.layers=this.layers,this.add(c);let l=new qt(yr,vr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Ja=class extends rn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mu=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ja(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:_i});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Rn),new vu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ml=new O,ix=new O,sx=new lt,ai=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ml.subVectors(n,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sx.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new Fn,Ta=new O,Oo=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],x=s[9],_=s[10],m=s[11],d=s[12],y=s[13],v=s[14],g=s[15];if(n[0].setComponents(c-r,f-l,m-p,g-d).normalize(),n[1].setComponents(c+r,f+l,m+p,g+d).normalize(),n[2].setComponents(c+o,f+h,m+x,g+y).normalize(),n[3].setComponents(c-o,f-h,m-x,g-y).normalize(),n[4].setComponents(c-a,f-u,m-_,g-v).normalize(),t===Bi)n[5].setComponents(c+a,f+u,m+_,g+v).normalize();else if(t===Wa)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ta.x=s.normal.x>0?e.max.x:e.min.x,Ta.y=s.normal.y>0?e.max.y:e.min.y,Ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function yp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){let x=u[f],_=u[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){let _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Cn=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],x=[],_=[],m=[];for(let d=0;d<h;d++){let y=d*f-o;for(let v=0;v<l;v++){let g=v*u-r;x.push(g,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let v=y+l*d,g=y+l*(d+1),T=y+1+l*(d+1),E=y+1+l*d;p.push(v,g,E),p.push(g,T,E)}this.setIndex(p),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ax=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,px=`#ifdef USE_BATCHING
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
#endif`,mx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,vx=`#ifdef USE_BUMPMAP
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cx=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
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
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
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
#endif`,s_=`struct PhysicalMaterial {
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
}`,r_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m_=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W_=`float getShadowMask() {
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
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q_=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,py=`#define DISTANCE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`uniform float scale;
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
}`,_y=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,vy=`uniform vec3 diffuse;
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
}`,My=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,by=`#define MATCAP
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
}`,Ey=`#define MATCAP
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
}`,Ty=`#define NORMAL
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
}`,wy=`#define NORMAL
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
}`,Ay=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Iy=`#define STANDARD
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
}`,Py=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Dy=`uniform float size;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Fy=`uniform vec3 color;
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
}`,Oy=`uniform float rotation;
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
}`,By=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:ox,alphahash_pars_fragment:ax,alphamap_fragment:cx,alphamap_pars_fragment:lx,alphatest_fragment:ux,alphatest_pars_fragment:hx,aomap_fragment:fx,aomap_pars_fragment:dx,batching_pars_vertex:px,batching_vertex:mx,begin_vertex:gx,beginnormal_vertex:xx,bsdfs:_x,iridescence_fragment:yx,bumpmap_pars_fragment:vx,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:Ex,color_fragment:Tx,color_pars_fragment:wx,color_pars_vertex:Ax,color_vertex:Rx,common:Cx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Px,displacementmap_pars_vertex:Lx,displacementmap_vertex:Dx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Ux,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:Bx,envmap_common_pars_fragment:zx,envmap_pars_fragment:kx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:jx,envmap_vertex:Vx,fog_vertex:Gx,fog_pars_vertex:Wx,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:Zx,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:$x,lights_pars_begin:Jx,lights_toon_fragment:Qx,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:a_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:l_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:h_,map_fragment:f_,map_pars_fragment:d_,map_particle_fragment:p_,map_particle_pars_fragment:m_,metalnessmap_fragment:g_,metalnessmap_pars_fragment:x_,morphinstance_vertex:__,morphcolor_vertex:y_,morphnormal_vertex:v_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:b_,normal_fragment_maps:E_,normal_pars_fragment:T_,normal_pars_vertex:w_,normal_vertex:A_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:P_,iridescence_pars_fragment:L_,opaque_fragment:D_,packing:N_,premultiplied_alpha_fragment:U_,project_vertex:F_,dithering_fragment:O_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:H_,shadowmap_pars_vertex:V_,shadowmap_vertex:G_,shadowmask_pars_fragment:W_,skinbase_vertex:X_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:Z_,specularmap_fragment:K_,specularmap_pars_fragment:$_,tonemapping_fragment:J_,tonemapping_pars_fragment:j_,transmission_fragment:Q_,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:sy,background_vert:ry,background_frag:oy,backgroundCube_vert:ay,backgroundCube_frag:cy,cube_vert:ly,cube_frag:uy,depth_vert:hy,depth_frag:fy,distanceRGBA_vert:dy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:xy,linedashed_frag:_y,meshbasic_vert:yy,meshbasic_frag:vy,meshlambert_vert:My,meshlambert_frag:Sy,meshmatcap_vert:by,meshmatcap_frag:Ey,meshnormal_vert:Ty,meshnormal_frag:wy,meshphong_vert:Ay,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Iy,meshtoon_vert:Py,meshtoon_frag:Ly,points_vert:Dy,points_frag:Ny,shadow_vert:Uy,shadow_frag:Fy,sprite_vert:Oy,sprite_frag:By},Ge={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},xi={basic:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Mn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Mn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Mn([Ge.points,Ge.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Mn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Mn([Ge.common,Ge.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Mn([Ge.sprite,Ge.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Mn([Ge.common,Ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Mn([Ge.lights,Ge.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};xi.physical={uniforms:Mn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var wa={r:0,b:0,g:0},zs=new hi,zy=new et;function ky(i,e,t,n,s,r,o){let a=new Ae(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function x(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1,g=x(y);g===null?d(a,c):g&&g.isColor&&(d(g,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let g=x(v);g&&(g.isCubeTexture||g.mapping===mc)?(h===void 0&&(h=new ot(new on(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Gr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zs.copy(v.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(zs)),h.material.toneMapped=ht.getTransfer(g.colorSpace)!==Mt,(u!==g||f!==g.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new ot(new Cn(2,2),new St({name:"BackgroundMaterial",uniforms:Gr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ht.getTransfer(g.colorSpace)!==Mt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,v){y.getRGB(wa,_p(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(a,c)},render:_,addToRenderList:m}}function Hy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,R,F,B,L){let V=!1,H=u(B,F,R);r!==H&&(r=H,l(r.object)),V=p(S,B,F,L),V&&x(S,B,F,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,g(S,R,F,B),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,F){let B=F.wireframe===!0,L=n[S.id];L===void 0&&(L={},n[S.id]=L);let V=L[R.id];V===void 0&&(V={},L[R.id]=V);let H=V[B];return H===void 0&&(H=f(c()),V[B]=H),H}function f(S){let R=[],F=[],B=[];for(let L=0;L<t;L++)R[L]=0,F[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,R,F,B){let L=r.attributes,V=R.attributes,H=0,j=F.getAttributes();for(let z in j)if(j[z].location>=0){let fe=L[z],ge=V[z];if(ge===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function x(S,R,F,B){let L={},V=R.attributes,H=0,j=F.getAttributes();for(let z in j)if(j[z].location>=0){let fe=V[z];fe===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor));let ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),L[z]=ge,H++}r.attributes=L,r.attributesNum=H,r.index=B}function _(){let S=r.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){let F=r.newAttributes,B=r.enabledAttributes,L=r.attributeDivisors;F[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),L[S]!==R&&(i.vertexAttribDivisor(S,R),L[S]=R)}function y(){let S=r.newAttributes,R=r.enabledAttributes;for(let F=0,B=R.length;F<B;F++)R[F]!==S[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function v(S,R,F,B,L,V,H){H===!0?i.vertexAttribIPointer(S,R,F,L,V):i.vertexAttribPointer(S,R,F,B,L,V)}function g(S,R,F,B){_();let L=B.attributes,V=F.getAttributes(),H=R.defaultAttributeValues;for(let j in V){let z=V[j];if(z.location>=0){let te=L[j];if(te===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){let fe=te.normalized,ge=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;let de=Ee.buffer,ne=Ee.type,$=Ee.bytesPerElement,ee=ne===i.INT||ne===i.UNSIGNED_INT||te.gpuType===th;if(te.isInterleavedBufferAttribute){let P=te.data,X=P.stride,q=te.offset;if(P.isInstancedInterleavedBuffer){for(let se=0;se<z.locationSize;se++)d(z.location+se,P.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);i.bindBuffer(i.ARRAY_BUFFER,de);for(let se=0;se<z.locationSize;se++)v(z.location+se,ge/z.locationSize,ne,fe,X*$,(q+ge/z.locationSize*se)*$,ee)}else{if(te.isInstancedBufferAttribute){for(let P=0;P<z.locationSize;P++)d(z.location+P,te.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let P=0;P<z.locationSize;P++)m(z.location+P);i.bindBuffer(i.ARRAY_BUFFER,de);for(let P=0;P<z.locationSize;P++)v(z.location+P,ge/z.locationSize,ne,fe,ge*$,ge/z.locationSize*P*$,ee)}}else if(H!==void 0){let fe=H[j];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(z.location,fe);break;case 3:i.vertexAttrib3fv(z.location,fe);break;case 4:i.vertexAttrib4fv(z.location,fe);break;default:i.vertexAttrib1fv(z.location,fe)}}}}y()}function T(){w();for(let S in n){let R=n[S];for(let F in R){let B=R[F];for(let L in B)h(B[L].object),delete B[L];delete R[F]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;let R=n[S.id];for(let F in R){let B=R[F];for(let L in B)h(B[L].object),delete B[L];delete R[F]}delete n[S.id]}function M(S){for(let R in n){let F=n[R];if(F[S.id]===void 0)continue;let B=F[S.id];for(let L in B)h(B[L].object),delete B[L];delete F[S.id]}}function w(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Vy(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Gy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Zn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let w=M===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Hi&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==li&&!w)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:T,maxSamples:E}}function Wy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,g=d.clippingState||null;c.value=g,g=h(x,f,v,p);for(let T=0;T!==v;++T)g[T]=t[T];d.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,x!==!0||m===null){let d=p+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,g=p;v!==_;++v,g+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,g),m[g+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Xy(i){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=Ur:a===Gl&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vl||a===Gl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Mu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ps=class extends $a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rr=4,fd=[.125,.215,.35,.446,.526,.582],Vs=20,Sl=new ps,dd=new Ae,bl=null,El=0,Tl=0,wl=!1,Hs=(1+Math.sqrt(5))/2,Mr=1/Hs,pd=[new O(-Hs,Mr,0),new O(Hs,Mr,0),new O(-Mr,0,Hs),new O(Mr,0,Hs),new O(0,Hs,-Mr),new O(0,Hs,Mr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,El,Tl),this._renderer.xr.enabled=wl,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:En,format:Zn,colorSpace:_n,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(r)),this._blurMaterial=Yy(r,e,t)}return s}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,s){let a=new qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(dd),h.toneMapping=fs,h.autoClear=!1;let p=new Gt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),x=new ot(new on,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(dd),_=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let v=this._cubeSize;Aa(s,y*v,d>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ur||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pd[(s-r-1)%pd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ot(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vs-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):Vs;m>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);let d=[],y=0;for(let M=0;M<Vs;++M){let w=M/_,b=Math.exp(-w*w/2);d.push(b),M===0?y+=b:M<m&&(y+=2*b)}for(let M=0;M<d.length;M++)d[M]=d[M]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;let g=this._sizeLods[s],T=3*g*(s>v-Rr?s-v+Rr:0),E=4*(this._cubeSize-g);Aa(t,T,E,3*g,2*g),c.setRenderTarget(t),c.render(u,Sl)}};function qy(i){let e=[],t=[],n=[],s=i,r=i-Rr+1+fd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Rr?c=fd[o-i+Rr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,d=1,y=new Float32Array(_*x*p),v=new Float32Array(m*x*p),g=new Float32Array(d*x*p);for(let E=0;E<p;E++){let M=E%3*2/3-1,w=E>2?0:-1,b=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];y.set(b,_*x*E),v.set(f,m*x*E);let S=[E,E,E,E,E,E];g.set(S,d*x*E)}let T=new pt;T.setAttribute("position",new xt(y,_)),T.setAttribute("uv",new xt(v,m)),T.setAttribute("faceIndex",new xt(g,d)),e.push(T),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function md(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yy(i,e,t){let n=new Float32Array(Vs),s=new O(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function gd(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function xd(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Zy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Vl||c===Gl,h=c===Ur||c===Fr;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Wr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ky(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $y(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let _=p[x];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,x=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let v=0,g=y.length;v<g;v+=3){let T=y[v+0],E=y[v+1],M=y[v+2];f.push(T,E,E,M,M,T)}}else if(x!==void 0){let y=x.array;_=x.version;for(let v=0,g=y.length/3-1;v<g;v+=3){let T=v+0,E=v+1,M=v+2;f.push(T,E,E,M,M,T)}}else return;let m=new(gp(f)?Ka:Za)(f,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jy(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,_){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let d=0;for(let y=0;y<x;y++)d+=p[y]*_[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qy(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;p===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let g=a.attributes.position.count*v,T=1;g>e.maxTextureSize&&(T=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let E=new Float32Array(g*T*4*u),M=new qa(E,g,T,u);M.type=li,M.needsUpdate=!0;let w=v*4;for(let S=0;S<u;S++){let R=m[S],F=d[S],B=y[S],L=g*T*4*S;for(let V=0;V<R.count;V++){let H=V*w;p===!0&&(s.fromBufferAttribute(R,V),E[L+H+0]=s.x,E[L+H+1]=s.y,E[L+H+2]=s.z,E[L+H+3]=0),x===!0&&(s.fromBufferAttribute(F,V),E[L+H+4]=s.x,E[L+H+5]=s.y,E[L+H+6]=s.z,E[L+H+7]=0),_===!0&&(s.fromBufferAttribute(B,V),E[L+H+8]=s.x,E[L+H+9]=s.y,E[L+H+10]=s.z,E[L+H+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:M,size:new $e(g,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ev(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ja=class extends rn{constructor(e,t,n,s,r,o,a,c,l,h=Ir){if(h!==Ir&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ir&&(n=Gs),n===void 0&&h===Br&&(n=Or),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vp=new rn,_d=new ja(1,1),Mp=new qa,Sp=new yu,bp=new Ja,yd=[],vd=[],Md=new Float32Array(16),Sd=new Float32Array(9),bd=new Float32Array(4);function Jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _c(i,e){let t=vd[e];t===void 0&&(t=new Int32Array(e),vd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),tn(t,n)}}function ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),tn(t,n)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),tn(t,n)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_d.compareFunction=pp,r=_d):r=vp,t.setTexture2D(e||r,s)}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sp,s)}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bp,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mp,s)}function vv(i){switch(i){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return sv;case 35674:return rv;case 35675:return ov;case 35676:return av;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return uv;case 35669:case 35673:return hv;case 5125:return fv;case 36294:return dv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return yv}}function Mv(i,e){i.uniform1fv(this.addr,e)}function Sv(i,e){let t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function bv(i,e){let t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ev(i,e){let t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function Tv(i,e){let t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wv(i,e){let t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Av(i,e){let t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Rv(i,e){i.uniform1iv(this.addr,e)}function Cv(i,e){i.uniform2iv(this.addr,e)}function Iv(i,e){i.uniform3iv(this.addr,e)}function Pv(i,e){i.uniform4iv(this.addr,e)}function Lv(i,e){i.uniform1uiv(this.addr,e)}function Dv(i,e){i.uniform2uiv(this.addr,e)}function Nv(i,e){i.uniform3uiv(this.addr,e)}function Uv(i,e){i.uniform4uiv(this.addr,e)}function Fv(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||vp,r[o])}function Ov(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sp,r[o])}function Bv(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bp,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=_c(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mp,r[o])}function kv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return bv;case 35666:return Ev;case 35674:return Tv;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Iv;case 35669:case 35673:return Pv;case 5125:return Lv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}var Su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vv(t.type)}},bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}},Eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function Ed(i,e){i.seq.push(e),i.map[e.id]=e}function Hv(i,e,t){let n=i.name,s=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),o=Al.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ed(t,l===void 0?new Su(a,i,e):new bu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Eu(a),Ed(t,u)),t=u}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Hv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Td(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vv=37297,Gv=0;function Wv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new lt;function Xv(i){ht._getMatrix(wd,ht.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case xc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wv(i.getShaderSource(e),o)}else return s}function qv(i,e){let t=Xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yv(i,e){let t;switch(e){case Ku:t="Linear";break;case $u:t="Reinhard";break;case Ju:t="Cineon";break;case Go:t="ACESFilmic";break;case ju:t="AgX";break;case Qu:t="Neutral";break;case lg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ra=new O;function Zv(){ht.getLuminanceCoefficients(Ra);let i=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function $v(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ro(i){return i!==""}function Rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(jv,eM)}var Qv=new Map;function eM(i,e){let t=ut[e];if(t===void 0){let n=Qv.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}var tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(tM,nM)}function nM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function iM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ur:case Fr:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rM(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fr&&(e="ENVMAP_MODE_REFRACTION"),e}function oM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zu:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case cg:e="ENVMAP_BLENDING_ADD";break}return e}function aM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=iM(t),l=sM(t),h=rM(t),u=oM(t),f=aM(t),p=Kv(t),x=$v(r),_=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ro).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ro).join(`
`),d.length>0&&(d+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),d=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fs?"#define TONE_MAPPING":"",t.toneMapping!==fs?ut.tonemapping_pars_fragment:"",t.toneMapping!==fs?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Zv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),o=Tu(o),o=Rd(o,t),o=Cd(o,t),a=Tu(a),a=Rd(a,t),a=Cd(a,t),o=Id(o),a=Id(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=y+m+o,g=y+d+a,T=Td(s,s.VERTEX_SHADER,v),E=Td(s,s.FRAGMENT_SHADER,g);s.attachShader(_,T),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(T).trim(),L=s.getShaderInfoLog(E).trim(),V=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,E);else{let j=Ad(s,T,"vertex"),z=Ad(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+j+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||L==="")&&(H=!1);H&&(R.diagnostics={runnable:V,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(T),s.deleteShader(E),w=new Lr(s,_),b=Jv(s,_)}let w;this.getUniforms=function(){return w===void 0&&M(this),w};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Vv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var lM=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Au(e),t.set(e,n)),n}},Au=class{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}};function uM(i,e,t,n,s,r,o){let a=new Ya,c=new wu,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,R,F,B){let L=F.fog,V=B.geometry,H=b.isMeshStandardMaterial?F.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),z=j&&j.mapping===mc?j.image.height:null,te=x[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=fe!==void 0?fe.length:0,Ee=0;V.morphAttributes.position!==void 0&&(Ee=1),V.morphAttributes.normal!==void 0&&(Ee=2),V.morphAttributes.color!==void 0&&(Ee=3);let de,ne,$,ee;if(te){let ke=xi[te];de=ke.vertexShader,ne=ke.fragmentShader}else de=b.vertexShader,ne=b.fragmentShader,c.update(b),$=c.getVertexShaderID(b),ee=c.getFragmentShaderID(b);let P=i.getRenderTarget(),X=i.state.buffers.depth.getReversed(),q=B.isInstancedMesh===!0,se=B.isBatchedMesh===!0,ye=!!b.map,Re=!!b.matcap,Pe=!!j,G=!!b.aoMap,We=!!b.lightMap,He=!!b.bumpMap,ze=!!b.normalMap,De=!!b.displacementMap,qe=!!b.emissiveMap,Ne=!!b.metalnessMap,N=!!b.roughnessMap,A=b.anisotropy>0,J=b.clearcoat>0,me=b.dispersion>0,xe=b.iridescence>0,ue=b.sheen>0,Ce=b.transmission>0,Fe=A&&!!b.anisotropyMap,Oe=J&&!!b.clearcoatMap,Ve=J&&!!b.clearcoatNormalMap,Se=J&&!!b.clearcoatRoughnessMap,K=xe&&!!b.iridescenceMap,Me=xe&&!!b.iridescenceThicknessMap,ve=ue&&!!b.sheenColorMap,ie=ue&&!!b.sheenRoughnessMap,Te=!!b.specularMap,oe=!!b.specularColorMap,be=!!b.specularIntensityMap,W=Ce&&!!b.transmissionMap,we=Ce&&!!b.thicknessMap,C=!!b.gradientMap,D=!!b.alphaMap,U=b.alphaTest>0,Z=!!b.alphaHash,le=!!b.extensions,Ie=fs;b.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ie=i.toneMapping);let Be={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:de,fragmentShader:ne,defines:b.defines,customVertexShaderID:$,customFragmentShaderID:ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:se,batchingColor:se&&B._colorsTexture!==null,instancing:q,instancingColor:q&&B.instanceColor!==null,instancingMorph:q&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:P===null?i.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_n,alphaToCoverage:!!b.alphaToCoverage,map:ye,matcap:Re,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:z,aoMap:G,lightMap:We,bumpMap:He,normalMap:ze,displacementMap:f&&De,emissiveMap:qe,normalMapObjectSpace:ze&&b.normalMapType===pg,normalMapTangentSpace:ze&&b.normalMapType===ch,metalnessMap:Ne,roughnessMap:N,anisotropy:A,anisotropyMap:Fe,clearcoat:J,clearcoatMap:Oe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Se,dispersion:me,iridescence:xe,iridescenceMap:K,iridescenceThicknessMap:Me,sheen:ue,sheenColorMap:ve,sheenRoughnessMap:ie,specularMap:Te,specularColorMap:oe,specularIntensityMap:be,transmission:Ce,transmissionMap:W,thicknessMap:we,gradientMap:C,opaque:b.transparent===!1&&b.blending===Cr&&b.alphaToCoverage===!1,alphaMap:D,alphaTest:U,alphaHash:Z,combine:b.combine,mapUv:ye&&_(b.map.channel),aoMapUv:G&&_(b.aoMap.channel),lightMapUv:We&&_(b.lightMap.channel),bumpMapUv:He&&_(b.bumpMap.channel),normalMapUv:ze&&_(b.normalMap.channel),displacementMapUv:De&&_(b.displacementMap.channel),emissiveMapUv:qe&&_(b.emissiveMap.channel),metalnessMapUv:Ne&&_(b.metalnessMap.channel),roughnessMapUv:N&&_(b.roughnessMap.channel),anisotropyMapUv:Fe&&_(b.anisotropyMap.channel),clearcoatMapUv:Oe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(b.sheenRoughnessMap.channel),specularMapUv:Te&&_(b.specularMap.channel),specularColorMapUv:oe&&_(b.specularColorMap.channel),specularIntensityMapUv:be&&_(b.specularIntensityMap.channel),transmissionMapUv:W&&_(b.transmissionMap.channel),thicknessMapUv:we&&_(b.thicknessMap.channel),alphaMapUv:D&&_(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ze||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(ye||D),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:X,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ye&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===Mt,decodeVideoTextureEmissive:qe&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===At,flipSided:b.side===$t,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:le&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&b.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function d(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function g(b){let S=x[b.type],R;if(S){let F=xi[S];R=Si.clone(F.uniforms)}else R=b.uniforms;return R}function T(b,S){let R;for(let F=0,B=h.length;F<B;F++){let L=h[F];if(L.cacheKey===S){R=L,++R.usedTimes;break}}return R===void 0&&(R=new cM(i,S,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function M(b){c.remove(b)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:T,releaseProgram:E,releaseShaderCache:M,programs:h,dispose:w}}function hM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,x,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,x,_,m){let d=o(u,f,p,x,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,x,_,m){let d=o(u,f,p,x,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||fM),n.length>1&&n.sort(f||Ld),s.length>1&&s.sort(f||Ld)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function dM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ae};break;case"SpotLight":t={position:new O,direction:new O,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gM=0;function xM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){let e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new et,o=new et;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,x=0,_=0,m=0,d=0,y=0,v=0,g=0,T=0,E=0,M=0;l.sort(xM);for(let b=0,S=l.length;b<S;b++){let R=l[b],F=R.color,B=R.intensity,L=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*B,u+=F.g*B,f+=F.b*B;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],B);M++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,z=t.get(R);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=H,p++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(B),H.distance=L,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[_]=H;let j=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,j.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=j.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=V,g++}_++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(F).multiplyScalar(B),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let j=R.shadow,z=t.get(R);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[x]=z,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=R.shadow.matrix,v++}n.point[x]=H,x++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(B),H.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[d]=H,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==p||w.pointLength!==x||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==y||w.numPointShadows!==v||w.numSpotShadows!==g||w.numSpotMaps!==T||w.numLightProbes!==M)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=g+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=M,w.directionalLength=p,w.pointLength=x,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=y,w.numPointShadows=v,w.numSpotShadows=g,w.numSpotMaps=T,w.numLightProbes=M,n.version=gM++)}function c(l,h){let u=0,f=0,p=0,x=0,_=0,m=h.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){let v=l[d];if(v.isDirectionalLight){let g=n.directional[u];g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),u++}else if(v.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let g=n.rectArea[x];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(v.width*.5,0,0),g.halfHeight.set(0,v.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let g=n.hemi[_];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Nd(i){let e=new _M(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nd(i),e.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ru=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cu=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
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
}`;function SM(i,e,t){let n=new Oo,s=new $e,r=new $e,o=new gt,a=new Ru({depthPacking:dg}),c=new Cu,l={},h=t.maxTextureSize,u={[yi]:$t,[$t]:yi,[At]:At},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:vM,fragmentShader:MM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new pt;x.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ot(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let d=this.type;this.render=function(E,M,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_i),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=d!==Ui&&this.type===Ui,L=d===Ui&&this.type!==Ui;for(let V=0,H=E.length;V<H;V++){let j=E[V],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let te=z.getFrameExtents();if(s.multiply(te),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,z.mapSize.y=r.y)),z.map===null||B===!0||L===!0){let ge=this.type!==Ui?{minFilter:sn,magFilter:sn}:{};z.map!==null&&z.map.dispose(),z.map=new jt(s.x,s.y,ge),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let fe=z.getViewportCount();for(let ge=0;ge<fe;ge++){let Ee=z.getViewport(ge);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),F.viewport(o),z.updateMatrices(j,ge),n=z.getFrustum(),g(M,w,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&y(z,w),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,R)};function y(E,M){let w=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jt(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(M,null,w,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(M,null,w,p,_,null)}function v(E,M,w,b){let S=null,R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=w.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let F=S.uuid,B=M.uuid,L=l[F];L===void 0&&(L={},l[F]=L);let V=L[B];V===void 0&&(V=S.clone(),L[B]=V,M.addEventListener("dispose",T)),S=V}if(S.visible=M.visible,S.wireframe=M.wireframe,b===Ui?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:u[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=w}return S}function g(E,M,w,b,S){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Ui)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);let B=e.update(E),L=E.material;if(Array.isArray(L)){let V=B.groups;for(let H=0,j=V.length;H<j;H++){let z=V[H],te=L[z.materialIndex];if(te&&te.visible){let fe=v(E,te,b,S);E.onBeforeShadow(i,E,M,w,B,fe,z),i.renderBufferDirect(w,null,B,fe,E,z),E.onAfterShadow(i,E,M,w,B,fe,z)}}}else if(L.visible){let V=v(E,L,b,S);E.onBeforeShadow(i,E,M,w,B,V,null),i.renderBufferDirect(w,null,B,V,E,null),E.onAfterShadow(i,E,M,w,B,V,null)}}let F=E.children;for(let B=0,L=F.length;B<L;B++)g(F[B],M,w,b,S)}function T(E){E.target.removeEventListener("dispose",T);for(let w in l){let b=l[w],S=E.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var bM={[Ul]:Fl,[Ol]:kl,[Bl]:Hl,[Nr]:zl,[Fl]:Ul,[kl]:Ol,[Hl]:Bl,[zl]:Nr};function EM(i,e){function t(){let W=!1,we=new gt,C=null,D=new gt(0,0,0,0);return{setMask:function(U){C!==U&&!W&&(i.colorMask(U,U,U,U),C=U)},setLocked:function(U){W=U},setClear:function(U,Z,le,Ie,Be){Be===!0&&(U*=Ie,Z*=Ie,le*=Ie),we.set(U,Z,le,Ie),D.equals(we)===!1&&(i.clearColor(U,Z,le,Ie),D.copy(we))},reset:function(){W=!1,C=null,D.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,C=null,D=null,U=null;return{setReversed:function(Z){if(we!==Z){let le=e.get("EXT_clip_control");we?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);let Ie=U;U=null,this.setClear(Ie)}we=Z},getReversed:function(){return we},setTest:function(Z){Z?P(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(Z){C!==Z&&!W&&(i.depthMask(Z),C=Z)},setFunc:function(Z){if(we&&(Z=bM[Z]),D!==Z){switch(Z){case Ul:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}D=Z}},setLocked:function(Z){W=Z},setClear:function(Z){U!==Z&&(we&&(Z=1-Z),i.clearDepth(Z),U=Z)},reset:function(){W=!1,C=null,D=null,U=null,we=!1}}}function s(){let W=!1,we=null,C=null,D=null,U=null,Z=null,le=null,Ie=null,Be=null;return{setTest:function(ke){W||(ke?P(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(ke){we!==ke&&!W&&(i.stencilMask(ke),we=ke)},setFunc:function(ke,k,re){(C!==ke||D!==k||U!==re)&&(i.stencilFunc(ke,k,re),C=ke,D=k,U=re)},setOp:function(ke,k,re){(Z!==ke||le!==k||Ie!==re)&&(i.stencilOp(ke,k,re),Z=ke,le=k,Ie=re)},setLocked:function(ke){W=ke},setClear:function(ke){Be!==ke&&(i.clearStencil(ke),Be=ke)},reset:function(){W=!1,we=null,C=null,D=null,U=null,Z=null,le=null,Ie=null,Be=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,y=null,v=null,g=null,T=null,E=null,M=new Ae(0,0,0),w=0,b=!1,S=null,R=null,F=null,B=null,L=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=j>=2);let te=null,fe={},ge=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),de=new gt().fromArray(ge),ne=new gt().fromArray(Ee);function $(W,we,C,D){let U=new Uint8Array(4),Z=i.createTexture();i.bindTexture(W,Z),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<C;le++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,D,0,i.RGBA,i.UNSIGNED_BYTE,U):i.texImage2D(we+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,U);return Z}let ee={};ee[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(i.DEPTH_TEST),o.setFunc(Nr),He(!1),ze(Ff),P(i.CULL_FACE),G(_i);function P(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function X(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function q(W,we){return u[W]!==we?(i.bindFramebuffer(W,we),u[W]=we,W===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),W===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function se(W,we){let C=p,D=!1;if(W){C=f.get(we),C===void 0&&(C=[],f.set(we,C));let U=W.textures;if(C.length!==U.length||C[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,le=U.length;Z<le;Z++)C[Z]=i.COLOR_ATTACHMENT0+Z;C.length=U.length,D=!0}}else C[0]!==i.BACK&&(C[0]=i.BACK,D=!0);D&&i.drawBuffers(C)}function ye(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let Re={[Fi]:i.FUNC_ADD,[X0]:i.FUNC_SUBTRACT,[q0]:i.FUNC_REVERSE_SUBTRACT};Re[Y0]=i.MIN,Re[Z0]=i.MAX;let Pe={[K0]:i.ZERO,[Yu]:i.ONE,[$0]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[ng]:i.SRC_ALPHA_SATURATE,[eg]:i.DST_COLOR,[j0]:i.DST_ALPHA,[J0]:i.ONE_MINUS_SRC_COLOR,[Do]:i.ONE_MINUS_SRC_ALPHA,[tg]:i.ONE_MINUS_DST_COLOR,[Q0]:i.ONE_MINUS_DST_ALPHA,[ig]:i.CONSTANT_COLOR,[sg]:i.ONE_MINUS_CONSTANT_COLOR,[rg]:i.CONSTANT_ALPHA,[og]:i.ONE_MINUS_CONSTANT_ALPHA};function G(W,we,C,D,U,Z,le,Ie,Be,ke){if(W===_i){_===!0&&(X(i.BLEND),_=!1);return}if(_===!1&&(P(i.BLEND),_=!0),W!==qu){if(W!==m||ke!==b){if((d!==Fi||g!==Fi)&&(i.blendEquation(i.FUNC_ADD),d=Fi,g=Fi),ke)switch(W){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case Of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}y=null,v=null,T=null,E=null,M.set(0,0,0),w=0,m=W,b=ke}return}U=U||we,Z=Z||C,le=le||D,(we!==d||U!==g)&&(i.blendEquationSeparate(Re[we],Re[U]),d=we,g=U),(C!==y||D!==v||Z!==T||le!==E)&&(i.blendFuncSeparate(Pe[C],Pe[D],Pe[Z],Pe[le]),y=C,v=D,T=Z,E=le),(Ie.equals(M)===!1||Be!==w)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Be),M.copy(Ie),w=Be),m=W,b=!1}function We(W,we){W.side===At?X(i.CULL_FACE):P(i.CULL_FACE);let C=W.side===$t;we&&(C=!C),He(C),W.blending===Cr&&W.transparent===!1?G(_i):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let D=W.stencilWrite;a.setTest(D),D&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?P(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(W){S!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),S=W)}function ze(W){W!==V0?(P(i.CULL_FACE),W!==R&&(W===Ff?i.cullFace(i.BACK):W===G0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),R=W}function De(W){W!==F&&(H&&i.lineWidth(W),F=W)}function qe(W,we,C){W?(P(i.POLYGON_OFFSET_FILL),(B!==we||L!==C)&&(i.polygonOffset(we,C),B=we,L=C)):X(i.POLYGON_OFFSET_FILL)}function Ne(W){W?P(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function N(W){W===void 0&&(W=i.TEXTURE0+V-1),te!==W&&(i.activeTexture(W),te=W)}function A(W,we,C){C===void 0&&(te===null?C=i.TEXTURE0+V-1:C=te);let D=fe[C];D===void 0&&(D={type:void 0,texture:void 0},fe[C]=D),(D.type!==W||D.texture!==we)&&(te!==C&&(i.activeTexture(C),te=C),i.bindTexture(W,we||ee[W]),D.type=W,D.texture=we)}function J(){let W=fe[te];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(W){de.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),de.copy(W))}function ie(W){ne.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ne.copy(W))}function Te(W,we){let C=l.get(we);C===void 0&&(C=new WeakMap,l.set(we,C));let D=C.get(W);D===void 0&&(D=i.getUniformBlockIndex(we,W.name),C.set(W,D))}function oe(W,we){let D=l.get(we).get(W);c.get(we)!==D&&(i.uniformBlockBinding(we,D,W.__bindingPointIndex),c.set(we,D))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,fe={},u={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,y=null,v=null,g=null,T=null,E=null,M=new Ae(0,0,0),w=0,b=!1,S=null,R=null,F=null,B=null,L=null,de.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:X,bindFramebuffer:q,drawBuffers:se,useProgram:ye,setBlending:G,setMaterial:We,setFlipSided:He,setCullFace:ze,setLineWidth:De,setPolygonOffset:qe,setScissorTest:Ne,activeTexture:N,bindTexture:A,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:xe,texImage2D:K,texImage3D:Me,updateUBOMapping:Te,uniformBlockBinding:oe,texStorage2D:Ve,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:Ce,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Oe,scissor:ve,viewport:ie,reset:be}}function Ud(i,e,t,n){let s=TM(n);switch(t){case ap:return i*e;case lp:return i*e;case up:return i*e*2;case sh:return i*e/s.components*s.byteLength;case rh:return i*e/s.components*s.byteLength;case hp:return i*e*2/s.components*s.byteLength;case oh:return i*e*2/s.components*s.byteLength;case cp:return i*e*3/s.components*s.byteLength;case Zn:return i*e*4/s.components*s.byteLength;case ah:return i*e*4/s.components*s.byteLength;case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(e,8)/2;case Zl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case au:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case hu:case fu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fp:case du:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pu:case mu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TM(i){switch(i){case Hi:case sp:return{byteLength:1,components:1};case Uo:case rp:case En:return{byteLength:2,components:1};case nh:case ih:return{byteLength:2,components:4};case Gs:case th:case li:return{byteLength:4,components:1};case op:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,A){return p?new OffscreenCanvas(N,A):Fo("canvas")}function _(N,A,J){let me=1,xe=Ne(N);if((xe.width>J||xe.height>J)&&(me=J/Math.max(xe.width,xe.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let ue=Math.floor(me*xe.width),Ce=Math.floor(me*xe.height);u===void 0&&(u=x(ue,Ce));let Fe=A?x(ue,Ce):u;return Fe.width=ue,Fe.height=Ce,Fe.getContext("2d").drawImage(N,0,0,ue,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ue+"x"+Ce+")."),Fe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),N;return N}function m(N){return N.generateMipmaps}function d(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,A,J,me,xe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=A;if(A===i.RED&&(J===i.FLOAT&&(ue=i.R32F),J===i.HALF_FLOAT&&(ue=i.R16F),J===i.UNSIGNED_BYTE&&(ue=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.R8UI),J===i.UNSIGNED_SHORT&&(ue=i.R16UI),J===i.UNSIGNED_INT&&(ue=i.R32UI),J===i.BYTE&&(ue=i.R8I),J===i.SHORT&&(ue=i.R16I),J===i.INT&&(ue=i.R32I)),A===i.RG&&(J===i.FLOAT&&(ue=i.RG32F),J===i.HALF_FLOAT&&(ue=i.RG16F),J===i.UNSIGNED_BYTE&&(ue=i.RG8)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.RG8UI),J===i.UNSIGNED_SHORT&&(ue=i.RG16UI),J===i.UNSIGNED_INT&&(ue=i.RG32UI),J===i.BYTE&&(ue=i.RG8I),J===i.SHORT&&(ue=i.RG16I),J===i.INT&&(ue=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),J===i.UNSIGNED_INT&&(ue=i.RGB32UI),J===i.BYTE&&(ue=i.RGB8I),J===i.SHORT&&(ue=i.RGB16I),J===i.INT&&(ue=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),J===i.UNSIGNED_INT&&(ue=i.RGBA32UI),J===i.BYTE&&(ue=i.RGBA8I),J===i.SHORT&&(ue=i.RGBA16I),J===i.INT&&(ue=i.RGBA32I)),A===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),A===i.RGBA){let Ce=xe?xc:ht.getTransfer(me);J===i.FLOAT&&(ue=i.RGBA32F),J===i.HALF_FLOAT&&(ue=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ue=Ce===Mt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function g(N,A){let J;return N?A===null||A===Gs||A===Or?J=i.DEPTH24_STENCIL8:A===li?J=i.DEPTH32F_STENCIL8:A===Uo&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Gs||A===Or?J=i.DEPTH_COMPONENT24:A===li?J=i.DEPTH_COMPONENT32F:A===Uo&&(J=i.DEPTH_COMPONENT16),J}function T(N,A){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==sn&&N.minFilter!==Rn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function E(N){let A=N.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&h.delete(A)}function M(N){let A=N.target;A.removeEventListener("dispose",M),S(A)}function w(N){let A=n.get(N);if(A.__webglInit===void 0)return;let J=N.source,me=f.get(J);if(me){let xe=me[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(N),Object.keys(me).length===0&&f.delete(J)}n.remove(N)}function b(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let J=N.source,me=f.get(J);delete me[A.__cacheKey],o.memory.textures--}function S(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let xe=0;xe<A.__webglFramebuffer[me].length;xe++)i.deleteFramebuffer(A.__webglFramebuffer[me][xe]);else i.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)i.deleteFramebuffer(A.__webglFramebuffer[me]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let J=N.textures;for(let me=0,xe=J.length;me<xe;me++){let ue=n.get(J[me]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(J[me])}n.remove(N)}let R=0;function F(){R=0}function B(){let N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function L(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function V(N,A){let J=n.get(N);if(N.isVideoTexture&&De(N),N.isRenderTargetTexture===!1&&N.version>0&&J.__version!==N.version){let me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(J,N,A);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function H(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){ne(J,N,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function j(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){ne(J,N,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function z(N,A){let J=n.get(N);if(N.version>0&&J.__version!==N.version){$(J,N,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}let te={[ki]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[No]:i.MIRRORED_REPEAT},fe={[sn]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Co]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},ge={[mg]:i.NEVER,[Mg]:i.ALWAYS,[gg]:i.LESS,[pp]:i.LEQUAL,[xg]:i.EQUAL,[vg]:i.GEQUAL,[_g]:i.GREATER,[yg]:i.NOTEQUAL};function Ee(N,A){if(A.type===li&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Rn||A.magFilter===Co||A.magFilter===Ar||A.magFilter===Yn||A.minFilter===Rn||A.minFilter===Co||A.minFilter===Ar||A.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,te[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,te[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,te[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,fe[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,fe[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===sn||A.minFilter!==Ar&&A.minFilter!==Yn||A.type===li&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function de(N,A){let J=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",E));let me=A.source,xe=f.get(me);xe===void 0&&(xe={},f.set(me,xe));let ue=L(A);if(ue!==N.__cacheKey){xe[ue]===void 0&&(xe[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),xe[ue].usedTimes++;let Ce=xe[N.__cacheKey];Ce!==void 0&&(xe[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(A)),N.__cacheKey=ue,N.__webglTexture=xe[ue].texture}return J}function ne(N,A,J){let me=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=i.TEXTURE_3D);let xe=de(N,A),ue=A.source;t.bindTexture(me,N.__webglTexture,i.TEXTURE0+J);let Ce=n.get(ue);if(ue.version!==Ce.__version||xe===!0){t.activeTexture(i.TEXTURE0+J);let Fe=ht.getPrimaries(ht.workingColorSpace),Oe=A.colorSpace===ls?null:ht.getPrimaries(A.colorSpace),Ve=A.colorSpace===ls||Fe===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Se=_(A.image,!1,s.maxTextureSize);Se=qe(A,Se);let K=r.convert(A.format,A.colorSpace),Me=r.convert(A.type),ve=v(A.internalFormat,K,Me,A.colorSpace,A.isVideoTexture);Ee(me,A);let ie,Te=A.mipmaps,oe=A.isVideoTexture!==!0,be=Ce.__version===void 0||xe===!0,W=ue.dataReady,we=T(A,Se);if(A.isDepthTexture)ve=g(A.format===Br,A.type),be&&(oe?t.texStorage2D(i.TEXTURE_2D,1,ve,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,ve,Se.width,Se.height,0,K,Me,null));else if(A.isDataTexture)if(Te.length>0){oe&&be&&t.texStorage2D(i.TEXTURE_2D,we,ve,Te[0].width,Te[0].height);for(let C=0,D=Te.length;C<D;C++)ie=Te[C],oe?W&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,ie.width,ie.height,K,Me,ie.data):t.texImage2D(i.TEXTURE_2D,C,ve,ie.width,ie.height,0,K,Me,ie.data);A.generateMipmaps=!1}else oe?(be&&t.texStorage2D(i.TEXTURE_2D,we,ve,Se.width,Se.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,K,Me,Se.data)):t.texImage2D(i.TEXTURE_2D,0,ve,Se.width,Se.height,0,K,Me,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){oe&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ve,Te[0].width,Te[0].height,Se.depth);for(let C=0,D=Te.length;C<D;C++)if(ie=Te[C],A.format!==Zn)if(K!==null)if(oe){if(W)if(A.layerUpdates.size>0){let U=Ud(ie.width,ie.height,A.format,A.type);for(let Z of A.layerUpdates){let le=ie.data.subarray(Z*U/ie.data.BYTES_PER_ELEMENT,(Z+1)*U/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,Z,ie.width,ie.height,1,K,le)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ie.width,ie.height,Se.depth,K,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,ve,ie.width,ie.height,Se.depth,0,ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,ie.width,ie.height,Se.depth,K,Me,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,C,ve,ie.width,ie.height,Se.depth,0,K,Me,ie.data)}else{oe&&be&&t.texStorage2D(i.TEXTURE_2D,we,ve,Te[0].width,Te[0].height);for(let C=0,D=Te.length;C<D;C++)ie=Te[C],A.format!==Zn?K!==null?oe?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,ie.width,ie.height,K,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,C,ve,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?W&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,ie.width,ie.height,K,Me,ie.data):t.texImage2D(i.TEXTURE_2D,C,ve,ie.width,ie.height,0,K,Me,ie.data)}else if(A.isDataArrayTexture)if(oe){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ve,Se.width,Se.height,Se.depth),W)if(A.layerUpdates.size>0){let C=Ud(Se.width,Se.height,A.format,A.type);for(let D of A.layerUpdates){let U=Se.data.subarray(D*C/Se.data.BYTES_PER_ELEMENT,(D+1)*C/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,Se.width,Se.height,1,K,Me,U)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,K,Me,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Se.width,Se.height,Se.depth,0,K,Me,Se.data);else if(A.isData3DTexture)oe?(be&&t.texStorage3D(i.TEXTURE_3D,we,ve,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,K,Me,Se.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Se.width,Se.height,Se.depth,0,K,Me,Se.data);else if(A.isFramebufferTexture){if(be)if(oe)t.texStorage2D(i.TEXTURE_2D,we,ve,Se.width,Se.height);else{let C=Se.width,D=Se.height;for(let U=0;U<we;U++)t.texImage2D(i.TEXTURE_2D,U,ve,C,D,0,K,Me,null),C>>=1,D>>=1}}else if(Te.length>0){if(oe&&be){let C=Ne(Te[0]);t.texStorage2D(i.TEXTURE_2D,we,ve,C.width,C.height)}for(let C=0,D=Te.length;C<D;C++)ie=Te[C],oe?W&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,K,Me,ie):t.texImage2D(i.TEXTURE_2D,C,ve,K,Me,ie);A.generateMipmaps=!1}else if(oe){if(be){let C=Ne(Se);t.texStorage2D(i.TEXTURE_2D,we,ve,C.width,C.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K,Me,Se)}else t.texImage2D(i.TEXTURE_2D,0,ve,K,Me,Se);m(A)&&d(me),Ce.__version=ue.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function $(N,A,J){if(A.image.length!==6)return;let me=de(N,A),xe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+J);let ue=n.get(xe);if(xe.version!==ue.__version||me===!0){t.activeTexture(i.TEXTURE0+J);let Ce=ht.getPrimaries(ht.workingColorSpace),Fe=A.colorSpace===ls?null:ht.getPrimaries(A.colorSpace),Oe=A.colorSpace===ls||Ce===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,K=[];for(let D=0;D<6;D++)!Ve&&!Se?K[D]=_(A.image[D],!0,s.maxCubemapSize):K[D]=Se?A.image[D].image:A.image[D],K[D]=qe(A,K[D]);let Me=K[0],ve=r.convert(A.format,A.colorSpace),ie=r.convert(A.type),Te=v(A.internalFormat,ve,ie,A.colorSpace),oe=A.isVideoTexture!==!0,be=ue.__version===void 0||me===!0,W=xe.dataReady,we=T(A,Me);Ee(i.TEXTURE_CUBE_MAP,A);let C;if(Ve){oe&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Te,Me.width,Me.height);for(let D=0;D<6;D++){C=K[D].mipmaps;for(let U=0;U<C.length;U++){let Z=C[U];A.format!==Zn?ve!==null?oe?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U,0,0,Z.width,Z.height,ve,Z.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U,Te,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U,0,0,Z.width,Z.height,ve,ie,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U,Te,Z.width,Z.height,0,ve,ie,Z.data)}}}else{if(C=A.mipmaps,oe&&be){C.length>0&&we++;let D=Ne(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Te,D.width,D.height)}for(let D=0;D<6;D++)if(Se){oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,K[D].width,K[D].height,ve,ie,K[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Te,K[D].width,K[D].height,0,ve,ie,K[D].data);for(let U=0;U<C.length;U++){let le=C[U].image[D].image;oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U+1,0,0,le.width,le.height,ve,ie,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U+1,Te,le.width,le.height,0,ve,ie,le.data)}}else{oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,ve,ie,K[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Te,ve,ie,K[D]);for(let U=0;U<C.length;U++){let Z=C[U];oe?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U+1,0,0,ve,ie,Z.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,U+1,Te,ve,ie,Z.image[D])}}}m(A)&&d(i.TEXTURE_CUBE_MAP),ue.__version=xe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ee(N,A,J,me,xe,ue){let Ce=r.convert(J.format,J.colorSpace),Fe=r.convert(J.type),Oe=v(J.internalFormat,Ce,Fe,J.colorSpace),Ve=n.get(A),Se=n.get(J);if(Se.__renderTarget=A,!Ve.__hasExternalTextures){let K=Math.max(1,A.width>>ue),Me=Math.max(1,A.height>>ue);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ue,Oe,K,Me,A.depth,0,Ce,Fe,null):t.texImage2D(xe,ue,Oe,K,Me,0,Ce,Fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),ze(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,xe,Se.__webglTexture,0,He(A)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,xe,Se.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function P(N,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let me=A.depthTexture,xe=me&&me.isDepthTexture?me.type:null,ue=g(A.stencilBuffer,xe),Ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=He(A);ze(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,ue,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ue,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,N)}else{let me=A.textures;for(let xe=0;xe<me.length;xe++){let ue=me[xe],Ce=r.convert(ue.format,ue.colorSpace),Fe=r.convert(ue.type),Oe=v(ue.internalFormat,Ce,Fe,ue.colorSpace),Ve=He(A);J&&ze(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Oe,A.width,A.height):ze(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Oe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function X(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let me=n.get(A.depthTexture);me.__renderTarget=A,(!me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);let xe=me.__webglTexture,ue=He(A);if(A.depthTexture.format===Ir)ze(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(A.depthTexture.format===Br)ze(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function q(N){let A=n.get(N),J=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let me=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){let xe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",xe)};me.addEventListener("dispose",xe),A.__depthDisposeCallback=xe}A.__boundDepthTexture=me}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");X(A.__webglFramebuffer,N)}else if(J){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=i.createRenderbuffer(),P(A.__webglDepthbuffer[me],N,!1);else{let xe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),P(A.__webglDepthbuffer,N,!1);else{let me=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(N,A,J){let me=n.get(N);A!==void 0&&ee(me.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&q(N)}function ye(N){let A=N.texture,J=n.get(N),me=n.get(A);N.addEventListener("dispose",M);let xe=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Ce=xe.length>1;if(Ce||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=A.version,o.memory.textures++),ue){J.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Fe]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)J.__webglFramebuffer[Fe][Oe]=i.createFramebuffer()}else J.__webglFramebuffer[Fe]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)J.__webglFramebuffer[Fe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let Fe=0,Oe=xe.length;Fe<Oe;Fe++){let Ve=n.get(xe[Fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&ze(N)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Fe=0;Fe<xe.length;Fe++){let Oe=xe[Fe];J.__webglColorRenderbuffer[Fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Fe]);let Ve=r.convert(Oe.format,Oe.colorSpace),Se=r.convert(Oe.type),K=v(Oe.internalFormat,Ve,Se,Oe.colorSpace,N.isXRRenderTarget===!0),Me=He(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,K,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,J.__webglColorRenderbuffer[Fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),P(J.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,A);for(let Fe=0;Fe<6;Fe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ee(J.__webglFramebuffer[Fe][Oe],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Oe);else ee(J.__webglFramebuffer[Fe],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);m(A)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Fe=0,Oe=xe.length;Fe<Oe;Fe++){let Ve=xe[Fe],Se=n.get(Ve);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),Ee(i.TEXTURE_2D,Ve),ee(J.__webglFramebuffer,N,Ve,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,0),m(Ve)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Fe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Fe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Fe,me.__webglTexture),Ee(Fe,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ee(J.__webglFramebuffer[Oe],N,A,i.COLOR_ATTACHMENT0,Fe,Oe);else ee(J.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,Fe,0);m(A)&&d(Fe),t.unbindTexture()}N.depthBuffer&&q(N)}function Re(N){let A=N.textures;for(let J=0,me=A.length;J<me;J++){let xe=A[J];if(m(xe)){let ue=y(N),Ce=n.get(xe).__webglTexture;t.bindTexture(ue,Ce),d(ue),t.unbindTexture()}}}let Pe=[],G=[];function We(N){if(N.samples>0){if(ze(N)===!1){let A=N.textures,J=N.width,me=N.height,xe=i.COLOR_BUFFER_BIT,ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(N),Fe=A.length>1;if(Fe)for(let Oe=0;Oe<A.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);let Ve=n.get(A[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,J,me,0,0,J,me,xe,i.NEAREST),c===!0&&(Pe.length=0,G.length=0,Pe.push(i.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Pe.push(ue),G.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Fe)for(let Oe=0;Oe<A.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);let Ve=n.get(A[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function He(N){return Math.min(s.maxSamples,N.samples)}function ze(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function De(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function qe(N,A){let J=N.colorSpace,me=N.format,xe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||J!==_n&&J!==ls&&(ht.getTransfer(J)===Mt?(me!==Zn||xe!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=se,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ze}function AM(i,e){function t(n,s=ls){let r,o=ht.getTransfer(s);if(n===Hi)return i.UNSIGNED_BYTE;if(n===nh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===op)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sp)return i.BYTE;if(n===rp)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===th)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===ap)return i.ALPHA;if(n===cp)return i.RGB;if(n===Zn)return i.RGBA;if(n===lp)return i.LUMINANCE;if(n===up)return i.LUMINANCE_ALPHA;if(n===Ir)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===sh)return i.RED;if(n===rh)return i.RED_INTEGER;if(n===hp)return i.RG;if(n===oh)return i.RG_INTEGER;if(n===ah)return i.RGBA_INTEGER;if(n===za||n===ka||n===Ha||n===Va)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Kl||n===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Kl)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jl||n===jl||n===Ql||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===cu||n===lu||n===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===iu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===su)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ou)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===au)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===hu||n===fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fp||n===du||n===pu||n===mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Iu=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},RM={type:"move"},Lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},CM=`
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

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:CM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends ds{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,x=null,_=new Pu,m=t.getContextAttributes(),d=null,y=null,v=[],g=[],T=new $e,E=null,M=new qt;M.viewport=new gt;let w=new qt;w.viewport=new gt;let b=[M,w],S=new Iu,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let $=v[ne];return $===void 0&&($=new Lo,v[ne]=$),$.getTargetRaySpace()},this.getControllerGrip=function(ne){let $=v[ne];return $===void 0&&($=new Lo,v[ne]=$),$.getGripSpace()},this.getHand=function(ne){let $=v[ne];return $===void 0&&($=new Lo,v[ne]=$),$.getHandSpace()};function B(ne){let $=g.indexOf(ne.inputSource);if($===-1)return;let ee=v[$];ee!==void 0&&(ee.update(ne.inputSource,ne.frame,l||o),ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function L(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",V);for(let ne=0;ne<v.length;ne++){let $=g[ne];$!==null&&(g[ne]=null,v[ne].disconnect($))}R=null,F=null,_.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",L),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new jt(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ee=null,P=null;m.depth&&(P=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Br:Ir,ee=m.stencil?Or:Gs);let X={colorFormat:t.RGBA8,depthFormat:P,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(X),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new jt(f.textureWidth,f.textureHeight,{format:Zn,type:Hi,depthTexture:new ja(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(ne){for(let $=0;$<ne.removed.length;$++){let ee=ne.removed[$],P=g.indexOf(ee);P>=0&&(g[P]=null,v[P].disconnect(ee))}for(let $=0;$<ne.added.length;$++){let ee=ne.added[$],P=g.indexOf(ee);if(P===-1){for(let q=0;q<v.length;q++)if(q>=g.length){g.push(ee),P=q;break}else if(g[q]===null){g[q]=ee,P=q;break}if(P===-1)break}let X=v[P];X&&X.connect(ee)}}let H=new O,j=new O;function z(ne,$,ee){H.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);let P=H.distanceTo(j),X=$.projectionMatrix.elements,q=ee.projectionMatrix.elements,se=X[14]/(X[10]-1),ye=X[14]/(X[10]+1),Re=(X[9]+1)/X[5],Pe=(X[9]-1)/X[5],G=(X[8]-1)/X[0],We=(q[8]+1)/q[0],He=se*G,ze=se*We,De=P/(-G+We),qe=De*-G;if($.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(qe),ne.translateZ(De),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),X[10]===-1)ne.projectionMatrix.copy($.projectionMatrix),ne.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ne=se+De,N=ye+De,A=He-qe,J=ze+(P-qe),me=Re*ye/N*Ne,xe=Pe*ye/N*Ne;ne.projectionMatrix.makePerspective(A,J,me,xe,Ne,N),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function te(ne,$){$===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices($.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let $=ne.near,ee=ne.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(ee=_.depthFar)),S.near=w.near=M.near=$,S.far=w.far=M.far=ee,(R!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,F=S.far),M.layers.mask=ne.layers.mask|2,w.layers.mask=ne.layers.mask|4,S.layers.mask=M.layers.mask|w.layers.mask;let P=ne.parent,X=S.cameras;te(S,P);for(let q=0;q<X.length;q++)te(X[q],P);X.length===2?z(S,M,w):S.projectionMatrix.copy(M.projectionMatrix),fe(ne,S,P)};function fe(ne,$,ee){ee===null?ne.matrix.copy($.matrixWorld):(ne.matrix.copy(ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply($.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy($.projectionMatrix),ne.projectionMatrixInverse.copy($.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Hr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ge=null;function Ee(ne,$){if(h=$.getViewerPose(l||o),x=$,h!==null){let ee=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let P=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,P=!0);for(let q=0;q<ee.length;q++){let se=ee[q],ye=null;if(p!==null)ye=p.getViewport(se);else{let Pe=u.getViewSubImage(f,se);ye=Pe.viewport,q===0&&(e.setRenderTargetTextures(y,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(y))}let Re=b[q];Re===void 0&&(Re=new qt,Re.layers.enable(q),Re.viewport=new gt,b[q]=Re),Re.matrix.fromArray(se.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(se.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ye.x,ye.y,ye.width,ye.height),q===0&&(S.matrix.copy(Re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),P===!0&&S.cameras.push(Re)}let X=s.enabledFeatures;if(X&&X.includes("depth-sensing")){let q=u.getDepthInformation(ee[0]);q&&q.isValid&&q.texture&&_.init(e,q,s.renderState)}}for(let ee=0;ee<v.length;ee++){let P=g[ee],X=v[ee];P!==null&&X!==void 0&&X.update(P,$,l||o)}ge&&ge(ne,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}let de=new yp;de.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){ge=ne},this.dispose=function(){}}},ks=new hi,PM=new et;function LM(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,_p(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,v,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),v=y.envMap,g=y.envMapRotation;v&&(m.envMap.value=v,ks.copy(g),ks.x*=-1,ks.y*=-1,ks.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),m.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(ks)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let g=v.program;n.uniformBlockBinding(y,g)}function l(y,v){let g=s[y.id];g===void 0&&(x(y),g=h(y),s[y.id]=g,y.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(y,T);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let v=u();y.__bindingPointIndex=v;let g=i.createBuffer(),T=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,g),g}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],g=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,M=g.length;E<M;E++){let w=Array.isArray(g[E])?g[E]:[g[E]];for(let b=0,S=w.length;b<S;b++){let R=w[b];if(p(R,E,b,T)===!0){let F=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],L=0;for(let V=0;V<B.length;V++){let H=B[V],j=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+L,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,g,T){let E=y.value,M=v+"_"+g;if(T[M]===void 0)return typeof E=="number"||typeof E=="boolean"?T[M]=E:T[M]=E.clone(),!0;{let w=T[M];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return T[M]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function x(y){let v=y.uniforms,g=0,T=16;for(let M=0,w=v.length;M<w;M++){let b=Array.isArray(v[M])?v[M]:[v[M]];for(let S=0,R=b.length;S<R;S++){let F=b[S],B=Array.isArray(F.value)?F.value:[F.value];for(let L=0,V=B.length;L<V;L++){let H=B[L],j=_(H),z=g%T,te=z%j.boundary,fe=z+te;g+=te,fe!==0&&T-fe<j.storage&&(g+=T-fe),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=g,g+=j.storage}}}let E=g%T;return E>0&&(g+=T-E),y.__size=g,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let g=o.indexOf(v.__bindingPointIndex);o.splice(g,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Qa=class{constructor(e={}){let{canvas:t=Bg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=fs,this.toneMappingExposure=1;let g=this,T=!1,E=0,M=0,w=null,b=-1,S=null,R=new gt,F=new gt,B=null,L=new Ae(0),V=0,H=t.width,j=t.height,z=1,te=null,fe=null,ge=new gt(0,0,H,j),Ee=new gt(0,0,H,j),de=!1,ne=new Oo,$=!1,ee=!1,P=new et,X=new et,q=new O,se=new gt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Pe(){return w===null?z:1}let G=n;function We(I,Y){return t.getContext(I,Y)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",D,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",Z,!1),G===null){let Y="webgl2";if(G=We(Y,I),G===null)throw We(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let He,ze,De,qe,Ne,N,A,J,me,xe,ue,Ce,Fe,Oe,Ve,Se,K,Me,ve,ie,Te,oe,be,W;function we(){He=new Ky(G),He.init(),oe=new AM(G,He),ze=new Gy(G,He,e,oe),De=new EM(G,He),ze.reverseDepthBuffer&&f&&De.buffers.depth.setReversed(!0),qe=new jy(G),Ne=new hM,N=new wM(G,He,De,Ne,ze,oe,qe),A=new Xy(g),J=new Zy(g),me=new rx(G),be=new Hy(G,me),xe=new $y(G,me,qe,be),ue=new ev(G,xe,me,qe),ve=new Qy(G,ze,N),Se=new Wy(Ne),Ce=new uM(g,A,J,He,ze,be,Se),Fe=new LM(g,Ne),Oe=new dM,Ve=new yM(He),Me=new ky(g,A,J,De,ue,p,c),K=new SM(g,ue,ze),W=new DM(G,qe,ze,De),ie=new Vy(G,He,qe),Te=new Jy(G,He,qe),qe.programs=Ce.programs,g.capabilities=ze,g.extensions=He,g.properties=Ne,g.renderLists=Oe,g.shadowMap=K,g.state=De,g.info=qe}we();let C=new Lu(g,G);this.xr=C,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let I=He.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=He.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(I){I!==void 0&&(z=I,this.setSize(H,j,!1))},this.getSize=function(I){return I.set(H,j)},this.setSize=function(I,Y,ae=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,j=Y,t.width=Math.floor(I*z),t.height=Math.floor(Y*z),ae===!0&&(t.style.width=I+"px",t.style.height=Y+"px"),this.setViewport(0,0,I,Y)},this.getDrawingBufferSize=function(I){return I.set(H*z,j*z).floor()},this.setDrawingBufferSize=function(I,Y,ae){H=I,j=Y,z=ae,t.width=Math.floor(I*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,I,Y)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(ge)},this.setViewport=function(I,Y,ae,ce){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,Y,ae,ce),De.viewport(R.copy(ge).multiplyScalar(z).round())},this.getScissor=function(I){return I.copy(Ee)},this.setScissor=function(I,Y,ae,ce){I.isVector4?Ee.set(I.x,I.y,I.z,I.w):Ee.set(I,Y,ae,ce),De.scissor(F.copy(Ee).multiplyScalar(z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(I){De.setScissorTest(de=I)},this.setOpaqueSort=function(I){te=I},this.setTransparentSort=function(I){fe=I},this.getClearColor=function(I){return I.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(I=!0,Y=!0,ae=!0){let ce=0;if(I){let Q=!1;if(w!==null){let Ue=w.texture.format;Q=Ue===ah||Ue===oh||Ue===rh}if(Q){let Ue=w.texture.type,Xe=Ue===Hi||Ue===Gs||Ue===Uo||Ue===Or||Ue===nh||Ue===ih,Je=Me.getClearColor(),je=Me.getClearAlpha(),rt=Je.r,ct=Je.g,Qe=Je.b;Xe?(x[0]=rt,x[1]=ct,x[2]=Qe,x[3]=je,G.clearBufferuiv(G.COLOR,0,x)):(_[0]=rt,_[1]=ct,_[2]=Qe,_[3]=je,G.clearBufferiv(G.COLOR,0,_))}else ce|=G.COLOR_BUFFER_BIT}Y&&(ce|=G.DEPTH_BUFFER_BIT),ae&&(ce|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",D,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),Oe.dispose(),Ve.dispose(),Ne.dispose(),A.dispose(),J.dispose(),ue.dispose(),be.dispose(),W.dispose(),Ce.dispose(),C.dispose(),C.removeEventListener("sessionstart",he),C.removeEventListener("sessionend",pe),_e.stop()};function D(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let I=qe.autoReset,Y=K.enabled,ae=K.autoUpdate,ce=K.needsUpdate,Q=K.type;we(),qe.autoReset=I,K.enabled=Y,K.autoUpdate=ae,K.needsUpdate=ce,K.type=Q}function Z(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function le(I){let Y=I.target;Y.removeEventListener("dispose",le),Ie(Y)}function Ie(I){Be(I),Ne.remove(I)}function Be(I){let Y=Ne.get(I).programs;Y!==void 0&&(Y.forEach(function(ae){Ce.releaseProgram(ae)}),I.isShaderMaterial&&Ce.releaseShaderCache(I))}this.renderBufferDirect=function(I,Y,ae,ce,Q,Ue){Y===null&&(Y=ye);let Xe=Q.isMesh&&Q.matrixWorld.determinant()<0,Je=Bt(I,Y,ae,ce,Q);De.setMaterial(ce,Xe);let je=ae.index,rt=1;if(ce.wireframe===!0){if(je=xe.getWireframeAttribute(ae),je===void 0)return;rt=2}let ct=ae.drawRange,Qe=ae.attributes.position,_t=ct.start*rt,It=(ct.start+ct.count)*rt;Ue!==null&&(_t=Math.max(_t,Ue.start*rt),It=Math.min(It,(Ue.start+Ue.count)*rt)),je!==null?(_t=Math.max(_t,0),It=Math.min(It,je.count)):Qe!=null&&(_t=Math.max(_t,0),It=Math.min(It,Qe.count));let Dt=It-_t;if(Dt<0||Dt===1/0)return;be.setup(Q,ce,Je,ae,je);let An,yt=ie;if(je!==null&&(An=me.get(je),yt=Te,yt.setIndex(An)),Q.isMesh)ce.wireframe===!0?(De.setLineWidth(ce.wireframeLinewidth*Pe()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(Q.isLine){let tt=ce.linewidth;tt===void 0&&(tt=1),De.setLineWidth(tt*Pe()),Q.isLineSegments?yt.setMode(G.LINES):Q.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else Q.isPoints?yt.setMode(G.POINTS):Q.isSprite&&yt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)yt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let tt=Q._multiDrawStarts,Ri=Q._multiDrawCounts,vt=Q._multiDrawCount,ii=je?me.get(je).bytesPerElement:1,ar=Ne.get(ce).currentProgram.getUniforms();for(let Dn=0;Dn<vt;Dn++)ar.setValue(G,"_gl_DrawID",Dn),yt.render(tt[Dn]/ii,Ri[Dn])}else if(Q.isInstancedMesh)yt.renderInstances(_t,Dt,Q.count);else if(ae.isInstancedBufferGeometry){let tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ri=Math.min(ae.instanceCount,tt);yt.renderInstances(_t,Dt,Ri)}else yt.render(_t,Dt)};function ke(I,Y,ae){I.transparent===!0&&I.side===At&&I.forceSinglePass===!1?(I.side=$t,I.needsUpdate=!0,bt(I,Y,ae),I.side=yi,I.needsUpdate=!0,bt(I,Y,ae),I.side=At):bt(I,Y,ae)}this.compile=function(I,Y,ae=null){ae===null&&(ae=I),d=Ve.get(ae),d.init(Y),v.push(d),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),I!==ae&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(d.pushLight(Q),Q.castShadow&&d.pushShadow(Q))}),d.setupLights();let ce=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let Xe=0;Xe<Ue.length;Xe++){let Je=Ue[Xe];ke(Je,ae,Q),ce.add(Je)}else ke(Ue,ae,Q),ce.add(Ue)}),v.pop(),d=null,ce},this.compileAsync=function(I,Y,ae=null){let ce=this.compile(I,Y,ae);return new Promise(Q=>{function Ue(){if(ce.forEach(function(Xe){Ne.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){Q(I);return}setTimeout(Ue,10)}He.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let k=null;function re(I){k&&k(I)}function he(){_e.stop()}function pe(){_e.start()}let _e=new yp;_e.setAnimationLoop(re),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(I){k=I,C.setAnimationLoop(I),I===null?_e.stop():_e.start()},C.addEventListener("sessionstart",he),C.addEventListener("sessionend",pe),this.render=function(I,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(Y),Y=C.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,Y,w),d=Ve.get(I,v.length),d.init(Y),v.push(d),X.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ne.setFromProjectionMatrix(X),ee=this.localClippingEnabled,$=Se.init(this.clippingPlanes,ee),m=Oe.get(I,y.length),m.init(),y.push(m),C.enabled===!0&&C.isPresenting===!0){let Ue=g.xr.getDepthSensingMesh();Ue!==null&&Le(Ue,Y,-1/0,g.sortObjects)}Le(I,Y,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(te,fe),Re=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Re&&Me.addToRenderList(m,I),this.info.render.frame++,$===!0&&Se.beginShadows();let ae=d.state.shadowsArray;K.render(ae,I,Y),$===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,Q=m.transmissive;if(d.setupLights(),Y.isArrayCamera){let Ue=Y.cameras;if(Q.length>0)for(let Xe=0,Je=Ue.length;Xe<Je;Xe++){let je=Ue[Xe];Ke(ce,Q,I,je)}Re&&Me.render(I);for(let Xe=0,Je=Ue.length;Xe<Je;Xe++){let je=Ue[Xe];Ye(m,I,je,je.viewport)}}else Q.length>0&&Ke(ce,Q,I,Y),Re&&Me.render(I),Ye(m,I,Y);w!==null&&(N.updateMultisampleRenderTarget(w),N.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(g,I,Y),be.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(d=v[v.length-1],$===!0&&Se.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Le(I,Y,ae,ce){if(I.visible===!1)return;if(I.layers.test(Y.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Y);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ne.intersectsSprite(I)){ce&&se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(X);let Xe=ue.update(I),Je=I.material;Je.visible&&m.push(I,Xe,Je,ae,se.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ne.intersectsObject(I))){let Xe=ue.update(I),Je=I.material;if(ce&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),se.copy(I.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),se.copy(Xe.boundingSphere.center)),se.applyMatrix4(I.matrixWorld).applyMatrix4(X)),Array.isArray(Je)){let je=Xe.groups;for(let rt=0,ct=je.length;rt<ct;rt++){let Qe=je[rt],_t=Je[Qe.materialIndex];_t&&_t.visible&&m.push(I,Xe,_t,ae,se.z,Qe)}}else Je.visible&&m.push(I,Xe,Je,ae,se.z,null)}}let Ue=I.children;for(let Xe=0,Je=Ue.length;Xe<Je;Xe++)Le(Ue[Xe],Y,ae,ce)}function Ye(I,Y,ae,ce){let Q=I.opaque,Ue=I.transmissive,Xe=I.transparent;d.setupLightsView(ae),$===!0&&Se.setGlobalState(g.clippingPlanes,ae),ce&&De.viewport(R.copy(ce)),Q.length>0&&nt(Q,Y,ae),Ue.length>0&&nt(Ue,Y,ae),Xe.length>0&&nt(Xe,Y,ae),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Ke(I,Y,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ce.id]===void 0&&(d.state.transmissionRenderTarget[ce.id]=new jt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?En:Hi,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let Ue=d.state.transmissionRenderTarget[ce.id],Xe=ce.viewport||R;Ue.setSize(Xe.z,Xe.w);let Je=g.getRenderTarget();g.setRenderTarget(Ue),g.getClearColor(L),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear(),Re&&Me.render(ae);let je=g.toneMapping;g.toneMapping=fs;let rt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),d.setupLightsView(ce),$===!0&&Se.setGlobalState(g.clippingPlanes,ce),nt(I,ae,ce),N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue),He.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Qe=0,_t=Y.length;Qe<_t;Qe++){let It=Y[Qe],Dt=It.object,An=It.geometry,yt=It.material,tt=It.group;if(yt.side===At&&Dt.layers.test(ce.layers)){let Ri=yt.side;yt.side=$t,yt.needsUpdate=!0,st(Dt,ae,ce,An,yt,tt),yt.side=Ri,yt.needsUpdate=!0,ct=!0}}ct===!0&&(N.updateMultisampleRenderTarget(Ue),N.updateRenderTargetMipmap(Ue))}g.setRenderTarget(Je),g.setClearColor(L,V),rt!==void 0&&(ce.viewport=rt),g.toneMapping=je}function nt(I,Y,ae){let ce=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=I.length;Q<Ue;Q++){let Xe=I[Q],Je=Xe.object,je=Xe.geometry,rt=ce===null?Xe.material:ce,ct=Xe.group;Je.layers.test(ae.layers)&&st(Je,Y,ae,je,rt,ct)}}function st(I,Y,ae,ce,Q,Ue){I.onBeforeRender(g,Y,ae,ce,Q,Ue),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(g,Y,ae,ce,I,Ue),Q.transparent===!0&&Q.side===At&&Q.forceSinglePass===!1?(Q.side=$t,Q.needsUpdate=!0,g.renderBufferDirect(ae,Y,ce,Q,I,Ue),Q.side=yi,Q.needsUpdate=!0,g.renderBufferDirect(ae,Y,ce,Q,I,Ue),Q.side=At):g.renderBufferDirect(ae,Y,ce,Q,I,Ue),I.onAfterRender(g,Y,ae,ce,Q,Ue)}function bt(I,Y,ae){Y.isScene!==!0&&(Y=ye);let ce=Ne.get(I),Q=d.state.lights,Ue=d.state.shadowsArray,Xe=Q.state.version,Je=Ce.getParameters(I,Q.state,Ue,Y,ae),je=Ce.getProgramCacheKey(Je),rt=ce.programs;ce.environment=I.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(I.isMeshStandardMaterial?J:A).get(I.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&I.envMap===null?Y.environmentRotation:I.envMapRotation,rt===void 0&&(I.addEventListener("dispose",le),rt=new Map,ce.programs=rt);let ct=rt.get(je);if(ct!==void 0){if(ce.currentProgram===ct&&ce.lightsStateVersion===Xe)return Ct(I,Je),ct}else Je.uniforms=Ce.getUniforms(I),I.onBeforeCompile(Je,g),ct=Ce.acquireProgram(Je,je),rt.set(je,ct),ce.uniforms=Je.uniforms;let Qe=ce.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qe.clippingPlanes=Se.uniform),Ct(I,Je),ce.needsLights=hn(I),ce.lightsStateVersion=Xe,ce.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=ct,ce.uniformsList=null,ct}function Ot(I){if(I.uniformsList===null){let Y=I.currentProgram.getUniforms();I.uniformsList=Lr.seqWithValue(Y.seq,I.uniforms)}return I.uniformsList}function Ct(I,Y){let ae=Ne.get(I);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Bt(I,Y,ae,ce,Q){Y.isScene!==!0&&(Y=ye),N.resetTextureUnits();let Ue=Y.fog,Xe=ce.isMeshStandardMaterial?Y.environment:null,Je=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_n,je=(ce.isMeshStandardMaterial?J:A).get(ce.envMap||Xe),rt=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!ae.morphAttributes.position,_t=!!ae.morphAttributes.normal,It=!!ae.morphAttributes.color,Dt=fs;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Dt=g.toneMapping);let An=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yt=An!==void 0?An.length:0,tt=Ne.get(ce),Ri=d.state.lights;if($===!0&&(ee===!0||I!==S)){let Xn=I===S&&ce.id===b;Se.setState(ce,I,Xn)}let vt=!1;ce.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Ri.state.version||tt.outputColorSpace!==Je||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isBatchedMesh&&tt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&tt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&tt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&tt.instancingMorph===!1&&Q.morphTexture!==null||tt.envMap!==je||ce.fog===!0&&tt.fog!==Ue||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Se.numPlanes||tt.numIntersection!==Se.numIntersection)||tt.vertexAlphas!==rt||tt.vertexTangents!==ct||tt.morphTargets!==Qe||tt.morphNormals!==_t||tt.morphColors!==It||tt.toneMapping!==Dt||tt.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,tt.__version=ce.version);let ii=tt.currentProgram;vt===!0&&(ii=bt(ce,Y,Q));let ar=!1,Dn=!1,po=!1,Nt=ii.getUniforms(),gi=tt.uniforms;if(De.useProgram(ii.program)&&(ar=!0,Dn=!0,po=!0),ce.id!==b&&(b=ce.id,Dn=!0),ar||S!==I){De.buffers.depth.getReversed()?(P.copy(I.projectionMatrix),kg(P),Hg(P),Nt.setValue(G,"projectionMatrix",P)):Nt.setValue(G,"projectionMatrix",I.projectionMatrix),Nt.setValue(G,"viewMatrix",I.matrixWorldInverse);let ts=Nt.map.cameraPosition;ts!==void 0&&ts.setValue(G,q.setFromMatrixPosition(I.matrixWorld)),ze.logarithmicDepthBuffer&&Nt.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Nt.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,Dn=!0,po=!0)}if(Q.isSkinnedMesh){Nt.setOptional(G,Q,"bindMatrix"),Nt.setOptional(G,Q,"bindMatrixInverse");let Xn=Q.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),Nt.setValue(G,"boneTexture",Xn.boneTexture,N))}Q.isBatchedMesh&&(Nt.setOptional(G,Q,"batchingTexture"),Nt.setValue(G,"batchingTexture",Q._matricesTexture,N),Nt.setOptional(G,Q,"batchingIdTexture"),Nt.setValue(G,"batchingIdTexture",Q._indirectTexture,N),Nt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Nt.setValue(G,"batchingColorTexture",Q._colorsTexture,N));let mo=ae.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&ve.update(Q,ae,ii),(Dn||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,Nt.setValue(G,"receiveShadow",Q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(gi.envMap.value=je,gi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(gi.envMapIntensity.value=Y.environmentIntensity),Dn&&(Nt.setValue(G,"toneMappingExposure",g.toneMappingExposure),tt.needsLights&&Vt(gi,po),Ue&&ce.fog===!0&&Fe.refreshFogUniforms(gi,Ue),Fe.refreshMaterialUniforms(gi,ce,z,j,d.state.transmissionRenderTarget[I.id]),Lr.upload(G,Ot(tt),gi,N)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Lr.upload(G,Ot(tt),gi,N),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Nt.setValue(G,"center",Q.center),Nt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(G,"normalMatrix",Q.normalMatrix),Nt.setValue(G,"modelMatrix",Q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let Xn=ce.uniformsGroups;for(let ts=0,ns=Xn.length;ts<ns;ts++){let Uf=Xn[ts];W.update(Uf,ii),W.bind(Uf,ii)}}return ii}function Vt(I,Y){I.ambientLightColor.needsUpdate=Y,I.lightProbe.needsUpdate=Y,I.directionalLights.needsUpdate=Y,I.directionalLightShadows.needsUpdate=Y,I.pointLights.needsUpdate=Y,I.pointLightShadows.needsUpdate=Y,I.spotLights.needsUpdate=Y,I.spotLightShadows.needsUpdate=Y,I.rectAreaLights.needsUpdate=Y,I.hemisphereLights.needsUpdate=Y}function hn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,Y,ae){Ne.get(I.texture).__webglTexture=Y,Ne.get(I.depthTexture).__webglTexture=ae;let ce=Ne.get(I);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Y){let ae=Ne.get(I);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(I,Y=0,ae=0){w=I,E=Y,M=ae;let ce=!0,Q=null,Ue=!1,Xe=!1;if(I){let je=Ne.get(I);if(je.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(G.FRAMEBUFFER,null),ce=!1;else if(je.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(je.__hasExternalTextures)N.rebindTextures(I,Ne.get(I.texture).__webglTexture,Ne.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Qe=I.depthTexture;if(je.__boundDepthTexture!==Qe){if(Qe!==null&&Ne.has(Qe)&&(I.width!==Qe.image.width||I.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}let rt=I.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Xe=!0);let ct=Ne.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[Y])?Q=ct[Y][ae]:Q=ct[Y],Ue=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?Q=Ne.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?Q=ct[ae]:Q=ct,R.copy(I.viewport),F.copy(I.scissor),B=I.scissorTest}else R.copy(ge).multiplyScalar(z).floor(),F.copy(Ee).multiplyScalar(z).floor(),B=de;if(De.bindFramebuffer(G.FRAMEBUFFER,Q)&&ce&&De.drawBuffers(I,Q),De.viewport(R),De.scissor(F),De.setScissorTest(B),Ue){let je=Ne.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,je.__webglTexture,ae)}else if(Xe){let je=Ne.get(I.texture),rt=Y||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.__webglTexture,ae||0,rt)}b=-1},this.readRenderTargetPixels=function(I,Y,ae,ce,Q,Ue,Xe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ne.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){De.bindFramebuffer(G.FRAMEBUFFER,Je);try{let je=I.texture,rt=je.format,ct=je.type;if(!ze.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=I.width-ce&&ae>=0&&ae<=I.height-Q&&G.readPixels(Y,ae,ce,Q,oe.convert(rt),oe.convert(ct),Ue)}finally{let je=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(I,Y,ae,ce,Q,Ue,Xe){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Ne.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){let je=I.texture,rt=je.format,ct=je.type;if(!ze.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=I.width-ce&&ae>=0&&ae<=I.height-Q){De.bindFramebuffer(G.FRAMEBUFFER,Je);let Qe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Qe),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),G.readPixels(Y,ae,ce,Q,oe.convert(rt),oe.convert(ct),0);let _t=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(G.FRAMEBUFFER,_t);let It=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await zg(G,It,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Qe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.deleteBuffer(Qe),G.deleteSync(It),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Y=null,ae=0){I.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,I=arguments[1]);let ce=Math.pow(2,-ae),Q=Math.floor(I.image.width*ce),Ue=Math.floor(I.image.height*ce),Xe=Y!==null?Y.x:0,Je=Y!==null?Y.y:0;N.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,Xe,Je,Q,Ue),De.unbindTexture()},this.copyTextureToTexture=function(I,Y,ae=null,ce=null,Q=0){I.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,I=arguments[1],Y=arguments[2],Q=arguments[3]||0,ae=null);let Ue,Xe,Je,je,rt,ct,Qe,_t,It,Dt=I.isCompressedTexture?I.mipmaps[Q]:I.image;ae!==null?(Ue=ae.max.x-ae.min.x,Xe=ae.max.y-ae.min.y,Je=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,rt=ae.min.y,ct=ae.isBox3?ae.min.z:0):(Ue=Dt.width,Xe=Dt.height,Je=Dt.depth||1,je=0,rt=0,ct=0),ce!==null?(Qe=ce.x,_t=ce.y,It=ce.z):(Qe=0,_t=0,It=0);let An=oe.convert(Y.format),yt=oe.convert(Y.type),tt;Y.isData3DTexture?(N.setTexture3D(Y,0),tt=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(N.setTexture2DArray(Y,0),tt=G.TEXTURE_2D_ARRAY):(N.setTexture2D(Y,0),tt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ri=G.getParameter(G.UNPACK_ROW_LENGTH),vt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ii=G.getParameter(G.UNPACK_SKIP_PIXELS),ar=G.getParameter(G.UNPACK_SKIP_ROWS),Dn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,je),G.pixelStorei(G.UNPACK_SKIP_ROWS,rt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ct);let po=I.isDataArrayTexture||I.isData3DTexture,Nt=Y.isDataArrayTexture||Y.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let gi=Ne.get(I),mo=Ne.get(Y),Xn=Ne.get(gi.__renderTarget),ts=Ne.get(mo.__renderTarget);De.bindFramebuffer(G.READ_FRAMEBUFFER,Xn.__webglFramebuffer),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let ns=0;ns<Je;ns++)po&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(I).__webglTexture,Q,ct+ns),I.isDepthTexture?(Nt&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(Y).__webglTexture,Q,It+ns),G.blitFramebuffer(je,rt,Ue,Xe,Qe,_t,Ue,Xe,G.DEPTH_BUFFER_BIT,G.NEAREST)):Nt?G.copyTexSubImage3D(tt,Q,Qe,_t,It+ns,je,rt,Ue,Xe):G.copyTexSubImage2D(tt,Q,Qe,_t,It+ns,je,rt,Ue,Xe);De.bindFramebuffer(G.READ_FRAMEBUFFER,null),De.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Nt?I.isDataTexture||I.isData3DTexture?G.texSubImage3D(tt,Q,Qe,_t,It,Ue,Xe,Je,An,yt,Dt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(tt,Q,Qe,_t,It,Ue,Xe,Je,An,Dt.data):G.texSubImage3D(tt,Q,Qe,_t,It,Ue,Xe,Je,An,yt,Dt):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Q,Qe,_t,Ue,Xe,An,yt,Dt.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Q,Qe,_t,Dt.width,Dt.height,An,Dt.data):G.texSubImage2D(G.TEXTURE_2D,Q,Qe,_t,Ue,Xe,An,yt,Dt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ri),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ii),G.pixelStorei(G.UNPACK_SKIP_ROWS,ar),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Dn),Q===0&&Y.generateMipmaps&&G.generateMipmap(tt),De.unbindTexture()},this.copyTextureToTexture3D=function(I,Y,ae=null,ce=null,Q=0){return I.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,I=arguments[2],Y=arguments[3],Q=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Y,ae,ce,Q)},this.initRenderTarget=function(I){Ne.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),De.unbindTexture()},this.resetState=function(){E=0,M=0,w=null,De.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}},Xr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bo=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gu,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new O,Ws=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zo=class extends Sn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,vo=new O,br=new O,Er=new O,Tr=new $e,Mo=new $e,Ep=new et,Ca=new O,So=new O,Ia=new O,Fd=new $e,Rl=new $e,Od=new $e,ec=class extends Lt{constructor(e=new zo){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qr(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Ws(n,3,0,!1)),Sr.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Ep.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Pa(Ca.set(-.5,-.5,0),Er,o,br,s,r),Pa(So.set(.5,-.5,0),Er,o,br,s,r),Pa(Ia.set(.5,.5,0),Er,o,br,s,r),Fd.set(0,0),Rl.set(1,0),Od.set(1,1);let a=e.ray.intersectTriangle(Ca,So,Ia,!1,vo);if(a===null&&(Pa(So.set(-.5,.5,0),Er,o,br,s,r),Rl.set(0,1),a=e.ray.intersectTriangle(Ca,Ia,So,!1,vo),a===null))return;let c=e.ray.origin.distanceTo(vo);c<e.near||c>e.far||t.push({distance:c,point:vo.clone(),uv:us.getInterpolation(vo,Ca,So,Ia,Fd,Rl,Od,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Pa(i,e,t,n,s,r){Tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Mo.x=r*Tr.x-s*Tr.y,Mo.y=s*Tr.x+r*Tr.y):Mo.copy(Tr),i.copy(e),i.x+=Mo.x,i.y+=Mo.y,i.applyMatrix4(Ep)}var Bd=new O,zd=new gt,kd=new gt,NM=new O,Hd=new et,La=new O,Cl=new Fn,Vd=new et,Il=new Vr,tc=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cl.copy(this.boundingSphere),Cl.applyMatrix4(s),e.ray.intersectsSphere(Cl)!==!1&&(Vd.copy(s).invert(),Il.copy(e.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&Il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ug?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;zd.fromBufferAttribute(s.attributes.skinIndex,e),kd.fromBufferAttribute(s.attributes.skinWeight,e),Bd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=kd.getComponent(r);if(o!==0){let a=zd.getComponent(r);Hd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(NM.copy(Bd).applyMatrix4(Hd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ko=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},nc=class extends rn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=sn,h=sn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gd=new et,UM=new et,ic=class i{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:UM;Gd.multiplyMatrices(a,t[r]),Gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new nc(t,e,e,Zn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ko),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Xs=class extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new et,Wd=new et,Da=[],Xd=new Kn,FM=new et,bo=new ot,Eo=new Fn,xn=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,FM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Xd.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Eo.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),e.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),Wd.multiplyMatrices(n,wr),bo.matrixWorld=Wd,bo.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let c=Da[o];c.instanceId=r,c.object=this,t.push(c)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nc(new Float32Array(s*this.count),s,this.count,sh,li));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ms=class extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new O,rc=new O,qd=new et,To=new Vr,Na=new Fn,Pl=new O,Yd=new O,Yr=class extends Lt{constructor(e=new pt,t=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sc.fromBufferAttribute(t,s-1),rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;qd.copy(s).invert(),To.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let d=h.getX(_),y=h.getX(_+1),v=Ua(this,e,To,c,d,y);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(x-1),m=h.getX(p),d=Ua(this,e,To,c,_,m);d&&t.push(d)}}else{let p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=l){let d=Ua(this,e,To,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){let _=Ua(this,e,To,c,x-1,p);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ua(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(sc.fromBufferAttribute(o,s),rc.fromBufferAttribute(o,r),t.distanceSqToSegment(sc,rc,Pl,Yd)>n)return;Pl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:Yd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Zd=new O,Kd=new O,qs=class extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zd.fromBufferAttribute(t,s),Kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zd.distanceTo(Kd);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oc=class extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ys=class extends Sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new et,Du=new Vr,Fa=new Fn,Oa=new O,gs=class extends Lt{constructor(e=new pt,t=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;$d.copy(s).invert(),Du.copy(e.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=f,_=p;x<_;x++){let m=l.getX(x);Oa.fromBufferAttribute(u,m),Jd(Oa,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,_=p;x<_;x++)Oa.fromBufferAttribute(u,x),Jd(Oa,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jd(i,e,t,n,s,r,o){let a=Du.distanceSqToPoint(i);if(a<t){let c=new O;Du.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fi=class extends rn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bn=class i extends pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,_=[],m=n/2,d=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function y(){let g=new O,T=new O,E=0,M=(t-e)/n;for(let w=0;w<=r;w++){let b=[],S=w/r,R=S*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,L=B*c+a,V=Math.sin(L),H=Math.cos(L);T.x=R*V,T.y=-S*n+m,T.z=R*H,u.push(T.x,T.y,T.z),g.set(V,M,H).normalize(),f.push(g.x,g.y,g.z),p.push(B,1-S),b.push(x++)}_.push(b)}for(let w=0;w<s;w++)for(let b=0;b<r;b++){let S=_[b][w],R=_[b+1][w],F=_[b+1][w+1],B=_[b][w+1];(e>0||b!==0)&&(h.push(S,R,B),E+=3),(t>0||b!==r-1)&&(h.push(R,F,B),E+=3)}l.addGroup(d,E,0),d+=E}function v(g){let T=x,E=new $e,M=new O,w=0,b=g===!0?e:t,S=g===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),x++;let R=x;for(let F=0;F<=s;F++){let L=F/s*c+a,V=Math.cos(L),H=Math.sin(L);M.x=b*H,M.y=m*S,M.z=b*V,u.push(M.x,M.y,M.z),f.push(0,S,0),E.x=V*.5+.5,E.y=H*.5*S+.5,p.push(E.x,E.y),x++}for(let F=0;F<s;F++){let B=T+F,L=R+F;g===!0?h.push(L,L+1,B):h.push(L+1,L,B),w+=3}l.addGroup(d,w,g===!0?1:2),d+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zs=class i extends bn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nu=class i extends pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new O,g=new O,T=new O;for(let E=0;E<t.length;E+=3)p(t[E+0],v),p(t[E+1],g),p(t[E+2],T),c(v,g,T,y)}function c(y,v,g,T){let E=T+1,M=[];for(let w=0;w<=E;w++){M[w]=[];let b=y.clone().lerp(g,w/E),S=v.clone().lerp(g,w/E),R=E-w;for(let F=0;F<=R;F++)F===0&&w===E?M[w][F]=b:M[w][F]=b.clone().lerp(S,F/R)}for(let w=0;w<E;w++)for(let b=0;b<2*(E-w)-1;b++){let S=Math.floor(b/2);b%2===0?(f(M[w][S+1]),f(M[w+1][S]),f(M[w][S])):(f(M[w][S+1]),f(M[w+1][S+1]),f(M[w+1][S]))}}function l(y){let v=new O;for(let g=0;g<r.length;g+=3)v.x=r[g+0],v.y=r[g+1],v.z=r[g+2],v.normalize().multiplyScalar(y),r[g+0]=v.x,r[g+1]=v.y,r[g+2]=v.z}function h(){let y=new O;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let g=m(y)/2/Math.PI+.5,T=d(y)/Math.PI+.5;o.push(g,1-T)}x(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],g=o[y+2],T=o[y+4],E=Math.max(v,g,T),M=Math.min(v,g,T);E>.9&&M<.1&&(v<.2&&(o[y+0]+=1),g<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,v){let g=y*3;v.x=e[g+0],v.y=e[g+1],v.z=e[g+2]}function x(){let y=new O,v=new O,g=new O,T=new O,E=new $e,M=new $e,w=new $e;for(let b=0,S=0;b<r.length;b+=9,S+=6){y.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),E.set(o[S+0],o[S+1]),M.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),T.copy(y).add(v).add(g).divideScalar(3);let R=m(T);_(E,S+0,y,R),_(M,S+2,v,R),_(w,S+4,g,R)}}function _(y,v,g,T){T<0&&y.x===1&&(o[v]=y.x-1),g.x===0&&g.z===0&&(o[v]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ks=class i extends Nu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var xs=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,f=new O,p=[],x=[],_=[],m=[];for(let d=0;d<=n;d++){let y=[],v=d/n,g=0;d===0&&o===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+g,1-v),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let v=h[d][y+1],g=h[d][y],T=h[d+1][y],E=h[d+1][y+1];(d!==0||o>0)&&p.push(v,g,E),(d!==n-1||c<Math.PI)&&p.push(g,T,E)}this.setIndex(p),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ac=class extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},it=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},On=class extends it{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vi=class extends Sn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ba(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function OM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function BM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function jd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Tp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var _s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uu=class extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kf,endingEnd:kf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hf:r=e,a=2*t-n;break;case Vf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hf:o=e,c=2*n-t;break;case Vf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(s-t),_=x*x,m=_*x,d=-f*m+2*f*_-f*x,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*x+1,v=(-1-p)*m+(1.5+p)*_+.5*x,g=p*m-p*_;for(let T=0;T!==a;++T)r[T]=d*o[h+T]+y*o[l+T]+v*o[c+T]+g*o[u+T];return r}},Fu=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Ou=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case kr:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&OM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[p+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=kr;var ys=class extends $n{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=zr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends $n{};cc.prototype.ValueTypeName="color";var Gi=class extends $n{};Gi.prototype.ValueTypeName="number";var Bu=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Qt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wi=class extends $n{InterpolantFactoryMethodLinear(e){return new Bu(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends $n{constructor(e,t,n){super(e,t,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=zr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends $n{};Xi.prototype.ValueTypeName="vector";var lc=class{constructor(e="",t=-1,n=[],s=hg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=BM(c);c=jd(c,1,h),l=jd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Gi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,x,_){if(p.length!==0){let m=[],d=[];Tp(p,m,d,x),m.length!==0&&_.push(new u(f,m,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)p[f[x].morphTargets[_]]=-1;for(let _ in p){let m=[],d=[];for(let y=0;y!==f[x].morphTargets.length;++y){let v=f[x];m.push(v.time),d.push(v.morphTarget===_?1:0)}s.push(new Gi(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{let p=".bones["+t[u].name+"]";n(Xi,p+".position",f,"pos",s),n(Wi,p+".quaternion",f,"rot",s),n(Xi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return cc;case"quaternion":return Wi;case"bool":case"boolean":return ys;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function kM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zM(i.type);if(i.times===void 0){let t=[],n=[];Tp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var hs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],x=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},HM=new zu,qi=class{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni={},ku=class extends Error{constructor(e,t){super(e),this.response=t}},Ho=class extends qi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:s});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ni[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,x=p!==0,_=0,m=new ReadableStream({start(d){y();function y(){u.read().then(({done:v,value:g})=>{if(v)d.close();else{_+=g.byteLength;let T=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let E=0,M=h.length;E<M;E++){let w=h[E];w.onProgress&&w.onProgress(T)}d.enqueue(g),y()}},v=>{d.error(v)})}}});return new Response(m)}else throw new ku(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(x=>p.decode(x))}}}).then(l=>{hs.add(e,l);let h=Ni[e];delete Ni[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ni[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hu=class extends qi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fo("img");function c(){h(),hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var uc=class extends qi{constructor(e){super(e)}load(e,t,n,s){let r=new rn,o=new Hu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Kr=class extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ll=new et,Qd=new O,ep=new O,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qd),ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ep),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vu=class extends Vo{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$r=class extends Zr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},tp=new et,wo=new O,Dl=new O,Gu=class extends Vo{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(wo),Dl.copy(n.position),Dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dl),n.updateMatrixWorld(),s.makeTranslation(-wo.x,-wo.y,-wo.z),tp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tp)}},hc=class extends Zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wu=class extends Vo{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ms=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var fc=class extends qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=hs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hs.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),hs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});hs.add(e,c),r.manager.itemStart(e)}};var dc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=np(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=np();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function np(){return performance.now()}var hh="\\[\\]\\.:\\/",VM=new RegExp("["+hh+"]","g"),fh="[^"+hh+"]",GM="[^"+hh.replace("\\.","")+"]",WM=/((?:WC+[\/:])*)/.source.replace("WC",fh),XM=/(WCOD+)?/.source.replace("WCOD",GM),qM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),YM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),ZM=new RegExp("^"+WM+XM+qM+YM+"$"),KM=["material","materials","bones","map"],Xu=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(VM,"")}static parseTrackName(e){let t=ZM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);KM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Xu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xo=class i extends ot{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new qt;let n=this,s=t.color!==void 0?new Ae(t.color):new Ae(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new ai,u=new O,f=new O,p=new O,x=new et,_=new O(0,0,-1),m=new gt,d=new O,y=new O,v=new gt,g=new et,T=this.camera,E=new jt(r,o,{samples:l,type:En}),M=new St({name:c.name!==void 0?c.name:"unspecified",uniforms:Si.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});M.uniforms.tDiffuse.value=E.texture,M.uniforms.color.value=s,M.uniforms.textureMatrix.value=g,this.material=M,this.onBeforeRender=function(w,b,S){if(f.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(S.matrixWorld),x.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(x),d.subVectors(f,p),d.dot(u)>0)return;d.reflect(u).negate(),d.add(f),x.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(x),_.add(p),y.subVectors(f,_),y.reflect(u).negate(),y.add(f),T.position.copy(d),T.up.set(0,1,0),T.up.applyMatrix4(x),T.up.reflect(u),T.lookAt(y),T.far=S.far,T.updateMatrixWorld(),T.projectionMatrix.copy(S.projectionMatrix),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(T.projectionMatrix),g.multiply(T.matrixWorldInverse),g.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(T.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let R=T.projectionMatrix;v.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],v.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],v.z=-1,v.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(v)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-a,R.elements[14]=m.w,n.visible=!1;let F=w.getRenderTarget(),B=w.xr.enabled,L=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(E),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(b,T),w.xr.enabled=B,w.shadowMap.autoUpdate=L,w.setRenderTarget(F);let V=S.viewport;V!==void 0&&w.state.viewport(V),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}};Xo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var yc=[25,18,15,12,10,8,6,4],$s={maxSpeed:80,accel:26,brake:30,steerRate:1.7,steerHighSpeed:.75,grip:1,wetGrip:.78,driftBonus:1.6,airControl:.12,airStability:1,landing:1,boostPower:1.22,boostDuration:2.2,boostCharges:3,offroadDrag:1,wallLoss:.25,steerNoise:0,slipstream:1},Ss={sunset:{id:"sunset",name:"Fin d'apr\xE8s-midi",grip:1,wet:0,rain:0,wind:0,sheen:.9,skyTop:8825052,skyHorizon:15785172,fogColor:14074548,fogDensity:52e-5,sunColor:16756316,sunIntensity:4.6,sunDir:[-.5,.21,-.62],hemiSky:12899050,hemiGround:9399366,hemiIntensity:.8,seaColor:2786996,night:!1,bloom:.34},sicily:{id:"sicily",name:"Apr\xE8s-midi sicilien",grip:1,wet:0,rain:0,wind:.1,sheen:.2,skyTop:4885468,skyHorizon:13623792,fogColor:13425124,fogDensity:5e-4,sunColor:16773854,sunIntensity:3.3,sunDir:[-.45,.62,-.4],hemiSky:12375282,hemiGround:8156256,hemiIntensity:.85,seaColor:1994664,night:!1,bloom:.25},rain:{id:"rain",name:"Nuit pluvieuse",grip:.8,wet:1,rain:1,wind:.6,skyTop:329231,skyHorizon:1711933,fogColor:1317427,fogDensity:.0028,sunColor:7375103,sunIntensity:.7,sunDir:[.4,.7,.3],hemiSky:3820170,hemiGround:1052696,hemiIntensity:.75,seaColor:662067,night:!0,bloom:1},fog:{id:"fog",name:"Brume matinale",grip:.92,wet:.35,rain:0,wind:.2,skyTop:10467535,skyHorizon:15262418,fogColor:14277846,fogDensity:.0052,sunColor:16773328,sunIntensity:1.5,sunDir:[.5,.35,.5],hemiSky:13621734,hemiGround:7301722,hemiIntensity:1.1,seaColor:6262687,night:!1,bloom:.35}};function qo(i){let e=String(i),t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,t>>>0}function Jn(i){let e=(typeof i=="number"?i>>>0:qo(i))||1,t=e,n=()=>{e=e+1831565813>>>0;let s=e;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296};return{next:n,range:(s,r)=>s+(r-s)*n(),int:(s,r)=>s+Math.floor(n()*(r-s+1)),pick:s=>s[Math.floor(n()*s.length)],chance:s=>n()<s,sign:()=>n()<.5?-1:1,shuffle:s=>{let r=s.slice();for(let o=r.length-1;o>0;o--){let a=Math.floor(n()*(o+1));[r[o],r[a]]=[r[a],r[o]]}return r},fork:s=>Jn(qo(t+":"+s))}}var vc=Math.PI*2,$M=2,wp=2800,Ap=4200,JM=34,Rp=8,Cp=60,jM=.12,QM=.1,Ip=28,e1=150,dh=52,xh=.0025,Pp=1/150,t1=10,Lp=5,Dp=250,Np=38,Up=75,Mc=150,mh=120,zp=10,n1=80,i1=40,s1=20,r1=30,o1=95,ph=18,Fp=22,a1=60,gh=(i,e,t)=>i<e?e:i>t?t:i;function c1(i){let e=i.int(10,14),t=i.range(440,520),n=[];for(let s=0;s<e;s++){let r=i.range(-.3,.3)*(vc/e),o=s/e*vc+r,a=gh(t*i.range(.62,1.25),380,620);n.push([a*Math.cos(o),a*Math.sin(o)])}return n}function l1(i,e,t,n,s,r,o,a,c){let l=(_,m,d,y)=>{let v=(c-d)/(y-d);return[_[0]+(m[0]-_[0])*v,_[1]+(m[1]-_[1])*v]},h=l(i,e,s,r),u=l(e,t,r,o),f=l(t,n,o,a),p=l(h,u,s,o),x=l(u,f,r,a);return l(p,x,r,o)}function u1(i,e){let t=i.length,n=[];for(let s=0;s<t;s++){let r=i[(s-1+t)%t],o=i[s],a=i[(s+1)%t],c=i[(s+2)%t],l=0,h=l+Math.sqrt(Math.hypot(o[0]-r[0],o[1]-r[1])),u=h+Math.sqrt(Math.hypot(a[0]-o[0],a[1]-o[1])),f=u+Math.sqrt(Math.hypot(c[0]-a[0],c[1]-a[1]));for(let p=0;p<e;p++){let x=h+(u-h)*(p/e);n.push(l1(r,o,a,c,l,h,u,f,x))}}return n}function h1(i){let e=i.length,t=new Float64Array(e+1);for(let l=0;l<e;l++){let h=i[l],u=i[(l+1)%e];t[l+1]=t[l]+Math.hypot(u[0]-h[0],u[1]-h[1])}let n=t[e],s=Math.max(1,Math.round(n/$M)),r=n/s,o=new Float64Array(s),a=new Float64Array(s),c=0;for(let l=0;l<s;l++){let h=l*r;for(;c<e-1&&t[c+1]<=h;)c++;let u=i[c],f=i[(c+1)%e],p=t[c+1]-t[c],x=p>0?(h-t[c])/p:0;o[l]=u[0]+(f[0]-u[0])*x,a[l]=u[1]+(f[1]-u[1])*x}return{xs:o,zs:a,count:s,step:r}}function Op(i,e){let t=i.length,n=new Float64Array(t),s=2*e+1,r=0;for(let o=-e;o<=e;o++)r+=i[(o+t)%t];for(let o=0;o<t;o++)n[o]=r/s,r+=i[(o+1+e)%t]-i[((o-e)%t+t)%t];return n}function f1(i,e,t){let n=i.length,s=new Float64Array(n),r=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,h=i[l]-i[c],u=e[l]-e[c],f=Math.hypot(h,u)||1;s[a]=h/f,r[a]=u/f}let o=new Float64Array(n);for(let a=0;a<n;a++){let c=(a-1+n)%n,l=(a+1)%n,h=(s[l]-s[c])/(2*t),u=(r[l]-r[c])/(2*t);o[a]=s[a]*u-r[a]*h}return o}function d1(i,e){let t=i.length;for(let n=0;n<50;n++){let s=!1;for(let r=2*t-1;r>=0;r--){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[a]*i[a]+2*i1*e);i[o]>c+1e-9&&(i[o]=c,s=!0)}for(let r=0;r<2*t;r++){let o=r%t,a=(o+1)%t,c=Math.sqrt(i[o]*i[o]+2*s1*e);i[a]>c+1e-9&&(i[a]=c,s=!0)}if(!s)break}}function Bp(i){let e=i.length,t=-1;for(let r=0;r<e;r++)if(i[r]!==i[(r-1+e)%e]){t=r;break}if(t<0)return i[0]!==0?[{start:0,len:e,key:i[0]}]:[];let n=[],s=null;for(let r=0;r<e;r++){let o=(t+r)%e,a=i[o];s&&a===s.key?s.len++:(s&&s.key!==0&&n.push(s),s={start:o,len:1,key:a})}return s&&s.key!==0&&n.push(s),n}function kp(i,e){let t=i.length,n=0;for(let s=0;s<t;s++){let r=i[s].vmax,o=i[(s+1)%t].vmax;n+=e/Math.max(1,.5*(r+o))}return n}function _h(i,e){let t=i.length,n=0,s=0,r=new Int8Array(t),o=new Int8Array(t);for(let l=0;l<t;l++){let h=i[l].curv,u=Math.abs(h);u>n&&(n=u);let f=Math.abs(i[l].slope);f>s&&(s=f),r[l]=h>Pp?1:h<-Pp?-1:0,o[l]=u<xh?1:0}let a=0;for(let l of Bp(r))l.len*e>=t1&&a++;let c={start:0,len:0};for(let l of Bp(o))l.key===1&&l.len>c.len&&(c=l);return{minRadius:n>0?1/n:1/0,maxSlope:s,corners:a,longestStraight:c.len*e,longestStraightStart:c.start}}function p1(i,e){let t=i.length,n=dh,s=(l,h)=>(l+4096)*8192+(h+4096),r=new Map,o=new Array(t);for(let l=0;l<t;l++){let h=Math.floor(i[l].x/n),u=Math.floor(i[l].z/n);o[l]=[h,u];let f=s(h,u),p=r.get(f);p||(p=[],r.set(f,p)),p.push(l)}let a=0,c=dh*dh;for(let l=0;l<t;l++){let[h,u]=o[l];for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let x=r.get(s(h+f,u+p));if(x)for(let _ of x){if(_<=l)continue;let m=Math.abs(l-_);if(Math.min(m,t-m)*e<=e1)continue;let y=i[l].x-i[_].x,v=i[l].z-i[_].z;y*y+v*v<c&&a++}}}return a}function m1(i){let e=c1(i),t=u1(e,160),{xs:n,zs:s,count:r,step:o}=h1(t),a=[[8,12],[4,7],[2,4],[1,2]],c=[1,2,4,7].map((M,w)=>({k:M,a:i.range(a[w][0],a[w][1]),p:i.range(0,vc)})),l=new Float64Array(r),h=new Float64Array(r),u=new Float64Array(r);for(let M=0;M<r;M++){let w=(M-1+r)%r,b=(M+1)%r,S=n[b]-n[w],R=s[b]-s[w];u[M]=Math.hypot(S,R)||1e-9,l[M]=S/u[M],h[M]=R/u[M]}let f=new Float64Array(r),p=new Float64Array(r),x=1;for(let M=0;M<40;M++){for(let b=0;b<r;b++){let S=0;for(let R of c)S+=R.a*x*Math.sin(vc*R.k*b/r+R.p);f[b]=JM+S}let w=0;for(let b=0;b<r;b++){let S=(b-1+r)%r,R=(b+1)%r;p[b]=(f[R]-f[S])/u[b],Math.abs(p[b])>w&&(w=Math.abs(p[b]))}if(w<=QM)break;x*=.9}let _=new Float64Array(r),m=new Float64Array(r),d=new Float64Array(r);for(let M=0;M<r;M++){let w=(M-1+r)%r,b=(M+1)%r,S=n[b]-n[w],R=f[b]-f[w],F=s[b]-s[w],B=Math.hypot(S,R,F)||1e-9;_[M]=S/B,m[M]=R/B,d[M]=F/B}let y=f1(n,s,o),v=Op(y,2),g=new Float64Array(r);for(let M=0;M<r;M++){let w=gh((Math.abs(v[M])-.016666666666666666)/.023333333333333334,0,1);g[M]=ph+(Fp-ph)*w}let T=Op(g,10);for(let M=0;M<r;M++)T[M]=gh(T[M],ph,Fp);let E=new Float64Array(r);for(let M=0;M<r;M++)E[M]=Math.min(o1,Math.sqrt(r1/Math.max(Math.abs(v[M]),1e-9)));return d1(E,o),{xs:n,ys:f,zs:s,count:r,step:o,fx:l,fz:h,tx:_,ty:m,tz:d,slope:p,curv:v,width:T,vmax:E}}function g1(i){let{xs:e,ys:t,zs:n,count:s,step:r,fx:o,fz:a,tx:c,ty:l,tz:h,slope:u,curv:f,width:p,vmax:x}=i,_=[];for(let v=0;v<s;v++)_.push({curv:f[v],slope:u[v],vmax:x[v],x:e[v],z:n[v]});let m=_h(_,r),d=m.longestStraight>0?(m.longestStraightStart+Math.round(n1/r))%s:0,y=new Array(s);for(let v=0;v<s;v++){let g=(d+v)%s;y[v]={s:v*r,x:e[g],y:t[g],z:n[g],tx:c[g],ty:l[g],tz:h[g],rx:-a[g],rz:o[g],width:p[g],curv:f[g],vmax:x[g],slope:u[g]}}return y}function x1(i,e,t){let n=i.length,s=new Int32Array(n+1);for(let m=0;m<n;m++)s[m+1]=s[m]+(Math.abs(i[m].curv)>=xh?1:0);let r=(m,d)=>s[d+1]-s[m]===0,o=Math.ceil(Mc/e),a=Math.floor((n*e-Mc)/e),c=Math.ceil(zp/e),l=[],h=[],u=(m,d)=>l.every(([y,v])=>d<y||m>v),f=(m,d,y,v)=>{for(let g=0;g<400;g++){let T=Math.round(t.range(m,d)/e),E=Math.ceil(y/e),M=T+E;if(a-M<o)return null;let w=t.int(o,a-M),b=w+T;if(v&&!r(w,b+E))continue;let S=w-c,R=b+E+c;if(!(S<0||R>n-1||!u(S,R)))return l.push([S,R]),{a:w,b}}return null},p=t.int(2,3);for(let m=0;m<p;m++){let d=f(12,16,mh,!0);d&&h.push({type:"ramp",s0:d.a*e,s1:d.b*e,height:t.range(1.2,2.2)})}let x=t.int(2,3);for(let m=0;m<x;m++){let d=f(10,10,0,!1);d&&h.push({type:"boost",s0:d.a*e,s1:d.b*e})}let _=t.int(1,2);for(let m=0;m<_;m++){let d=f(60,140,0,!1);d&&h.push({type:"tunnel",s0:d.a*e,s1:d.b*e})}return h.sort((m,d)=>m.s0-d.s0),h}function _1(i,e,t){let n=m1(i),s=g1(n),{count:r,step:o}=n,a=r*o,c=x1(s,o,i),l=_h(s,o),h=1/0,u=-1/0,f=1/0,p=-1/0;for(let x of s)x.x<h&&(h=x.x),x.x>u&&(u=x.x),x.z<f&&(f=x.z),x.z>p&&(p=x.z);return{seed:e,attempts:t,length:a,step:o,count:r,pts:s,features:c,bounds:{minX:h,maxX:u,minZ:f,maxZ:p},stats:{minRadius:l.minRadius,maxSlope:l.maxSlope,lapTimeEstimate:kp(s,o),corners:l.corners}}}function y1(i){let e=[],{pts:t,count:n,step:s,length:r}=i;if(!Array.isArray(t)||t.length!==n||!(n>0)||!(s>0))return{ok:!1,reasons:["structure invalide"]};r>=wp&&r<=Ap||e.push(`longueur ${r.toFixed(0)} m hors [${wp}, ${Ap}]`),Math.abs(n*s-r)>1e-6&&e.push("count * step != length");let o=1/0,a=-1/0;for(let d of t)d.y<o&&(o=d.y),d.y>a&&(a=d.y);(o<Rp||a>Cp)&&e.push(`altitude ${o.toFixed(1)}..${a.toFixed(1)} hors [${Rp}, ${Cp}]`);let c=_h(t,s);c.minRadius>=Ip||e.push(`rayon min ${c.minRadius.toFixed(1)} m < ${Ip}`),c.maxSlope>jM&&e.push(`pente max ${(c.maxSlope*100).toFixed(1)} % > 12 %`),c.corners<Lp&&e.push(`${c.corners} virages < ${Lp}`),c.longestStraight<Dp&&e.push(`ligne droite max ${c.longestStraight.toFixed(0)} m < ${Dp}`);let l=p1(t,s);l>0&&e.push(`${l} paires d'\xE9chantillons trop proches (croisement ou rapprochement)`);let h=kp(t,s);h>=Np&&h<=Up||e.push(`temps au tour ${h.toFixed(1)} s hors [${Np}, ${Up}]`);let u=i.features||[],f=u.filter(d=>d.type==="ramp").length,p=u.filter(d=>d.type==="boost").length,x=u.filter(d=>d.type==="tunnel").length;f<2&&e.push(`${f} tremplin(s) < 2`),p<2&&e.push(`${p} boost(s) < 2`),x<1&&e.push("aucun tunnel");let _=d=>Math.round((d%r+r)%r/s)%n;for(let d of u)if((d.s0<Mc||d.s1>r-Mc)&&e.push(`feature ${d.type} trop proche du d\xE9part`),d.type==="ramp"){let y=d.s1-d.s0;(y<11.5||y>16.5)&&e.push(`tremplin de ${y.toFixed(1)} m hors 12..16`),d.height>=1.2&&d.height<=2.2||e.push("hauteur de tremplin hors 1.2..2.2");let v=_(d.s0),g=_(d.s1+mh),T=!0;for(let E=v;E!==(g+1)%n;E=(E+1)%n)if(Math.abs(t[E].curv)>=xh){T=!1;break}T||e.push("tremplin non situ\xE9 sur une ligne droite avec r\xE9ception")}let m=u.slice().sort((d,y)=>d.s0-y.s0);for(let d=0;d+1<m.length;d++){let y=m[d],v=m[d+1],g=y.s1+(y.type==="ramp"?mh:0);v.s0<g+zp-1e-6&&e.push(`features ${y.type} et ${v.type} se chevauchent`)}return{ok:e.length===0,reasons:e}}function Hp(i,e={}){let t=e.maxAttempts??a1,n=Jn(i),s=null,r=1/0;for(let o=0;o<t;o++){let a=n.fork("try"+o),c=_1(a,i,o+1),l=y1(c);if(l.ok)return c;l.reasons.length<r&&(r=l.reasons.length,s=c)}return s.attempts=t,s}function yh(i,e){let t=i.length;if(i.open)return e<0?0:Math.min(e,(i.count-1.001)*i.step);let n=e%t;return n<0&&(n+=t),n>=t&&(n-=t),n}var v1=(i,e)=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function Zi(i,e,t={}){let n=i.count,s=i.step,r=yh(i,e),o=r/s,a=Math.floor(o),c=a%n,l=(c+1)%n,h=o-a,u=i.pts[c],f=i.pts[l],p=(g,T)=>g+(T-g)*h,x=p(u.tx,f.tx),_=p(u.ty,f.ty),m=p(u.tz,f.tz),d=Math.hypot(x,_,m)||1,[y,v]=v1(p(u.rx,f.rx),p(u.rz,f.rz));if(t.s=r,t.x=p(u.x,f.x),t.y=p(u.y,f.y),t.z=p(u.z,f.z),i.open&&e!==r){let g=e-r;t.x+=x/d*g,t.z+=m/d*g}return t.tx=x/d,t.ty=_/d,t.tz=m/d,t.rx=y,t.rz=v,t.width=p(u.width,f.width),t.curv=p(u.curv,f.curv),t.vmax=p(u.vmax,f.vmax),t.slope=p(u.slope,f.slope),t.i=c,t}var Yi={};function Ft(i,e,t,n={}){return Zi(i,e,Yi),n.x=Yi.x+t*Yi.rx,n.y=Yi.y,n.z=Yi.z+t*Yi.rz,n.heading=Math.atan2(Yi.tx,Yi.tz),n.slope=Yi.slope,n}function Vp(i,e){let t=yh(i,e);for(let n of i.features)if(n.type==="ramp"&&t>=n.s0&&t<n.s1)return n.height*(t-n.s0)/(n.s1-n.s0);return 0}function bs(i,e,t){let n=yh(i,e);for(let s of i.features)if((t===void 0||s.type===t)&&n>=s.s0&&n<=s.s1)return s;return null}var b1=1/30,Gp=.5,Wp=.4,E1=.6,Yo=[.2,.36,.52,.68,.84],Xp=Yo.length+1,T1=.2,w1=.1,A1=.34,R1=4,C1=4,I1=.2,P1=4.9,L1=5.5,D1=5,N1=6,U1=1.8,F1=.03,O1=1.6,B1=.5,z1=2,k1=.785,H1=4.7,V1=2.5,jr=.196,G1=.098,W1=.5,X1=.27,q1=16,Y1=11,Z1=.72,K1=5,$1=.5,qp=.35,J1=.42,j1=60,Q1=.3,eS=5,tS=1.6,nS=3,iS=14,sS=.004,rS=1.2,oS=2,aS=.5,cS=22,Yp=.25,lS=6,uS=1.8,Zp=1,hS=["s","d","yaw","vdir","speed","yRel","vy","lean","steer","pitch","compress","drift","boostT","wheelSpin","stun","rpm","wheelie","_g","_vyG","_shiftT","_t","_pitchF","_dive","_turnF","_springA","_springP","_wallT","_apex"],Wt=(i,e,t)=>i<e?e:i>t?t:i,Ei=(i,e=0)=>Number.isFinite(i)?i:e,fS=(i,e)=>{let t=i%e;return t<0?t+e:t},dS=(i,e,t)=>i<e?Math.min(e,i+t):Math.max(e,i-t);function Kp({s:i=0,d:e=0}={}){return{s:i,d:e,yaw:0,vdir:0,speed:0,yRel:0,vy:0,airborne:!1,lean:0,steer:0,pitch:0,compress:0,drift:0,boostT:0,boostCharges:$s.boostCharges,onRoad:!0,wheelSpin:0,stun:0,gear:1,rpm:0,wheelie:0,events:[],_init:!1,_g:0,_vyG:0,_prevBoost:!1,_padKey:null,_shiftT:0,_wallHit:!1,_t:0,_turnF:0,_pitchF:0,_dive:0,_springA:0,_springP:0,_wallT:0,_apex:0}}function $p(i,e,t,n,s,r,o){let a=i.events,c=e||{},l=s||{},h=!!c.boost&&!i._prevBoost;if(i._prevBoost=!!c.boost,r=Number.isFinite(r)&&r>0?Math.min(r,b1):0,i._init||(i._init=!0,i.boostCharges=n.boostCharges),r===0)return i;let u=t.length,f=n.maxSpeed,p=Wt(Ei(c.throttle),0,1),x=Wt(Ei(c.brake),0,1),_=Wt(Ei(c.steer),-1,1),m=i.stun>0;m&&(i.stun=Math.max(0,i.stun-r),p=0,x=0,_=0);let d=Ve=>t.open?Ve:fS(Ve,u),y=d(i.s),v=Zi(t,y),g=!i.airborne;if(h&&!m&&i.boostCharges>0&&i.boostT<=0&&(i.boostCharges-=1,i.boostT=n.boostDuration,a.push("boost")),g){let Ve=bs(t,y,"boost");if(Ve){let Se=Math.floor(i.s/u)+":"+Ve.s0;i._padKey!==Se&&(i._padKey=Se,i.boostT=Math.max(i.boostT,rS),a.push("pad"))}}x>.5&&i.boostT>0&&(i.boostT=0);let T=i.boostT>0;T&&(p=1);let E=g&&!m&&Math.abs(_)>.3&&i.speed>oS&&(!!c.drift||x>.3),M=i.speed,w=M/f;i._shiftT>0?i._shiftT-=r:i.gear<Xp&&w>Yo[i.gear-1]&&!(x>0&&M>3)?(i.gear+=1,i._shiftT=T1):i.gear>1&&M<Yo[i.gear-2]*f-2&&(i.gear-=1,i._shiftT=w1);let b=i.gear>1?Yo[i.gear-2]:0,S=i.gear<Xp?Yo[i.gear-1]:1;i.rpm=Wt(.35+.65*((w-b)/(S-b)),.1,1.05);let R=g&&Math.abs(i.d)>v.width*.5,F=E1*f,B=R?F:f*(T?n.boostPower:1),L=R1/(f*f),V=0;if(g){if(R&&M>F&&(V-=2*n.offroadDrag*(M-F)),p>0&&i._shiftT<=0&&M<B){let Ve=A1*f,Se=.8+.2*Math.sin(Math.PI*Wt(i.rpm,0,1)),K=n.accel*p*Se*Math.min(1,Ve/Math.max(M,1));T&&(K*=z1),V+=Math.min(K,n.accel*1.15*(T?1.3:1))}x>0&&(V-=n.brake*x*(E?.35:1)),V-=M*(.2-.03*(i.gear-1))*(1-p),V-=I1,V-=P1*v.slope,V-=L*M*M}else V-=L*C1*M*M;i.speed=Math.max(0,M+V*r),g&&i.speed>B&&!R&&(i.speed=Math.max(B,i.speed-10*r));let H=Wt(i.speed/f,0,1),j=1+(n.wetGrip-1)*pS(l),z=Wt(n.grip*Ei(l.grip,1)*j,.05,1.5),te=i.speed<.6?0:_,ge=Math.abs(te)>Math.abs(i.steer)||te*i.steer<0?L1:D1*Wt(Math.abs(V)/6,1,2.5);i.steer=dS(i.steer,te,ge*r);let Ee=i.yaw-i.vdir,de=i.speed*Math.sin(Ee),ne=Math.min(O1,1+F1*Math.abs(de));E&&(ne=n.driftBonus),T&&g&&(ne*=B1);let $=1-(1-n.steerHighSpeed)*H,ee=Math.min(1,i.speed/6),P=g?1:n.airControl,X=i.steer*n.steerRate*$*ne*ee*P*(.6+.4*Math.min(1,z)),q=Math.min(i.speed/eS,j1*Math.min(1.2,z)*(E?1.5:1)/Math.max(i.speed,1)),se=Wt(X,-q,q);g&&Math.abs(_)<=.15&&(i.yaw*=Math.exp(-tS*r)),o&&n.steerNoise>0&&!m&&g&&(i.yaw+=n.steerNoise*p*(o.next()*2-1)*r);let ye=Math.max(.3,1-i.d*v.curv),Re=i.speed*Math.cos(i.vdir)/ye*r,Pe=i.speed*Math.sin(i.vdir)*r,G=v.curv*Re,We=i.vdir,He=G*(g?1-Q1:1);if(i.yaw+=se*r-He,i.vdir-=He,g){let Ve=(E?U1:N1)*z,Se=1-Math.exp(-Ve*r);i.vdir+=(i.yaw-i.vdir)*Se,i.speed*=1-(1-Math.cos(Ee))*Se}else{let Ve=3*Wt(n.airStability,0,2);i.yaw+=(i.vdir-i.yaw)*(1-Math.exp(-Ve*r)),n.airStability<1&&(i.yaw+=(i.yaw>=i.vdir?1:-1)*(1-n.airStability)*.6*r)}i.vdir=Wt(Ei(i.vdir),-Gp,Gp),i.yaw=Wt(Ei(i.yaw),i.vdir-Wp,i.vdir+Wp),i._t+=r,Pe+=Ei(l.wind)*(1.2*Math.sin(i._t*.37)+.4*Math.sin(i._t*1.13+1))*r*(g?1:.5),i.s+=Re,i.d+=Pe;let ze=g?Wt((Math.abs(i.yaw-i.vdir)-.04)/.22,0,1)*ee:0;i.drift+=(ze-i.drift)*Math.min(1,8*r);let De=Zi(t,d(i.s));i.onRoad=Math.abs(i.d)<=De.width*.5;let qe=De.width*.5+6-.4;if(Math.abs(i.d)>=qe-.02){let Ve=i.d>=0?1:-1,Se=i.vdir*Ve>0,K=Se?Math.abs(Math.sin(i.vdir)):0;if(i.d=Ve*qe,Se&&(i.vdir=-Ve*.04,i.yaw=i.yaw*.4-Ve*.04),i._wallHit)i.speed*=Math.max(0,1-.8*r);else{let Me=i.boostT>0,ve=o?o.next():1;Me&&i.speed>lS||K>aS&&i.speed>cS&&ve<Yp||i.airborne&&ve<Yp?(i.speed*=.3,i.stun=uS,a.push("crash")):i.speed*=1-Wt(n.wallLoss*1.3*(.5+K),0,.9),a.push("wall")}i.boostT=0,i._wallT=qp,i._wallHit=!0}else i._wallHit=!1;i.stun>0&&g&&(i.speed*=Math.exp(-2.2*r)),y=d(i.s);let Ne=Ei(Vp(t,y)),N=(Ne-i._g)/r;if(i.airborne||(Ne<i.yRel-.05?(i.airborne=!0,i._apex=i.yRel-Ne,i.vy=i._vyG,i.vy>nS&&a.push("jump")):(i.yRel=Ne,i.vy=Wt(N,-80,80),i._vyG=i.vy)),i.airborne&&(i.vy-=26*r,i.yRel+=i.vy*r,i._apex=Math.max(i._apex,i.yRel-Ne),i.vy<=0&&i.yRel<=Ne)){let Ve=-i.vy,Se=Math.abs(i.yaw-i.vdir),K=Ve>iS/Math.max(.3,n.landing)||Se>.35;i.airborne=!1,i.yRel=Ne,i.vy=0,i._vyG=0,i._springA=Wt(i._springA+.35*i._apex+.03*Ve,0,1),i._springP=Math.PI/2;let Me=sS*Ve+(K?.08:0);i.speed*=1-Wt(Me/Math.max(.2,n.landing),0,.45),a.push(K?"hardLand":"land")}i._g=Ne,g=!i.airborne,i.speed=Wt(Ei(i.speed),0,1.5*f),i._wallT=Math.max(0,i._wallT-r);let A=Math.max(0,1-i.speed/4,i._wallT/qp),J=g?(G+(i.vdir-We))/r:0;i._turnF+=(J-i._turnF)*Math.min(1,6*r);let me=i.speed*i._turnF,xe=Math.sign(me)*Math.max(0,Math.abs(me)-K1),ue=i.steer*J1*Math.min(1,i.speed/10),Ce=Wt((1-A)*(Math.atan(xe/Y1)*Z1+$1*(i.yaw-i.vdir)+ue),-Zp,Zp);i.stun>0&&(Ce=(i.lean>=0?1:-1)*1.35),i.lean+=(Ce-i.lean)*Math.min(1,9*r),i._dive=x>.1&&g?Math.min(jr,i._dive+jr*r):Math.max(0,i._dive-.25*r);let Fe=Wt(V*G1,-jr,jr)-i._dive;i._pitchF+=(Fe-i._pitchF)*Math.min(1,r/W1);let Oe=Wt(Fe-i._pitchF,-jr,jr);i.wheelie=i.boostT>0&&g?Math.min(Math.PI/2,i.wheelie+H1*r):Math.max(0,i.wheelie-V1*r),Oe+=Math.sin(i.wheelie)*k1,g||(Oe=Math.atan2(i.vy,Math.max(8,i.speed))),i.pitch=Oe,i._springA*=Math.exp(-r/X1),i._springP+=q1*r,i.compress=Math.sin(i._springP)*i._springA,i.wheelSpin+=i.speed/.32*r,i.boostT=Math.max(0,i.boostT-r);for(let Ve of hS)Number.isFinite(i[Ve])||(i[Ve]=0);return i.speed<0&&(i.speed=0),i}function pS(i){return Wt(Ei(i.wet),0,1)}var mS=8,gS=25,xS=150,_S=3,yS=35,vS=2,MS=14,SS=30,bS=12,ES=2,TS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},an=(i,e,t)=>i<e?e:i>t?t:i,Sc=(i,e,t)=>i+(e-i)*t,wS=(i,e)=>i-e*Math.round(i/e);function AS(i,e){let t=i.length,n=i.features,s=null,r=1/0;for(let o=0;o<n.length;o++){let a=n[o];if(a.type!=="ramp")continue;let c=((a.s0-e)%t+t)%t;c<r&&(r=c,s=a)}return s?{f:s,dist:r}:null}function RS(i,e){for(let t=0;t<=xS;t+=gS)if(Math.abs(Zi(i,e+t).curv)>.004)return!1;return!0}function bc(i,e){let t=i||TS,n={persona:t,rng:e,skill:an(t.skill??.5,0,1),aggression:an(t.aggression??.5,0,1),jumpSkill:an(t.jumpSkill??.5,0,1),lineSkill:an(t.lineSkill??.5,0,1),playerGap:0,dGoal:0,wander:0,wanderGoal:0,wanderT:0,mistakeT:0,mistakeSide:1,nextMistake:0,boostLock:0,input:{throttle:0,brake:0,steer:0,boost:!1,drift:!1}};return n.nextMistake=e.range(8,20)+(1-n.skill)*15,n}function Ec(i,e,t,n,s,r){let o=i.input,a=t.length,c=i.rng,l=i.aggression,h=i.skill,u=i.jumpSkill,f=e.speed,p=e.s,x=Zi(t,p),_=Math.max(.8,x.width*.5-1.2);i.wanderT-=r,i.wanderT<=0&&(i.wanderT=c.range(.9,1.8),i.wanderGoal=c.range(-1,1)*(1-i.lineSkill)*.5*_),i.wander+=(i.wanderGoal-i.wander)*Math.min(1,r*1.5),i.nextMistake-=r,i.mistakeT-=r,i.mistakeT<=0&&i.nextMistake<=0&&(i.mistakeT=c.range(.5,1.2),i.mistakeSide=c.sign(),i.nextMistake=c.range(8,20)+(1-h)*15);let m=i.mistakeT>0;i.boostLock-=r;let d=Sc(1.4,.6,l),y=Math.max(20,f*d),v=Math.max(y,an(f*1.6+20,40,110)),g=1/0,T=0,E=0,M=0;for(let $=0;$<=v;$+=mS){let ee=$===0?x:Zi(t,p+$);if($<=y&&ee.vmax<g&&(g=ee.vmax),$>=8){let P=Math.abs(ee.curv);P>T&&(T=P,E=Math.sign(ee.curv),M=$)}}let w=an(T/.02,0,1),b=0;if(E!==0&&w>0){let $=an((M-10)/30,0,1),ee=Sc(1,-.8,$);b=E*_*i.lineSkill*w*ee}b+=i.wander,m&&(b+=i.mistakeSide*1.2);let S=AS(t,p),R=S?S.dist:1/0,F=bs(t,p,"ramp")!==null,B=R<SS;(F||B)&&u>.5&&(b*=1-an((u-.4)/.6,0,1));let L=!F&&R>=_S&&R<=yS&&u<.5;for(let $=0;$<s.length;$++){let ee=s[$];if(ee===e)continue;let P=wS(ee.s-p,a);if(P<=0||P>=bS)continue;let X=ee.d-e.d;if(!(Math.abs(X)>=ES)){if(l>.55){let q=X!==0?Math.sign(X):e.d<0?1:-1;b+=q*(.6+.8*l)}else{let q=X!==0?-Math.sign(X):e.d<0?1:-1;Math.abs(e.d+q*2)>_&&(q=-q),b+=q*2*(1-l)}break}}b=an(b,-_,_),i.dGoal+=(b-i.dGoal)*Math.min(1,r*2.5);let V=an(i.dGoal,-_,_),H;if(e.airborne)H=an(-e.yaw*2,-.3,.3);else{let $=V-e.d,ee=an($*.12,-.25,.25),P=Zi(t,p+an(f*.25,4,20)).curv,X=n.steerRate*Sc(1,n.steerHighSpeed,an(f/n.maxSpeed,0,1));H=(P*f+(ee-e.yaw)*3)/X}H=an(H,-1,1),Number.isFinite(H)||(H=0);let j=an(-i.playerGap/150,-1,1)*.06,z=Sc(.86,1,h)+l*.04;m&&(z*=.85);let te=g*z*(1+j),fe=n.maxSpeed,ge=!1;if(!e.airborne&&e.boostCharges>0&&e.boostT<=0&&i.boostLock<=0){if(u>.6&&R>=vS&&R<=MS)ge=!0;else if(f>20&&RS(t,p)){let $=i.playerGap<-20,ee=.25+.5*l+($?.3:0);ge=c.chance(ee)}i.boostLock=ge?1:.4}o.boost=ge;let Ee=T<.003;if(e.boostT>0){let $=fe*n.boostPower;te=Ee?$*.98:Math.min(te,$)}else te=Math.min(te,fe);let de=0,ne=0;if(e.airborne)de=1;else{let $=te-f;$>-1.5?de=L?0:an(.5+$*.25,0,1):ne=an((-$-1.5)*.15,0,1)}return o.throttle=de,o.brake=ne,o.steer=H,o.drift=!e.airborne&&l>.75&&T>.025&&f>40&&M<20,o}var CS=7,IS=3,PS=.3,LS=3,DS=25,NS=1.5,US=1.2,FS=1.8,Jp=.9,OS={skill:.5,aggression:.5,jumpSkill:.5,lineSkill:.5},Tc=(i,e,t)=>i<e?e:i>t?t:i,vh=(i,e)=>i-e*Math.round(i/e);function Mh(){return{throttle:0,brake:0,steer:0,boost:!1,drift:!1}}function jp({track:i,laps:e,env:t,rng:n,riders:s,final:r=!0,carry:o=null}){let a=i.length,c=e*a,h=s.filter(g=>!g.isPlayer).concat(s.filter(g=>g.isPlayer)).map((g,T)=>{let E=Math.floor(T/2),M=T%2,w=-CS*(E+1),b=M===0?-2.5:2.5,S=o?.states.get(g.id),R=S||Kp({s:w,d:b});return{id:g.id,name:g.name,color:g.color,accent:g.accent,isPlayer:!!g.isPlayer,stats:g.stats,persona:g.persona||null,state:R,ai:g.isPlayer?null:bc(g.persona||OS,n.fork("ai:"+g.id)),rng:n.fork("rider:"+g.id),others:null,input:Mh(),coast:Mh(),frameEvents:[],startS:S?S.s:w,lap:1,lapTimes:[],bestLap:null,lapStartT:0,finished:!1,finishTime:null,position:T+1}});for(let g of h)g.others=h.filter(T=>T!==g).map(T=>T.state);let u=h.find(g=>g.isPlayer)||null,f=h.slice(),p=h.length,x=new Uint8Array(p*p);function _(g,T,E,M,w){if(E===T)return;let b=Math.floor(T/a),S=Math.min(Math.floor(E/a),e);for(let R=Math.max(b+1,1);R<=S;R++){let F=Tc((R*a-T)/(E-T),0,1),B=M+F*w,L=B-g.lapStartT;g.lapTimes.push(L),(g.bestLap===null||L<g.bestLap)&&(g.bestLap=L),g.lapStartT=B}if(r&&E>=c){let R=Tc((c-T)/(E-T),0,1);g.finished=!0,g.finishTime=M+R*w}}function m(g){let T=g.state,E=g.coast;return E.throttle=PS,E.brake=0,E.steer=Tc(-T.yaw*2-T.d*.05,-.5,.5),E.boost=!1,E.drift=!1,E}function d(g,T){let E=g.state;for(let M=0;M<p;M++){let w=h[M];if(w===g)continue;let b=vh(w.state.s-E.s,a);if(b>LS&&b<DS&&Math.abs(w.state.d-E.d)<NS){E.speed=Math.min(E.speed+US*g.stats.slipstream*T,g.stats.maxSpeed*1.05);return}}}function y(){for(let g=0;g<p;g++)for(let T=g+1;T<p;T++){let E=h[g],M=h[T],w=vh(M.state.s-E.state.s,a),b=M.state.d-E.state.d,S=g*p+T;if(Math.abs(w)<FS&&Math.abs(b)<Jp){let R=b!==0?Math.sign(b):n.sign(),F=(Jp-Math.abs(b))/2+.05;if(E.state.d-=R*F,M.state.d+=R*F,!x[S]){x[S]=1;let B=(E.state.speed+M.state.speed)/2;E.state.speed+=(B-E.state.speed)*.2,M.state.speed+=(B-M.state.speed)*.2;let L=w>=0?E:M;L.state.speed*=.96}}else x[S]=0}}let v={phase:o?"racing":"countdown",countdown:o?0:IS,time:o?o.time:0,final:r,laps:e,track:i,riders:h,player:u,update(g,T){if(v.phase==="countdown"){v.countdown=Math.max(0,v.countdown-g),v.countdown<=0&&(v.phase="racing");return}let E=v.time;v.time+=g;for(let M=0;M<p;M++){let w=h[M];w.finished?w.input=m(w):w.isPlayer?w.input=T||Mh():(u&&(w.ai.playerGap=vh(w.state.s-u.state.s,a)),w.input=Ec(w.ai,w.state,i,w.stats,w.others,g))}for(let M=0;M<p;M++){let w=h[M],b=w.state,S=w.finished,R=b.s;if($p(b,w.input,i,w.stats,t,g,w.rng),S||(_(w,R,b.s,E,g),w.finished||d(w,g)),w.lap=w.finished?e:Tc(Math.floor(b.s/a)+1,1,e),!w.isPlayer){w.frameEvents.length=0;for(let F=0;F<b.events.length;F++)w.frameEvents.push(b.events[F]);b.events.length=0}}y(),f.sort((M,w)=>M.finished!==w.finished?M.finished?-1:1:M.finished?M.finishTime-w.finishTime:w.state.s-M.state.s);for(let M=0;M<p;M++)f[M].position=M+1;r?(u?u.finished:h.every(M=>M.finished))&&(v.phase="finished"):(u||f[0]).state.s>=a&&(v.phase="relay")},results(){let g=h.map(T=>{let E;if(T.finished)E=T.finishTime;else{let M=Math.max(0,T.state.s-T.startS),w=v.time>1?Math.max(5,M/v.time):40,b=Math.max(0,c-T.state.s);E=v.time+b/w}return{id:T.id,name:T.name,position:T.position,time:E,bestLap:T.bestLap,isPlayer:T.isPlayer}});return g.sort((T,E)=>T.position-E.position),g}};return v}var Ih={};H0(Ih,{PLAYER:()=>Ti,RIVALS:()=>Ac,UPGRADES:()=>Js,applyUpgrade:()=>Eh,computeStats:()=>Qr,createRun:()=>Rc,dailySeed:()=>Ic,isRunOver:()=>Zo,loadMeta:()=>Ah,offerUpgrades:()=>bh,randomSeed:()=>zS,recordResult:()=>Th,runRiders:()=>Cc,saveMeta:()=>Rh,standings:()=>eo,updateMeta:()=>Ch});var Qp="polygon-rush-meta",BS=Object.keys(Ss).filter(i=>i!=="sicily"),Ti={id:"player",name:"Vous",color:14885934,accent:2312392},Js=[{id:"turbo",name:"Turbo instable",tagline:"Acc\xE9l\xE9ration brutale, pilotage nerveux.",pro:"Acc\xE9l\xE9ration \xD71,35 et vitesse de pointe \xD71,04.",con:"Direction bruit\xE9e (+0,35 rad/s) et braquage \xD70,9 \xE0 haute vitesse.",icon:"\u26A1",maxStacks:1,apply(i){i.accel*=1.35,i.maxSpeed*=1.04,i.steerNoise+=.35,i.steerHighSpeed*=.9}},{id:"rally",name:"Suspension rallye",tagline:"Les r\xE9ceptions passent mieux, la vitesse de pointe trinque.",pro:"R\xE9ception \xD71,8 et tra\xEEn\xE9e hors-piste \xD70,6.",con:"Vitesse de pointe \xD70,95.",icon:"\u{1F3D4}",maxStacks:2,apply(i){i.landing*=1.8,i.offroadDrag*=.6,i.maxSpeed*=.95}},{id:"aero",name:"A\xE9rodynamique",tagline:"Plus de vitesse, moins de tenue en l'air.",pro:"Vitesse de pointe \xD71,07.",con:"Stabilit\xE9 en saut \xD70,6 et contr\xF4le a\xE9rien \xD70,7.",icon:"\u{1F4A8}",maxStacks:2,apply(i){i.maxSpeed*=1.07,i.airStability*=.6,i.airControl*=.7}},{id:"rain",name:"Pneus pluie",tagline:"Accroche imbattable sous l'averse, sec moins mordant.",pro:"Adh\xE9rence mouill\xE9e \xD71,35 (\u2248 1,05).",con:"Adh\xE9rence s\xE8che \xD70,95.",icon:"\u{1F327}",maxStacks:1,apply(i){i.wetGrip*=1.35,i.grip*=.95}},{id:"nitro",name:"Nitro double",tagline:"Deux charges de plus, des boosts plus courts.",pro:"+2 charges de boost par course.",con:"Dur\xE9e de boost \xD70,75.",icon:"\u{1F680}",maxStacks:2,apply(i){i.boostCharges+=2,i.boostDuration*=.75}},{id:"brakes",name:"Freins c\xE9ramique",tagline:"Freinage mordant, direction plus vive, reprise plus lente.",pro:"Freinage \xD71,4 et braquage \xD71,08.",con:"Acc\xE9l\xE9ration \xD70,95.",icon:"\u{1F6D1}",maxStacks:2,apply(i){i.brake*=1.4,i.steerRate*=1.08,i.accel*=.95}},{id:"gyro",name:"Gyroscope",tagline:"Stabilisateur de vol, adh\xE9rence en retrait.",pro:"Contr\xF4le a\xE9rien \xD71,5 et stabilit\xE9 en l'air \xD71,25.",con:"Adh\xE9rence \xD70,9.",icon:"\u{1F300}",maxStacks:2,apply(i){i.airControl*=1.5,i.airStability*=1.25,i.grip*=.9}},{id:"slick",name:"Pneus slick",tagline:"Gomme tendre : accroche s\xE8che maximale, pluie interdite.",pro:"Adh\xE9rence s\xE8che \xD71,12.",con:"Adh\xE9rence mouill\xE9e \xD70,7 et braquage \xD70,95.",icon:"\u{1F3C1}",maxStacks:2,apply(i){i.grip*=1.12,i.wetGrip*=.7,i.steerRate*=.95}},{id:"carenage",name:"Car\xE9nage aspiration",tagline:"Profil fusel\xE9 : on file dans le sillage, on tourne moins vite.",pro:"Aspiration \xD71,6 dans le sillage des concurrents.",con:"Braquage \xD70,92.",icon:"\u{1F32C}",maxStacks:2,apply(i){i.slipstream*=1.6,i.steerRate*=.92}},{id:"blindage",name:"Blindage renforc\xE9",tagline:"Carrosserie en acier : les chocs co\xFBtent moins, la moto p\xE8se.",pro:"Perte de vitesse contre les glissi\xE8res \xD70,5.",con:"Acc\xE9l\xE9ration \xD70,92 et vitesse de pointe \xD70,97.",icon:"\u{1F6E1}",maxStacks:2,apply(i){i.wallLoss*=.5,i.accel*=.92,i.maxSpeed*=.97}}],Ac=[{id:"vortex",name:"Vortex Solenne",color:58879,accent:728366,skill:.8,aggression:.92,jumpSkill:.6,lineSkill:.5,style:"agressif",bio:"Freine tard, plonge dans les virages et ne l\xE2che jamais un pilote \xE0 la corde."},{id:"saltamonte",name:"Brigo Saltamonte",color:16766474,accent:1118481,skill:.76,aggression:.45,jumpSkill:.97,lineSkill:.5,style:"sauteur",bio:"Vole plus haut que tout le monde, atterrit quand il veut, parfois trop tard."},{id:"lumen",name:"Lumen Ardoise",color:8190976,accent:1714704,skill:.84,aggression:.15,jumpSkill:.55,lineSkill:.97,style:"trajectoire",bio:"Trace une ligne parfaite, ne prend jamais un bord et ne commet aucune faute."},{id:"aurelio",name:"Aurelio Temp\xEAte",color:16747520,accent:0,skill:.97,aggression:.7,jumpSkill:.85,lineSkill:.9,style:"r\xE9gulier",bio:"Le champion de la c\xF4te : rien \xE0 lui reprocher, et il le sait."},{id:"maree",name:"Ingrid Mar\xE9e",color:11544319,accent:16777215,skill:.88,aggression:.78,jumpSkill:.7,lineSkill:.6,style:"agressif",bio:"Pousse ses freins jusqu'\xE0 la limite et ressort des virages en coup de vent."},{id:"gaspard",name:"Gaspard Brume",color:1989631,accent:15790320,skill:.72,aggression:.35,jumpSkill:.4,lineSkill:.6,style:"r\xE9gulier",bio:"Discret, m\xE9tronome, il finit presque toujours dans les cinq premiers."},{id:"yuki",name:"Yuki Varan",color:50316,accent:8217,skill:.91,aggression:.5,jumpSkill:.8,lineSkill:.8,style:"r\xE9gulier",bio:"Rapide sur tous les terrains, sans point faible visible, et toujours souriant."}],em=[{name:"Coastal Rush",subtitle:"Route m\xE9diterran\xE9enne, grandes courbes et falaises"},{name:"Cliff Edge",subtitle:"Corniches \xE9troites et vent de face"},{name:"Harbor Drift",subtitle:"Quais glissants, embruns et virages en \xE9pingle"},{name:"Lighthouse Pass",subtitle:"Tunnels, ressauts et brouillard de phare"},{name:"The Final Run",subtitle:"Le champion vous attend"}],Sh=em.length;function tm(i){return Js.find(e=>e.id===i)||null}function nm(i,e){let t=0;for(let n of i.upgrades)n===e&&t++;return t}function Rc(i){let e=String(i),t=Jn(qo(e+"|run")),n=[];for(let o=0;o<Sh;o++)if(o===0)n.push("sunset");else if(o===Sh-1)n.push("rain");else{let a=n[o-1],c=BS.filter(l=>l!==a&&!(o===Sh-2&&l==="rain"));n.push(t.pick(c))}let s=em.map((o,a)=>({name:o.name,subtitle:o.subtitle,trackSeed:`${e}-${a}`,weather:n[a],laps:a<2?2:3})),r={[Ti.id]:0};for(let o of Ac)r[o.id]=0;return{seed:e,stageIndex:0,stages:s,upgrades:[],points:r,history:[]}}function Cc(i){let e=Math.max(0,i.stageIndex),t=[{id:Ti.id,name:Ti.name,color:Ti.color,accent:Ti.accent,isPlayer:!0,persona:null,stats:Qr(i)}];for(let n of Ac){let s=Math.min(.99,Math.round((n.skill+.01*e)*100)/100);t.push({id:n.id,name:n.name,color:n.color,accent:n.accent,isPlayer:!1,persona:{...n,skill:s},stats:{...$s}})}return t}function Qr(i){let e={...$s};for(let t of i.upgrades){let n=tm(t);n&&n.apply(e)}return e}function bh(i){let e=Jn(qo(`${i.seed}|offer|${i.stageIndex}`)),t=Js.filter(n=>nm(i,n.id)<n.maxStacks);return e.shuffle(t).slice(0,3)}function Eh(i,e){let t=tm(e);return!t||nm(i,e)>=t.maxStacks?!1:(i.upgrades.push(e),!0)}function im(i){if(i===Ti.id)return Ti.name;let e=Ac.find(t=>t.id===i);return e?e.name:i}function Th(i,e){if(Zo(i))return i;let t=e.slice().sort((r,o)=>r.position-o.position),n=i.stages[i.stageIndex],s={stage:i.stageIndex,name:n.name,results:[]};return t.forEach((r,o)=>{let a=r.position??o+1,c=yc[a-1]??0;i.points[r.id]=(i.points[r.id]||0)+c,s.results.push({id:r.id,name:r.name||im(r.id),position:a,points:c,isPlayer:r.id===Ti.id})}),i.history.push(s),i.stageIndex+=1,i}function eo(i){let e={};for(let t of i.history)for(let n of t.results)e[n.id]=Math.min(e[n.id]??1/0,n.position);return Object.keys(i.points).map(t=>({id:t,name:im(t),points:i.points[t],isPlayer:t===Ti.id,_best:e[t]??1/0})).sort((t,n)=>n.points-t.points||t._best-n._best).map(({_best:t,...n})=>n)}function Zo(i){return i.stageIndex>=i.stages.length}function Ic(i=new Date){let e=i instanceof Date?i:new Date(i),t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),s=String(e.getUTCDate()).padStart(2,"0");return`DAILY-${t}-${n}-${s}`}function zS(){let i="ABCDEFGHJKMNPQRSTUVWXYZ23456789",e="RUSH-";for(let t=0;t<4;t++)e+=i[Math.floor(Math.random()*i.length)];return e}function wc(){return{runs:0,wins:0,bestPoints:0,unlocked:[]}}function wh(i){let e=wc();if(!i||typeof i!="object")return e;let t=n=>Number.isFinite(n)&&n>=0?Math.floor(n):0;return{runs:t(i.runs),wins:t(i.wins),bestPoints:t(i.bestPoints),unlocked:Array.isArray(i.unlocked)?i.unlocked.filter(n=>typeof n=="string"):e.unlocked}}function sm(){try{return globalThis.localStorage??null}catch{return null}}function Ah(){try{let i=sm();if(!i)return wc();let e=i.getItem(Qp);return e?wh(JSON.parse(e)):wc()}catch{return wc()}}function Rh(i){try{let e=sm();return e?(e.setItem(Qp,JSON.stringify(wh(i))),!0):!1}catch{return!1}}function Ch(i,e){let t=wh(i),n=eo(e),s=n.find(o=>o.isPlayer),r=n.length>0&&n[0].isPlayer;return{runs:t.runs+1,wins:t.wins+(r?1:0),bestPoints:Math.max(t.bestPoints,s?s.points:0),unlocked:t.unlocked.slice()}}var jn=.9,rm=.3,Pc=8,Ph=3,om=6+.8,Ko=3,kS=4.5,HS=.015,VS=.004,am=60,mt={asphaltA:[.27,.225,.2],asphaltB:[.31,.26,.23],rampDark:[.13,.13,.15],yellow:[1,.82,.05],black:[.04,.04,.05],white:[.95,.95,.92],red:[.86,.14,.12],checkW:[.95,.95,.95],checkB:[.04,.04,.05],railA:[.93,.92,.88],railB:[.8,.2,.12],neonCyan:[.2,1,1],neonMag:[1,.15,.9],sand:[.3,.48,.15],motorwayA:[.2,.2,.21],motorwayB:[.22,.22,.23],lane:[.34,.33,.31],gravel:[.24,.4,.13],tunOchreA:[.5,.39,.2],tunOchreB:[.44,.34,.17],sodium:[1,.72,.28],tunA:[.16,.18,.24],tunB:[.21,.23,.3],concrete:[.36,.38,.42],concreteB:[.3,.32,.36],post:[.12,.13,.16],beam:[.1,.1,.12],mast:[.17,.18,.22]},Lc=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],cm=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],GS=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],yn=(i,e,t)=>i+(e-i)*t,In=class{constructor(){this.pos=[],this.col=[],this.uv=[],this.idx=[],this.n=0}quad(e,t,n,s){let[r,o,a,c]=e,l=cm(Lc(o,r),Lc(a,r)),h=cm(Lc(a,r),Lc(c,r)),u=[l[0]+h[0],l[1]+h[1],l[2]+h[2]];if(!(Math.hypot(u[0],u[1],u[2])>1e-12))return;let f=GS(u,n)<0,p=this.n;for(let x=0;x<4;x++){let _=e[x];this.pos.push(_[0],_[1],_[2]),this.col.push(t[0],t[1],t[2]);let m=s?s[x]:[0,0];this.uv.push(m[0],m[1])}this.n+=4,f?this.idx.push(p,p+2,p+1,p,p+3,p+2):this.idx.push(p,p+1,p+2,p,p+2,p+3)}};function $o(i,e,t,n,s){for(let r=0;r<3;r++){let o=(r+1)%3,a=(r+2)%3;for(let c of[-1,1]){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,u])=>{let f=[0,0,0];return f[r]=c,f[o]=h,f[a]=u,[0,1,2].map(p=>e[p]+t[0][p]*f[0]*n[0]+t[1][p]*f[1]*n[1]+t[2][p]*f[2]*n[2])});i.quad(l,s,t[r].map(h=>h*c),null)}}}function Lh(i,e,t){if(typeof document>"u")return null;let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new fi(n);return s.colorSpace=wt,s.anisotropy=4,s}function lm(i,e,t,n){i.beginPath(),e.forEach(([s,r],o)=>o?i.lineTo(s*t,r*n):i.moveTo(s*t,r*n)),i.closePath(),i.fill()}var WS=[[.12,.1],[.82,.5],[.12,.9],[.12,.68],[.5,.5],[.12,.32]];function um(i,e,t){let n=t??Jn(i.seed??1),s=i.pts,r=s.length,o=i.step??i.length/r,a=i.length??r*o,c=i.features??[],l=c.filter(C=>C.type==="ramp"),h=c.filter(C=>C.type==="boost"),u=c.filter(C=>C.type==="tunnel"),f=Math.max(0,Math.min(1,e.sheen??e.wet??0)),p=!!e.night,x=new ft;x.name="road";let _=[],m=[],d=[],y=C=>(m.push(C),C),v=Lh(128,128,(C,D,U)=>{C.fillStyle="#f3efe6",C.fillRect(0,0,D,U),C.fillStyle="#d6202a",lm(C,WS,D,U)}),g=Lh(256,128,(C,D,U)=>{C.fillStyle="#04141a",C.fillRect(0,0,D,U),C.fillStyle="#37f3ff",lm(C,[[.05,.1],[.8,.5],[.05,.9],[.05,.7],[.4,.5],[.05,.3]],D,U)}),T=Lh(1024,256,(C,D,U)=>{C.fillStyle="#0b0e16",C.fillRect(0,0,D,U),C.strokeStyle="#ffd21f",C.lineWidth=10,C.strokeRect(12,12,D-24,U-24),C.fillStyle="#ffd21f",C.font="bold 150px Arial, Helvetica, sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("POLYGON RUSH",D/2,U/2+8)});for(let C of[v,g,T])C&&d.push(C);g&&(g.wrapS=ki);let E=y(new it({vertexColors:!0,flatShading:!0,roughness:.85-.6*f,metalness:f>0?.2:.02})),M=y(new Gt({vertexColors:!0})),w=y(new it({vertexColors:!0,flatShading:!0,color:16777215,emissive:16777215,emissiveIntensity:.14,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),b=y(new it({vertexColors:!0,flatShading:!0,roughness:1})),S=y(new it({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.2})),R=y(new Gt({vertexColors:!0})),F=y(new it({color:v?16777215:16762906,map:v,emissive:v?16777215:16762906,emissiveMap:v,emissiveIntensity:.5,flatShading:!0})),B=y(new it({color:207411,emissive:3666943,emissiveMap:g,emissiveIntensity:2.2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),L=y(new it({vertexColors:!0,flatShading:!0,side:At,roughness:.9})),V=y(new Gt({vertexColors:!0})),H=y(new it({vertexColors:!0,flatShading:!0,roughness:.6})),j=y(new it({color:T?16777215:16765471,map:T,emissive:T?16777215:16756736,emissiveMap:T,emissiveIntensity:.7,flatShading:!0})),z=y(new it({color:2830138,flatShading:!0,roughness:.7})),te=y(new it({color:16773570,emissive:16765562,emissiveIntensity:p?2.5:.8,flatShading:!0})),fe=C=>{for(let D of l)if(C>=D.s0&&C<D.s1)return D.height*(C-D.s0)/(D.s1-D.s0);return 0},ge=C=>l.some(D=>C>=D.s0&&C<D.s1),Ee=C=>u.some(D=>C>=D.s0&&C<=D.s1),de=C=>{let D=C/o,U=Math.floor(D),Z=D-U;U=i.open?Math.max(0,Math.min(r-2,U)):(U%r+r)%r;let le=s[U],Ie=s[(U+1)%r],Be=yn(le.rx,Ie.rx,Z),ke=yn(le.rz,Ie.rz,Z),k=Math.hypot(Be,ke)||1,re=yn(le.tx,Ie.tx,Z),he=yn(le.tz,Ie.tz,Z),pe=Math.hypot(re,he)||1,_e=yn(le.y,Ie.y,Z);return{s:C,x:yn(le.x,Ie.x,Z),z:yn(le.z,Ie.z,Z),yb:_e,y:_e,h:0,rx:Be/k,rz:ke/k,tx:re/pe,tz:he/pe,w:yn(le.width,Ie.width,Z),curv:yn(le.curv,Ie.curv,Z),sample:!1}},ne=(C,D,U)=>({x:yn(C.x,D.x,U),y:yn(C.y,D.y,U),yb:yn(C.yb,D.yb,U),z:yn(C.z,D.z,U),rx:yn(C.rx,D.rx,U),rz:yn(C.rz,D.rz,U),w:yn(C.w,D.w,U)}),$=(C,D,U=0)=>[C.x+C.rx*D,C.y+U,C.z+C.rz*D],ee=(C,D,U=0)=>[C.x+C.rx*D,C.yb+U,C.z+C.rz*D],P=[];for(let C of l)P.push({s:C.s0,h:0},{s:C.s1,h:C.height},{s:C.s1,h:0});P.sort((C,D)=>C.s-D.s);let X=[],q=0,se=(C,D,U)=>{let Z=X[X.length-1];if(Z&&Math.abs(Z.s-C)<1e-9&&Math.abs(Z.h-D)<1e-9){Z.sample=Z.sample||U;return}let le=de(C);le.h=D,le.y=le.yb+D,le.sample=U,X.push(le)};for(let C=0;C<r;C++){let D=C*o;for(;q<P.length&&P[q].s<=D+1e-9;)se(P[q].s,P[q].h,!1),q++;se(D,fe(D),!0)}for(;q<P.length;)se(P[q].s,P[q].h,!1),q++;let ye=X.length,Re=[];for(let C=0;C<ye&&!(i.open&&C===ye-1);C++){let D=X[C],U=X[(C+1)%ye],Z=D.s,le=C+1<ye?X[C+1].s:a,Ie=Math.abs(le-Z)<1e-9,Be=(Z+le)/2;Re.push({a:D,b:U,sa:Z,sb:le,drop:Ie,mid:Be,ramp:!Ie&&ge(Be)})}let Pe=new In,G=new In,We=new In,He=new In,ze=new In,De=new In,qe=new In,Ne=new In,N=new In,A=new In,J=new In,me=new In,xe=C=>C.w/2+6-rm/2,ue=C=>C.w/2+6+rm/2;for(let C of Re){let{a:D,b:U,sa:Z,sb:le,mid:Ie}=C;if(C.drop){Pe.quad([$(D,-D.w/2),$(D,D.w/2),$(U,U.w/2),$(U,-U.w/2)],mt.rampDark,[D.tx,0,D.tz]);continue}let Be=D.w/2,ke=U.w/2;if(C.ramp)G.quad([$(D,-Be),$(D,Be),$(U,ke),$(U,-ke)],Math.floor(Ie/2)%2===0?mt.yellow:mt.black,[0,1,0]),Pe.quad([$(D,-Be),$(U,-ke),ee(U,-ke),ee(D,-Be)],mt.rampDark,[-D.rx,0,-D.rz]),Pe.quad([$(D,Be),ee(D,Be),ee(U,ke),$(U,ke)],mt.rampDark,[D.rx,0,D.rz]);else{Pe.quad([$(D,-Be),$(D,Be),$(U,ke),$(U,-ke)],i.open?Math.floor(Ie/8)%2?mt.motorwayB:mt.motorwayA:Math.floor(Ie/8)%2?mt.asphaltB:mt.asphaltA,[0,1,0]);for(let _e of[-1,1])We.quad([$(D,_e*(Be-.25),.02),$(D,_e*(Be-.45),.02),$(U,_e*(ke-.45),.02),$(U,_e*(ke-.25),.02)],mt.white,[0,1,0]);let k=9,re=3;for(let _e=Math.floor(Z/k);_e*k<le;_e++){let Le=Math.max(Z,_e*k),Ye=Math.min(le,_e*k+re);if(Ye-Le<1e-6)continue;let Ke=ne(D,U,(Le-Z)/(le-Z)),nt=ne(D,U,(Ye-Z)/(le-Z));We.quad([$(Ke,-.08,.02),$(Ke,.08,.02),$(nt,.08,.02),$(nt,-.08,.02)],mt.white,[0,1,0])}let he=Math.abs((D.curv+U.curv)/2)>VS?1.2:.5,pe=Math.floor(Ie/2)%2?mt.red:mt.railA;for(let _e of i.open?[]:[-1,1])We.quad([$(D,_e*Be,.025),$(D,_e*(Be+he),.025),$(U,_e*(ke+he),.025),$(U,_e*ke,.025)],pe,[0,1,0])}for(let k of[-1,1]){He.quad([ee(D,k*Be),ee(D,k*xe(D)),ee(U,k*xe(U)),ee(U,k*ke)],i.open?mt.lane:mt.sand,[0,1,0]);let re=Pc/2,he=-Ph/2,pe=-Ph,_e=[k*D.rx*.6,.8,k*D.rz*.6];He.quad([ee(D,k*ue(D),0),ee(D,k*(ue(D)+re),he),ee(U,k*(ue(U)+re),he),ee(U,k*ue(U),0)],mt.gravel,_e),He.quad([ee(D,k*(ue(D)+re),he),ee(D,k*(ue(D)+Pc),pe),ee(U,k*(ue(U)+Pc),pe),ee(U,k*(ue(U)+re),he)],mt.gravel,_e);let Le=Math.floor(Ie/6)%2?mt.railB:mt.railA,Ye=k*xe(D),Ke=k*xe(U),nt=k*ue(D),st=k*ue(U);!i.open&&(k<0||p||e.openRight===!1)&&(ze.quad([ee(D,Ye,0),ee(D,Ye,jn),ee(U,Ke,jn),ee(U,Ke,0)],Le,[-k*D.rx,0,-k*D.rz]),ze.quad([ee(D,nt,0),ee(D,nt,jn),ee(U,st,jn),ee(U,st,0)],Le,[k*D.rx,0,k*D.rz]),ze.quad([ee(D,Ye,jn),ee(D,nt,jn),ee(U,st,jn),ee(U,Ke,jn)],Le,[0,1,0])),p&&De.quad([ee(D,Ye,jn+.02),ee(D,nt,jn+.02),ee(U,st,jn+.02),ee(U,Ke,jn+.02)],k<0?mt.neonCyan:mt.neonMag,[0,1,0])}}for(let C of X){if(!C.sample||Math.abs(C.curv)<=HS||Math.round(C.s/o)%8!==0||Ee(C.s)||ge(C.s))continue;let U=-Math.sign(C.curv)*(C.w/2+6+.6),le=C.curv>0?[[0,0],[1,0],[1,1],[0,1]]:[[1,0],[0,0],[0,1],[1,1]];qe.quad([ee(C,U-.6,1),ee(C,U+.6,1),ee(C,U+.6,2),ee(C,U-.6,2)],[1,1,1],[-C.tx,0,-C.tz],le),$o(J,[C.x+C.rx*U,C.yb+.35,C.z+C.rz*U],[[C.tx,0,C.tz],[C.rx,0,C.rz],[0,1,0]],[.08,.12,.65],mt.post)}let Ce=de(0),Fe=Math.max(4,Math.round(Ce.w)),Oe=Ce.w/Fe;for(let C=0;C<3;C++){let D=de(-2+C),U=de(-1+C);for(let Z=0;Z<Fe;Z++){let le=-Ce.w/2+Z*Oe,Ie=le+Oe;We.quad([$(D,le,.03),$(D,Ie,.03),$(U,Ie,.03),$(U,le,.03)],(C+Z)%2?mt.checkB:mt.checkW,[0,1,0])}}let Ve=Ce.w/2+6+.5,Se=[[Ce.tx,0,Ce.tz],[Ce.rx,0,Ce.rz],[0,1,0]];for(let C of[-1,1])$o(J,[Ce.x+Ce.rx*C*Ve,Ce.yb+4,Ce.z+Ce.rz*C*Ve],Se,[.3,.3,4],mt.post);$o(J,[Ce.x,Ce.yb+7.5,Ce.z],Se,[.5,Ve,.5],mt.beam);let K=(C,D,U)=>[Ce.x+Ce.tx*C+Ce.rx*D,Ce.yb+U,Ce.z+Ce.tz*C+Ce.rz*D];me.quad([K(-.55,-Ve,5.2),K(-.55,Ve,5.2),K(-.55,Ve,6.8),K(-.55,-Ve,6.8)],[1,1,1],[-Ce.tx,0,-Ce.tz],[[0,0],[1,0],[1,1],[0,1]]),me.quad([K(.55,-Ve,5.2),K(.55,Ve,5.2),K(.55,Ve,6.8),K(.55,-Ve,6.8)],[1,1,1],[Ce.tx,0,Ce.tz],[[1,0],[0,0],[0,1],[1,1]]);for(let C of h){let D=[];for(let Z=C.s0;Z<C.s1;Z+=2)D.push(Z);D.push(C.s1);let U=D.map(de);for(let Z=0;Z+1<U.length;Z++){let le=U[Z],Ie=U[Z+1],Be=(le.s-C.s0)/4,ke=(Ie.s-C.s0)/4;Ne.quad([$(le,-le.w/2,.04),$(le,le.w/2,.04),$(Ie,Ie.w/2,.04),$(Ie,-Ie.w/2,.04)],[1,1,1],[0,1,0],[[Be,0],[Be,1],[ke,1],[ke,0]])}}let Me=C=>{let D=C.w/2+om,U=[[-D,0],[-D,Ko]];for(let Z=1;Z<=7;Z++){let le=Math.PI-Z*Math.PI/8;U.push([D*Math.cos(le),Ko+kS*Math.sin(le)])}return U.push([D,Ko],[D,0]),U},ve=(C,D,U,Z=0)=>[C.x+C.rx*D+C.tx*Z,C.yb+U,C.z+C.rz*D+C.tz*Z],ie=(C,D,U)=>{let Z=-D,le=Ko-U,Ie=Math.hypot(Z,le)||1;return[C.rx*Z/Ie,le/Ie,C.rz*Z/Ie]},Te=([C,D])=>{let U=-C,Z=Ko-D,le=Math.hypot(U,Z)||1;return[C+U/le*.45,D+Z/le*.45]};for(let C of u){let D=[];for(let Z=C.s0;Z<C.s1;Z+=2)D.push(Z);D.push(C.s1);let U=D.map(de);for(let Z=0;Z+1<U.length;Z++){let le=U[Z],Ie=U[Z+1],Be=Me(le),ke=Me(Ie);for(let k=0;k<Be.length-1;k++){let re=(Be[k][0]+Be[k+1][0])/2,he=(Be[k][1]+Be[k+1][1])/2;N.quad([ve(le,Be[k][0],Be[k][1]),ve(le,Be[k+1][0],Be[k+1][1]),ve(Ie,ke[k+1][0],ke[k+1][1]),ve(Ie,ke[k][0],ke[k][1])],i.open?k%2?mt.tunOchreA:mt.tunOchreB:k%2?mt.tunA:mt.tunB,ie(le,re,he))}if(Math.round((le.s-C.s0)/2)%6===0)for(let k=1;k<=8;k++){let re=Te(Be[k]),he=Te(Be[k+1]),pe=(re[0]+he[0])/2,_e=(re[1]+he[1])/2;A.quad([ve(le,re[0],re[1]),ve(le,he[0],he[1]),ve(le,he[0],he[1],.6),ve(le,re[0],re[1],.6)],i.open?mt.sodium:k%2?mt.neonCyan:mt.neonMag,ie(le,pe,_e))}}for(let Z of[U[0],U[U.length-1]]){let le=Z.w/2+om,Ie=[[Z.tx,0,Z.tz],[Z.rx,0,Z.rz],[0,1,0]];for(let Be of[-1,1])$o(N,[Z.x+Z.rx*Be*(le+1.2),Z.yb+5,Z.z+Z.rz*Be*(le+1.2)],Ie,[2,1.1,5],mt.concrete);$o(N,[Z.x,Z.yb+10.5,Z.z],Ie,[2,le+3.5,1.5],mt.concreteB)}}let oe=(C,D,U,Z=!1)=>{if(!C.idx.length)return null;let le=new pt;le.setAttribute("position",new at(C.pos,3)),le.setAttribute("color",new at(C.col,3)),le.setAttribute("uv",new at(C.uv,2)),le.setIndex(C.idx),le.computeVertexNormals(),_.push(le);let Ie=new ot(le,D);return Ie.name=U,Ie.receiveShadow=Z,x.add(Ie),Ie};oe(Pe,E,"road-asphalt",!0),oe(G,M,"road-ramp-top"),oe(We,w,"road-paint"),oe(He,b,"road-shoulder-talus"),oe(ze,S,"road-barriers"),p&&oe(De,R,"road-barrier-neon"),oe(qe,F,"road-chevrons"),oe(Ne,B,"road-boost"),oe(N,L,"road-tunnels"),oe(A,V,"road-tunnel-neon"),oe(J,H,"road-props"),oe(me,j,"road-start-sign");let be=[];for(let C=1;C*am<a-5;C++){let D=C*am;if(u.some(ke=>D>=ke.s0-15&&D<=ke.s1+15))continue;let U=de(D),Z=C%2?1:-1,le=Z*(U.w/2+6+2.6),Ie=U.yb-Ph*Math.min(1,2.45/Pc),Be=n.range(8.5,9.5);be.push({x:U.x+U.rx*le,z:U.z+U.rz*le,y:Ie,h:Be,hx:U.x+U.rx*(le-Z*.6),hz:U.z+U.rz*(le-Z*.6)})}if(be.length){let C=new bn(.18,.26,9,6,1),D=new Ks(.55,0);_.push(C,D);let U=new xn(C,z,be.length),Z=new xn(D,te,be.length);U.name="road-lamp-masts",Z.name="road-lamp-heads";let le=new et,Ie=new Qt,Be=new O,ke=new O;be.forEach((k,re)=>{ke.set(k.x,k.y+k.h/2,k.z),Be.set(1,k.h/9,1),le.compose(ke,Ie,Be),U.setMatrixAt(re,le),ke.set(k.hx,k.y+k.h+.2,k.hz),Be.set(1,1,1),le.compose(ke,Ie,Be),Z.setMatrixAt(re,le)}),U.instanceMatrix.needsUpdate=!0,Z.instanceMatrix.needsUpdate=!0,x.add(U,Z)}return{group:x,update:(C,D)=>{g&&(g.offset.x=-(D*.9%1)),B.emissiveIntensity=2.2+.5*Math.sin(D*5)},dispose:()=>{x.removeFromParent();for(let C of _)C.dispose();for(let C of m)C.dispose();for(let C of d)C.dispose()}}}function fm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new pt,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=hm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);let x=hm(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function hm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new xt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,p=h.count;f<p;f++)for(let x=0;x<t;x++){let _=h.getComponent(f,x);a.setComponent(f+u,x,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Dh(i,e){if(e===dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wo||e===gc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Wo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function js(i,e=.5,t=1){if(!i||i.userData.voxel||!(i.isMeshStandardMaterial||i.isMeshLambertMaterial))return i;i.userData.voxel=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uVoxCell={value:e},s.uniforms.uVoxStrength={value:t},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"voxel-"+e+"-"+t,i.needsUpdate=!0,i}var XS=/asphalt|paint|boost|sign|ramp|neon|lamp-heads/;function Nh(i,e){i.traverse(t=>{if(!t.isMesh||XS.test(t.name))return;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)!s||s.transparent||s.emissiveIntensity>1.2||(s.roughness??1)<.35||js(s,e(t),1)})}function dm(i,e,t=46){let n=[];for(let c=0;c<t;c++){let l=e.range(0,Math.PI*2),h=e.range(700,4200),u=Math.cos(l)*h,f=Math.sin(l)*h,p=e.range(260,520),x=e.range(26,46),_=e.int(5,11);for(let m=0;m<_;m++)n.push([u+Math.round(e.range(-3.5,3.5))*x,p+Math.round(e.range(0,1.4))*x*.6,f+Math.round(e.range(-2,2))*x,x*e.int(1,3),x*.6*e.int(1,2),x*e.int(1,2)])}let s=new on(1,1,1),r=new Vi({color:i.night?2765648:16777215,fog:!1,emissive:i.night?329487:new Ae(16777215).lerp(new Ae(i.skyHorizon),.35).multiplyScalar(.5)}),o=new xn(s,r,n.length),a=new et;return n.forEach((c,l)=>{a.makeScale(c[3],c[4],c[5]),a.setPosition(c[0],c[1],c[2]),o.setMatrixAt(l,a)}),o.instanceMatrix.needsUpdate=!0,o.frustumCulled=!1,o.name="voxel-clouds",o}function pm(i,e,t,n,s,r,o,a,c,l){let h=e+s,u=t+r,f=n+o,p,x,_,m,d,y;s?(p=0,x=c?1:-1,_=0,m=0,d=0,y=l?1:-1):r?(p=a?1:-1,x=0,_=0,m=0,d=0,y=l?1:-1):(p=a?1:-1,x=0,_=0,m=0,d=c?1:-1,y=0);let v=i(h+p,u+x,f+_)?1:0,g=i(h+m,u+d,f+y)?1:0,T=i(h+p+m,u+x+d,f+_+y)?1:0;return .5+.1667*(v&&g?0:3-(v+g+T))}function Es(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=t.attributes.color,r=512,o=(m,d,y)=>m+r+(d+r)*1024+(y+r)*1048576,a=new Map,c=(m,d,y,v,g,T)=>{let E=Math.floor(m/e),M=Math.floor(d/e),w=Math.floor(y/e),b=o(E,M,w);a.has(b)||a.set(b,[E,M,w,v,g,T])};for(let m=0;m<n.count;m+=3){let d=n.getX(m),y=n.getY(m),v=n.getZ(m),g=n.getX(m+1),T=n.getY(m+1),E=n.getZ(m+1),M=n.getX(m+2),w=n.getY(m+2),b=n.getZ(m+2),S=.6,R=.6,F=.6;s&&(S=(s.getX(m)+s.getX(m+1)+s.getX(m+2))/3,R=(s.getY(m)+s.getY(m+1)+s.getY(m+2))/3,F=(s.getZ(m)+s.getZ(m+1)+s.getZ(m+2))/3);let B=Math.max(Math.hypot(g-d,T-y,E-v),Math.hypot(M-d,w-y,b-v),Math.hypot(M-g,w-T,b-E)),L=Math.max(1,Math.ceil(B/e*2));for(let V=0;V<=L;V++)for(let H=0;H<=L-V;H++){let j=V/L,z=H/L;c(d+(g-d)*j+(M-d)*z,y+(T-y)*j+(w-y)*z,v+(E-v)*j+(b-v)*z,S,R,F)}}let l=new Map;for(let m of a.values()){let d=m[0]+r+(m[2]+r)*1024,y=l.get(d);y||l.set(d,y=[]),y.push(m)}for(let m of l.values()){m.sort((d,y)=>d[1]-y[1]);for(let d=0;d<m.length-1;d++)for(let y=m[d][1]+1;y<m[d+1][1];y++)a.set(o(m[d][0],y,m[d][2]),[m[d][0],y,m[d][2],m[d][3],m[d][4],m[d][5]])}let h=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],u=[],f=[],p=[],x=(m,d,y)=>a.has(o(m,d,y));for(let m of a.values()){let[d,y,v,g,T,E]=m,M=Math.sin(d*12.9898+y*78.233+v*37.719)*43758.5453,w=.86+.24*(M-Math.floor(M));for(let[b,S,R,F]of h)if(!a.has(o(d+b,y+S,v+R)))for(let B of[0,1,2,0,2,3]){let L=F[B*3],V=F[B*3+1],H=F[B*3+2],j=w*pm(x,d,y,v,b,S,R,L,V,H);u.push((d+L)*e,(y+V)*e,(v+H)*e),f.push(b,S,R),p.push(g*j,T*j,E*j)}}let _=new pt;return _.setAttribute("position",new at(u,3)),_.setAttribute("normal",new at(f,3)),_.setAttribute("color",new at(p,3)),_.computeBoundingSphere(),_}function Bn(i,e,t,n,s,r=.2){let o=new Array(i*e*t),a=(_,m,d)=>_<0||m<0||d<0||_>=i||m>=e||d>=t?null:o[_+i*(m+e*d)];for(let _=0;_<t;_++)for(let m=0;m<e;m++)for(let d=0;d<i;d++)o[d+i*(m+e*_)]=s(d,m,_)||null;let c=[[1,0,0,[1,0,0,1,1,0,1,1,1,1,0,1]],[-1,0,0,[0,0,0,0,0,1,0,1,1,0,1,0]],[0,1,0,[0,1,0,0,1,1,1,1,1,1,1,0]],[0,-1,0,[0,0,0,1,0,0,1,0,1,0,0,1]],[0,0,1,[0,0,1,1,0,1,1,1,1,0,1,1]],[0,0,-1,[0,0,0,0,1,0,1,1,0,1,0,0]]],l=[],h=[],u=[],f=-i/2,p=-t/2;for(let _=0;_<t;_++)for(let m=0;m<e;m++)for(let d=0;d<i;d++){let y=o[d+i*(m+e*_)];if(!y)continue;let v=Math.sin(d*12.9898+m*78.233+_*37.719)*43758.5453,g=1-r/2+r*(v-Math.floor(v));for(let[T,E,M,w]of c)if(!a(d+T,m+E,_+M)&&!(E<0&&m===0))for(let b of[0,1,2,0,2,3]){let S=w[b*3],R=w[b*3+1],F=w[b*3+2],B=g*pm(a,d,m,_,T,E,M,S,R,F);l.push((d+f+S)*n,(m+R)*n,(_+p+F)*n),h.push(T,E,M),u.push(y[0]*B,y[1]*B,y[2]*B)}}let x=new pt;return x.setAttribute("position",new at(l,3)),x.setAttribute("normal",new at(h,3)),x.setAttribute("color",new at(u,3)),x.computeBoundingSphere(),x}function mm(i,e=1,t=null){if(!i||i.userData.wetRoad)return i;i.userData.wetRoad=!0;let n=i.onBeforeCompile;return i.onBeforeCompile=(s,r)=>{n?.call(i,s,r),s.uniforms.uWet={value:e},s.uniforms.tRefl={value:t?t.texture:null},s.uniforms.uReflMatrix={value:t?t.matrix:new et},s.uniforms.uReflOn={value:t?1:0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},i.customProgramCacheKey=()=>"wet-road-"+e+(t?"-refl":""),i.needsUpdate=!0,i}function gm(i,e){let t=1/0,n=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;for(let f=0;f<i.length;f+=4)t=Math.min(t,i[f]),n=Math.max(n,i[f]),s=Math.min(s,i[f+1]),r=Math.max(r,i[f+1]),o=Math.min(o,i[f+2]),a=Math.max(a,i[f+2]);let c=n-t+1,l=r-s+1,h=a-o+1,u=new Map;for(let f=0;f<i.length;f+=4){let p=i[f+3];u.set(i[f]-t+c*(i[f+1]-s+l*(i[f+2]-o)),[(p>>16&255)/255,(p>>8&255)/255,(p&255)/255])}return Bn(c,l,h,e,(f,p,x)=>u.get(f+c*(p+l*x))||null,.12)}function xm(i,e=3.1,t=2.6){if(!i||!i.userData.voxel||i.userData.windows)return i;i.userData.windows=!0;let n=i.onBeforeCompile;i.onBeforeCompile=(r,o)=>{n?.call(i,r,o),r.fragmentShader=r.fragmentShader.replace("#include <roughnessmap_fragment>",`
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
        #include <roughnessmap_fragment>`)};let s=i.customProgramCacheKey?.()||"";return i.customProgramCacheKey=()=>s+"-win-"+e+"-"+t,i.needsUpdate=!0,i}var cn=5,_m=1,Ts=450,zn=40,ym=12e3,vm=32,Mm=4e3,kn=Math.PI*2,Jo=new Lt,no=new Ae,Sm=new et,bm=new et,qS=new O(0,1,0),Em=i=>i<0?0:i>1?1:i,wi=(i,e,t)=>i<e?e:i>t?t:i,Qs=(i,e,t)=>{let n=Em((t-i)/(e-i));return n*n*(3-2*n)};function YS(i){let e=(n,s)=>{let r=Math.imul(n|0,374761393)+Math.imul(s|0,668265263)+i|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296},t=(n,s)=>{let r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=a*a*(3-2*a),h=c*c*(3-2*c),u=e(r,o),f=e(r+1,o),p=e(r,o+1),x=e(r+1,o+1);return u+(f-u)*l+(p-u)*h+(u-f-p+x)*l*h};return(n,s)=>(t(n,s)*.5+t(n*2+17.3,s*2-9.1)*.25+t(n*4-3.7,s*4+11.2)*.125)/.875}var to=i=>{let e=new Ae(i);return[e.r,e.g,e.b]},ws={sand:to(14271631),dry:to(7317050),garrigue:to(5212718),rock:to(12169890),pale:to(13617336),snow:to(15855076)},ZS=[16513264,15853260,14725754,16052195],KS=[9075302,7236192,11047018,8023646],$S=[3407871,16727250,16757051],Dc=0,Nc=0,Uc=0,jo=(i,e)=>{Dc+=(i[0]-Dc)*e,Nc+=(i[1]-Nc)*e,Uc+=(i[2]-Uc)*e};function JS(i,e,t,n,s,r){Dc=ws.sand[0],Nc=ws.sand[1],Uc=ws.sand[2],jo(ws.dry,Qs(2.5,7,i)),jo(ws.garrigue,Qs(25,75,i)*.55),jo(ws.rock,Qs(.4,.65,e)),jo(ws.pale,Qs(95,120,i)*.8),jo(ws.snow,Qs(125,150,i));let o=Dc*t,a=Nc*t,c=Uc*t;n&&(o=o*.45+.02,a=a*.5+.03,c=c*.75+.09);for(let l=0;l<9;l+=3)s[r+l]=o,s[r+l+1]=a,s[r+l+2]=c}function Qn(i,e){let t=i.index?i.toNonIndexed():i;t.attributes.uv&&t.deleteAttribute("uv"),t.attributes.normal||t.computeVertexNormals();let n=t.attributes.position.count,s=new Float32Array(n*3);no.setHex(e);for(let r=0;r<n;r++)s[r*3]=no.r,s[r*3+1]=no.g,s[r*3+2]=no.b;return t.setAttribute("color",new xt(s,3)),t}var Qo=i=>fm(i,!1);function jS(i,e,t){let n=Math.sin(i*12.9898+e*78.233+t*37.719)*43758.5453;return n-Math.floor(n)}function QS(){let i=new Ks(1,0),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getY(t),r=e.getZ(t),o=.8+.4*jS(n,s,r);e.setXYZ(t,n*o,s*o,r*o)}return i.computeVertexNormals(),i}function eb(){return Qo([Qn(new bn(.35,.5,6,6).translate(0,3,0),7162931),Qn(new Ks(3.4,0).scale(1,.55,1).translate(0,7.4,0),4160058)])}function tb(){return Qo([Qn(new bn(.25,.35,1.2,5).translate(0,.6,0),7162931),Qn(new Zs(1.1,10,6).translate(0,6,0),3037756)])}function nb(){let i=[Qn(new bn(.22,.35,8,5).translate(0,4,0),9071178)];for(let e=0;e<7;e++){let t=new Zs(.55,4.6,3).rotateZ(Math.PI/2-.45).translate(0,8.4,0).rotateY(e*kn/7);i.push(Qn(t,5214010))}return Qo(i)}function ib(){return Qo([Qn(new bn(1.6,2.3,13,8).translate(0,6.5,0),16052712),Qn(new bn(2,2,2.2,8).translate(0,6.5,0),12727595),Qn(new bn(1.3,1.3,1.8,8).translate(0,14,0),16771488),Qn(new Zs(1.7,1.2,8).translate(0,15.4,0),3812906)])}function sb(){return Qo([Qn(new on(2.2,.9,6).translate(0,.45,0),15986662),Qn(new Zs(1.9,5.4,3).scale(.1,1,1).translate(0,3.6,-.3),16775400)])}function di(i,e,t,n=!0){let s=new xn(i,e,t.length);for(let r=0;r<t.length;r++){let o=t[r];Jo.position.set(o.x,o.y,o.z),Jo.rotation.set(0,o.ry??0,0),Jo.scale.set(o.sx??1,o.sy??1,o.sz??1),Jo.updateMatrix(),s.setMatrixAt(r,Jo.matrix),o.col!==void 0&&(no.setHex(o.col).multiplyScalar(o.v??1),s.setColorAt(r,no))}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=n,s}var rb=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ob=`
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
}`;function Tm(i,e,t,n){let s=e.pts,r=s.length,o=e.bounds,a=!!t.night,c=YS(n.int(1,1073741808)),l=o.minX-Ts-zn,h=o.minZ-Ts-zn,u=Math.ceil((o.maxX-o.minX+2*Ts)/zn)+3,f=Math.ceil((o.maxZ-o.minZ+2*Ts)/zn)+3,p=Array.from({length:u*f},()=>[]);for(let k=0;k<r;k++){let re=wi(Math.floor((s[k].x-l)/zn),0,u-1),he=wi(Math.floor((s[k].z-h)/zn),0,f-1);p[he*u+re].push(k)}let x=0;function _(k,re){let he=Math.floor((k-l)/zn),pe=Math.floor((re-h)/zn),_e=Math.max(u,f),Le=1/0,Ye=0;for(let Ke=0;Ke<=_e;Ke++){for(let st=pe-Ke;st<=pe+Ke;st++){if(st<0||st>=f)continue;let Ot=st===pe-Ke||st===pe+Ke?1:2*Ke;for(let Ct=he-Ke;Ct<=he+Ke;Ct+=Ot){if(Ct<0||Ct>=u)continue;let Bt=p[st*u+Ct];for(let Vt=0;Vt<Bt.length;Vt++){let hn=Bt[Vt],I=s[hn],Y=I.x-k,ae=I.z-re,ce=Y*Y+ae*ae;ce<Le&&(Le=ce,Ye=hn)}}}let nt=Ke*zn;if(Le<=nt*nt)break}return x=Math.sqrt(Le),Ye}function m(k,re,he){let pe=he*he,_e=1/0,Le=wi(Math.floor((k-he-l)/zn),0,u-1),Ye=wi(Math.floor((k+he-l)/zn),0,u-1),Ke=wi(Math.floor((re-he-h)/zn),0,f-1),nt=wi(Math.floor((re+he-h)/zn),0,f-1);for(let st=Ke;st<=nt;st++)for(let bt=Le;bt<=Ye;bt++){let Ot=p[st*u+bt];for(let Ct=0;Ct<Ot.length;Ct++){let Bt=s[Ot[Ct]],Vt=Bt.x-k,hn=Bt.z-re;Vt*Vt+hn*hn<=pe&&Bt.y<_e&&(_e=Bt.y)}}return _e}let d=Math.ceil(r/4),y=new Float64Array(d*2);for(let k=0;k<d;k++)y[2*k]=s[k*4%r].x,y[2*k+1]=s[k*4%r].z;function v(k,re){let he=!1;for(let pe=0,_e=d-1;pe<d;_e=pe++){let Le=y[2*pe],Ye=y[2*pe+1],Ke=y[2*_e],nt=y[2*_e+1];Ye>re!=nt>re&&k<(Ke-Le)*(re-Ye)/(nt-Ye)+Le&&(he=!he)}return he}let g=o.minX-Ts,T=o.minZ-Ts,E=Math.ceil((o.maxX-o.minX+2*Ts)/cn)+1,M=Math.ceil((o.maxZ-o.minZ+2*Ts)/cn)+1,w=new Float32Array(E*M);for(let k=0;k<M;k++)for(let re=0;re<E;re++){let he=g+re*cn,pe=T+k*cn,_e=_(he,pe),Le=x,Ye=s[_e],Ke=Ye.width*.5,nt=Ye.y;if(Le<40){let Y=m(he,pe,24);Y<nt&&(nt=Y)}let st=1;if(!v(he,pe)){let Y=Le-Ke+(c(he/140+31.7,pe/140-8.2)-.5)*70;st=1-Qs(110,200,Y)}let bt=c(he/260,pe/260),Ct=-15+(10+130*Math.pow(Em((bt-.42)/.5),1.5)+6*bt+15)*st;if(st>=1){let Y=c(he/90+11.3,pe/90-4.1);Ct=Math.max(Ct,nt+6+38*Y)}let Bt=Qs(Ke+6+12,Ke+6+62,Le),Vt=nt-.6,hn=Vt+(Ct-Vt)*Bt,I=nt+Math.max(0,Le-Ke-6-12)*1.2;hn>I&&(hn=I),w[k*E+re]=hn}let b=null;function S(k,re){if(b)return b(k,re);let he=(k-g)/cn,pe=(re-T)/cn;he=wi(he,0,E-1.000001),pe=wi(pe,0,M-1.000001);let _e=Math.floor(he),Le=Math.floor(pe),Ye=he-_e,Ke=pe-Le,nt=w[Le*E+_e],st=w[Le*E+_e+1],bt=w[(Le+1)*E+_e],Ot=w[(Le+1)*E+_e+1],Ct=nt+(st-nt)*Ye,Bt=bt+(Ot-bt)*Ye;return Ct+(Bt-Ct)*Ke}let R=(k,re)=>Math.max(Math.abs(S(k+4,re)-S(k-4,re)),Math.abs(S(k,re+4)-S(k,re-4)))/8,F=(k,re,he)=>{let pe=_(k,re);return x>=s[pe].width*.5+6+4+he},B=[],L=[],V=new Float32Array(9),H=(k,re,he,pe,_e,Le,Ye,Ke,nt)=>{let st=pe-k,bt=_e-re,Ot=Le-he,Ct=Ye-k,Bt=Ke-re,Vt=nt-he,hn=bt*Vt-Ot*Bt,I=Ot*Ct-st*Vt,Y=st*Bt-bt*Ct,ae=Math.hypot(hn,I,Y)||1,ce=1-Math.abs(I)/ae;B.push(k,re,he,pe,_e,Le,Ye,Ke,nt),JS((re+_e+Ke)/3,ce,.9+.2*n.next(),a,V,0);for(let Q=0;Q<9;Q++)L.push(V[Q])},j=E-1,z=M-1,te=new Float32Array(j*z);for(let k=0;k<z;k++)for(let re=0;re<j;re++){let he=k*E+re,pe=(w[he]+w[he+1]+w[he+E]+w[he+E+1])/4;te[k*j+re]=Math.floor(pe/_m)*_m}let fe=-4;for(let k=0;k<z;k++)for(let re=0;re<j;re++){let he=te[k*j+re],pe=g+re*cn,_e=T+k*cn,Le=pe+cn,Ye=_e+cn;if(he>fe&&(H(pe,he,_e,pe,he,Ye,Le,he,_e),H(Le,he,_e,pe,he,Ye,Le,he,Ye)),re+1<j){let Ke=te[k*j+re+1],nt=Math.min(he,Ke),st=Math.max(he,Ke);st>nt&&st>fe&&(H(Le,nt,_e,Le,st,_e,Le,st,Ye),H(Le,nt,_e,Le,st,Ye,Le,nt,Ye))}if(k+1<z){let Ke=te[(k+1)*j+re],nt=Math.min(he,Ke),st=Math.max(he,Ke);st>nt&&st>fe&&(H(pe,nt,Ye,pe,st,Ye,Le,st,Ye),H(pe,nt,Ye,Le,st,Ye,Le,nt,Ye))}}b=(k,re)=>{let he=wi(Math.floor((k-g)/cn),0,j-1),pe=wi(Math.floor((re-T)/cn),0,z-1);return te[pe*j+he]};let ge=new pt;ge.setAttribute("position",new at(B,3)),ge.setAttribute("color",new at(L,3)),ge.computeVertexNormals(),ge.computeBoundingSphere();let Ee=new ot(ge,new it({vertexColors:!0,flatShading:!0,roughness:.94,metalness:0,side:At}));Ee.receiveShadow=!0;let de=new ft;de.name="environment",de.add(Ee);let ne=(o.minX+o.maxX)/2,$=(o.minZ+o.maxZ)/2,ee=new Cn(ym,ym,vm,vm);ee.rotateX(-Math.PI/2);let P=ee.attributes.position,X=P.count,q=new Float32Array(X),se=new Float32Array(X);for(let k=0;k<X;k++)q[k]=P.getX(k),se[k]=P.getZ(k);let ye=new ot(ee,new it({color:t.seaColor,roughness:.25,metalness:.05,flatShading:!0}));ye.position.set(ne,0,$),de.add(ye);let Re=new O(t.sunDir[0],t.sunDir[1],t.sunDir[2]).normalize(),Pe=new ft,G=new St({uniforms:{topColor:{value:new Ae(t.skyTop)},horizonColor:{value:new Ae(t.skyHorizon)},sunColor:{value:new Ae(t.sunColor)},sunDir:{value:Re},night:{value:a?1:0}},vertexShader:rb,fragmentShader:ob,side:$t,depthWrite:!1,fog:!1}),We=new ot(new xs(Mm,32,16),G);if(We.renderOrder=-10,We.frustumCulled=!1,Pe.add(We),a){let re=new Float32Array(1500);for(let _e=0;_e<500;_e++){let Le=n.range(0,kn),Ye=Math.asin(n.range(.05,.98)),Ke=Mm*.97;re[_e*3]=Ke*Math.cos(Ye)*Math.cos(Le),re[_e*3+1]=Ke*Math.sin(Ye),re[_e*3+2]=Ke*Math.cos(Ye)*Math.sin(Le)}let he=new pt;he.setAttribute("position",new xt(re,3));let pe=new gs(he,new Ys({color:16777215,size:2,sizeAttenuation:!1,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));pe.frustumCulled=!1,Pe.add(pe)}de.add(Pe);let He=new Kr(t.hemiSky,t.hemiGround,t.hemiIntensity),ze=new vi(t.sunColor,t.sunIntensity);ze.castShadow=!0,ze.shadow.mapSize.set(2048,2048);let De=ze.shadow.camera;De.left=-90,De.right=90,De.top=90,De.bottom=-90,De.near=1,De.far=600,De.updateProjectionMatrix(),ze.shadow.bias=-5e-4,de.add(He,ze,ze.target);let qe=i.fog,Ne=i.background,N=new Xr(t.fogColor,t.fogDensity),A=new Ae(t.skyHorizon);i.fog=N,i.background=A;let J=g+(E-1)*cn,me=T+(M-1)*cn,xe=()=>n.range(g+30,J-30),ue=()=>n.range(T+30,me-30),Ce=(k,re,he)=>{let pe=[];for(let _e=0;_e<re&&pe.length<k;_e++){let Le=he(xe(),ue());Le&&pe.push(Le)}return pe},Fe=Ce(320,4e4,(k,re)=>{let he=S(k,re);if(he<4||he>95||!F(k,re,2)||R(k,re)>.6)return null;let pe=n.range(.8,1.45);return{x:k,y:he-.3,z:re,sx:pe,sy:pe*n.range(.9,1.3),sz:pe,ry:n.range(0,kn),col:16777215,v:n.range(.85,1.15)}}),Oe=Ce(170,4e4,(k,re)=>{let he=S(k,re);if(he<6||he>70||!F(k,re,1.5)||R(k,re)>.6)return null;let pe=n.range(.8,1.3);return{x:k,y:he-.3,z:re,sx:pe,sy:pe*n.range(.9,1.25),sz:pe,ry:n.range(0,kn),col:16777215,v:n.range(.85,1.15)}}),Ve=Ce(110,4e4,(k,re)=>{let he=S(k,re);if(he<1.8||he>14||!F(k,re,2)||R(k,re)>.5)return null;let pe=n.range(.85,1.25);return{x:k,y:he-.3,z:re,sx:pe,sy:pe,sz:pe,ry:n.range(0,kn),col:16777215,v:n.range(.9,1.1)}});de.add(di(Es(eb(),.8),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Fe)),de.add(di(Es(tb(),.7),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Oe)),de.add(di(Es(nb(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.9}),Ve));let Se=Ce(300,3e4,(k,re)=>{let he=S(k,re);if(he<1.5)return null;let pe=n.range(1.2,4.5);return F(k,re,pe*.6)?{x:k,y:he+pe*.15,z:re,sx:pe,sy:pe*n.range(.55,.9),sz:pe,ry:n.range(0,kn),col:n.pick(KS),v:n.range(.85,1.15)}:null}),K=Ce(3,3e4,(k,re)=>{if(S(k,re)>-4)return null;let he=_(k,re);if(x<s[he].width*.5+200||x>800)return null;let pe=n.range(25,45);return{x:k,y:.1*pe,z:re,sx:pe,sy:pe*.45,sz:pe,ry:n.range(0,kn),col:10260344,v:1}});de.add(di(Es(QS(),.42),new it({color:16777215,flatShading:!0,roughness:.95}),Se.concat(K)));let Me=[],ve=[],ie=[],Te=n.int(3,5),oe=0;for(let k=0;k<4e3&&oe<Te;k++){let re=xe(),he=ue(),pe=_(re,he),_e=s[pe].width*.5;if(x<_e+25||x>_e+80)continue;let Le=S(re,he);if(Le<6||Le>40||R(re,he)>.35)continue;oe++;let Ye=n.int(7,12);for(let Ke=0;Ke<Ye;Ke++){let nt=n.range(0,kn),st=Math.sqrt(n.next())*18,bt=re+Math.cos(nt)*st,Ot=he+Math.sin(nt)*st,Ct=_(bt,Ot);if(x<s[Ct].width*.5+6+4+4)continue;let Bt=S(bt,Ot);if(Bt<3)continue;let Vt=n.range(4,6.5),hn=n.range(3.5,6),I=n.range(4,6.5),Y=n.pick([0,Math.PI/2])+n.range(-.15,.15),ae=Bt-1;if(Me.push({x:bt,y:ae,z:Ot,ry:Y,sx:Vt,sy:hn,sz:I,col:n.pick(ZS),v:1}),ve.push({x:bt,y:ae+hn,z:Ot,ry:Y,sx:Vt*1.08,sy:n.range(1.8,2.6),sz:I*1.08}),a)for(let ce of[-1,1]){let Q=ce*Vt*.28,Ue=I/2+.03;ie.push({x:bt+Q*Math.cos(Y)+Ue*Math.sin(Y),y:ae+hn*.55,z:Ot-Q*Math.sin(Y)+Ue*Math.cos(Y),ry:Y})}}}let be=new it({color:16777215,flatShading:!0,roughness:.85}),W=new it({color:11818298,flatShading:!0,roughness:.8});if(Me.length){let k=new on(1,1,1).translate(0,.5,0),re=Es(new bn(0,.71,1,4).rotateY(Math.PI/4).translate(0,.5,0),.125);de.add(di(k,be,Me),di(re,W,ve))}if(a&&ie.length){let k=new on(1.2,1.1,.12);de.add(di(k,new Gt({color:16761466}),ie,!1))}if(a){let k=0,re=0,he=!1;for(let pe=0;pe<4e3&&!he;pe++){let _e=xe(),Le=ue(),Ye=_(_e,Le),Ke=s[Ye].width*.5;if(x<Ke+220||x>Ke+420)continue;let nt=S(_e,Le);nt<6||nt>30||(k=_e,re=Le,he=!0)}if(he){let pe=[],_e=[],Le=n.int(9,13);for(let Ye=0;Ye<Le;Ye++){let Ke=k+n.range(-110,110),nt=re+n.range(-110,110),st=S(Ke,nt);if(st<2)continue;let bt=n.range(6,10),Ot=n.range(30,70);pe.push({x:Ke,y:st,z:nt,sx:bt,sy:Ot,sz:bt,col:1777720,v:n.range(.8,1.2)});let Ct=n.pick($S);for(let Bt=0;Bt<3;Bt++){let Vt=Bt*kn/3+n.range(0,.5);_e.push({x:Ke+Math.cos(Vt)*bt*.88,y:st+Ot*.05,z:nt+Math.sin(Vt)*bt*.88,ry:-Vt,sy:Ot*.9,col:Ct,v:1})}}de.add(di(new bn(.72,1,1,6).translate(0,.5,0),new it({color:16777215,flatShading:!0,roughness:.7}),pe),di(new on(.5,1,.25).translate(0,.5,0),new Gt({color:16777215}),_e,!1))}}{let k=[],re=[];for(let pe=1;pe<M-1;pe++)for(let _e=1;_e<E-1;_e++){let Le=pe*E+_e,Ye=w[Le];if(Ye<2||Ye>30)continue;let Ke=_(g+_e*cn,T+pe*cn);if(x<s[Ke].width*.5+60)continue;(w[Le-1]<0||w[Le+1]<0||w[Le-E]<0||w[Le+E]<0?k:re).push(Le)}let he=k.length?k:re;if(he.length){let pe=n.pick(he),_e=pe%E,Le=(pe-_e)/E,Ye=new ot(Es(ib(),.6),new it({vertexColors:!0,flatShading:!0,roughness:.6}));Ye.position.set(g+_e*cn,w[pe]-.5,T+Le*cn),Ye.castShadow=!0,de.add(Ye)}}let we=Ce(4,2e4,(k,re)=>{if(S(k,re)>-3)return null;let he=_(k,re);return x<s[he].width*.5+250||x>900?null:{x:k,y:-.2,z:re,ry:n.range(0,kn),col:16777215,v:1}});we.length&&de.add(di(Es(sb(),.5),new it({vertexColors:!0,flatShading:!0,roughness:.6}),we));let C=[],D=[];for(let k=0;k<2e4&&C.length<3;k++){let re=xe(),he=ue(),pe=_(re,he);if(x<s[pe].width*.5+60)continue;let _e=S(re,he);_e<55||C.some(Le=>Math.hypot(Le.x-re,Le.z-he)<200)||C.push({x:re,y:_e,z:he,ry:n.range(0,kn),speed:n.range(.9,1.5),phase:n.range(0,kn)})}let U=new on(.7,14,.22).translate(0,7,0),Z=new it({color:15659507,flatShading:!0,roughness:.6}),le=null;if(C.length){de.add(di(new bn(.8,.35,30,6).translate(0,15,0),Z,C));for(let k of C)D.push(new et().compose(new O(k.x,k.y+30,k.z),new Qt().setFromAxisAngle(qS,k.ry),new O(1,1,1)));le=new xn(U,Z,C.length*3),le.castShadow=!0,de.add(le)}function Ie(k){if(le){for(let re=0;re<C.length;re++){let he=k*C[re].speed+C[re].phase;for(let pe=0;pe<3;pe++)bm.makeRotationZ(he+pe*kn/3),Sm.multiplyMatrices(D[re],bm),le.setMatrixAt(re*3+pe,Sm)}le.instanceMatrix.needsUpdate=!0}}Ie(0);function Be(k,re,he){ze.position.set(he.x+Re.x*200,he.y+Re.y*200,he.z+Re.z*200),ze.target.position.set(he.x,he.y,he.z),Pe.position.set(he.x,0,he.z);for(let pe=0;pe<X;pe++)P.setY(pe,.35*Math.sin(q[pe]*.02+re*.8)+.25*Math.cos(se[pe]*.017-re*.6));P.needsUpdate=!0,Ie(re)}function ke(){i.remove(de),de.traverse(k=>{if(k.geometry&&k.geometry.dispose(),k.material){let re=Array.isArray(k.material)?k.material:[k.material];for(let he of re)he.dispose()}}),ze.shadow.map&&ze.shadow.map.dispose(),de.clear(),i.fog===N&&(i.fog=qe??null),i.background===A&&(i.background=Ne??null)}return i.add(de),{group:de,sun:ze,update:Be,dispose:ke,heightAt:S}}var Oc=[.62,.6,.55],As=[.5,.49,.45],Fh=[.72,.3,.18],Am=[.6,.24,.15],Oh=[.16,.2,.28],ab=[.2,.38,.3],Rm=[.36,.25,.16],io=[[.1,.27,.08],[.14,.34,.1],[.07,.2,.06],[.2,.42,.12]],tr=[[.93,.84,.62],[.9,.74,.5],[.94,.9,.8],[.88,.66,.5]],fn=(i,e,t)=>{let n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function Fc(i,e,t,n){let s=n*3+1,r=Math.ceil(t/2);return Bn(e+2,s+r+1,t+2,1,(o,a,c)=>{let l=o-1,h=c-1;if(a<s){if(l<0||h<0||l>=e||h>=t)return null;if(!(l===0||h===0||l===e-1||h===t-1))return a===s-1?i:null;let p=l===0||l===e-1?h:l,x=l===0||l===e-1?t:e;return a%3===2&&p%3===1&&p<x-1?Oh:a%3===2&&p%3===2&&p<x-1&&fn(l,a,h)>.45?ab:a===0?As:i}let u=a-s;return h>=u-1&&h<=t-u&&u<=r?(l+u)%2?Fh:Am:null},.14)}function cb(i){return Bn(7,23,7,1,(n,s,r)=>{let o=n-1,a=r-1;if(s<17)return o<0||a<0||o>=5||a>=5?null:o===0||a===0||o===4||a===4?(s===6||s===11||s===14)&&(o===2||a===2)?Oh:s===0?As:i:s===16?i:null;let c=s-17;return n>=c&&n<=6-c&&r>=c&&r<=6-c?(n+r)%2?Fh:Am:null},.14)}function lb(i){let r=[];for(let o=0;o<6;o++)r.push([11+(fn(i,o,1)-.5)*9,13+fn(i,o,2)*6,11+(fn(i,o,3)-.5)*9,3.6+fn(i,o,4)*2.4]);return Bn(22,24,22,.7,(o,a,c)=>{if(a<12&&Math.abs(o-11+.5)<1.3&&Math.abs(c-11+.5)<1.3)return Rm;for(let l of r){let h=o-l[0],u=(a-l[1])*1.25,f=c-l[2];if(h*h+u*u+f*f<l[3]*l[3])return io[Math.floor(fn(o,a,c)*io.length)]}return null},.22)}function ub(){return Bn(14,16,8,.5,(i,e,t)=>{let s=5+Math.floor((i-1)/2)*1.6;return i===0?e<5?(e+t)%3?Oc:As:null:i>=1&&i<13&&e<s?e>=s-1?[.42,.42,.44]:As:i===13&&e<15&&(t===0||t===7)?[.16,.17,.2]:null},.12)}function Uh(i,e){let r=e-3-9;return Bn(i,e+2,5,1,(o,a,c)=>{let l=o%22,h=a>=e&&(c===0||c===4);if(a>=e)return h?As:null;if(a>=e-2)return(o+a+c)%3?Oc:As;if(l<4)return(o+a+c)%4?Oc:As;if(a<r)return null;let u=l-4-9+.5,f=a-r;return u*u+f*f>81?(o+a+c)%3?Oc:As:null},.14)}function hb(i){return Bn(6,4,6,.5,(t,n,s)=>{let r=t-3+.5,o=s-6/2+.5,a=(n-.8)*1.5,c=2.5+(fn(t+i,n,s)-.5)*1.2;return r*r+a*a+o*o<c*c?io[Math.floor(fn(t,n+i,s)*io.length)]:null},.22)}function fb(){let t=[[.12,.3,.14],[.15,.36,.16],[.1,.25,.12]];return Bn(6,20,6,.6,(n,s,r)=>{let o=n-3+.5,a=r-6/2+.5;if(s<2)return Math.abs(o)<.6&&Math.abs(a)<.6?Rm:null;let c=(s-2)/18,l=2.6*Math.sin(Math.PI*Math.min(1,.18+c*.82))**.7*(1-c*.55)+.3;return o*o+a*a<l*l?t[Math.floor(fn(n,s,r)*3)]:null},.2)}function wm(i){let r=(a,c)=>{let l=(a-15+.5)/15,h=(c-15+.5)/(30/2),u=Math.hypot(l,h)+(fn(Math.floor(a/3)+i,0,Math.floor(c/3))-.5)*.28,f=Math.max(0,Math.min(1,(.95-u)/.16)),p=14+Math.floor(fn(Math.floor(a/5),i,Math.floor(c/5))*3)*2;return Math.floor(p*f*f*(3-2*f))},o=[];for(let a=0;a<5;a++){let c=Math.floor(15+(fn(i,a,1)-.5)*14),l=Math.floor(15+(fn(i,a,2)-.5)*14);o.push([c,l,r(c,l),tr[Math.floor(fn(i,a,3)*tr.length)],a===0?7:3])}return Bn(30,26,30,1.6,(a,c,l)=>{let h=r(a,l);for(let[p,x,_,m,d]of o){let y=Math.abs(a-p),v=Math.abs(l-x),g=d>3?1:2;if(y<=g&&v<=1&&c>=_&&c<_+d)return c===_+d-2&&y!==g&&v===1?Oh:m;if(y<=g&&v<=1-(c-_-d)&&c>=_+d&&c<_+d+2)return Fh}if(c>=h)return null;if(c===h-1)return fn(a,5,l)>.75?io[0]:[.36,.56,.2];let u=c%5===0?.86:1,f=.93+.14*fn(Math.floor(a/2),c,Math.floor(l/2));return fn(a,c,l)>.965?io[2]:[.74*u*f,.71*u*f,.64*u*f]},.1)}function er(i,e,t){let n=new xn(i,e,t.length),s=new et,r=new Qt,o=new O,a=new O,c=new O(0,1,0);return t.forEach((l,h)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??l.s??1,l.sy??l.s??1,l.sz??l.s??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),n.setMatrixAt(h,s),l.color&&n.setColorAt(h,l.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1,n}function db(){if(typeof document>"u")return null;let i=document.createElement("canvas");i.width=1024,i.height=192;let e=i.getContext("2d");e.fillStyle="#f2efe8",e.fillRect(0,0,1024,192),e.fillStyle="#d6202a";for(let n of[0,880])for(let s=0;s<2;s++)e.beginPath(),e.moveTo(n+s*72,192),e.lineTo(n+s*72+36,192),e.lineTo(n+s*72+108,0),e.lineTo(n+s*72+72,0),e.fill();e.fillStyle="#23262e",e.font='italic 900 118px "Arial Narrow", Impact, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("POLYGON RUSH",512,104);let t=new fi(i);return t.colorSpace=wt,t.anisotropy=8,t}function Cm(i,e,t,n){let s=new ft;s.name="scenery";let r=[],o=()=>{let L=new it({vertexColors:!0,roughness:.9,metalness:0});return r.push(L),L},a=(L,V)=>{V.length&&(r.push(L),s.add(er(L,o(),V)))},c={x:0,y:0,z:0,heading:0},l=i.length,h=L=>!!bs(i,(L%l+l)%l,"tunnel"),u=L=>i.pts[Math.floor((L%l+l)%l/i.step)%i.pts.length].width,f=(L,V)=>{let H=1/0;for(let j=0;j<i.pts.length;j+=3){let z=i.pts[j],te=(z.x-L)*(z.x-L)+(z.z-V)*(z.z-V);te<H&&(H=te)}return Math.sqrt(H)},p=(L,V)=>{let H=Math.floor(L/i.step);for(let j=0;j<V/i.step;j+=4)if(Math.abs(i.pts[(H+j)%i.pts.length].curv)>.004)return!1;return!h(L)&&!h(L+V/2)&&!h(L+V)},x=[[24,22,-1]];for(let L=380;L<l-220&&x.length<4;L+=70)p(L-10,80)&&(x.push([L,14,t.sign()]),L+=420);let _=[],m=[],d=[],y=[14032938,2777046,15909424,15921906,2793562,9060290,15235614,2042436],v=L=>x.some(([V,H])=>L>V-12&&L<V+H*4+12);for(let[L,V,H]of x)for(let j=0;j<V;j++){let z=L+j*4,te=H*(u(z)/2+6+.6);Ft(i,z,te,c);let fe=c.heading+H*Math.PI/2,ge=Math.sin(c.heading),Ee=Math.cos(c.heading),de=-H*Ee,ne=H*ge;_.push({x:c.x+de*3.5,y:c.y-.3,z:c.z+ne*3.5,ry:fe});for(let $=0;$<6;$++)for(let ee=0;ee<4;ee++){if(t.next()<.18)continue;let P=-1.6+ee*1.05+t.range(-.15,.15),X=1+$*1,q=c.x+de*X+ge*P,se=c.z+ne*X+Ee*P,ye=c.y-.3+2.5+$*.8,Re=new Ae(t.pick(y));m.push({x:q,y:ye+.4,z:se,ry:c.heading,sx:.5,sy:.8,sz:.36,color:Re}),d.push({x:q,y:ye+1,z:se,ry:c.heading,sx:.36,sy:.36,sz:.36,color:new Ae(t.pick([15317386,13208414,9067066,15847334]))}),m.push({x:q-de*.12,y:ye-.1,z:se-ne*.12,ry:c.heading,sx:.46,sy:.3,sz:.5,color:new Ae(t.pick([2042436,2829099,3820138,5916210]))}),d.push({x:q,y:ye+1.22,z:se,ry:c.heading,sx:.4,sy:.12,sz:.4,color:new Ae(t.pick([2759698,1118481,14032938,15909424,6965802,15921906]))}),t.next()<.22&&m.push({x:q+ge*.32,y:ye+1.05,z:se+Ee*.32,ry:c.heading,sx:.14,sy:.6,sz:.14,color:Re})}}if(a(ub(),_),m.length){let L=new on(1,1,1);r.push(L);let V=new it({roughness:.85});r.push(V),s.add(er(L,V,m),er(L,V,d));let H=_.map(j=>({x:j.x,y:j.y+8.2,z:j.z,ry:j.ry,sx:8,sy:.4,sz:4.05,color:new Ae(2303534)}));s.add(er(L,V,H))}let g=db(),T=new it({map:g,color:g?16777215:15921128,roughness:.7,side:At});r.push(T),g&&r.push(g);let E=new Cn(1,1);r.push(E);let M=[],w=(L,V)=>{if(h(L))return;let H=V*(u(L)/2+6-.22);Ft(i,L,H,c),M.push({x:c.x,y:c.y+.52,z:c.z,ry:c.heading+(V<0?-Math.PI/2:Math.PI/2),sx:9,sy:.92,sz:1})};for(let L=120;L<240;L+=13)w(L,-1);for(let L=30;L<110;L+=13)w(L,1);for(let L=400;L<l-80;L+=260)w(L,-1),w(L+13,-1),w(L+120,1);if(M.length){let L=er(E,T,M);L.castShadow=!1,s.add(L)}let b=[[],[],[]];for(let L=130;L<l-20;L+=t.range(13,28)){if(v(L)||h(L)||h(L+12)||h(L-12))continue;let H=(t.next()<.82?-1:1)*(u(L)/2+6+t.range(3.4,6.5));Ft(i,L,H,c);let j=n?n(c.x,c.z):c.y;j<1.5||b[t.int(0,2)].push({x:c.x,y:j-.2,z:c.z,ry:t.range(0,6.28),s:t.range(1.3,2.05)})}if(b.forEach((L,V)=>a(lb(11+V*7),L)),n){let L=[];for(let te=200;te<l-100;te+=45)for(let fe of[-1,1]){let ge=fe*t.range(70,150);Ft(i,te,ge,c);let Ee=n(c.x,c.z);Ee>c.y+6&&Ee>6&&f(c.x,c.z)>55&&L.push({x:c.x,z:c.z,y:Ee,score:Ee-c.y+t.range(0,4)})}L.sort((te,fe)=>fe.score-te.score);let V=[];for(let te of L){if(V.length>=4)break;V.every(fe=>Math.hypot(fe.x-te.x,fe.z-te.z)>220)&&V.push(te)}let H=[{geo:Fc(tr[0],8,7,2),items:[]},{geo:Fc(tr[1],10,7,3),items:[]},{geo:Fc(tr[2],7,6,2),items:[]},{geo:Fc(tr[3],9,8,3),items:[]}],j=[],z=[];for(let te of V){for(let fe=0;fe<2;fe++){let ge=te.x+t.range(-12,12),Ee=te.z+t.range(-12,12);f(ge,Ee)<45||(j.push({x:ge,y:n(ge,Ee)-.5,z:Ee,ry:t.int(0,3)*Math.PI/2}),z.push([ge,Ee]))}for(let fe=0;fe<60&&H.reduce((ge,Ee)=>ge+Ee.items.length,0)<V.length*22;fe++){let ge=t.range(0,6.28),Ee=t.range(8,60),de=te.x+Math.cos(ge)*Ee,ne=te.z+Math.sin(ge)*Ee,$=n(de,ne);$<3||f(de,ne)<42||z.some(ee=>Math.hypot(ee[0]-de,ee[1]-ne)<12)||(z.push([de,ne]),t.pick(H).items.push({x:de,y:$-.5,z:ne,ry:t.int(0,3)*Math.PI/2}))}}for(let te of H)a(te.geo,te.items);a(cb(tr[2]),j)}let S=[[],[]];for(let L=115;L<l-10;L+=t.range(4.5,9))if(!h(L)){if(t.next()<.3){L+=t.range(20,60);continue}for(let V of[-1,1]){if(t.next()<.35)continue;let H=V*(u(L)/2+6+t.range(1.4,2.6));Ft(i,L,H,c),S[t.int(0,1)].push({x:c.x,y:c.y-.5,z:c.z,ry:t.range(0,6.28),s:t.range(.8,1.4)})}}S.forEach((L,V)=>a(hb(3+V*5),L));let R=[];for(let L=160;L<l-60;L+=t.range(120,220)){let V=t.sign(),H=t.int(5,9);for(let j=0;j<H;j++){let z=L+j*4.2;if(h(z))continue;Ft(i,z,V*(u(z)/2+6+4.2),c);let te=n?n(c.x,c.z):c.y;te<1.5||R.push({x:c.x,y:te-.2,z:c.z,ry:t.range(0,6.28),s:t.range(.85,1.2)})}}if(a(fb(),R),n){let L=[[],[],[]],V=[];for(let H=150;H<l-50;H+=t.range(120,220))for(let j of[-1,1]){if(t.next()<.3)continue;Ft(i,H,j*t.range(72,125),c);let z=n(c.x,c.z);z<1||f(c.x,c.z)<56||V.some(te=>Math.hypot(te[0]-c.x,te[1]-c.z)<70)||(V.push([c.x,c.z]),L[t.int(0,2)].push({x:c.x,y:z-3,z:c.z,ry:t.range(0,6.28),s:t.range(1.2,1.9)}))}L.forEach((H,j)=>a(wm(17+j*13),H))}{let L=[],V=[],H=new Ae(12172998),j=new Ae(7172730);for(let z=0;z<l;z+=4){if(h(z)||v(z))continue;let te=u(z)/2+6-.75;Ft(i,z,te,c);let fe=c.x,ge=c.y,Ee=c.z,de=c.heading;L.push({x:fe,y:ge+.4,z:Ee,ry:de,sx:.12,sy:.8,sz:.12,color:j}),Ft(i,z+4,u(z+4)/2+6-.75,c);let ne=(fe+c.x)/2,$=(ge+c.y)/2,ee=(Ee+c.z)/2,P=Math.hypot(c.x-fe,c.z-Ee)+.05,X=Math.atan2(c.x-fe,c.z-Ee);for(let q of[.42,.72])V.push({x:ne,y:$+q,z:ee,ry:X,sx:.07,sy:.2,sz:P,color:H})}if(L.length){let z=new on(1,1,1),te=new it({roughness:.35,metalness:.85});r.push(z,te),s.add(er(z,te,L),er(z,te,V))}}if(n){let L=[];for(let z=0;z<400&&L.length<16;z++){let te=t.range(i.bounds.minX-420,i.bounds.maxX+420),fe=t.range(i.bounds.minZ-420,i.bounds.maxZ+420),ge=f(te,fe);n(te,fe)>-3||ge<90||ge>520||L.some(Ee=>Math.hypot(Ee.x-te,Ee.z-fe)<60)||L.push({x:te,y:-.3,z:fe,ry:t.range(0,6.28),s:t.range(.9,1.5)})}let V=[.93,.93,.9],H=[.98,.97,.93],j=[.55,.36,.2];a(Bn(5,18,14,.7,(z,te,fe)=>{let ge=Math.abs(fe-6.5),Ee=Math.abs(z-2);return te<2?Ee<=2-(te===0?1:0)-(ge>5?1:0)&&ge<7-(te===0?1:0)?te===1&&Ee<2?j:V:null:z===2&&fe===7?[.3,.26,.22]:z===2&&fe>7&&fe<13&&te<17-(fe-7)*2.6||z===2&&fe<7&&fe>1&&te<14-(7-fe)*2.4?H:null},.06),L)}{Ft(i,0,0,c);let L=c.x,V=c.y,H=c.z,j=c.heading,z=Math.sin(j),te=Math.cos(j),fe=-te,ge=z,Ee=(ne,$,ee)=>f(ne,$)>ee,de=!1;for(let ne of[430,500,380,580,660]){for(let $ of[70,130,0,-70,190,-140]){if(de)break;let ee=L+z*ne+fe*$,P=H+te*ne+ge*$;if(!Ee(ee,P,85))continue;let X=n?Math.max(-2,n(ee,P)):V;a(wm(101),[{x:ee,y:X-3,z:P,ry:j+.6,s:2.3}]);let q=ee-z*95-fe*30,se=P-te*95-ge*30;if(Ee(q,se,45)&&Ee(q+fe*90,se+ge*90,40)&&Ee(q-fe*90,se-ge*90,40)){let ye=n?Math.max(-1,n(q,se)):V;a(Uh(198,24),[{x:q,y:Math.min(ye,V)-5,z:se,ry:j}])}de=!0}if(de)break}}for(let L of[1,-1]){let V=!0;for(let j of[210,270,330,390])Ft(i,j,L*62,c),f(c.x,c.z)<46&&(V=!1);if(!V||L<0)continue;Ft(i,300,L*62,c);let H=n?n(c.x,c.z):c.y;a(Uh(198,22),[{x:c.x,y:H-4,z:c.z,ry:c.heading-Math.PI/2}]);break}let F=-1,B=-1/0;for(let L=300;L<l-300;L+=40){let V=Math.floor(L/i.step),H=0;for(let z=0;z<60;z+=6)H+=Math.abs(i.pts[(V+z)%i.pts.length].curv);let j=-H*400+t.range(0,1)-(h(L)||h(L+100)?100:0);j>B&&(B=j,F=L)}if(F>0)for(let L of[1,-1]){Ft(i,F+90,L*95,c);let V=n?n(c.x,c.z):c.y;if(V<2)continue;a(Uh(198,20),[{x:c.x,y:Math.min(V,c.y)-4,z:c.z,ry:c.heading-Math.PI/2}]);break}return{group:s,dispose(){for(let L of r)L.dispose?.()}}}function pb(i,e){let t=i.length,n=new Float64Array(t),s=0;for(let r=0;r<t;r++){let o=0;s=0;for(let a=Math.max(0,r-e);a<=Math.min(t-1,r+e);a++)s+=i[a],o++;n[r]=s/o}return n}function Im(i){let e=i.x.length,t=i.step,n=i.x,s=i.y,r=i.z,o=new Float64Array(e),a=new Float64Array(e),c=new Float64Array(e);for(let M=0;M<e;M++){let w=Math.max(0,M-1),b=Math.min(e-1,M+1),S=n[b]-n[w],R=r[b]-r[w],F=Math.hypot(S,R)||1e-9;o[M]=S/F,a[M]=R/F,c[M]=(s[b]-s[w])/F}let l=new Float64Array(e);for(let M=1;M<e-1;M++){let w=-a[M],b=o[M];l[M]=((o[M+1]-o[M-1])*w+(a[M+1]-a[M-1])*b)/(2*t)}l[0]=l[1],l[e-1]=l[e-2];let h=pb(l,12),u=new Float64Array(e);for(let M=0;M<e;M++)u[M]=Math.min(95,Math.sqrt(30/Math.max(1e-6,Math.abs(h[M]))));for(let M=e-2;M>=0;M--)u[M]=Math.min(u[M],Math.sqrt(u[M+1]**2+80*t));for(let M=1;M<e;M++)u[M]=Math.min(u[M],Math.sqrt(u[M-1]**2+40*t));let f=new Array(e),p=1/0,x=-1/0,_=1/0,m=-1/0,d=1/0,y=0;for(let M=0;M<e;M++){let w=Math.hypot(1,c[M]);f[M]={s:M*t,x:n[M],y:s[M],z:r[M],tx:o[M]/w,ty:c[M]/w,tz:a[M]/w,rx:-a[M],rz:o[M],width:i.width,curv:h[M],vmax:u[M],slope:c[M]},n[M]<p&&(p=n[M]),n[M]>x&&(x=n[M]),r[M]<_&&(_=r[M]),r[M]>m&&(m=r[M]);let b=1/Math.max(1e-9,Math.abs(h[M]));b<d&&(d=b),Math.abs(c[M])>y&&(y=Math.abs(c[M]))}let v=[],g=[];for(let M of i.features)M.type==="tunnel"?v.push({type:"tunnel",s0:M.s0,s1:M.s1,name:M.name}):g.push({s0:M.s0,s1:M.s1,name:M.name});let T=(e-1)*t,E=0;for(let M=0;M<e;M++)E+=t/Math.max(5,u[M]);return{seed:"REAL:"+i.id,attempts:1,open:!0,real:i,length:T,step:t,count:e,pts:f,features:v,bridges:g,bounds:{minX:p,maxX:x,minZ:_,maxZ:m},stats:{minRadius:d,maxSlope:y,lapTimeEstimate:E,corners:0}}}var Pm=["torre","castello","borgo","chiesa","agrumeto","peschereccio","casello"];function mb(i,e,t){let n=[],s=i.length,r=l=>{let h=1/0,u=0;for(let f=0;f<i.count;f+=5){let p=i.pts[f],x=(p.x-l.x)**2+(p.z-l.z)**2;x<h&&(h=x,u=f)}return{dist:Math.sqrt(h),q:i.pts[u]}},o={},a=(l,h)=>(o[l]=(o[l]||0)+1)<=h,c=e.places.map(l=>({p:l,n:r(l)})).filter(l=>l.n.dist<1600&&l.n.q.s>150&&l.n.q.s<s-150).sort((l,h)=>l.n.dist-h.n.dist);for(let{p:l,n:h}of c)n.some(u=>u.x!==void 0&&Math.hypot(u.x-l.x,u.z-l.z)<250)||(l.kind==="castle"?/^torre/i.test(l.name)?a("torre",2)&&n.push({prop:"torre",x:l.x,z:l.z,height:48,label:l.name}):/castel|rocca|forte|fort/i.test(l.name)&&a("castello",3)&&n.push({prop:"castello",x:l.x,z:l.z,width:170,label:l.name}):l.kind==="place"&&(l.rank==="village"||l.rank==="town"||l.rank===void 0)&&(t(l.x,l.z)-h.q.y>120&&h.dist>250?a("borgo",3)&&n.push({prop:"borgo",x:l.x,z:l.z,width:300}):h.dist>90&&h.dist<450&&a("chiesa",3)&&n.push({prop:"chiesa",x:l.x,z:l.z,width:46})));for(let l=900,h=0;l<s-600;l+=1300,h++){let u=i.pts[Math.round(l/i.step)];for(let f of[1,-1]){let p=f*560;if(t(u.x+u.rx*p,u.z+u.rz*p)<=0&&t(u.x+u.rx*p*1.3,u.z+u.rz*p*1.3)<=0)h%2===0&&n.push({prop:"peschereccio",s:l,d:p+h%3*40*f,width:34,sea:!0});else if(h%2===1){let x=f*78,_=t(u.x+u.rx*x,u.z+u.rz*x);_>1&&Math.abs(_-u.y)<14&&n.push({prop:"agrumeto",s:l,d:x,width:70})}}}return n}function Lm({track:i,data:e,baked:t,heightAt:n,clearance:s}){let r=new ft;r.name="real-props";let o=[],a=[];if(!t)return{group:r,placed:o,skipped:a,dispose(){}};let c=new Vi({vertexColors:!0}),l=new Map,h=i.length,u=(f,p)=>{let x=1/0,_=0;for(let m=0;m<i.count;m+=2){let d=i.pts[m],y=(d.x-f)**2+(d.z-p)**2;y<x&&(x=y,_=m)}return{q:i.pts[_],dist:Math.sqrt(x)}};for(let f of mb(i,e,n)){let p=t[f.prop];if(!p?.cells?.length)continue;let x=p._ext;if(!x){let w=[1/0,1/0,1/0],b=[-1/0,-1/0,-1/0];for(let S=0;S<p.cells.length;S+=4)for(let R=0;R<3;R++)w[R]=Math.min(w[R],p.cells[S+R]),b[R]=Math.max(b[R],p.cells[S+R]+1);x=p._ext=[b[0]-w[0],b[1]-w[1],b[2]-w[2]]}let _=f.height?f.height/x[1]:f.width/Math.max(x[0],x[2]),m=Math.hypot(x[0],x[2])*_/2,d,y;if(f.x!==void 0)d=f.x,y=f.z;else{let w=i.pts[Math.max(0,Math.min(i.count-1,Math.round(f.s/i.step)))];d=w.x+w.rx*f.d,y=w.z+w.rz*f.d}let v=u(d,y);if(v.dist-m<s){if(f.x===void 0||v.dist<1){a.push(f.prop+" : trop pr\xE8s de la route");continue}let w=(m+s+2)/v.dist;if(d=v.q.x+(d-v.q.x)*w,y=v.q.z+(y-v.q.z)*w,v=u(d,y),v.dist-m<s){a.push(f.prop+" : trop pr\xE8s de la route");continue}}let g;if(f.sea){if(n(d,y)>0){a.push(f.prop+" : pas en mer");continue}g=-.12*_*x[1]}else{g=1/0;for(let[w,b]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]])g=Math.min(g,n(d+w*m*.6,y+b*m*.6));g=Math.max(g,.2)-.5}let T=f.prop+"@"+_.toFixed(3),E=l.get(T);E||l.set(T,E=gm(p.cells,_));let M=new ot(E,c);M.name="prop-"+f.prop,M.position.set(d,g,y),M.rotation.y=Math.atan2(v.q.x-d,v.q.z-y),M.updateMatrix(),M.matrixAutoUpdate=!1,r.add(M),o.push({prop:f.prop,label:f.label||null,s:v.q.s,dist:v.dist,x:d,y:g,z:y,size:_})}return{group:r,placed:o,skipped:a,dispose(){c.dispose();for(let f of l.values())f.dispose()}}}var Bh=.12,gb=8200,xb=(i,e,t=1.08,n=1.45)=>{let s=(i>>16&255)/255,r=(i>>8&255)/255,o=(i&255)/255,a=.3*s+.59*r+.11*o,c=(.38+(a-.38)*1.35)/Math.max(a,.001);s*=c,r*=c,o*=c,a=.3*s+.59*r+.11*o,s=Math.min(1,Math.max(0,(a+(s-a)*n)*t)),r=Math.min(1,Math.max(0,(a+(r-a)*n)*t)),o=Math.min(1,Math.max(0,(a+(o-a)*n)*t)),e[0]=s,e[1]=r,e[2]=o};function zh(i,e,{seaCut:t=.25,yOffset:n=0,tint:s=null}={}){let{cell:r,ix:o,iz:a,h:c,c:l}=i,h=o.length,u=(g,T)=>(g+4e4)*1e5+(T+4e4),f=new Map,p=new Float32Array(h);for(let g=0;g<h;g++)p[g]=Math.floor(c[g]/10/e)*e,f.set(u(o[g],a[g]),p[g]);let x=[],_=[],m=[],d=[0,0,0],y=(g,T,E,M,w,b,S,R,F,B,L,V,H,j,z,te,fe,ge)=>{x.push(g,T,E,M,w,b,S,R,F,g,T,E,S,R,F,B,L,V);for(let Ee=0;Ee<6;Ee++)m.push(H,j,z),_.push(te,fe,ge)};for(let g=0;g<h;g++){let T=p[g];if(c[g]/10<=t)continue;xb(l[g],d),s&&s(d,(o[g]+.5)*r,(a[g]+.5)*r,T);let E=.92+.16*((o[g]*73856093^a[g]*19349663)>>>0)/4294967295,M=d[0]*E,w=d[1]*E,b=d[2]*E,S=o[g]*r,R=a[g]*r,F=S+r,B=R+r,L=T+n;y(S,L,R,S,L,B,F,L,B,F,L,R,0,1,0,M,w,b);let V=.2+.45*M,H=.19+.42*w,j=.17+.38*b,z=(te,fe,ge,Ee,de,ne)=>{let $=f.get(u(o[g]+te,a[g]+fe));if($===void 0||$>=T)return;let ee=$+n;y(ge,ee,Ee,ge,L,Ee,de,L,ne,de,ee,ne,te,0,fe,V,H,j)};z(1,0,F,B,F,R),z(-1,0,S,R,S,B),z(0,1,S,B,F,B),z(0,-1,F,R,S,R)}let v=new pt;return v.setAttribute("position",new at(x,3)),v.setAttribute("normal",new at(m,3)),v.setAttribute("color",new at(_,3)),v.computeBoundingSphere(),{geo:v,heights:f,key:u,q:p}}function Ki(i,e,t){let n=new xn(i,e,t.length),s=new et,r=new Qt,o=new O,a=new O,c=new O(0,1,0);return t.forEach((l,h)=>{r.setFromAxisAngle(c,l.ry||0),o.set(l.sx??1,l.sy??1,l.sz??1),a.set(l.x,l.y,l.z),s.compose(a,r,o),n.setMatrixAt(h,s),l.color&&n.setColorAt(h,l.color)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),n.frustumCulled=!1,n}function _b(i){if(typeof document>"u")return null;let e=document.createElement("canvas");e.width=512,e.height=192;let t=e.getContext("2d");t.fillStyle="#0c7a43",t.fillRect(0,0,512,192),t.strokeStyle="#ffffff",t.lineWidth=8,t.strokeRect(8,8,496,176),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.font="bold 62px Arial, Helvetica, sans-serif",t.fillText(i[0],256,i[1]?70:96,470),i[1]&&(t.font="bold 44px Arial, Helvetica, sans-serif",t.fillText(i[1],256,136,470));let n=new fi(e);return n.colorSpace=wt,n.anisotropy=8,n}function Dm(i,e,t,n){let s=e.real,r=new ft;r.name="environment";let o=[],a=K=>(o.push(K),K),c=!!t.night,l=()=>js(a(new it({vertexColors:!0,roughness:.95,metalness:0,side:At})),1,1),h=zh(s.near,1),u=new ot(a(h.geo),l());u.receiveShadow=!0,u.name="real-terrain-near";let f=zh(s.mid,4,{yOffset:-3}),p=new ot(a(f.geo),js(a(new it({vertexColors:!0,roughness:1,side:At})),8,.7));p.name="real-terrain-mid";let x=new Ae(t.skyHorizon),_=(e.bounds.minX+e.bounds.maxX)/2,m=(e.bounds.minZ+e.bounds.maxZ)/2,d=zh(s.far,60,{tint:(K,Me,ve,ie)=>{let Te=Math.hypot(Me-_,ve-m),oe=Math.min(.82,1-Math.exp(-Te/3e4)),be=ie>2300?.5:0;K[0]=(K[0]+(1-K[0])*be)*(1-oe)+x.r*oe,K[1]=(K[1]+(1-K[1])*be)*(1-oe)+x.g*oe,K[2]=(K[2]+(1-K[2])*be)*(1-oe)+x.b*oe}}),y=new ot(a(d.geo),a(new Gt({vertexColors:!0,fog:!1,side:At})));y.name="real-terrain-far",y.scale.setScalar(Bh),y.frustumCulled=!1,y.renderOrder=-5,r.add(u,p,y);let v=(K,Me)=>{let ve=s.near.cell,ie=h.heights.get(h.key(Math.floor(K/ve),Math.floor(Me/ve)));if(ie!==void 0)return ie;let Te=s.mid.cell,oe=f.heights.get(f.key(Math.floor(K/Te),Math.floor(Me/Te)));return oe!==void 0?oe-3:-5},g=new ot(a(new Cn(6e4,6e4)),a(new it({color:t.seaColor,roughness:.25,metalness:.2})));g.rotation.x=-Math.PI/2,g.position.y=.05,g.name="real-sea",r.add(g);let T=new O(...t.sunDir).normalize(),E=a(new St({side:$t,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ae(t.skyTop)},uHor:{value:new Ae(t.skyHorizon)},uSun:{value:new Ae(t.sunColor)},uSunDir:{value:T}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uTop, uHor, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = mix(uHor, uTop, pow(max(d.y, 0.0), 0.5));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.25);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`})),M=new ot(a(new xs(gb,32,16)),E);M.renderOrder=-10,M.frustumCulled=!1,r.add(M);let w=i.fog,b=i.background;i.fog=new Xr(t.fogColor,(t.fogDensity||5e-4)*.3),i.background=new Ae(t.skyHorizon);let S=new Kr(t.hemiSky,t.hemiGround,t.hemiIntensity),R=new vi(t.sunColor,t.sunIntensity);R.castShadow=!0,R.shadow.mapSize.set(2048,2048);let F=R.shadow.camera;F.left=-90,F.right=90,F.top=90,F.bottom=-90,F.near=1,F.far=500,R.shadow.bias=-5e-4,r.add(S,R,R.target);let B=s.buildings,L=[15983808,15321498,16117730,14924172,14472128,15784368,13620956],V=[11884346,11030070,14275268,13222064,9390646],H=[],j=[],z=60,te=new Map;for(let K=0;K<e.count;K+=3){let Me=e.pts[K],ve=Math.floor(Me.x/z)+","+Math.floor(Me.z/z),ie=te.get(ve);ie||te.set(ve,ie=[]),ie.push(Me)}let fe=s.width/2+6+2,ge=(K,Me,ve,ie)=>{let Te=null,oe=Math.max(ve,ie)+fe;for(let be=Math.floor((K-oe)/z);be<=Math.floor((K+oe)/z);be++)for(let W=Math.floor((Me-oe)/z);W<=Math.floor((Me+oe)/z);W++){let we=te.get(be+","+W);if(we)for(let C of we){let D=Math.max(0,Math.abs(C.x-K)-ve),U=Math.max(0,Math.abs(C.z-Me)-ie);D*D+U*U<fe*fe&&(Te===null||C.y<Te)&&(Te=C.y)}}return Te},Ee=0,de=0;for(let K=0;K<B.x.length;K++){let ve=(B.l[K]>0?Math.min(B.l[K],9):1+Math.floor(n.next()*3)+(B.w[K]*B.d[K]>300?1:0))*3.1,ie=Math.max(v(B.x[K],B.z[K]),.3),Te=ge(B.x[K],B.z[K],B.w[K]/2+.3,B.d[K]/2+.3);if(Te!==null){let oe=Te-3.2-ie;if(oe<3){Ee++;continue}ve>oe&&(ve=oe,de++)}H.push({x:B.x[K],y:ie+ve/2-.5,z:B.z[K],sx:B.w[K],sy:ve+1,sz:B.d[K],color:new Ae(n.pick(L))}),j.push({x:B.x[K],y:ie+ve+.35,z:B.z[K],sx:B.w[K]+.6,sy:.7,sz:B.d[K]+.6,color:new Ae(n.pick(V))})}let ne=a(new on(1,1,1));if(H.length){let K=xm(js(a(new it({roughness:.9})),1.5,.8)),Me=a(new it({roughness:.85})),ve=Ki(ne,K,H),ie=Ki(ne,Me,j);ve.name="real-buildings",ve.castShadow=!0,r.add(ve,ie)}let $=s.trees,ee=0;if($&&$.x.length){let K=[],Me=[],ve=new Ae(7031346),ie=new Ae;for(let oe=0;oe<$.x.length;oe++){let be=$.x[oe],W=$.z[oe];if(ge(be,W,2.5,2.5)!==null)continue;let we=Math.sin(be*12.9898+W*78.233)*43758.5453,C=we-Math.floor(we),D=$.y[oe],U=.75+.5*C;if($.k[oe])if(C<.55){let Z=7+6*C;Me.push({x:be,y:D+Z/2+.6,z:W,sx:1.7,sy:Z,sz:1.7,color:ie.setRGB(.1*U,.26*U,.13*U).clone()})}else{let Z=6+5*C;K.push({x:be,y:D+Z/2,z:W,sx:.7,sy:Z,sz:.7,color:ve}),Me.push({x:be,y:D+Z+.9,z:W,sx:6.5,sy:2.2,sz:6.5,color:ie.setRGB(.14*U,.34*U,.16*U).clone()})}else{let Z=3+2.4*C;K.push({x:be,y:D+.9,z:W,sx:.6,sy:1.8,sz:.6,color:ve}),Me.push({x:be,y:D+1.6+Z/2,z:W,sx:Z,sy:Z*.85,sz:Z,color:ie.setRGB(.3*U,.44*U,.2*U).clone()})}}ee=Me.length;let Te=js(a(new Vi),1.1,.9);if(K.length){let oe=Ki(ne,a(new Vi),K);oe.name="real-trunks",r.add(oe)}if(Me.length){let oe=Ki(ne,Te,Me);oe.name="real-trees",r.add(oe)}}let P={x:0,y:0,z:0,heading:0},X=s.width/2,q=new Ae(12170925),se=new Ae(10131343),ye=[],Re=[];for(let K of e.bridges){for(let Me=K.s0+6;Me<K.s1-2;Me+=34){Ft(e,Me,0,P);let ve=v(P.x,P.z),ie=P.y-1.6-ve;ie<3||(ye.push({x:P.x,y:ve+ie/2,z:P.z,ry:P.heading,sx:X*1.5,sy:ie,sz:2.4,color:se}),ye.push({x:P.x,y:P.y-1.2,z:P.z,ry:P.heading,sx:X*2+5,sy:1.2,sz:3.6,color:q}))}for(let Me=K.s0;Me<K.s1;Me+=8){for(let ve of[-1,1])Ft(e,Me+4,ve*(X+6+.4),P),Re.push({x:P.x,y:P.y-.9,z:P.z,ry:P.heading,sx:.9,sy:1.8,sz:8.3,color:q});Ft(e,Me+4,0,P),Re.push({x:P.x,y:P.y-1.25,z:P.z,ry:P.heading,sx:X*2+12,sy:.9,sz:8.3,color:se})}}let Pe=js(a(new it({roughness:.9})),.8,.6);if(ye.length){let K=Ki(ne,Pe,ye);K.castShadow=!0,K.name="real-piers",r.add(K)}Re.length&&r.add(Ki(ne,Pe,Re));let G=e.length,We=K=>!!bs(e,Math.max(0,Math.min(G-1,K)),"tunnel"),He=[],ze=[],De=new Ae(12764876),qe=new Ae(8225160),Ne={x:0,y:0,z:0,heading:0};for(let K=0;K<G-4;K+=4)if(!We(K))for(let Me of[-1,1]){let ve=Me*(X+6-.7);Ft(e,K,ve,P),Ft(e,K+4,ve,Ne),He.push({x:P.x,y:P.y+.4,z:P.z,ry:P.heading,sx:.12,sy:.8,sz:.12,color:qe});let ie=Math.hypot(Ne.x-P.x,Ne.z-P.z)+.05,Te=Math.atan2(Ne.x-P.x,Ne.z-P.z);for(let oe of[.42,.72])ze.push({x:(P.x+Ne.x)/2,y:(P.y+Ne.y)/2+oe,z:(P.z+Ne.z)/2,ry:Te,sx:.07,sy:.2,sz:ie,color:De})}let N=a(new it({roughness:.35,metalness:.85}));He.length&&r.add(Ki(ne,N,He),Ki(ne,N,ze));let A=Lm({track:e,data:s,baked:s.props,heightAt:v,clearance:fe});r.add(A.group),o.push(A);let J=[];for(let K of s.places){if(K.kind!=="place")continue;let Me=1/0,ve=0;for(let Te=0;Te<e.count;Te+=10){let oe=e.pts[Te],be=(oe.x-K.x)**2+(oe.z-K.z)**2;be<Me&&(Me=be,ve=Te)}let ie=Math.sqrt(Me);ie<2600&&J.push({name:K.name,s:ve*e.step,dist:ie})}J.sort((K,Me)=>K.s-Me.s);let me=a(new Cn(1,1)),xe=[];for(let K of J){if(xe.some(oe=>Math.abs(oe.s-K.s)<500)||K.s<120||K.s>G-150||We(K.s)||We(K.s-60))continue;xe.push(K);let Me=_b([K.name,K.dist>600?`${(K.dist/1e3).toFixed(1).replace(".",",")} km`:""]),ve=a(new Gt({map:Me,color:Me?16777215:817731,side:At}));Me&&a(Me),Ft(e,K.s,X+6+2.2,P);let ie=new ot(me,ve);ie.scale.set(7.5,2.8,1),ie.position.set(P.x,P.y+5.2,P.z),ie.rotation.y=P.heading+Math.PI,r.add(ie);let Te=new ot(ne,N);Te.scale.set(.3,5.2,.3),Te.position.set(P.x,P.y+2.2,P.z),r.add(Te)}let ue=(K,Me,ve)=>{let ie=Math.sin(K*127.1+Me*311.7+ve*74.7)*43758.5453;return ie-Math.floor(ie)},Ce=Bn(5,5,5,.5,(K,Me,ve)=>{let ie=K-2,Te=ve-2,oe=(Me-1.6)*1.2;if(ie*ie+oe*oe+Te*Te>5.4+ue(K,Me,ve))return null;let be=ue(K+3,Me,ve+7);return be>.72?[.92,.42,.6]:be>.62?[.96,.93,.9]:[.16,.38,.17]},.2);a(Ce);let Fe=[];for(let K=60;K<G-20;K+=n.range(5,11)){if(We(K)||e.bridges.some(ve=>K>ve.s0-4&&K<ve.s1+4))continue;if(n.next()<.25){K+=n.range(15,50);continue}let Me=n.next()<.5?-1:1;Ft(e,K,Me*(X+6+n.range(1.2,2.4)),P),Fe.push({x:P.x,y:P.y-.5,z:P.z,ry:n.range(0,6.28),sx:n.range(.8,1.3),sy:n.range(.8,1.3),sz:n.range(.8,1.3)})}if(Fe.length){let K=Ki(Ce,a(new it({vertexColors:!0,roughness:.9})),Fe);K.castShadow=!0,K.name="real-oleanders",r.add(K)}i.add(r);let Oe=new O;function Ve(K,Me,ve){M.position.set(ve.x,0,ve.z),g.position.x=ve.x,g.position.z=ve.z,R.position.copy(ve).addScaledVector(T,200),R.target.position.copy(ve),Oe.copy(ve),y.position.set(Oe.x*(1-Bh),-2,Oe.z*(1-Bh))}function Se(){i.remove(r),i.fog&&i.fog!==w&&(i.fog=w||null),i.background=b||null;for(let K of o)K.dispose?.()}return{group:r,sun:R,update:Ve,dispose:Se,heightAt:v,places:xe,allPlaces:J,buildingStats:{kept:H.length,dropped:Ee,lowered:de},treeCount:ee,props:A.placed,propsSkipped:A.skipped}}var Bc=class extends qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new af(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ms.extractUrlBase(e);o=Ms.resolveURL(l,this.path)}else o=Ms.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ho(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bm){try{o[dt.KHR_BINARY_GLTF]=new cf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new mf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new Wh;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new lf(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new uf;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new hf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function yb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gh=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],_n);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hc(h),l.distance=u;break;case"spot":l=new $r(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,$i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Wh=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(a,a)}return Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],_n),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},sf=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},rf=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},of=class{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},af=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let x of u){let _=new et,m=new O,d=new Qt,y=new O(1,1,1),v=new xn(x.geometry,x.material,f);for(let g=0;g<f;g++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,g),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,g),c.SCALE&&y.fromBufferAttribute(c.SCALE,g),v.setMatrixAt(g,_.compose(m,d,y));for(let g in c)if(g==="_COLOR_0"){let T=c[g];v.instanceColor=new Xs(T.array,T.itemSize,T.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&x.geometry.setAttribute(g,c[g]);Lt.prototype.copy.call(v,x),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Bm="glTF",ea=12,Nm={JSON:1313821514,BIN:5130562},cf=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ea,r=new DataView(e,ea),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Nm.JSON){let l=new Uint8Array(e,ea+o,a);this.content=n.decode(l)}else if(c===Nm.BIN){let l=ea+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},lf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=df[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=df[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=so[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let x in p.attributes){let _=p.attributes[x],m=c[x];m!==void 0&&(_.normalized=m)}u(p)},a,l,_n,f)})})}},uf=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hf=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},zc=class extends _s{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,x=e*l,_=x-l,m=-2*p+3*f,d=p-f,y=1-m,v=d-f+u;for(let g=0;g!==a;g++){let T=o[_+g+a],E=o[_+g+c]*h,M=o[x+g+a],w=o[x+g]*h;r[g]=y*T+v*E+m*M+d*w}return r}},vb=new Qt,ff=class extends zc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return vb.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Um={9728:sn,9729:Rn,9984:eh,9985:Co,9986:Ar,9987:Yn},Fm={33071:Oi,33648:No,10497:ki},kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},df={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mb={CUBICSPLINE:void 0,LINEAR:kr,STEP:zr},Hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function nr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bb(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Eb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tb(i){let e,t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vh(t.attributes):e=i.indices+":"+Vh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vh(i.targets[n]);return e}function Vh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function pf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ab=new et,mf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new uc(this.options.manager):this.textureLoader=new fc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ho(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return nr(r,a,s),$i(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ms.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=kh[s.type],a=so[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new xt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=kh[s.type],l=so[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,_,m;if(p&&p!==u){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,v=t.cache.get(y);v||(_=new l(a,d*p,s.count*p/h),v=new qr(_,p/h),t.cache.add(y,v)),m=new Ws(v,c,f%p/h,x)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new xt(_,c,x);if(s.sparse!==void 0){let d=kh.SCALAR,y=so[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,g=s.sparse.values.byteOffset||0,T=new y(o[1],v,s.sparse.count*d),E=new l(o[2],g,s.sparse.count*c);a!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,w=T.length;M<w;M++){let b=T[M];if(m.setX(b,E[M*c]),c>=2&&m.setY(b,E[M*c+1]),c>=3&&m.setZ(b,E[M*c+2]),c>=4&&m.setW(b,E[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Um[f.magFilter]||Rn,h.minFilter=Um[f.minFilter]||Yn,h.wrapS=Fm[f.wrapS]||ki,h.wrapT=Fm[f.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==Rn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){let m=new rn(_);m.needsUpdate=!0,f(m)}),t.load(Ms.resolveURL(u,r.path),x,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),$i(u,o),u.userData.mimeType=o.mimeType||wb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ys,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ms,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return it}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],_n),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=At);let h=r.alphaMode||Hh.OPAQUE;if(h===Hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Hh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Gt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gt){let u=r.emissiveFactor;a.emissive=new Ae().setRGB(u[0],u[1],u[2],_n)}return r.emissiveTexture!==void 0&&o!==Gt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),$i(u,r),t.associations.set(u,{materials:e}),r.extensions&&nr(s,u,r),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Om(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Tb(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Om(new pt,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Sb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,x=h.length;p<x;p++){let _=h[p],m=o[p],d,y=l[p];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new tc(_,y):new ot(_,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?d.geometry=Dh(d.geometry,gc):m.mode===ei.TRIANGLE_FAN&&(d.geometry=Dh(d.geometry,Wo));else if(m.mode===ei.LINES)d=new qs(_,y);else if(m.mode===ei.LINE_STRIP)d=new Yr(_,y);else if(m.mode===ei.LINE_LOOP)d=new oc(_,y);else if(m.mode===ei.POINTS)d=new gs(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Eb(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),$i(d,r),m.extensions&&nr(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,x=u.length;p<x;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&nr(s,u[0],r),u[0];let f=new ft;r.extensions&&nr(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,x=u.length;p<x;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(mp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ps(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new et;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ic(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],x=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[x.input]:x.input,y=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(x),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],x=u[2],_=u[3],m=u[4],d=[];for(let y=0,v=f.length;y<v;y++){let g=f[y],T=p[y],E=x[y],M=_[y],w=m[y];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();let b=n._createAnimationTracks(g,T,E,M,w);if(b)for(let S=0;S<b.length;S++)d.push(b[S])}return new lc(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Ab)});for(let p=0,x=u.length;p<x;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ko:l.length>1?h=new ft:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),$i(h,r),r.extensions&&nr(n,h,r),r.matrix!==void 0){let u=new et;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),$i(r,n),n.extensions&&nr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Sn||f instanceof rn)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Rs[r.path]===Rs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Rs[r.path]){case Rs.weights:l=Gi;break;case Rs.rotation:l=Wi;break;case Rs.position:case Rs.scale:l=Xi;break;default:n.itemSize===1?l=Gi:l=Xi;break}let h=s.interpolation!==void 0?Mb[s.interpolation]:kr,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let x=new l(c[f]+"."+Rs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=pf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Wi?ff:zc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Rb(i,e,t){let n=e.attributes,s=new Kn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){let h=pf(so[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,c=new O;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,x=f.max;if(p!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),f.normalized){let _=pf(so[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Om(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=df[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),$i(i,e),Rb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bb(i,e.targets,t):i})}var Cs={hi:null,lo:null},Cb=["body","frame","bubble","headlight","tail","wheelRear","wheelFront","fork","torso","helmet","armR","armL","legR","legL"];async function gf(i,e){let t=await i.loadAsync(e),n={},s={};for(let a of t.scene.children)a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),n[a.name]=a,a.traverse(c=>{c.isMesh&&c.material?.name&&(s[c.material.name]=c.material)});let r=Cb.filter(a=>!n[a]);if(r.length)throw new Error(e+" incomplet : "+r.join(", "));let o=0;return n.armR.traverse(a=>{a.isMesh&&(a.geometry.computeBoundingBox(),o=Math.max(o,a.geometry.boundingBox.max.z))}),{parts:n,mats:s,armLength:o>.1?o/1.01:1}}async function zm(i="assets/"){if(Cs.lo)return Cs;let e=new Bc;return Cs.lo=await gf(e,i+"bike_voxel.glb").catch(()=>gf(e,i+"bike.glb")),Cs.hi=await gf(e,i+"bike_voxel_hi.glb").catch(()=>Cs.lo),Cs}function km(i="lo"){return Cs[i]||Cs.lo}var Yt=0,ln=1,ji=2,Vc=.32,Hc=-.7,Ym=.7,Ji=[0,-Vc,-Hc],Zm=[0,-Vc,-Ym],Hm=.62,Ib=.35,Is=Math.PI*2,Vn=class{constructor(e){this.off=e||[0,0,0],this.pos=[],this.groups=[],this.slot=-1,this.gStart=0}setSlot(e){e!==this.slot&&(this.closeGroup(),this.slot=e)}closeGroup(){let e=this.pos.length/3;this.slot>=0&&e>this.gStart&&this.groups.push({start:this.gStart,count:e-this.gStart,materialIndex:this.slot}),this.gStart=e}tri(e,t,n,s){let r=this.off,o=e[0]+r[0],a=e[1]+r[1],c=e[2]+r[2],l=t[0]+r[0],h=t[1]+r[1],u=t[2]+r[2],f=n[0]+r[0],p=n[1]+r[1],x=n[2]+r[2],_=l-o,m=h-a,d=u-c,y=f-o,v=p-a,g=x-c,T=m*g-d*v,E=d*y-_*g,M=_*v-m*y,w=(o+l+f)/3-(s[0]+r[0]),b=(a+h+p)/3-(s[1]+r[1]),S=(c+u+x)/3-(s[2]+r[2]),R=this.pos;T*w+E*b+M*S>=0?R.push(o,a,c,l,h,u,f,p,x):R.push(o,a,c,f,p,x,l,h,u)}quad(e,t,n,s,r){this.tri(e,t,n,r),this.tri(e,n,s,r)}build(){this.closeGroup();let e=new pt;e.setAttribute("position",new at(this.pos,3)),e.computeVertexNormals();for(let t of this.groups)e.addGroup(t.start,t.count,t.materialIndex);return e}};function Pb(i){let e=0,t=0,n=0;for(let r of i)e+=r[0],t+=r[1],n+=r[2];let s=i.length;return[e/s,t/s,n/s]}function Lb(i,e){return[(i[0]+e[0])/2,(i[1]+e[1])/2,(i[2]+e[2])/2]}function Vm(i,e,t,n){let s=e.length;for(let r=0;r<s;r++)i.tri(t,e[r],e[(r+1)%s],n)}function Ps(i,e,t,n,s){let r=typeof t=="function"?t:()=>t,o=e.length,a=e[0].length,c=e.map(Pb);for(let l=0;l<o-1;l++){let h=e[l],u=e[l+1],f=Lb(c[l],c[l+1]);for(let p=0;p<a;p++){let x=(p+1)%a;i.setSlot(r(l,p)),i.quad(h[p],h[x],u[x],u[p],f)}}i.setSlot(n),Vm(i,e[0],c[0],c[1]),i.setSlot(s),Vm(i,e[o-1],c[o-1],c[o-2])}function Hn(i,e,t,n,s,r,o){let a=t[0]-e[0],c=t[1]-e[1],l=t[2]-e[2],h=Math.hypot(a,c,l)||1,u=[a/h,c/h,l/h],f=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],p=[u[1]*f[2]-u[2]*f[1],u[2]*f[0]-u[0]*f[2],u[0]*f[1]-u[1]*f[0]],x=Math.hypot(p[0],p[1],p[2]);p=[p[0]/x,p[1]/x,p[2]/x];let _=[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],m=(d,y)=>{let v=[];for(let g=0;g<r;g++){let T=Is*g/r,E=Math.cos(T)*y,M=Math.sin(T)*y;v.push([d[0]+E*p[0]+M*_[0],d[1]+E*p[1]+M*_[1],d[2]+E*p[2]+M*_[2]])}return v};Ps(i,[m(e,n),m(t,s)],o,o,o)}function sr(i,e,t,n){i.setSlot(n);let s=(a,c,l)=>[e[0]+a*t[0],e[1]+c*t[1],e[2]+l*t[2]],r=[s(-1,-1,-1),s(1,-1,-1),s(1,1,-1),s(-1,1,-1),s(-1,-1,1),s(1,-1,1),s(1,1,1),s(-1,1,1)],o=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]];for(let a of o)i.tri(r[a[0]],r[a[1]],r[a[2]],e),i.tri(r[a[0]],r[a[2]],r[a[3]],e)}var Gc=3,na=4;function Db(i,e,t,n,s,r,o,a,c){return[[0,e,i],[o,t,i],[a,n,i],[c,s,i],[0,r,i],[-c,s,i],[-a,n,i],[-o,t,i]]}function Nb(){let i=new Vn(Ji),t=[[1.02,.76,.755,.74,.72,.71,.02,.03,.02],[.9,.84,.81,.75,.7,.68,.07,.12,.08],[.7,.93,.87,.76,.7,.68,.1,.19,.13],[.45,.97,.9,.68,.58,.56,.12,.23,.16],[.3,.98,.92,.62,.36,.26,.13,.23,.17],[.05,1,.94,.62,.3,.19,.14,.21,.16],[-.2,.99,.93,.66,.32,.21,.13,.19,.13],[-.35,.85,.82,.68,.42,.34,.11,.15,.1],[-.5,.8,.79,.72,.64,.62,.1,.13,.08],[-.75,.9,.87,.8,.72,.7,.09,.12,.07],[-.98,.99,.96,.92,.88,.87,.05,.07,.04],[-1.1,1.02,1.01,1,.99,.985,.01,.015,.01]].map(n=>Db(...n));Ps(i,t,(n,s)=>{let r=s===0||s===7,o=s===1||s===6,a=s===2||s===5;return r?n===7||n===8?ln:Yt:o?n>=9?Gc:Yt:a?n>=2&&n<=5?Gc:n>=7&&n<=8?ln:Yt:n>=3&&n<=6?ji:ln},Yt,Yt);for(let n of[-1,1])Hn(i,[.11*n,.46,-.26],[.1*n,.32,-.7],.04,.03,5,na),Hn(i,[.14*n,.44,-.3],[.22*n,.42,-.32],.018,.018,4,ln),Hn(i,[.1*n,.95,.42],[.27*n,.93,.35],.02,.02,4,ln);return Hn(i,[.15,.22,.1],[.17,.3,-.45],.04,.04,5,na),Hn(i,[.17,.3,-.45],[.2,.52,-.92],.05,.065,6,na),Hn(i,[.2,.52,-.92],[.205,.535,-.95],.065,.05,6,ln),sr(i,[0,.685,-.74],[.06,.012,.16],ln),i.build()}function Ub(){let i=new Vn(Ji),e=(t,n,s,r)=>[[0,n,t],[r,s,t],[0,s-.02,t],[-r,s,t]];return Ps(i,[e(.76,.925,.91,.07),e(.58,1.06,.94,.12),e(.42,1.13,.97,.11)],Yt,Yt,Yt),i.build()}function Fb(){let i=new Vn(Ji);return sr(i,[0,.985,-1.085],[.04,.02,.014],Yt),i.build()}function Ob(){let i=new Vn;return Hn(i,[0,0,0],[0,0,-.45],.05,.004,6,Yt),i.build()}function Bb(){let i=new Vn(Ji);for(let e of[-1,1]){let t=[.062*e,.795,.905];i.setSlot(Yt);let n=[[t[0]-.035,t[1]-.012,t[2]+.012],[t[0]+.035,t[1]+.004*e,t[2]-.02],[t[0]+.03,t[1]+.022,t[2]-.03],[t[0]-.03,t[1]+.02,t[2]-.004]];i.quad(n[0],n[1],n[2],n[3],[t[0],t[1],t[2]-.2])}return i.build()}function zb(){let i=new Vn(Zm);for(let n of[-1,1])Hn(i,[.085*n,.32,.7],[.085*n,.56,.615],.032,.032,5,ln),Hn(i,[.085*n,.56,.615],[.085*n,.88,.5],.024,.024,5,ji),sr(i,[.1*n,.33,.74],[.012,.05,.035],na);let e=.34,t=[];for(let n of[-.75,-.25,.3,.85,1.25]){let s=.32+Math.cos(n),r=.7+Math.sin(n),o=(a,c)=>[a,.32+c*Math.cos(n),.7+c*Math.sin(n)];t.push([o(-.075,e-.005),o(-.04,e+.03),o(.04,e+.03),o(.075,e-.005)])}return Ps(i,t,Yt,Yt,Yt),i.build()}function Gm(i,e){let t=new Vn,n=14,s=(o,a)=>{let c=[];for(let l=0;l<n;l++){let h=Is*l/n;c.push([o,a*Math.cos(h),a*Math.sin(h)])}return c};Ps(t,[[-.62,.215],[-1,.27],[-.8,.305],[0,.32],[.8,.305],[1,.27],[.62,.215]].map(([o,a])=>s(o*i,a)),ln,ln,ln);for(let o of[-1,1]){let a=o*(.62*i+.004),c=[a,0,0],l=[0,0,0],h=10;for(let u=0;u<h;u++){let f=Is*u/h,p=Is*(u+1)/h;t.setSlot(u%2?ln:ji),t.tri(c,[a,.215*Math.cos(f),.215*Math.sin(f)],[a,.215*Math.cos(p),.215*Math.sin(p)],l)}if(e){let u=o*(.62*i+.012);t.setSlot(na);for(let f=0;f<h;f++){let p=Is*f/h,x=Is*(f+1)/h;t.quad([u,.09*Math.cos(p),.09*Math.sin(p)],[u,.16*Math.cos(p),.16*Math.sin(p)],[u,.16*Math.cos(x),.16*Math.sin(x)],[u,.09*Math.cos(x),.09*Math.sin(x)],l)}}}return t.build()}function kb(){let i=new Vn,e=[0,.11,.015],t=[.125,.135,.155],n=10,s=6,r=[];for(let o=1;o<s;o++){let a=-Math.PI/2+Math.PI*o/s,c=Math.cos(a),l=[];for(let h=0;h<n;h++){let u=Is*(h+.5)/n;l.push([e[0]+t[0]*c*Math.cos(u),e[1]+t[1]*Math.sin(a),e[2]+t[2]*c*Math.sin(u)])}r.push(l)}return Ps(i,r,(o,a)=>{let c=Is*(a+1)/n;return Math.sin(c)>.45&&(o===1||o===2)?ln:Math.abs(Math.cos(c))<.35?ji:Yt},ln,Yt),i.build()}function ta(i,e,t,n){return[[e,i,0],[e*.55,i,t],[-e*.55,i,t],[-e,i,0],[-e*.55,i,-n],[e*.55,i,-n]]}function Hb(){let i=new Vn,e=[ta(-.08,.13,.09,.1),ta(.04,.145,.1,.1),ta(.22,.185,.11,.11),ta(.38,.205,.1,.1),ta(.45,.09,.06,.07)];return Ps(i,e,(t,n)=>t===0?ji:t===2&&(n===0||n===2||n===3||n===5)?Gc:Yt,ln,ln),Ps(i,[[[.07,.4,-.08],[0,.42,-.06],[-.07,.4,-.08],[0,.39,-.13]],[[.06,.28,-.11],[0,.29,-.09],[-.06,.28,-.11],[0,.27,-.19]],[[.03,.14,-.1],[0,.14,-.09],[-.03,.14,-.1],[0,.14,-.13]]],ji,ji,ji),i.build()}function Wm(i){let e=new Vn,t=[.09*i,-.09,.5];return Hn(e,[0,0,0],t,.058,.048,5,Yt),Hn(e,t,[0,0,.93],.046,.038,5,Yt),sr(e,[0,0,.97],[.042,.04,.05],ln),sr(e,[0,.015,.02],[.052,.04,.05],Gc),e.build()}function Xm(i){let e=new Vn,t=[.11*i,-.19,.42],n=[.085*i,-.47,.05];return Hn(e,[0,0,0],t,.082,.066,6,Yt),Hn(e,t,n,.062,.05,5,Yt),sr(e,[t[0]+.035*i,t[1]-.02,t[2]+.02],[.025,.05,.045],ji),sr(e,[n[0],n[1]-.04,n[2]+.04],[.045,.05,.115],ln),e.build()}var xf=null;function Vb(){return xf||(xf={body:Nb(),bubble:Ub(),tail:Fb(),flame:Ob(),fork:zb(),headlight:Bb(),wheelRear:Gm(.1,!1),wheelFront:Gm(.068,!0),helmet:kb(),torso:Hb(),armR:Wm(-1),armL:Wm(1),legR:Xm(-1),legL:Xm(1)}),xf}var pi=(i,e,t)=>i<e?e:i>t?t:i,Km=i=>pi(i,0,1),ir=i=>Number.isFinite(i)?i:0,kc=i=>typeof i=="boolean"?i?1:0:Km(ir(i));function ti(i,e){return i.name=e,i}function qm(i,e,t,n){let s=new ot(i,e);return s.name=t,s.castShadow=n,s.receiveShadow=!1,s}function $m({color:i=14034984,accent:e=16761395,isPlayer:t=!1,detail:n="lo"}={}){let s=Vb(),r=Pe=>new it({flatShading:!0,side:At,...Pe}),o=r({color:new Ae(i),metalness:.35,roughness:.3}),a=r({color:1382173,metalness:.2,roughness:.7}),c=r({color:new Ae(e),metalness:.45,roughness:.35}),l=r({color:15856108,metalness:.15,roughness:.45}),h=r({color:11120312,metalness:.9,roughness:.32}),u=[o,a,c,l,h],f=r({color:792614,metalness:.6,roughness:.08,transparent:!0,opacity:.55,depthWrite:!1}),p=r({color:16777215,emissive:16774358,emissiveIntensity:2.4}),x=r({color:3342336,emissive:16718362,emissiveIntensity:.8}),_=km(n),m=null;if(_){let Pe=(G,We)=>{let He=_.mats[G].clone();return He.color.set(We),He};m={Paint:Pe("Paint",i),Suit:Pe("Suit",i),Accent:Pe("Accent",e),Tail:_.mats.Tail.clone()}}function d(Pe,G,We,He,ze){if(!_)return qm(G,We,Pe,He);let De=_.parts[Pe].clone(!0);return De.name=Pe,ze&&De.position.set(ze[0],ze[1],ze[2]),De.traverse(qe=>{qe.isMesh&&(qe.material=m[qe.material.name]||qe.material,qe.castShadow=He)}),De}let y=r({color:0,emissive:8382975,emissiveIntensity:1.5,transparent:!0,opacity:.85,depthWrite:!1}),v=ti(new ft,"bike"),g=ti(new ft,"leanPivot"),T=ti(new ft,"pitchPivot");T.position.set(0,Vc,Hc);let E=ti(new ft,"rearWheel");E.add(d("wheelRear",s.wheelRear,u,!0));let M=ti(new ft,"chassis"),w=d("body",s.body,u,!0,Ji),b=d("bubble",s.bubble,f,!1,Ji),S=d("tail",s.tail,x,!1,Ji),R=d("headlight",s.headlight,p,!1,Ji),F=qm(s.flame,y,"flame",!1);F.position.set(.205,.215,-.26),F.rotation.x=-.42,F.scale.z=.02,F.visible=!1;let B=ti(new ft,"hips");B.position.set(0,Hm,Ib);let L=ti(new ft,"torso"),V=ti(new ft,"head");V.position.set(0,.45,.01),V.add(d("helmet",s.helmet,u,!0)),L.add(d("torso",s.torso,u,!0),V);let H=d("armR",s.armR,u,!0),j=d("armL",s.armL,u,!0),z=ti(new ft,"legR");z.position.set(-.12,-.02,0),z.add(d("legR",s.legR,u,!0));let te=ti(new ft,"legL");te.position.set(.12,-.02,0),te.add(d("legL",s.legL,u,!0)),B.add(L,H,j,z,te),M.add(w,b,S,R,F,B),_&&M.add(d("frame",null,null,!0,Ji));let fe=ti(new ft,"steerPivot");fe.position.set(0,0,Ym-Hc);let ge=d("fork",s.fork,u,!0,Zm),Ee=ti(new ft,"frontWheel");if(Ee.add(d("wheelFront",s.wheelFront,u,!0)),fe.add(ge,Ee),T.add(E,M,fe),g.add(T),v.add(g),t){let Pe=new $r(16773590,60,60,.5,.6,2);Pe.name="headSpot",Pe.castShadow=!1,Pe.position.set(0,1,.9),Pe.target.position.set(0,.2,30),Pe.target.name="headSpotTarget",v.add(Pe,Pe.target)}let de={lean:0,steer:0,pitch:0,compress:0,sr:0,brake:0,air:0,drift:0,boost:0},ne=.2,$=.37,ee=.02,P=[.25,.93-Vc,.36-Hc],X=new O,q=new O,se=new O(0,0,1);function ye(Pe,G){X.set(ne*G,$,ee).applyEuler(L.rotation),q.set(P[0]*G-B.position.x,P[1]-B.position.y,P[2]-B.position.z);let We=Math.cos(-B.rotation.z),He=Math.sin(-B.rotation.z),ze=q.x*We-q.y*He,De=q.x*He+q.y*We;q.x=ze,q.y=De,Pe.position.copy(X),q.sub(X);let qe=q.length()||1;Pe.scale.z=qe/(_?_.armLength:1),Pe.quaternion.setFromUnitVectors(se,q.multiplyScalar(1/qe))}function Re(Pe,G){let We=Pe||{},He=Number.isFinite(G)?pi(G,0,.1):1/60,ze=1-Math.exp(-He*14),De=1-Math.exp(-He*5);de.lean+=(pi(ir(We.lean),-1.5,1.5)-de.lean)*ze,de.steer+=(pi(ir(We.steer),-1,1)-de.steer)*ze,de.pitch+=(pi(ir(We.pitch),-.9,.9)-de.pitch)*ze,de.compress+=(pi(ir(We.compress),-1,1)-de.compress)*ze,de.sr+=(Km(ir(We.speedRatio))-de.sr)*De,de.brake+=(kc(We.braking)-de.brake)*De,de.air+=(kc(We.airborne)-de.air)*De,de.drift+=(kc(We.drift)-de.drift)*De,de.boost+=(kc(We.boost)-de.boost)*De;let qe=de.lean,Ne=(Number.isFinite(We.speed)?We.speed:de.sr*80)*3.6;g.rotation.z=qe,T.rotation.x=-de.pitch,fe.rotation.y=-.45*de.steer*pi(1-2*de.sr,0,1),M.position.y=-.07*de.compress;let N=pi((Ne-20)/100,0,1),A=pi(Math.abs(qe)*2.27,0,1),J=qe>=0?1:-1,me=A*(1-pi((Ne-30)/30,0,1));B.position.x=-.17*A*J,B.position.y=Hm+.1*de.air,B.rotation.z=-.2*A*J,L.rotation.x=pi(.45+.55*N-.2*de.brake-.25*de.air+.1*de.boost,.2,1.05),L.rotation.z=-.1*A*J,V.rotation.x=-.35*N+.1*de.air,V.rotation.y=-.35*A*J,V.rotation.z=-.4*qe;let xe=.55*A+.3*me;z.rotation.y=J>0?-xe:0,te.rotation.y=J<0?xe:0,ye(H,-1),ye(j,1),(m?m.Tail:x).emissiveIntensity=(m?2:.8)+(m?6:2.2)*de.brake,F.visible=de.boost>.03,F.scale.z=.02+1.3*de.boost,y.emissiveIntensity=1.5+2*de.boost;let ue=ir(We.wheelSpin);E.rotation.x=ue,Ee.rotation.x=ue}return Re({},0),{group:v,update:Re}}var Jm=Math.PI*2,Jt=6e3,ro=2200,jm=60,Qm=30,e0=60,Gb=3,ia=2e3,rr=170,vf=1.5,Wb=13,t0=Wb-vf,_f=120,Xb={dust:{life:.9,grav:-1.2,drag:2.2,spread:1.6,lift:[.6,1.8],s0:.35,s1:1.5,a0:.3,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!1},smoke:{life:.8,grav:-.8,drag:1.2,spread:.9,lift:[.5,1.3],s0:.35,s1:1.3,a0:.16,c0:[.89,.9,.92],c1:[.62,.64,.67],add:!1,bounce:!1,ring:!1},spark:{life:.6,grav:18,drag:.25,spread:5.5,lift:[1.5,4.5],s0:.22,s1:.06,a0:1,c0:[1,.88,.4],c1:[1,.48,.1],add:!0,bounce:!0,ring:!1},spray:{life:.6,grav:9,drag:.5,spread:2.2,lift:[1.2,3.2],s0:.25,s1:.9,a0:.22,c0:[.71,.93,.98],c1:[.37,.66,.8],add:!1,bounce:!1,ring:!1},gravel:{life:.7,grav:20,drag:.15,spread:3.2,lift:[1.5,3.5],s0:.08,s1:.06,a0:1,c0:[.29,.26,.22],c1:[.14,.13,.11],add:!1,bounce:!0,ring:!1},boost:{life:.3,grav:-3,drag:3,spread:.8,lift:[0,.5],s0:.55,s1:.12,a0:.9,c0:[.25,.96,1],c1:[1,.25,.78],add:!0,bounce:!1,ring:!1},land:{life:.8,grav:0,drag:4,spread:0,lift:[.4,1],s0:.5,s1:1.8,a0:.32,c0:[.79,.6,.35],c1:[.65,.46,.27],add:!1,bounce:!1,ring:!0}},qb=new Ae(16777215),Yb=new Ae(8386303);function Pn(i,e){return i+(e-i)*Math.random()}function sa(i,e,t){return i<e?e:i>t?t:i}function Ls(i,e=0){return Number.isFinite(i)?i:e}function Zb(i){return Number.isFinite(i)?sa(i,0,.1):0}function yf(i,e){return i-e*Math.floor(i/e+.5)}function Kb(){let i=globalThis.innerHeight||900,e=Math.min(globalThis.devicePixelRatio||1,2);return i*e}var $b=`
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
}`,Jb=`
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
}`,jb=`
attribute float aAlpha;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Qb=`
uniform vec3 uColor;
varying float vAlpha;
void main() {
  gl_FragColor = vec4(uColor, vAlpha);
}`;function n0(i,e){let t=e||{},n=Ls(t.rain,0),s=Ls(t.wind,0),r=new Float32Array(Jt*3),o=new Float32Array(Jt*3),a=new Float32Array(Jt*3),c=new Float32Array(Jt*3),l=new Float32Array(Jt*3),h=new Float32Array(Jt),u=new Float32Array(Jt),f=new Float32Array(Jt),p=new Float32Array(Jt),x=new Float32Array(Jt),_=new Float32Array(Jt),m=new Float32Array(Jt),d=new Float32Array(Jt),y=new Float32Array(Jt),v=new Float32Array(Jt),g=new Float32Array(Jt),T=new Uint8Array(Jt),E=0,M=!1,w=new pt,b=new xt(r,3).setUsage(Mi),S=new xt(l,3).setUsage(Mi),R=new xt(h,1).setUsage(Mi),F=new xt(u,1).setUsage(Mi),B=new xt(f,1).setUsage(Mi);w.setAttribute("position",b),w.setAttribute("aColor",S),w.setAttribute("aSize",R),w.setAttribute("aAlpha",F),w.setAttribute("aMode",B);let L=new St({uniforms:{uScale:{value:700}},vertexShader:$b,fragmentShader:Jb,transparent:!0,depthWrite:!1,blending:qu,blendSrc:Yu,blendDst:Do,blendEquation:Fi}),V=new gs(w,L);V.frustumCulled=!1,i.add(V);function H(ie,Te,oe,be,W,we,C,D=1){let U=Xb[ie];if(!U||!Number.isFinite(Te)||!Number.isFinite(oe)||!Number.isFinite(be))return;let Z=Ls(W),le=Ls(we),Ie=Ls(C),Be=Math.min(Jt,Math.max(0,Math.floor(Ls(D,1))));for(let ke=0;ke<Be;ke++){let k=E;E=(E+1)%Jt;let re,he,pe;if(U.ring){let Le=(Be>1?ke/Be:Math.random())*Jm+Math.random()*.2,Ye=Pn(3.5,5.5);re=Math.cos(Le)*Ye+Z*.3,pe=Math.sin(Le)*Ye+Ie*.3,he=Pn(U.lift[0],U.lift[1])+le*.3}else re=Z+Pn(-U.spread,U.spread),pe=Ie+Pn(-U.spread,U.spread),he=le+Pn(U.lift[0],U.lift[1]);let _e=k*3;r[_e]=Te+Pn(-.1,.1),r[_e+1]=oe,r[_e+2]=be+Pn(-.1,.1),o[_e]=re,o[_e+1]=he,o[_e+2]=pe,p[k]=0,x[k]=U.life*Pn(.85,1.15),_[k]=U.drag,m[k]=U.grav,d[k]=U.s0*Pn(.85,1.2),y[k]=U.s1*Pn(.85,1.2),v[k]=U.a0,g[k]=oe,T[k]=U.bounce?1:0,f[k]=U.add?1:0,a[_e]=U.c0[0],a[_e+1]=U.c0[1],a[_e+2]=U.c0[2],c[_e]=U.c1[0],c[_e+1]=U.c1[1],c[_e+2]=U.c1[2]}Be>0&&(M=!0)}function j(ie){let Te=!1;for(let oe=0;oe<Jt;oe++){if(x[oe]<=0)continue;if(Te=!0,p[oe]+=ie,p[oe]>=x[oe]){x[oe]=0,u[oe]=0,h[oe]=0;continue}let be=oe*3,W=Math.max(0,1-_[oe]*ie),we=o[be]*W,C=o[be+1]*W-m[oe]*ie,D=o[be+2]*W,U=r[be]+we*ie,Z=r[be+1]+C*ie,le=r[be+2]+D*ie;T[oe]&&Z<g[oe]&&C<0&&(Z=g[oe],C=-C*.35,we*=.6,D*=.6,T[oe]=0),o[be]=we,o[be+1]=C,o[be+2]=D,r[be]=U,r[be+1]=Z,r[be+2]=le;let Ie=p[oe]/x[oe];h[oe]=d[oe]+(y[oe]-d[oe])*Ie,u[oe]=v[oe]*(1-Ie*Ie),l[be]=a[be]+(c[be]-a[be])*Ie,l[be+1]=a[be+1]+(c[be+1]-a[be+1])*Ie,l[be+2]=a[be+2]+(c[be+2]-a[be+2])*Ie}return Te}let z=null;if(n>0){let ie=new pt,Te=new Float32Array(ro*6),oe=new xt(Te,3).setUsage(Mi);ie.setAttribute("position",oe);let be=new Float32Array(ro*3),W=new Float32Array(ro),we=new Float32Array(ro);for(let U=0;U<ro;U++)be[U*3]=(Math.random()-.5)*jm,be[U*3+1]=-12+Math.random()*Qm,be[U*3+2]=(Math.random()-.5)*e0,W[U]=Pn(22,30),we[U]=Pn(.8,1.2);let C=new ms({color:12900095,transparent:!0,opacity:.16,depthWrite:!1}),D=new qs(ie,C);D.frustumCulled=!1,i.add(D),z={geo:ie,mat:C,lines:D,attr:oe,pa:Te,head:be,fall:W,len:we,windX:5.5*s,windZ:2*s}}function te(ie,Te,oe){let be=z,W=be.pa,we=be.head,C=be.windX,D=be.windZ,U=Te.x,Z=Te.y+Gb,le=Te.z;for(let Ie=0;Ie<ro;Ie++){let Be=Ie*3,ke=U+yf(we[Be]-U,jm),k=Z+yf(we[Be+1]-Z,Qm),re=le+yf(we[Be+2]-le,e0),he=be.fall[Ie],pe=C-oe.x,_e=-he-oe.y,Le=D-oe.z,Ye=.05*be.len[Ie],Ke=Ie*6;W[Ke]=ke-pe*Ye,W[Ke+1]=k-_e*Ye,W[Ke+2]=re-Le*Ye,W[Ke+3]=ke,W[Ke+4]=k,W[Ke+5]=re,we[Be]=ke+C*ie,we[Be+1]=k-he*ie,we[Be+2]=re+D*ie}be.attr.needsUpdate=!0}let fe=new Float32Array(ia*4*3),ge=new Float32Array(ia*4),Ee=new Uint16Array(ia*6);for(let ie=0;ie<ia;ie++){let Te=ie*4;Ee.set([Te,Te+1,Te+2,Te,Te+2,Te+3],ie*6)}let de=new pt,ne=new xt(fe,3).setUsage(Mi),$=new xt(ge,1).setUsage(Mi);de.setAttribute("position",ne),de.setAttribute("aAlpha",$),de.setIndex(new xt(Ee,1));let ee=new St({uniforms:{uColor:{value:new Ae(1315086)}},vertexShader:jb,fragmentShader:Qb,transparent:!0,depthWrite:!1,side:At,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),P=new ot(de,ee);P.frustumCulled=!1,i.add(P);let X=0,q=1/0,se=-1;function ye(ie,Te,oe,be,W,we,C=.3,D=.5){if(![ie,Te,oe,be,W,we,C,D].every(Number.isFinite))return;let U=be-ie,Z=we-oe,le=Math.hypot(U,Z);if(le<1e-4)return;let Ie=C*.5,Be=-Z/le*Ie,ke=U/le*Ie,k=sa(D,0,1),re=Te+.03,he=W+.03,pe=X*4;X=(X+1)%ia;let _e=fe,Le=pe*3;_e[Le]=ie+Be,_e[Le+1]=re,_e[Le+2]=oe+ke,_e[Le+3]=ie-Be,_e[Le+4]=re,_e[Le+5]=oe-ke,_e[Le+6]=be-Be,_e[Le+7]=he,_e[Le+8]=we-ke,_e[Le+9]=be+Be,_e[Le+10]=he,_e[Le+11]=we+ke,ge[pe]=k,ge[pe+1]=k,ge[pe+2]=k,ge[pe+3]=k,pe<q&&(q=pe),pe+3>se&&(se=pe+3)}function Re(){if(se<0)return;let ie=q,Te=se-q+1;ne.clearUpdateRanges(),ne.addUpdateRange(ie*3,Te*3),ne.needsUpdate=!0,$.clearUpdateRanges(),$.addUpdateRange(ie,Te),$.needsUpdate=!0,q=1/0,se=-1}let Pe=new ft;Pe.matrixAutoUpdate=!1,i.add(Pe);let G=new Float32Array(rr*6),We=new xt(G,3).setUsage(Mi),He=new pt;He.setAttribute("position",We);let ze=new Float32Array(rr),De=new Float32Array(rr),qe=new Float32Array(rr),Ne=new Float32Array(rr);for(let ie=0;ie<rr;ie++){let Te=Math.random()*Jm,oe=Pn(.8,1.5);ze[ie]=Math.cos(Te)*oe,De[ie]=Math.sin(Te)*oe,qe[ie]=-vf-Math.random()*t0,Ne[ie]=Pn(.5,1.2)}let N=new ms({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),A=new qs(He,N);A.frustumCulled=!1,A.visible=!1,Pe.add(A);let J=0,me=0,xe=0,ue=0;function Ce(ie,Te){xe+=(J-xe)*(1-Math.exp(-6*ie)),ue+=(me-ue)*(1-Math.exp(-8*ie)),Te.updateMatrixWorld(),Pe.matrix.copy(Te.matrixWorld),Pe.matrixWorld.copy(Te.matrixWorld);let oe=sa((xe-.55)/.45,0,1),be=Math.min(1,.55*oe*oe*(3-2*oe)+.6*ue),W=Math.floor(be*rr);if(W<=0){A.visible=!1;return}A.visible=!0,He.setDrawRange(0,W*2),N.color.copy(qb).lerp(Yb,ue),N.opacity=.05+.24*be;let we=(60+110*be)*ie,C=1.5+5*be,D=G;for(let U=0;U<W;U++){let Z=qe[U]+we;Z>-vf&&(Z-=t0),qe[U]=Z;let le=-Z,Ie=ze[U]*le*.9,Be=De[U]*le*.5,ke=C*Ne[U],k=U*6;D[k]=Ie,D[k+1]=Be,D[k+2]=Z,D[k+3]=Ie,D[k+4]=Be,D[k+5]=Z-ke}We.needsUpdate=!0}let Fe=new O,Oe=new O,Ve=!1,Se=!1;function K(ie,Te){if(Se)return;ie=Zb(ie);let oe=Te.position;Ve?ie>0&&(Oe.subVectors(oe,Fe).divideScalar(ie),Oe.lengthSq()>_f*_f&&Oe.setLength(_f),Fe.copy(oe)):(Fe.copy(oe),Oe.set(0,0,0),Ve=!0);let be=Ls(Te.fov,60);L.uniforms.uScale.value=Kb()/(2*Math.tan(be*Math.PI/360)),(j(ie)||M)&&(b.needsUpdate=!0,S.needsUpdate=!0,R.needsUpdate=!0,F.needsUpdate=!0,B.needsUpdate=!0,M=!1),z&&ie>0&&te(ie,oe,Oe),Ce(ie,Te),Re()}function Me(ie,Te){let oe=sa(Ls(ie,0),0,1.5);J=sa((oe-.7)/.3,0,1),me=Te?1:0}function ve(){Se||(Se=!0,i.remove(V,P,Pe),z&&i.remove(z.lines),w.dispose(),L.dispose(),de.dispose(),ee.dispose(),He.dispose(),N.dispose(),z&&(z.geo.dispose(),z.mat.dispose()))}return{emit:H,addSkid:ye,setSpeed:Me,update:K,dispose:ve}}var Wc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eE=new ps(-1,1,1,-1,0,1),Mf=class extends pt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},tE=new Mf,Ds=class{constructor(e){this._mesh=new ot(tE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oo=class extends Gn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ra=class extends Gn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xc=class extends Gn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var qc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oo(Wc),this.copyPass.material.blending=_i,this.clock=new dc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ra!==void 0&&(o instanceof ra?n=!0:o instanceof Xc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yc=class extends Gn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var i0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ao=class i extends Gn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new jt(r,o,{type:En});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new jt(r,o,{type:En});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=i0;this.highPassUniforms=Si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Wc;this.copyUniforms=Si.clone(h.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new Ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};ao.BlurDirectionX=new $e(1,0);ao.BlurDirectionY=new $e(0,1);var s0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zc=class extends Gn{constructor(){super();let e=s0;this.uniforms=Si.clone(e.uniforms),this.material=new ac({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ku?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$u?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ju?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ju?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var r0=58,nE=82,o0=94,iE=9,sE=20,a0=4.7,rE=1.95,oE=3,aE=4,cE=5,Kc=.6;function Ns(i,e,t){return i<e?e:i>t?t:i}function Rt(i,e=0){return Number.isFinite(i)?i:e}function lE(i,e,t){return i+(e-i)*t}function co(i,e){return 1-Math.exp(-i*e)}function uE(i){return Number.isFinite(i)?Ns(i,0,.1):0}function c0(i){let e=new O,t=new O,n=new O,s=new O,r={x:1,z:0},o=!1,a=0,c=0,l=0,h=r0,u=a0,f=0,p=0,x=0;function _(T,E){let M=Rt(T.x),w=Rt(T.y),b=Rt(T.z),S=Rt(T.heading)+Rt(T.yaw),R=Math.sin(S),F=Math.cos(S),B=-F,L=R;r.x=B,r.z=L;let V=T.airborne?1:0,H=E*E,j=a0-.3*H+.9*V,z=rE-.15*H+.7*V;u=j;let te=Ns(Rt(T.slope),-.15,.15),fe=Ns(Rt(T.lean),-1.5,1.5),ge=0;e.set(M-R*j+B*ge,w+z-te*j,b-F*j+L*ge),e.y<w+Kc&&(e.y=w+Kc),t.set(M+R*8.5,w+.55+te*4-1.5*V,b+F*8)}function m(T){return lE(r0,nE,Math.pow(T,1.6))}function d(T,E,M,w){i.position.set(n.x+r.x*E,Math.max(n.y+M,w),n.z+r.z*E),i.lookAt(s),i.rotateZ(T)}function y(T,E){if(T=uE(T),!o){v(E);return}a+=T;let M=Ns(Rt(E.speedRatio),0,1);_(E,M);let w=Rt(E.x)-f,b=Rt(E.y)-p,S=Rt(E.z)-x;w*w+b*b+S*S<400&&(n.x+=w,n.y+=b,n.z+=S,s.x+=w,s.y+=b,s.z+=S),f=Rt(E.x),p=Rt(E.y),x=Rt(E.z),n.lerp(e,co(iE,T));let R=n.x-Rt(E.x),F=n.z-Rt(E.z),B=Math.hypot(R,F);B>.001&&(n.x=Rt(E.x)+R/B*u,n.z=Rt(E.z)+F/B*u),s.lerp(t,co(sE,T));let L=Rt(E.y)+Kc;n.y<L&&(n.y=L),l*=Math.exp(-cE*T);let V=M*M*M*2.2,H=Math.sin(a*61.3)*.6+Math.sin(a*97.1+1.7)*.4,j=Math.sin(a*73.9+.4)*.6+Math.sin(a*113.7+2.9)*.4,z=Math.sin(a*67.8+1.1)*.6+Math.sin(a*121.4+.3)*.4,te=l*.35+V*.01,fe=H*te,ge=j*te,Ee=z*(l*.03+V*.002);c+=((E.boosting?1:0)-c)*co(aE,T);let de=m(M),ne=de+(o0-de)*c;h+=(ne-h)*co(oE,T),Math.abs(i.fov-h)>1e-4&&(i.fov=h,i.updateProjectionMatrix()),d(Ee,fe,ge,L)}function v(T){let E=Ns(Rt(T.speedRatio),0,1);_(T,E),n.copy(e),s.copy(t),f=Rt(T.x),p=Rt(T.y),x=Rt(T.z),o=!0,a=0,l=0,c=T.boosting?1:0,h=m(E)+(o0-m(E))*c,i.fov=h,i.updateProjectionMatrix(),d(0,0,0,Rt(T.y)+Kc)}function g(T){l=Ns(l+Rt(T),0,1.5)}return{update:y,shake:g,snap:v}}var hE=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,fE=`
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
}`;function l0(i,e,t,n){let r=Rt((n||{}).bloom,.5),o=null,a=null,c=null,l=0,h=0,u=0,f=0,p=0,x=Math.min(globalThis.devicePixelRatio||1,2);try{let v=i.getSize(new $e),g=new jt(Math.max(1,v.x),Math.max(1,v.y),{type:En,samples:4});o=new qc(i,g),o.setPixelRatio(x),o.addPass(new Yc(e,t)),a=new ao(new $e(512,512),r*.8,.75,.9),o.addPass(a),c=new oo({uniforms:{tDiffuse:{value:null},uSpeed:{value:0},uBoost:{value:0},uTime:{value:0}},vertexShader:hE,fragmentShader:fE}),o.addPass(c),o.addPass(new Zc)}catch(v){console.warn("Post-traitement indisponible, rendu direct :",v),o=null,a=null,c=null}function _(v,g){!Number.isFinite(v)||!Number.isFinite(g)||v<=0||g<=0||(x=Math.min(globalThis.devicePixelRatio||1,2),i.setPixelRatio(x),i.setSize(v,g),o&&(o.setPixelRatio(x),o.setSize(v,g)))}function m(v,g){l=Ns(Rt(v,0),0,1),h=g?1:0}function d(v){if(v=Number.isFinite(v)?Ns(v,0,.1):0,p+=v,u+=(l-u)*co(8,v),f+=(h-f)*co(8,v),c&&(c.uniforms.uSpeed.value=u,c.uniforms.uBoost.value=f,c.uniforms.uTime.value=p),o)try{o.render(v);return}catch(g){console.warn("\xC9chec du post-traitement, rendu direct :",g),o=null}i.render(e,t)}function y(){o&&o.dispose(),a&&a.dispose&&a.dispose(),c&&c.dispose&&c.dispose(),o=null}return{render:d,setSize:_,setSpeed:m,dispose:y}}function u0(i){if(!Number.isFinite(i))return`--'--"---`;let e=Math.floor(i/60),t=Math.floor(i%60),n=Math.floor(i*1e3%1e3);return`${String(e).padStart(2,"0")}'${String(t).padStart(2,"0")}"${String(n).padStart(3,"0")}`}var zt=(i,e,t,n)=>{let s=document.createElement(i);return e&&(s.className=e),n!=null&&(s.textContent=n),t?.appendChild(s),s};function h0(i){let e=zt("div","h2-root",i);e.hidden=!0;let t=zt("div","h2-pos",e),n=zt("span","h2-pos-num",t,"1"),s=zt("span","h2-pos-tot",t,"/8");zt("span","h2-pos-lbl",t,"POS");let r=zt("div","h2-right",e),o=zt("div","h2-pill h2-lap",r);zt("span","h2-lap-lbl",o,"TOUR");let a=zt("span","h2-lap-num",o,"1"),c=zt("span","h2-lap-tot",o,"/3"),l=zt("div","h2-pill h2-time",r,`00'00"000`),h=zt("div","h2-best",r,""),u=zt("canvas","h2-map",e),f=220;u.width=u.height=f;let p=u.getContext("2d"),x=document.createElement("canvas");x.width=x.height=f;let _=null,m=1,d=0,y=0,v=zt("div","h2-dial",e),g=zt("canvas","h2-dial-canvas",v),T=300;g.width=g.height=T;let E=g.getContext("2d"),M=zt("div","h2-gear",v,"1"),w=zt("div","h2-speed",v,"0");zt("div","h2-unit",v,"km/h");let b=zt("div","h2-boost",v),S=[],R=zt("div","h2-count",e,""),F=zt("div","h2-flash",e,""),B=zt("div","h2-wrong",e,"CONTRESENS");B.hidden=!0;let L={},V=(ee,P,X)=>{L[ee]!==X&&(L[ee]=X,P.textContent=X)},H=Math.PI*.75,j=Math.PI*2.25,z=-1;function te(ee){let P=Math.round(ee*120)/120;if(P===z)return;z=P;let X=T/2,q=T*.44;E.clearRect(0,0,T,T),E.lineCap="butt",E.beginPath(),E.arc(X,X,q*1.05,0,Math.PI*2),E.fillStyle="rgba(8, 10, 16, 0.42)",E.fill();let se=(Pe,G,We,He)=>{E.beginPath(),E.arc(X,X,q,Pe,G),E.strokeStyle=We,E.lineWidth=He,E.stroke()},ye=H+(j-H)*.86;se(H,ye,"rgba(255,255,255,0.28)",T*.05),se(ye,j,"rgba(226,40,48,0.55)",T*.05);let Re=H+(j-H)*Math.min(1,Math.max(0,P));se(H,Math.min(Re,ye),"#ffffff",T*.05),Re>ye&&se(ye,Re,"#e8242e",T*.05);for(let Pe=0;Pe<=8;Pe++){let G=H+(j-H)*Pe/8;E.beginPath(),E.moveTo(X+Math.cos(G)*q*.8,X+Math.sin(G)*q*.8),E.lineTo(X+Math.cos(G)*q*.9,X+Math.sin(G)*q*.9),E.strokeStyle=Pe>=7?"#e8242e":"rgba(255,255,255,0.75)",E.lineWidth=3,E.stroke()}E.beginPath(),E.moveTo(X+Math.cos(Re)*q*.3,X+Math.sin(Re)*q*.3),E.lineTo(X+Math.cos(Re)*q*.98,X+Math.sin(Re)*q*.98),E.strokeStyle="#ffffff",E.lineWidth=4,E.stroke()}te(0);function fe(ee){_=ee;let P=ee.bounds,X=P.maxX-P.minX,q=P.maxZ-P.minZ;m=(f-36)/Math.max(X,q),d=(f-X*m)/2-P.minX*m,y=(f-q*m)/2-P.minZ*m;let se=x.getContext("2d");se.clearRect(0,0,f,f);let ye=()=>{se.beginPath(),ee.pts.forEach((Re,Pe)=>{let G=Re.x*m+d,We=Re.z*m+y;Pe?se.lineTo(G,We):se.moveTo(G,We)}),ee.open||se.closePath()};se.lineJoin="round",ye(),se.strokeStyle="rgba(0,0,0,0.45)",se.lineWidth=9,se.stroke(),ye(),se.strokeStyle="#ffffff",se.lineWidth=5,se.stroke(),ye(),se.strokeStyle="rgba(20,24,34,0.9)",se.lineWidth=2,se.stroke(),p.clearRect(0,0,f,f),p.drawImage(x,0,0)}function ge(ee){if(!_)return;p.clearRect(0,0,f,f),p.drawImage(x,0,0);let P=_.pts.length,X=(q,se)=>{let ye=Math.floor((q.s%_.length+_.length)%_.length/_.step);ye>=P&&(ye=P-1);let Re=_.pts[ye],Pe=Re.x*m+d,G=Re.z*m+y;p.beginPath(),p.arc(Pe,G,se?6:3.6,0,Math.PI*2),p.fillStyle=se?"#e8242e":"#ffffff",p.fill(),p.lineWidth=1.5,p.strokeStyle="rgba(0,0,0,0.6)",p.stroke()};for(let q of ee)q.isPlayer||X(q,!1);for(let q of ee)q.isPlayer&&X(q,!0)}let Ee=null;function de(ee){V("pos",n,String(ee.position)),V("tot",s,"/"+ee.total),V("lap",a,String(ee.lap)),V("laps",c,"/"+ee.laps),V("time",l,u0(ee.time)),V("best",h,ee.bestLap?"MEILLEUR "+u0(ee.bestLap):""),V("speed",w,String(Math.round(ee.speedKmh))),V("gear",M,String(ee.gear||1)),te(ee.rpm??Math.min(1,ee.speedKmh/290));let P=ee.boostCharges|0,X=ee.boostT>0?1:0,q=P+":"+X;if(L.boost!==q){for(L.boost=q;S.length<P+X;)S.push(zt("span","h2-boost-dot",b));S.forEach((se,ye)=>{se.hidden=ye>=P+X,se.classList.toggle("h2-on",X&&ye===P)})}if(ee.countdown===null||ee.countdown===void 0)Ee===null&&L.count!==""&&(L.count="",R.textContent="",R.classList.remove("h2-show"));else if(ee.countdown>0){let se=String(Math.ceil(ee.countdown));L.count!==se&&(L.count=se,R.textContent=se,R.classList.remove("h2-show"),R.offsetWidth,R.classList.add("h2-show"))}else L.count!=="GO !"&&(L.count="GO !",R.textContent="GO !",R.classList.remove("h2-show"),R.offsetWidth,R.classList.add("h2-show"),clearTimeout(Ee),Ee=setTimeout(()=>{Ee=null},800));B.hidden===!!ee.wrongWay&&(B.hidden=!ee.wrongWay)}let ne=null;function $(ee,P=900){F.textContent=ee,F.classList.remove("h2-show"),F.offsetWidth,F.classList.add("h2-show"),clearTimeout(ne),ne=setTimeout(()=>F.classList.remove("h2-show"),P)}return{show(){e.hidden=!1},hide(){e.hidden=!0},update:de,setTrack:fe,updateMinimap:ge,flash:$,dispose(){e.remove()}}}var dw=$s.maxSpeed*3.6;var f0=360;var d0=i=>(i<10?"0":"")+i;function Sf(i){if(i==null||!Number.isFinite(i))return"--:--.--";let e=Math.max(0,Math.floor(i*100+1e-6)),t=Math.floor(e/6e3),n=Math.floor(e/100)%60;return`${t}:${d0(n)}.${d0(e%100)}`}var pw=`
  <div class="pr-pos"><span class="pr-pos-cur">-</span><span class="pr-pos-sep">/</span><span class="pr-pos-tot">-</span></div>
  <div class="pr-wrong">Sens interdit</div>
  <div class="pr-timing">
    <div class="pr-lap">Tour -/-</div>
    <div class="pr-time">0:00.00</div>
    <div class="pr-best">Meilleur <span class="pr-best-v">--:--.--</span></div>
  </div>
  <div class="pr-left">
    <div class="pr-mm-wrap"><canvas class="pr-minimap" width="${f0}" height="${f0}"></canvas></div>
    <div class="pr-boosts"><span class="pr-boost-lbl">Boost</span><div class="pr-dias"></div></div>
  </div>
  <div class="pr-speed">
    <div class="pr-speed-num">0</div>
    <div class="pr-speed-unit">km/h</div>
    <div class="pr-bar"></div>
  </div>
  <div class="pr-count"></div>
  <div class="pr-flash"></div>
`;var p0="ABCDEFGHJKMNPQRSTUVWXYZ23456789",m0=0;function bf(){m0++;let i=Jn((Date.now()^Math.imul(m0,2654435761))>>>0),e="RUSH-";for(let t=0;t<4;t++)e+=p0[i.int(0,p0.length-1)];return e}var Ut=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function g0(i){return i?typeof i=="string"?Ss[i]?.name||i:i.name||Ss[i.id]?.name||"":""}function dE(i){return i&&typeof i=="object"?i:Js.find(e=>e.id===i)||{id:String(i),name:String(i),icon:"\u2022"}}function x0(i){let e=new Map;for(let n of i||[]){let s=dE(n),r=e.get(s.id);r?r.n++:e.set(s.id,{info:s,n:1})}if(!e.size)return'<span class="pr-own-none">Aucune pour l\u2019instant</span>';let t="";for(let{info:n,n:s}of e.values())t+=`<span class="pr-own">${Ut(n.icon)} ${Ut(n.name)}${s>1?` \xD7${s}`:""}</span>`;return t}function Ef(i){return(i||[]).map((e,t)=>`<li class="pr-srow${e.isPlayer?" pr-me":""}" style="--i:${t}"><span class="pr-rk">${t+1}</span><span class="pr-rn">${Ut(e.name)}</span><span class="pr-rp">${e.points??0}<small> pts</small></span></li>`).join("")}function _0(i){let e=document.createElement("div");e.className="pr-menu pr-off",i.appendChild(e);let t=null,n=null;function s(_){try{t&&typeof t.play=="function"&&t.play(_)}catch{}}function r(_,m){let d=n;if(!d||!d.items.length)return;let y=d.items.length,v=(_%y+y)%y,g=v!==d.index;d.index=v,d.focused=!0;for(let T=0;T<y;T++)d.items[T].classList.toggle("pr-sel",T===v);try{d.items[v].focus({preventScroll:!0})}catch{}g&&m&&s("select")}function o(_){let m=n;m&&(n=null,e.innerHTML="",e.classList.add("pr-off"),s("confirm"),m.resolve(_))}function a(_){return n=null,e.innerHTML=_.html,e.classList.remove("pr-off"),new Promise(m=>{n={items:Array.from(e.querySelectorAll("[data-nav]")),index:0,focused:!1,actions:_.actions||{},resolve:m},_.onMount&&_.onMount(e,o),r(_.initial||0,!1)})}e.addEventListener("click",_=>{let m=n;if(!m||!(_.target instanceof Element))return;let d=_.target.closest("[data-act]");if(!d||!e.contains(d)||d.disabled)return;let y=m.items.indexOf(d);y>=0&&y!==m.index&&r(y,!1);let v=m.actions[d.dataset.act];v&&v(d,o)}),e.addEventListener("mouseover",_=>{let m=n;if(!m||!(_.target instanceof Element))return;let d=_.target.closest("[data-nav]");if(!d)return;let y=m.items.indexOf(d);y>=0&&y!==m.index&&r(y,!0)}),window.addEventListener("keydown",_=>{let m=n;if(!m)return;let d=_.target,y=!!d&&d.tagName==="INPUT",v=_.key||"",g=v.toLowerCase();if(v==="ArrowUp"||!y&&(v==="ArrowLeft"||g==="z"||g==="q")){_.preventDefault(),r(m.index-1,!0);return}if(v==="ArrowDown"||!y&&(v==="ArrowRight"||g==="s"||g==="d")){_.preventDefault(),r(m.index+1,!0);return}if(y){if(v==="Enter"){_.preventDefault();let T=e.querySelector("[data-main]");T&&T.click()}return}if(v.length===1){let T=m.items.find(E=>E.dataset.key===v);T&&(_.preventDefault(),T.click())}});function c({dailySeed:_,meta:m}={}){let d=m||{},y=String(_||"RUSH-DAILY").toUpperCase(),v=bf();return a({initial:2,html:`
<section class="pr-screen pr-title">
  <div class="pr-logo pr-slide" style="--i:0"><span class="pr-logo-a">Polygon</span><span class="pr-logo-b">Rush</span></div>
  <p class="pr-tagline pr-slide" style="--i:1">Arcade \xB7 Proc\xE9dural \xB7 Roguelite</p>
  <div class="pr-seedrow pr-slide" style="--i:2">
    <label class="pr-lbl" for="pr-seed-in">Seed du run</label>
    <div class="pr-seedbox">
      <input id="pr-seed-in" class="pr-input" type="text" value="${Ut(v)}" maxlength="16" autocomplete="off" spellcheck="false" data-nav data-seed>
      <button type="button" class="pr-btn pr-btn-ico" data-nav data-act="dice" title="Nouvelle seed al\xE9atoire" aria-label="Nouvelle seed al\xE9atoire">\u{1F3B2}</button>
    </div>
  </div>
  <div class="pr-btns pr-slide" style="--i:3">
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="launch">Lancer le run</button>
    <button type="button" class="pr-btn" data-nav data-act="daily">D\xE9fi du jour<small>${Ut(y)}</small></button>
  </div>
  <div class="pr-stats pr-slide" style="--i:4">
    <div><b>${d.runs??0}</b><span>runs</span></div>
    <div><b>${d.wins??0}</b><span>victoires</span></div>
    <div><b>${d.bestPoints??0}</b><span>record de points</span></div>
  </div>
  <p class="pr-cmds pr-slide" style="--i:5">\u2191/Z acc\xE9l\xE9rer \xB7 \u2193/S freiner \xB7 \u2190\u2192/QD tourner \xB7 Espace boost \xB7 Maj d\xE9rapage</p>
</section>`,actions:{dice:g=>{let T=g.closest(".pr-screen").querySelector("[data-seed]");T&&(T.value=bf())},launch:(g,T)=>{let E=g.closest(".pr-screen").querySelector("[data-seed]"),M=(E?E.value:"").trim().toUpperCase();M||(M=bf()),T({seed:M})},daily:(g,T)=>T({seed:y})}})}function l({stage:_={},index:m=1,total:d=1,standings:y=[],weather:v}={}){let g=g0(v)||g0(_.weather),T=_.laps??0;return a({initial:0,html:`
<section class="pr-screen pr-stage">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in pr-stage-main">
    <div class="pr-kicker">\xC9tape ${Ut(m)}/${Ut(d)}</div>
    <h2 class="pr-h2">${Ut(_.name)}</h2>
    <p class="pr-sub">${Ut(_.subtitle)}</p>
    <dl class="pr-facts">
      <div><dt>M\xE9t\xE9o</dt><dd>${Ut(g)}</dd></div>
      <div><dt>Tours</dt><dd>${Ut(T)} ${T>1?"tours":"tour"}</dd></div>
      <div><dt>Seed du circuit</dt><dd>${Ut(_.trackSeed)}</dd></div>
    </dl>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="go">D\xE9part</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Ef(y)}</ol>
  </div></div>
</section>`,actions:{go:(E,M)=>M(void 0)}})}function h({results:_=[],standings:m=[],stage:d={}}={}){let v=[..._].sort((g,T)=>(g.position??99)-(T.position??99)).map((g,T)=>{let E=yc[(g.position??0)-1]??0;return`<tr class="pr-tr${g.isPlayer?" pr-me":""}" style="--i:${T}"><td class="pr-c-pos">${Ut(g.position??"")}</td><td class="pr-c-name">${Ut(g.name)}</td><td class="pr-c-tm">${g.time==null?"Abandon":Sf(g.time)}</td><td class="pr-c-best">${g.bestLap==null?"\u2014":Sf(g.bestLap)}</td><td class="pr-c-pts">${E>0?"+"+E:"0"}</td></tr>`}).join("");return a({initial:0,html:`
<section class="pr-screen pr-results">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-kicker">R\xE9sultats \xB7 ${Ut(d.name)}</div>
    <table class="pr-table">
      <thead><tr><th>Pos</th><th>Pilote</th><th>Temps</th><th>Meilleur tour</th><th>Pts</th></tr></thead>
      <tbody>${v}</tbody>
    </table>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="next">Continuer</button>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Classement g\xE9n\xE9ral</h3>
    <ol class="pr-slist">${Ef(m)}</ol>
  </div></div>
</section>`,actions:{next:(g,T)=>T(void 0)}})}function u({choices:_=[],index:m=1,total:d=1,owned:y=[]}={}){let v=_.map((g,T)=>`<button type="button" class="pr-card pr-slide" style="--i:${T}" data-nav data-key="${T+1}" data-act="pick" data-id="${Ut(g.id)}"><span class="pr-card-in"><span class="pr-card-key">${T+1}</span><span class="pr-card-ico" aria-hidden="true">${Ut(g.icon)}</span><span class="pr-card-name">${Ut(g.name)}</span><span class="pr-card-tag">${Ut(g.tagline)}</span><span class="pr-card-pro">\u25B2 ${Ut(g.pro)}</span><span class="pr-card-con">\u25BC ${Ut(g.con)}</span></span></button>`).join("");return a({initial:0,html:`
<section class="pr-screen pr-upg">
  <div class="pr-kicker pr-slide" style="--i:0">\xC9tape ${Ut(m)}/${Ut(d)} accomplie</div>
  <h2 class="pr-h2 pr-slide" style="--i:0">Choisissez une am\xE9lioration</h2>
  <div class="pr-cards">${v}</div>
  <div class="pr-owned pr-slide" style="--i:3"><span class="pr-owned-lbl">D\xE9j\xE0 poss\xE9d\xE9es</span>${x0(y)}</div>
</section>`,actions:{pick:(g,T)=>T(g.dataset.id)}})}function f({standings:_=[],playerPosition:m,run:d={},meta:y}={}){let v=y||{},g=m??_.findIndex(M=>M.isPlayer)+1,T=g===1,E=T?"Champion !":`${Ut(g)}e au championnat`;return a({initial:1,html:`
<section class="pr-screen pr-end">
  <div class="pr-frame pr-grow pr-slide" style="--i:0"><div class="pr-frame-in">
    <div class="pr-end-title${T?" pr-gold":""}">${E}</div>
    <ol class="pr-slist pr-slist-big">${Ef(_)}</ol>
  </div></div>
  <div class="pr-frame pr-slide" style="--i:1"><div class="pr-frame-in">
    <h3 class="pr-h3">Am\xE9liorations du run</h3>
    <div class="pr-owned-list">${x0(d.upgrades)}</div>
    <h3 class="pr-h3">Seed</h3>
    <div class="pr-seedline">
      <code class="pr-seedcode">${Ut(d.seed)}</code>
      <button type="button" class="pr-btn pr-btn-small" data-nav data-act="copy">Copier la seed</button>
    </div>
    <p class="pr-cmds">Runs : ${v.runs??0} \xB7 Victoires : ${v.wins??0} \xB7 Record : ${v.bestPoints??0} pts</p>
    <button type="button" class="pr-btn pr-btn-main" data-nav data-main data-act="again">Nouveau run</button>
  </div></div>
</section>`,actions:{copy:M=>{let w="Copier la seed",b;try{b=navigator.clipboard.writeText(String(d.seed??""))}catch(R){b=Promise.reject(R)}let S=R=>{M.textContent=R,setTimeout(()=>{M.isConnected&&(M.textContent=w)},1500)};b.then(()=>S("Copi\xE9e !"),()=>S("Copie impossible"))},again:(M,w)=>w(void 0)}})}function p(_){t=_||null}function x(){n=null,e.innerHTML="",e.classList.add("pr-off")}return{showTitle:c,showStageIntro:l,showResults:h,showUpgradeChoice:u,showRunEnd:f,hideAll:x,setAudio:p}}var y0=typeof globalThis<"u"&&(globalThis.AudioContext||globalThis.webkitAudioContext)||null,v0=.6,pE=.3,Tf=6,or=55,mE=.1,gE=25,M0=60/128/4,xE=[{root:45,iv:[3,7]},{root:41,iv:[4,7]},{root:48,iv:[4,7]},{root:43,iv:[4,7]}],lo=i=>Number.isFinite(i)?i<0?0:i>1?1:i:0,S0=i=>440*Math.pow(2,(i-69)/12);function _E(i){let t=new Float32Array(1024);for(let n=0;n<1024;n++){let s=n*2/1023-1;t[n]=(1+i)*s/(1+i*Math.abs(s))}return t}function b0(){let i=null,e=!1,t=null,n=null,s=null,r=null,o=null,a=null,c=null,l=!1,h=!1,u=null,f=0,p=0,x=-1,_=0,m=0,d=0;function y(P){let X=Math.round(2*P),q=Math.round(.1*P),se=new Float32Array(X+q),ye=0,Re=0,Pe=0,G=0,We=0,He=0,ze=0;for(let A=0;A<X+q;A++){let J=Math.random()*2-1;ye=.99886*ye+J*.0555179,Re=.99332*Re+J*.0750759,Pe=.969*Pe+J*.153852,G=.8665*G+J*.3104856,We=.55*We+J*.5329522,He=-.7616*He-J*.016898,se[A]=(ye+Re+Pe+G+We+He+ze+J*.5362)*.11,ze=J*.115926}let De=i.createBuffer(1,X,P),qe=De.getChannelData(0),Ne=0;for(let A=0;A<X;A++){let J=A<q?se[A]*(A/q)+se[X+A]*(1-A/q):se[A];qe[A]=J;let me=Math.abs(J);me>Ne&&(Ne=me)}let N=Ne>0?1/Ne:1;for(let A=0;A<X;A++)qe[A]*=N;return De}function v(P){let X=i.createBufferSource();return X.buffer=n,X.loop=!0,X.connect(P),X.start(0,Math.random()*1.5),X}function g(P){let X=i.createGain();return X.gain.value=P,X}function T(P,X,q){let se=i.createBiquadFilter();return se.type=P,se.frequency.value=X,se.Q.value=q,se}function E(){n=y(i.sampleRate),t=g(l?0:v0);let P=i.createDynamicsCompressor();P.threshold.value=-16,P.knee.value=12,P.ratio.value=4,P.attack.value=.005,P.release.value=.2,t.connect(P),P.connect(i.destination);let X=i.createOscillator();X.type="sawtooth",X.frequency.value=or,X.detune.value=-6;let q=i.createOscillator();q.type="sawtooth",q.frequency.value=or,q.detune.value=6;let se=i.createOscillator();se.type="square",se.frequency.value=or/2;let ye=g(1);X.connect(g(.28)).connect(ye),q.connect(g(.28)).connect(ye),se.connect(g(.22)).connect(ye);let Re=T("bandpass",or*4,1.2),Pe=g(.04);v(Re),Re.connect(Pe).connect(ye);let G=i.createWaveShaper();G.curve=_E(4),G.oversample="2x",ye.connect(G);let We=T("lowpass",300,1.3);G.connect(We);let He=g(0);We.connect(He).connect(t),X.start(),q.start(),se.start(),s={osc1:X,osc2:q,osc3:se,nBp:Re,nGain:Pe,lp:We,gain:He};let ze=T("bandpass",300,.7),De=g(0);v(ze),ze.connect(De).connect(t),r={filter:ze,gain:De};let qe=T("bandpass",1100,4),Ne=g(3),N=g(0);v(qe),qe.connect(Ne).connect(N).connect(t),o={filter:qe,gain:N};let A=T("highpass",900,.5),J=g(3),me=g(0);v(A),A.connect(J).connect(me).connect(t),a={gain:me},c=g(0),c.connect(t),e=!0}function M(P,X,q){let se=i.currentTime;P.cancelScheduledValues(se),P.setTargetAtTime(X,se,q)}function w(P){let X=P.t0,q=P.dur,se=i.createOscillator();se.type=P.type||"sine",se.frequency.setValueAtTime(P.f0,X),P.f1&&se.frequency.exponentialRampToValueAtTime(P.f1,X+q);let ye=i.createGain();ye.gain.setValueAtTime(1e-4,X),ye.gain.linearRampToValueAtTime(P.vol,X+(P.attack||.004)),ye.gain.exponentialRampToValueAtTime(1e-4,X+q);let Re=se;if(P.lp){let Pe=T("lowpass",P.lp,.7);se.connect(Pe),Re=Pe}Re.connect(ye),ye.connect(t),se.start(X),se.stop(X+q+.02)}function b(P){let X=P.t0,q=P.dur,se=i.createBufferSource();se.buffer=n;let ye=T(P.type,P.f0,P.q||1);P.f1&&ye.frequency.exponentialRampToValueAtTime(P.f1,X+q),ye.frequency.setValueAtTime(P.f0,X);let Re=i.createGain();Re.gain.setValueAtTime(1e-4,X),Re.gain.linearRampToValueAtTime(P.vol,X+.004),Re.gain.exponentialRampToValueAtTime(1e-4,X+q),se.connect(ye),ye.connect(Re),Re.connect(t),se.start(X,Math.random()*1.5,q+.02)}function S(P,X){let q=i.createBufferSource();q.buffer=n;let se=T("bandpass",700+Math.random()*900,1.2),ye=i.createGain();ye.gain.setValueAtTime(0,P),ye.gain.linearRampToValueAtTime(X,P+.003),ye.gain.linearRampToValueAtTime(0,P+.03),q.connect(se),se.connect(ye),ye.connect(t),q.start(P,Math.random()*1.5,.05)}let R={beep(P){w({type:"square",f0:440,t0:P,dur:.12,vol:.12,lp:2400})},go(P){w({type:"sawtooth",f0:880,t0:P,dur:.4,vol:.12,lp:3e3}),w({type:"sine",f0:1320,t0:P,dur:.4,vol:.06}),w({type:"sine",f0:1760,t0:P+.02,dur:.25,vol:.04}),b({t0:P,dur:.05,vol:.1,type:"highpass",f0:3e3,q:.7})},boost(P){b({t0:P,dur:.6,vol:.25,type:"bandpass",f0:300,f1:3e3,q:1.2}),w({type:"sawtooth",f0:150,f1:600,t0:P,dur:.6,vol:.1,lp:1500,attack:.02})},jump(P){b({t0:P,dur:.25,vol:.2,type:"bandpass",f0:400,f1:1600,q:1})},land(P){w({type:"sine",f0:90,f1:50,t0:P,dur:.2,vol:.6,attack:.002}),b({t0:P,dur:.2,vol:.3,type:"lowpass",f0:800,q:.7})},hit(P){b({t0:P,dur:.08,vol:.3,type:"highpass",f0:2e3,q:.7});let X=340,q=[[1,.12,.35],[2.76,.08,.25],[5.4,.05,.2],[8.93,.03,.15]];for(let[se,ye,Re]of q)w({type:"sine",f0:X*se,t0:P,dur:Re,vol:ye,attack:.001})},select(P){w({type:"sine",f0:2400,t0:P,dur:.03,vol:.15,attack:.002})},confirm(P){w({type:"triangle",f0:660,t0:P,dur:.12,vol:.2}),w({type:"triangle",f0:990,t0:P+.09,dur:.18,vol:.2})},win(P){[523,659,784,1047,1319].forEach((q,se)=>{let ye=se<4?.13:.5,Re=P+se*.11;w({type:"square",f0:q,t0:Re,dur:ye,vol:.1,lp:2500}),w({type:"triangle",f0:q,t0:Re,dur:ye,vol:.12})})},lose(P){[392,330,262].forEach((X,q)=>{w({type:"triangle",f0:X,t0:P+q*.22,dur:.3,vol:.25,attack:.01})})},pad(P){w({type:"sawtooth",f0:300,f1:1500,t0:P,dur:.15,vol:.12,lp:4e3})},lap(P){w({type:"sine",f0:1e3,t0:P,dur:.08,vol:.2}),w({type:"sine",f0:1e3,t0:P+.15,dur:.08,vol:.2})}};function F(P){let X=i.createOscillator();X.type="sine",X.frequency.setValueAtTime(150,P),X.frequency.exponentialRampToValueAtTime(45,P+.12);let q=i.createGain();q.gain.setValueAtTime(.5,P),q.gain.exponentialRampToValueAtTime(.001,P+.3),X.connect(q),q.connect(c),X.start(P),X.stop(P+.32)}function B(P,X){let q=i.createBufferSource();q.buffer=n;let se=T("highpass",7e3,.7),ye=i.createGain();ye.gain.setValueAtTime(X,P),ye.gain.exponentialRampToValueAtTime(.001,P+.04),q.connect(se),se.connect(ye),ye.connect(c),q.start(P,Math.random()*1.5,.05)}function L(P,X,q){let se=i.createOscillator();se.type="sawtooth",se.frequency.value=X;let ye=T("lowpass",1e3,6);ye.frequency.setValueAtTime(1e3,P),ye.frequency.exponentialRampToValueAtTime(180,P+q);let Re=i.createGain();Re.gain.setValueAtTime(1e-4,P),Re.gain.linearRampToValueAtTime(.16,P+.01),Re.gain.exponentialRampToValueAtTime(1e-4,P+q),se.connect(ye),ye.connect(Re),Re.connect(c),se.start(P),se.stop(P+q+.02)}function V(P,X){let q=i.createOscillator();q.type="triangle",q.frequency.value=X;let se=i.createGain();se.gain.setValueAtTime(1e-4,P),se.gain.linearRampToValueAtTime(.035,P+.005),se.gain.exponentialRampToValueAtTime(1e-4,P+.11),q.connect(se),se.connect(c),q.start(P),q.stop(P+.13)}function H(P,X){let q=P&15,se=xE[P>>4&3];if(q%4===0&&F(X),q%2===1&&B(X,q%4===2?.1:.05),q%2===0){let ye=q===6||q===14?12:0;L(X,S0(se.root+ye),M0*1.8);let Re=[0,se.iv[0],se.iv[1],12];V(X,S0(se.root+24+Re[q>>1&3]))}}function j(){if(!e||!h)return;let P=i.currentTime;f<P&&(f=P+.02);let X=P+mE;for(;f<X;)H(p,f),f+=M0,p++}function z(){if(!e){if(!y0)return;try{i=new y0,E()}catch{i=null,e=!1;return}}if(i.state==="suspended")try{let P=i.resume();P&&P.catch&&P.catch(()=>{})}catch{}}function te(P,X){if(!e)return;P=lo(P),X=lo(X);let q=i.currentTime,se=P*Tf,ye=Math.min(Tf-1,Math.floor(se)),Pe=.45+.55*Math.min(1,se-ye),G=lo(P/.08),We=or+(or*Math.pow(Tf,Pe)-or)*G,He=.5*P+.5*X,ze=260+3200*Math.pow(He,1.3),De=.07+.2*P*(.35+.65*X)+.03*X;if(M(s.osc1.frequency,We,.04),M(s.osc2.frequency,We,.04),M(s.osc3.frequency,We*.5,.04),M(s.nBp.frequency,We*4,.05),M(s.nGain.gain,.04+.22*X,.05),M(s.lp.frequency,ze,.05),x!==-1&&ye!==x){let qe=s.gain.gain;qe.cancelScheduledValues(q),qe.setTargetAtTime(De*.35,q,.004),qe.setTargetAtTime(De,q+.06,.03),_=q+.12}if(x=ye,q>=_&&M(s.gain.gain,De,.05),X>=m)m=X;else if(m-X>.3){if(P>.6&&q>=d){let qe=.12+.2*P;for(let Ne=0;Ne<3;Ne++)S(q+Ne*.05+Math.random()*.02,qe*(1-Ne*.2));d=q+.4}m=X}}function fe(P){if(!e)return;let X=lo(P),q=X*X;M(r.filter.frequency,250+1600*q,.2),M(r.gain.gain,.03+.35*q,.15)}function ge(P){if(!e)return;let X=lo(P);M(o.filter.frequency,900+500*X,.05),M(o.gain.gain,X,.03)}function Ee(P){e&&M(a.gain.gain,lo(P)*.25,.1)}function de(P){e&&Object.prototype.hasOwnProperty.call(R,P)&&R[P](i.currentTime+.01)}function ne(P){l=!!P,e&&M(t.gain,l?0:v0,.015)}function $(){e&&(h||(h=!0,p=0,f=i.currentTime+.05),M(c.gain,pE,.05),u||(u=setInterval(j,gE)),j())}function ee(){h=!1,u&&(clearInterval(u),u=null),e&&M(c.gain,0,.05)}return{resume:z,setEngine:te,setWind:fe,setSkid:ge,setRain:Ee,play:de,setMuted:ne,startMusic:$,stopMusic:ee}}var wf=1/120,ni=new URLSearchParams(location.search),yE=document.getElementById("game"),mi=new Qa({canvas:yE,antialias:!0,powerPreference:"high-performance"});mi.setPixelRatio(Math.min(window.devicePixelRatio,2));mi.shadowMap.enabled=!0;mi.shadowMap.type=pc;mi.toneMapping=Go;mi.toneMappingExposure=1.05;mi.outputColorSpace=wt;var kt=new Bo,Tn=new qt(70,1,.3,6e3);kt.add(Tn);var es=c0(Tn),P0=document.getElementById("ui"),wn=h0(P0),Qi=_0(P0),Ht=b0();Qi.setAudio?.(Ht);var Qc=new Set,un={throttle:0,brake:0,steer:0,boost:!1,drift:!1};var vE=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];addEventListener("keydown",i=>{i.target instanceof HTMLInputElement||(Qc.add(i.code),dn==="race"&&vE.includes(i.code)&&i.preventDefault(),i.code==="KeyM"&&(Jc=!Jc,Ht.setMuted(Jc)),(i.code==="KeyP"||i.code==="Escape")&&dn==="race"&&(Cf=!Cf))});addEventListener("keyup",i=>Qc.delete(i.code));addEventListener("blur",()=>Qc.clear());addEventListener("pointerdown",()=>Ht.resume(),{once:!1});var Jc=ni.has("mute");Jc&&Ht.setMuted(!0);var Cf=!1;function ME(i){let e=(...s)=>s.some(r=>Qc.has(r));un.throttle=e("ArrowUp","KeyW")?1:0,un.brake=e("ArrowDown","KeyS")?1:0;let t=(e("ArrowRight","KeyD")?1:0)-(e("ArrowLeft","KeyA")?1:0);un.steer=t,un.boost=e("Space"),un.drift=e("ShiftLeft","ShiftRight","KeyX");let n=navigator.getGamepads?.()[0];if(n){let s=n.axes[0]||0;Math.abs(s)>.12&&(un.steer=s),un.throttle=Math.max(un.throttle,n.buttons[7]?.value||0,n.buttons[0]?.pressed?1:0),un.brake=Math.max(un.brake,n.buttons[6]?.value||0),un.boost=un.boost||!!n.buttons[2]?.pressed,un.drift=un.drift||!!n.buttons[1]?.pressed||!!n.buttons[5]?.pressed}return un}function SE(i){let e=new Bo,t=new xs(50,32,16),n=new O(...i.sunDir).normalize(),s=new St({side:$t,uniforms:{uTop:{value:new Ae(i.skyTop)},uHor:{value:new Ae(i.skyHorizon)},uGround:{value:new Ae(i.hemiGround)},uSun:{value:new Ae(i.sunColor).multiplyScalar(i.sunIntensity)},uSunDir:{value:n}},vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uTop, uHor, uGround, uSun, uSunDir; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 c = d.y > 0.0 ? mix(uHor, uTop, pow(d.y, 0.55)) : mix(uHor, uGround, pow(-d.y, 0.35));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSun * (pow(s, 350.0) * 14.0 + pow(s, 12.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`});e.add(new ot(t,s));let r=new Wr(mi),o=r.fromScene(e,.02);return r.dispose(),t.dispose(),s.dispose(),o}var E0=new Map;function T0(i,e="#f4f2ec",t="#16181d"){let n=i+e+t,s=E0.get(n);if(!s){let o=document.createElement("canvas");o.width=40,o.height=28;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,40,28),a.fillStyle=t,a.font='italic 900 26px "Arial Narrow", Impact, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(i),20,15),s=new fi(o),s.colorSpace=wt,s.magFilter=sn,s.minFilter=Yn,E0.set(n,s)}let r=new ot(new Cn(1,1),new it({map:s,roughness:.5,side:At,polygonOffset:!0,polygonOffsetFactor:-2}));return r.userData.ownGeometry=!0,r}var oa=null;function bE(){if(oa)return oa;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,0.55)"),t.addColorStop(.5,"rgba(255,255,255,0.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),oa=new fi(i),oa.colorSpace=wt,oa}function Af(i,e,t){let n=new ec(new zo({map:bE(),color:i,transparent:!0,opacity:t,blending:Dr,depthWrite:!1,fog:!1}));return n.scale.setScalar(e),n}var Ze=null,dn="boot",If=0,Pf=0,Lf=0,fo=99;function EE(){if(Ze){for(let i of Ze.bikes)kt.remove(i.model.group);kt.remove(Ze.road.group),Ze.road.dispose?.(),Ze.env.dispose?.(),Ze.env.group?.parent&&Ze.env.group.parent.remove(Ze.env.group),Ze.fx.dispose?.(),Ze.post.dispose?.(),Ze.envMap?.dispose(),kt.environment=null,Ze.mirror&&(kt.remove(Ze.mirror),Ze.mirror.dispose()),Ze.fill&&kt.remove(Ze.fill),Ze.scenery&&(kt.remove(Ze.scenery.group),Ze.scenery.dispose()),Ze.clouds&&(kt.remove(Ze.clouds),Ze.clouds.geometry.dispose(),Ze.clouds.material.dispose()),Ze.sunGlow&&(kt.remove(Ze.sunGlow),Ze.sunGlow.material.dispose()),Ze=null}}var Wn=null,L0={},uo=new Map,Df=new Map;function ca(i){if(!uo.has(i.id)){uo.set(i.id,fetch("assets/v3/"+i.file).then(e=>{if(!e.ok)throw new Error("\xE9tape indisponible : "+i.id);return e.json()}).then(e=>(e.props=L0,Df.set(i.id,e),e)));for(let e of uo.keys()){if(uo.size<=2)break;e!==i.id&&(uo.delete(e),Df.delete(e))}}return uo.get(i.id)}function Nf({trackSeed:i,weatherId:e,laps:t,riders:n,autopilot:s,realData:r=null,final:o=!0,carry:a=null}){EE();let c=Jn(i),l=!!r,h=l?Im(r):Hp(i),u=Ss[e]||Ss.sunset;Tn.far=l?9500:6e3,Tn.updateProjectionMatrix();let f=l?Dm(kt,h,u,c.fork("env")):Tm(kt,h,u,c.fork("env")),p=SE(u);kt.environment=p.texture,kt.environmentIntensity=u.night?.55:.5,mi.toneMappingExposure=u.night?1.5:.82;let x=Af(u.sunColor,u.night?900:2200,u.night?.35:.75);x.userData.dir=new O(...u.sunDir).normalize(),kt.add(x);let _=new vi(u.night?3820160:13226728,u.night?.25:.45);_.position.set(-u.sunDir[0],.6,-u.sunDir[2]).multiplyScalar(100),_.name="fill-light",kt.add(_);let m=um(h,u,c.fork("road"));kt.add(m.group),l||Nh(f.group,R=>R.geometry.attributes.position.count>2e4?1:.45),Nh(m.group,()=>.4);let d=l?{group:new ft,dispose(){}}:Cm(h,u,c.fork("scenery"),f.heightAt);f.sun?.shadow&&(f.sun.shadow.mapSize.set(4096,4096),f.sun.shadow.radius=5,f.sun.shadow.blurSamples=16,f.sun.shadow.normalBias=.05,f.sun.shadow.map?.dispose(),f.sun.shadow.map=null),kt.add(d.group);let y=null,v=l?Math.min(.25,u.wet||.25):u.sheen??u.wet;v>.5&&!ni.has("noreflect")&&(y=new Xo(new Cn(900,900),{textureWidth:1280,textureHeight:720,clipBias:.05,multisample:4}),y.rotation.x=-Math.PI/2,y.material.colorWrite=!1,y.material.depthWrite=!1,y.material.depthTest=!1,y.frustumCulled=!1,y.renderOrder=-10,y.name="road-mirror",kt.add(y));let g=m.group.getObjectByName("road-asphalt");g&&v>.5&&(g.material.envMap=p.texture,g.material.envMapIntensity=y?.35:1.25,g.material.metalness=.3,mm(g.material,u.sheen??u.wet,y?{texture:y.getRenderTarget().texture,matrix:y.material.uniforms.textureMatrix.value}:null));let T=dm(u,c.fork("clouds"));kt.add(T);let E=n0(kt,u),M=l0(mi,kt,Tn,u),w=jp({track:h,laps:t,env:u,rng:c.fork("race"),riders:n,final:o,carry:a}),b=w.riders.map(R=>{let F=$m({color:R.color,accent:R.accent,isPlayer:!!R.isPlayer&&!!u.night,detail:R.isPlayer?"hi":"lo"});F.group.rotation.order="YXZ";let B=F.group.getObjectByName("chassis")||F.group,L=Af(16722458,.3,.3);if(L.position.set(0,.67,-.42),B.add(L),u.night){let j=Af(16773840,1.3,.8);j.position.set(0,.48,1.66),B.add(j)}F.tailGlow=L;let V=R.isPlayer?1:2+w.riders.indexOf(R)*7%97;for(let j of[-1,1]){let z=T0(V);z.scale.set(.24,.17,1),z.position.set(.105*j,.6,-.2),z.rotation.y=j*Math.PI/2,B.add(z)}let H=T0(V);return H.scale.set(.2,.14,1),H.position.set(0,.585,1.6),H.rotation.x=-.75,B.add(H),kt.add(F.group),{rider:R,model:F,pose:{},prev:new O,has:!1,w:{x:0,y:0,z:0,heading:0,slope:0}}}),S=s?bc({id:"auto",name:"auto",skill:.9,aggression:.5,jumpSkill:.8,lineSkill:.9,style:"r\xE9gulier"},c.fork("auto")):null;if(Ze={track:h,weather:u,env:f,road:m,fx:E,post:M,race:w,bikes:b,autoAI:S,envMap:p,sunGlow:x,clouds:T,scenery:d,mirror:y,fill:_,playerBike:b.find(R=>R.rider.isPlayer)||b[0]},l){let R=[];for(let F of h.features)F.type==="tunnel"&&F.name&&R.push({s:F.s0-90,text:F.name.toUpperCase()});for(let F of h.bridges)F.name&&F.s1-F.s0>150&&R.push({s:F.s0-40,text:F.name.toUpperCase()});for(let F of f.places||[])R.push({s:F.s-20,text:F.name.toUpperCase()});for(let F of f.props||[])F.label&&F.dist<700&&R.push({s:Math.max(0,F.s-500),text:F.label.toUpperCase()});R.sort((F,B)=>F.s-B.s),Ze.announce=R,Ze.announceIdx=0}return wn.setTrack(h),B0(),N0(.016),es.snap(el()),Pf=w.player?.position||n.length,Lf=1,fo=99,window.__game={stage:Ze,renderer:mi,scene:kt,camera:Tn,RL:Ih},window.__tick=O0,Ze}var Ai={x:0,y:0,z:0,heading:0,yaw:0,lean:0,speedRatio:0,airborne:!1,boosting:!1,slope:0};function el(){let i=Ze.playerBike,e=i.rider.state;return Ai.x=i.w.x,Ai.y=i.w.y,Ai.z=i.w.z,Ai.heading=i.w.heading,Ai.yaw=-D0(e),Ai.speedRatio=Math.min(1.3,e.speed/i.rider.stats.maxSpeed),Ai.airborne=e.airborne,Ai.boosting=e.boostT>0,Ai.slope=i.w.slope||0,Ai}var TE=.8,w0=.7;function D0(i){let e=i.vdir??i.yaw;return e+TE*(i.yaw-e)}function N0(i){let{track:e,fx:t,weather:n}=Ze;for(let s of Ze.bikes){let r=s.rider.state;Ft(e,r.s,r.d,s.w),s.w.y+=r.yRel||0;let o=s.model.group;o.position.set(s.w.x,s.w.y,s.w.z);let a=s.w.heading-D0(r),c=s.w.heading-(r.vdir??r.yaw);o.rotation.y=a,o.position.x+=w0*(Math.sin(a)-Math.sin(c)),o.position.z+=w0*(Math.cos(a)-Math.cos(c)),o.rotation.x=r.airborne?0:-Math.atan(s.w.slope||0);let l=s.pose;if(l.lean=r.lean,l.steer=r.steer,l.pitch=r.pitch,l.compress=r.compress,l.wheelSpin=r.wheelSpin,l.speedRatio=r.speed/s.rider.stats.maxSpeed,l.speed=r.speed,l.airborne=r.airborne,l.drift=r.drift,l.boost=r.boostT>0,l.braking=s.rider.isPlayer?un.brake>.1:!!s.rider.braking,s.model.update(l,i),s.model.tailGlow){let v=l.braking?1:0;s.model.tailGlow.material.opacity+=(.3+.6*v-s.model.tailGlow.material.opacity)*Math.min(1,i*12),s.model.tailGlow.scale.setScalar(.3+.55*v)}let h=o.rotation.y,u=Math.sin(h),f=Math.cos(h),p=s.w.x-u*.7,x=s.w.z-f*.7,_=s.w.y+.05,m=u*r.speed,d=f*r.speed;!r.airborne&&r.speed>8&&(r.drift>.8&&(Math.random()<r.drift*.9&&t.emit("smoke",p,_,x,m*.2,1.2,d*.2,1),s.has&&t.addSkid(s.prev.x,s.prev.y,s.prev.z,p,_,x,.16,.25+r.drift*.4)),!r.onRoad&&Math.random()<.7&&t.emit("dust",p,_,x,m*.25,1.5,d*.25,2),n.wet>.2&&r.speed>20&&Math.random()<n.wet*.8&&t.emit("spray",p,_,x,m*.35,2.5,d*.35,2)),r.boostT>0&&t.emit("boost",p-u*.4,_+.45,x-f*.4,m*.9,.2,d*.9,1),s.prev.set(p,_,x),s.has=!r.airborne;let y=s.rider.isPlayer?null:s.rider.frameEvents;y&&y.length&&U0(s,y,!1)}}function U0(i,e,t){let{fx:n}=Ze,s=i.rider.state,r=i.model.group.rotation.y,o=Math.sin(r)*s.speed,a=Math.cos(r)*s.speed;for(let c of e)c==="land"||c==="hardLand"?(n.emit("land",i.w.x,i.w.y+.1,i.w.z,o*.3,1,a*.3,c==="hardLand"?40:22),t&&(Ht.play("land"),es.shake(c==="hardLand"?.9:.45))):c==="wall"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,3,a*.5,26),t&&(Ht.play("hit"),es.shake(.7))):c==="crash"?(n.emit("spark",i.w.x,i.w.y+.5,i.w.z,o*.5,4,a*.5,40),n.emit("dust",i.w.x,i.w.y+.2,i.w.z,o*.3,2,a*.3,30),t&&(es.shake(1.4),wn.flash("CHUTE !",1400))):c==="jump"?t&&Ht.play("jump"):c==="boost"?t&&(Ht.play("boost"),es.shake(.3),wn.flash("BOOST !",600)):c==="pad"&&t&&(Ht.play("pad"),es.shake(.2))}function wE(i){let{race:e,autoAI:t,track:n}=Ze,s=e.player,r=un;if(t||dn==="finish")if(t){let a=e.riders.filter(c=>c!==s).map(c=>c.state);r=Ec(t,s.state,n,s.stats,a,i)}else r=AE;e.update(i,r);let o=s.state.events;o.length&&(U0(Ze.playerBike,o,!t),o.length=0)}var AE={throttle:.3,brake:0,steer:0,boost:!1,drift:!1},Ln={speedKmh:0,position:1,total:8,lap:1,laps:3,time:0,bestLap:null,boostCharges:0,boostT:0,countdown:null,wrongWay:!1},Rf=[],A0=new O,R0=performance.now(),$c=0,jc=0;function F0(i){requestAnimationFrame(F0);let e=Math.min(.05,(i-R0)/1e3);R0=i,O0(e)}function O0(i){if(!Ze)return;if(Cf){Ze.post.render(0);return}jc+=i,If+=i;let{race:e}=Ze,t=dn==="race"||dn==="attract"||dn==="finish";if(t){dn==="race"&&ME(i),$c+=i;let a=0;for(;$c>=wf&&a++<8;)wE(wf),$c-=wf;a>=8&&($c=0)}N0(i);let n=e.player,s=n.state,r=Math.min(1.3,s.speed/n.stats.maxSpeed),o=el();dn==="intro"||dn==="menu"||dn==="finish"&&If>1.2?RE(o,i):es.update(i,o),A0.set(o.x,o.y,o.z),Ze.env.update(i,jc,A0),Ze.mirror&&Ze.mirror.position.set(o.x,o.y-(s.yRel||0)+.02,o.z),Ze.sunGlow.position.copy(Tn.position).addScaledVector(Ze.sunGlow.userData.dir,3200),Ze.road.update(i,jc),Ze.fx.setSpeed(t?r:0,s.boostT>0),Ze.fx.update(i,Tn),Ze.post.setSpeed(t?r:0,s.boostT>0),Ze.post.render(i),(dn==="race"||dn==="finish")&&(Ht.setEngine(Math.min(1,r),dn==="race"?un.throttle:.3),Ht.setWind(Math.min(1,r)),Ht.setSkid(s.airborne?0:Math.min(1,s.drift))),dn==="race"&&CE(e,n,s)}var C0=new O;function RE(i,e){let t=jc*.35+i.heading;C0.set(i.x+Math.sin(t)*7.5,i.y+2.6,i.z+Math.cos(t)*7.5),Tn.position.lerp(C0,Math.min(1,e*2.5)),Tn.fov+=(55-Tn.fov)*Math.min(1,e*3),Tn.updateProjectionMatrix(),Tn.lookAt(i.x,i.y+.9,i.z)}function CE(i,e,t){Ln.speedKmh=t.speed*3.6,Ln.position=e.position,Ln.total=i.riders.length,Ln.lap=Math.min(i.laps,Math.max(1,e.lap)),Ln.laps=i.laps,Ln.time=i.time,Ln.bestLap=e.bestLap??null,Ln.boostCharges=t.boostCharges,Ln.boostT=t.boostT,Ln.gear=t.gear,Ln.rpm=t.rpm,Ln.countdown=i.phase==="countdown"?i.countdown:i.time<.9?0:null,Ln.wrongWay=Math.abs(t.yaw)>1.4,wn.update(Ln),Rf.length=0;for(let n of i.riders)Rf.push({s:n.state.s,d:n.state.d,isPlayer:!!n.isPlayer,color:n.color});if(wn.updateMinimap(Rf),i.phase==="countdown"){let n=Math.ceil(i.countdown);n!==fo&&(fo=n,n>0&&Ht.play("beep"))}else fo!==0&&(fo=0,Ht.play("go"),Ht.startMusic?.());if(i.phase==="racing"){let n=Ze.announce;if(n)for(;Ze.announceIdx<n.length&&n[Ze.announceIdx].s<=t.s;)wn.flash(n[Ze.announceIdx].text,2e3),Ze.announceIdx++;e.position<Pf&&!(n&&Ze.announceIdx>0&&t.s-n[Ze.announceIdx-1].s<120)&&wn.flash(e.position===1?"EN T\xCATE !":"+1 PLACE",700),Pf=e.position,e.lap!==Lf&&e.lap<=i.laps&&(Lf=e.lap,Ht.play("lap"),e.lap===i.laps&&wn.flash("DERNIER TOUR",1400))}i.phase==="relay"&&dn==="race"&&IE(),i.phase==="finished"&&dn==="race"&&PE()}var Xt=null;function IE(){let i=Xt&&Xt.metas[Xt.index+1];if(!i)return;let e=Df.get(i.id);if(!e){Xt.waiting||(Xt.waiting=!0,wn.flash("CHARGEMENT\u2026",1500),ca(i).catch(()=>{}));return}let t=Ze.race,n=t.track.length,s=new Map;for(let a of t.riders)a.state.s-=n,a.state._padKey=null,s.set(a.id,a.state);Xt.index+=1,Xt.waiting=!1;let r=performance.now();Nf({trackSeed:"REAL:"+i.id,weatherId:Xt.weatherId,laps:1,riders:Xt.riders,autopilot:Xt.autopilot,realData:e,final:Xt.index===Xt.metas.length-1,carry:{time:t.time,states:s}}),fo=0,es.snap(el()),Xt.hitch=Math.max(Xt.hitch||0,performance.now()-r),window.__relay={index:Xt.index,ms:Math.round(performance.now()-r)},wn.flash(`${Xt.index+1}/${Xt.metas.length} \xB7 ${i.subtitle.toUpperCase()}`,2600);let o=Xt.metas[Xt.index+1];o&&setTimeout(()=>ca(o).catch(()=>{}),3e3)}function B0(){let i=innerWidth,e=innerHeight;mi.setSize(i,e,!1),Tn.aspect=i/e,Tn.updateProjectionMatrix(),Ze?.post.setSize(i,e)}addEventListener("resize",B0);function aa(i){dn=i,If=0}var Zt=null,ho=Ah(),z0=null;function PE(){aa("finish"),wn.flash(`ARRIV\xC9E \u2014 ${Ze.race.player.position}${Ze.race.player.position===1?"er":"e"}`,2200),Ht.play(Ze.race.player.position<=3?"win":"lose"),Ht.stopMusic?.(),setTimeout(()=>z0?.(),3200)}async function I0(){Xt=null;let i=Cc(Rc("ATTRACT"));for(let n of i)n.stats=Qr({upgrades:[]});let e=Wn?Wn.stages[Math.min(3,Wn.stages.length-1)]:null,t=e?await ca(e).catch(()=>null):null;Nf({trackSeed:t?"REAL:"+t.id:"ATTRACT-"+Ic(),weatherId:t?"sicily":"sunset",laps:t?1:99,riders:i,autopilot:!0,realData:t}),wn.hide(),aa("attract")}async function LE(){if(await zm().catch(i=>console.warn("Mod\xE8le de moto indisponible, repli sur le mod\xE8le proc\xE9dural :",i)),!ni.has("noreal")&&(Wn=await fetch("assets/v3/route.json").then(i=>i.ok?i.json():null).catch(()=>null),Wn&&!Wn.stages?.length&&(Wn=null),Wn)){let i=await fetch("assets/v3/props/index.json").then(t=>t.ok?t.json():[]).catch(()=>[]);await Promise.all(Pm.filter(t=>i.includes(t)).map(t=>fetch(`assets/v3/props/${t}.json`).then(n=>n.ok?n.json():null).then(n=>{n&&(L0[t]=n)}).catch(()=>{})));let e=document.createElement("div");e.textContent="\xA9 contributeurs OpenStreetMap \xB7 relief Terrarium (Mapzen) \xB7 Sentinel-2 cloudless 2016 par EOX (CC BY 4.0)",e.style.cssText="position:fixed;left:50%;bottom:0.6vmin;transform:translateX(-50%);font:1.35vmin Arial,sans-serif;color:rgba(255,255,255,.72);text-shadow:0 1px 2px #000;pointer-events:none;z-index:40;white-space:nowrap",document.body.appendChild(e)}for(await I0(),document.getElementById("boot").remove(),requestAnimationFrame(F0);;){let i=ni.get("seed");if(i||({seed:i}=await Qi.showTitle({dailySeed:Ic(),meta:ho})),Ht.resume(),Zt=Rc(i),Wn){let n=Math.floor(Number(ni.get("stage")))-1;n>0&&n<Wn.stages.length||(n=0);let s=Wn.stages.slice(n),r=s.reduce((o,a)=>o+a.length,0)/1e3;Zt.stages=[{name:Wn.title,subtitle:`${Wn.roads} \xB7 ${r.toFixed(0)} km d'une traite`,trackSeed:"REAL:"+s[0].id,weather:"sicily",laps:1,real:s}]}for(;!Zo(Zt);){let n=Zt.stages[Zt.stageIndex],s=Qr(Zt),r=Cc(Zt).map(c=>({...c,stats:c.isPlayer?s:Qr({upgrades:[]})}));Qi.hideAll();let o=null;Xt=null,n.real&&(wn.flash?.("CHARGEMENT\u2026"),o=await ca(n.real[0]),Xt={metas:n.real,index:0,riders:r,autopilot:ni.has("auto"),weatherId:ni.get("weather")||n.weather},n.real[1]&&setTimeout(()=>ca(n.real[1]).catch(()=>{}),4e3)),Nf({trackSeed:n.trackSeed,weatherId:ni.get("weather")||n.weather,laps:n.laps,riders:r,autopilot:ni.has("auto"),realData:o,final:!n.real||n.real.length===1}),aa("intro"),Ht.setRain(Ze.weather.rain||0),ni.has("auto")||await Qi.showStageIntro({stage:n,index:Zt.stageIndex+1,total:Zt.stages.length,standings:eo(Zt),weather:Ze.weather}),Qi.hideAll(),es.snap(el()),wn.show(),aa("race"),await new Promise(c=>{z0=c}),wn.hide(),Ht.setEngine(.1,0),Ht.setWind(0),Ht.setSkid(0);let a=Ze.race.results();if(Th(Zt,a),await Qi.showResults({results:a,standings:eo(Zt),stage:n}),!Zo(Zt)){let c=bh(Zt),l=Zt.upgrades.map(u=>Js.find(f=>f.id===u)).filter(Boolean),h=await Qi.showUpgradeChoice({choices:c,index:Zt.stageIndex,total:Zt.stages.length,owned:l});Eh(Zt,h)}}let e=eo(Zt),t=e.findIndex(n=>n.isPlayer)+1;ho=Ch(ho,Zt)||ho,Rh(ho),aa("menu"),await Qi.showRunEnd({standings:e,playerPosition:t,run:Zt,meta:ho}),Qi.hideAll(),ni.delete("seed"),ni.delete("stage"),await I0()}}LE().catch(i=>{console.error(i);let e=document.getElementById("boot")||document.body.appendChild(Object.assign(document.createElement("div"),{id:"boot"}));e.className="err",e.textContent=`Erreur de d\xE9marrage :
`+(i?.stack||i)});
