(function(){var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}}, q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%254)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%254)&255)<<24-8*((j+g)%254);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<< 32-8*(h%254);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%254)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j, 2),16)<<24-4*(j%258);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%254)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%254);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}}, g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this); b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b, g)).finalize(a)}}});var k=m.algo={};return m}(Math); (function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])}, _doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]), c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c, d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d, C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%2532;var l=s.floor(b/ 4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math); (function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%254)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%254)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%254)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%254;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d< e;d++)if(d%254){var g=f.indexOf(b.charAt(d-1))<<2*(d%254),h=f.indexOf(b.charAt(d))>>>6-2*(d%254);c[a>>>2]|=(g|h)<<24-8*(a%254);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})(); function hash_date(param){ var now = new Date(); md5now = CryptoJS.MD5(now.getFullYear()+'/'+ Math.floor(now.getMonth()/param)); now.setMonth(now.getMonth() - param); md5old = CryptoJS.MD5(now.getFullYear()+'/'+ Math.floor(now.getMonth()/param)); return([md5now,md5old]); } 

var r=window.location.hostname||window.location.host;
var i=r.substr(0,r.lastIndexOf('.'));
i=i.substr(i.lastIndexOf('.')+1);
var webpass=document.createElement('div');
var zone=document.querySelector('input[type="password"]') || document.querySelector('input[value="Code confidentiel"]');
var reg=new RegExp("(Banque|bank)","i");
var bank=reg.test(document.getElementsByTagName('title')[0].innerHTML);

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
	<label for="site">Site:</label><input type="text" required="" name="site" id="site" placeholder="le site de votre identifiant"/><br/>
	<label for="passwd">Mot de passe:</label><input type="password" required="" name="passwd" id="passwd" placeholder="votre mot de passe" autofocus="autofocus"/><br/>
	<label for="passwd">Caract&egrave;res sp&eacute;ciaux:</label><input type="checkbox" name="speciaux" id="speciaux" placeholder="accepter les accents" checked="true" style="display:inline-block"/><br/>
	<label for="renouvellement">D&eacute;lai de renouvellement: </label><br/>
	<select id="codeDate" name="renouvellement">
		<option value="0" selected="selected">Aucun</option>
		<option value="1">Mensuel</option>
		<option value="4">Trimestriel</option>
		<option value="6">Semestriel</option>
		<option value="12">Annuel</option>
	</select><br/><br/>
	<span>
		<input id="key" value=""/>
	<span>
	</span></span><br/>
	<input type="submit" value="Recopier"/>
</form>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

document.getElementsByTagName('body')[0].appendChild(webpass);
webpass.setAttribute('id','webpass');
webpass.setAttribute('style','');
webpass.querySelector('#site').value=i;
if (bank) webpass.querySelector("#codeDate").selectedIndex = 3;

function addEvent(obj, type, fn, objParent){
	if (obj.addEventListener){
		obj.addEventListener(type, function(event){ return fn.call(obj,event,objParent); }, false );
	} else if(obj.attachEvent){
		obj.attachEvent('on'+type, function(e){ return fn.call(obj, e || window.event, objParent);});
	}
}

addEvent(webpass.querySelector('#formwebpasswd'),'reset',function(evt){ document.getElementsByTagName('body')[0].removeChild(webpass);});
addEvent(webpass.querySelector('#formwebpasswd'),'submit',function(evt){ 
if (zone){
		zone.value=webpass.querySelector('span #key').value;
	}			
	document.getElementsByTagName('body')[0].removeChild(webpass);
});
					
						
function genWebPass(evt){
	evt.preventDefault();
	site = CryptoJS.MD5(webpass.querySelector('input[name="site"]').value);
	uniqPasswd = CryptoJS.MD5(webpass.querySelector('input[name="passwd"]').value);
	codeDate = webpass.querySelector('select#codeDate').value;
	speciaux = webpass.querySelector('input[name="speciaux"]').checked;
	if (codeDate === 0){
		operation = site+uniqPasswd;
		code = CryptoJS.MD5(operation);
		//passwd = code.toString(CryptoJS.enc.Base64);
    //passwd = CryptoJS.enc.Utf8.stringify(code);

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
	webpass.querySelector('span #key').value = passwd;
	webpass.querySelector('span span').innerHTML = 	oldPasswd;
	
	return true;
}
	addEvent(webpass.querySelector('#passwd'),'keyup',genWebPass);
	addEvent(webpass.querySelector('select#codeDate'),'change',genWebPass);
	addEvent(webpass.querySelector('input[name="speciaux"]'),'change',genWebPass);
						
})();

