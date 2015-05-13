/* CryptoJS v3.1.2 Core */
var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function(){},f=l.Base={extend:function(a){n.prototype=this;var b=new n;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
j=l.WordArray=f.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var e=0;e<a;e++)b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)b[c+e>>>2]=d[e>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<
32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*h.random()|0);return new j.init(b,a)}}),m=k.enc={},s=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new j.init(d,b/2)}},p=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new j.init(d,b)}},t=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new j.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}return new j.init(g,c)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new u.HMAC.init(a,
d)).finalize(b)}}});var u=k.algo={};return k}(Math);

/*CryptoJS v3.1.2 MD5SUM*/
(function(E){function h(a,f,g,j,p,h,k){a=a+(f&g|~f&j)+p+k;return(a<<h|a>>>32-h)+f}function k(a,f,g,j,p,h,k){a=a+(f&j|g&~j)+p+k;return(a<<h|a>>>32-h)+f}function l(a,f,g,j,h,k,l){a=a+(f^g^j)+h+l;return(a<<k|a>>>32-k)+f}function n(a,f,g,j,h,k,l){a=a+(g^(f|~j))+h+l;return(a<<k|a>>>32-k)+f}for(var r=CryptoJS,q=r.lib,F=q.WordArray,s=q.Hasher,q=r.algo,a=[],t=0;64>t;t++)a[t]=4294967296*E.abs(E.sin(t+1))|0;q=q.MD5=s.extend({_doReset:function(){this._hash=new F.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(m,f){for(var g=0;16>g;g++){var j=f+g,p=m[j];m[j]=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360}var g=this._hash.words,j=m[f+0],p=m[f+1],q=m[f+2],r=m[f+3],s=m[f+4],t=m[f+5],u=m[f+6],v=m[f+7],w=m[f+8],x=m[f+9],y=m[f+10],z=m[f+11],A=m[f+12],B=m[f+13],C=m[f+14],D=m[f+15],b=g[0],c=g[1],d=g[2],e=g[3],b=h(b,c,d,e,j,7,a[0]),e=h(e,b,c,d,p,12,a[1]),d=h(d,e,b,c,q,17,a[2]),c=h(c,d,e,b,r,22,a[3]),b=h(b,c,d,e,s,7,a[4]),e=h(e,b,c,d,t,12,a[5]),d=h(d,e,b,c,u,17,a[6]),c=h(c,d,e,b,v,22,a[7]),
b=h(b,c,d,e,w,7,a[8]),e=h(e,b,c,d,x,12,a[9]),d=h(d,e,b,c,y,17,a[10]),c=h(c,d,e,b,z,22,a[11]),b=h(b,c,d,e,A,7,a[12]),e=h(e,b,c,d,B,12,a[13]),d=h(d,e,b,c,C,17,a[14]),c=h(c,d,e,b,D,22,a[15]),b=k(b,c,d,e,p,5,a[16]),e=k(e,b,c,d,u,9,a[17]),d=k(d,e,b,c,z,14,a[18]),c=k(c,d,e,b,j,20,a[19]),b=k(b,c,d,e,t,5,a[20]),e=k(e,b,c,d,y,9,a[21]),d=k(d,e,b,c,D,14,a[22]),c=k(c,d,e,b,s,20,a[23]),b=k(b,c,d,e,x,5,a[24]),e=k(e,b,c,d,C,9,a[25]),d=k(d,e,b,c,r,14,a[26]),c=k(c,d,e,b,w,20,a[27]),b=k(b,c,d,e,B,5,a[28]),e=k(e,b,
c,d,q,9,a[29]),d=k(d,e,b,c,v,14,a[30]),c=k(c,d,e,b,A,20,a[31]),b=l(b,c,d,e,t,4,a[32]),e=l(e,b,c,d,w,11,a[33]),d=l(d,e,b,c,z,16,a[34]),c=l(c,d,e,b,C,23,a[35]),b=l(b,c,d,e,p,4,a[36]),e=l(e,b,c,d,s,11,a[37]),d=l(d,e,b,c,v,16,a[38]),c=l(c,d,e,b,y,23,a[39]),b=l(b,c,d,e,B,4,a[40]),e=l(e,b,c,d,j,11,a[41]),d=l(d,e,b,c,r,16,a[42]),c=l(c,d,e,b,u,23,a[43]),b=l(b,c,d,e,x,4,a[44]),e=l(e,b,c,d,A,11,a[45]),d=l(d,e,b,c,D,16,a[46]),c=l(c,d,e,b,q,23,a[47]),b=n(b,c,d,e,j,6,a[48]),e=n(e,b,c,d,v,10,a[49]),d=n(d,e,b,c,
C,15,a[50]),c=n(c,d,e,b,t,21,a[51]),b=n(b,c,d,e,A,6,a[52]),e=n(e,b,c,d,r,10,a[53]),d=n(d,e,b,c,y,15,a[54]),c=n(c,d,e,b,p,21,a[55]),b=n(b,c,d,e,w,6,a[56]),e=n(e,b,c,d,D,10,a[57]),d=n(d,e,b,c,u,15,a[58]),c=n(c,d,e,b,B,21,a[59]),b=n(b,c,d,e,s,6,a[60]),e=n(e,b,c,d,z,10,a[61]),d=n(d,e,b,c,q,15,a[62]),c=n(c,d,e,b,x,21,a[63]);g[0]=g[0]+b|0;g[1]=g[1]+c|0;g[2]=g[2]+d|0;g[3]=g[3]+e|0},_doFinalize:function(){var a=this._data,f=a.words,g=8*this._nDataBytes,j=8*a.sigBytes;f[j>>>5]|=128<<24-j%32;var h=E.floor(g/
4294967296);f[(j+64>>>9<<4)+15]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;f[(j+64>>>9<<4)+14]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360;a.sigBytes=4*(f.length+1);this._process();a=this._hash;f=a.words;for(g=0;4>g;g++)j=f[g],f[g]=(j<<8|j>>>24)&16711935|(j<<24|j>>>8)&4278255360;return a},clone:function(){var a=s.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=s._createHelper(q);r.HmacMD5=s._createHmacHelper(q)})(Math);

/*CryptoJS v3.1.2 ENC-BASE64*/
(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d<
e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();


function hash_date(param){ 
	var now = new Date();
	md5now = CryptoJS.MD5(now.getFullYear()+'/'+ Math.floor(now.getMonth()/param));
	now.setMonth(now.getMonth() - param);
	md5old = CryptoJS.MD5(now.getFullYear()+'/'+ Math.floor(now.getMonth()/param));
	return([md5now,md5old]);
} 
 
 var r=window.location.hostname||window.location.host;
 var i=r.substr(0,r.lastIndexOf('.'));
 i=i.substr(i.lastIndexOf('.')+1);
 var webpass=document.createElement('div');
 var zone = document.querySelector('input[type="password"]') || document.querySelector('input[value="Code confidentiel"]');
 var reg = new RegExp("(Banque|bank)","i");
 var bank = reg.test(document.getElementsByTagName('title')[0].innerHTML);

webpass.innerHTML = (function () {/*
	<style type="text/css">
		body > #webpass {
			position:fixed;
			display:block;
			width:100%;
			height:100%;
			left:0;
			top:0;
			z-index:1000;
			zindex:1000;
			background:rgba(200,200,255,0.8);
			font-family: sans-serif,Verdana;
			line-height:18px;
			color:black;
			font-size:10pt;
		}
		
		body > #webpass > form{
			position:relative;
			display:block;
			border:1px black solid;
			font-size:12pt;
			font-family:Verdana;
	 		top:160px;
			width:300px;
			height:280px;
			margin: auto;
			padding:30px 20px;
			border-radius:15px 15px;
			text-align:left;
			box-shadow: 0px 0px 10px #fff;
			background:white;
		}
	
	body > #webpass > form * {
      display:block;
			font-family: sans-serif,Verdana;
			width: auto;
			height:auto;
			color:auto;
			background:auto;
		}
		
	body > #webpass > form > div {
			position:absolute;
			top:0;
			width:100%;
			height: 30px;
			line-height: 30px;
			text-align:center;
			background:#404040;
			color:white;
			margin-left:-20px;
			font-weight:bolder;
			border-top-left-radius:15px 15px;
			border-top-right-radius:15px 15px;
			font-style:italic;			
	  }	
		body > #webpass > form > label {
			display:inline-block;
		
		}
		
		body > #webpass > form > span p{
			border:1px solid black;
			text-align:center;
			margin:10px 10px;
			padding:5px 5px;
			background:#F0F0F0;
			border-radius: 5px;
			box-shadow: 0 0 5px #FF0000;
		}
		
		body > #webpass form input,body > #webpass form select {
   	  border: 1px solid #1777b7;
    	border-radius: 3px;
    	box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset, 0 1px 1px rgba(100, 100, 100, 0.3);
    	color: #000;
    	font-family: sans-serif;
    	padding: 4px 4px 4px;
    	text-decoration: none;
			margin:0;
			width:100%;
			left:auto;
			position:relative;
		}
		
		body > #webpass form input[type="checkbox"] {
    		background: none repeat scroll 0 0 #009afd;
				margin-top: 6px;
				float:right;
				width:auto;xcvxcv
	}
		
		body > #webpass form input[type="submit"] {
    		background: none repeat scroll 0 0 #009afd;
				margin: auto;
				margin-top:10px;
				padding: 4px 4px 4px;
				width:200px;
	}
	
	body > #webpass form input[type="reset"] {
    		background: none repeat scroll 0 0 #009afd;
				width:20px;
				height:20px; float:right;
				line-height:20px;font-size:8pt;
				margin-right:12px;
				margin-top:5px;
				line-height: 1;
	}
	
	body > #webpass form input:hover {
		background: none repeat scroll 0 0 #40bafd;
	}
	
	</style>
	<form id="formwebpasswd" style="">
		<div>
			WebPass <input type="reset" value="X"/> 
		</div>
		<label for="site">Site:</label><input type="text" required="" name="site" id="site" placeholder="le site de votre identifiant"/><br />
		<label for="passwd">Mot de passe:</label><input type="password" required="" name="passwd" id="passwd" placeholder="votre mot de passe" autofocus="autofocus"/> <br/>
		<label for="passwd">Caractères spéciaux:</label><input type="checkbox" name="speciaux" id="speciaux" placeholder="accepter les accents" checked="true" style="display:inline-block"/> <br/>
		<label for="renouvellement">Délai de renouvellement: </label><br />
		<select id="codeDate" name="renouvellement">
			<option value="0" selected="selected">Aucun</option>
			<option value="1">Mensuel</option>
			<option value="4">Trimestriel</option>
			<option value="6">Semestriel</option> 
			<option value="12">Annuel</option>
		</select><br/>
		<br/>
		<span>
				<input id="key" value=""/>
		<span>
		</span></span>
		<br/>
		<input type="submit" value="Générer"/> 
	</form>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

document.getElementsByTagName('body')[0].appendChild(webpass);
webpass.setAttribute('id','webpass');
webpass.setAttribute('style','');
webpass.querySelector('#site').value=i;
if (bank) webpass.querySelector("#codeDate").selectedIndex = 3;
 
 
function addEvent(obj, type, fn, objParent){ 
	if(obj.addEventListener){
		 obj.addEventListener(type, function(event){ return fn.call(obj,event,objParent); }, false );
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type, function(e){ return fn.call(obj, e || window.event, objParent);});
	} 
}

addEvent(webpass.querySelector('#formwebpasswd'),'reset',function(evt){ document.getElementsByTagName('body')[0].removeChild(webpass);});
addEvent(webpass.querySelector('#formwebpasswd'),'submit',function(evt){ 
	 evt.preventDefault();
	 site = CryptoJS.MD5(webpass.querySelector('input[name="site"]').value);
	 uniqPasswd = CryptoJS.MD5(webpass.querySelector('input[name="passwd"]').value);
	 codeDate = webpass.querySelector('select#codeDate').value;
	 speciaux = webpass.querySelector('input[name="speciaux"]').checked;
	 if (codeDate === 0){ 
		operation = site+uniqPasswd;
	    code = CryptoJS.MD5(operation);
		passwd = code.toString(CryptoJS.enc.Base64);
		oldPasswd ="";
	 } else { 
		var tab = hash_date(codeDate);
		operation = site+uniqPasswd;
		code = CryptoJS.MD5(site+uniqPasswd+tab[0]);
		oldCode = CryptoJS.MD5(site+uniqPasswd+tab[1]);
		passwd = code.toString(CryptoJS.enc.Base64);
		oldPasswd = oldCode.toString(CryptoJS.enc.Base64);
	}
	if (!speciaux) {
		passwd = passwd.replace(/[-\/\+]/g,'');
	    oldPasswd = oldPasswd.replace(/[-\/\+]/g,'');
	}
	passwd = passwd.substring(0,12);
	oldPasswd = oldPasswd.substring(0,12);
	webpass.querySelector('span #key').value =   passwd;
	webpass.querySelector('span span').innerHTML = 	oldPasswd;
 
	
	a=zone;
	zone.value=passwd;
	return false;
});

