<!doctype html>
<html lang="tr">
<head><meta charset="UTF-8"><script>if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script><script>(()=>{class RocketLazyLoadScripts{constructor(){this.v="1.2.6",this.triggerEvents=["keydown","mousedown","mousemove","touchmove","touchstart","touchend","wheel"],this.userEventHandler=this.t.bind(this),this.touchStartHandler=this.i.bind(this),this.touchMoveHandler=this.o.bind(this),this.touchEndHandler=this.h.bind(this),this.clickHandler=this.u.bind(this),this.interceptedClicks=[],this.interceptedClickListeners=[],this.l(this),window.addEventListener("pageshow",(t=>{this.persisted=t.persisted,this.everythingLoaded&&this.m()})),this.CSPIssue=sessionStorage.getItem("rocketCSPIssue"),document.addEventListener("securitypolicyviolation",(t=>{this.CSPIssue||"script-src-elem"!==t.violatedDirective||"data"!==t.blockedURI||(this.CSPIssue=!0,sessionStorage.setItem("rocketCSPIssue",!0))})),document.addEventListener("DOMContentLoaded",(()=>{this.k()})),this.delayedScripts={normal:[],async:[],defer:[]},this.trash=[],this.allJQueries=[]}p(t){document.hidden?t.t():(this.triggerEvents.forEach((e=>window.addEventListener(e,t.userEventHandler,{passive:!0}))),window.addEventListener("touchstart",t.touchStartHandler,{passive:!0}),window.addEventListener("mousedown",t.touchStartHandler),document.addEventListener("visibilitychange",t.userEventHandler))}_(){this.triggerEvents.forEach((t=>window.removeEventListener(t,this.userEventHandler,{passive:!0}))),document.removeEventListener("visibilitychange",this.userEventHandler)}i(t){"HTML"!==t.target.tagName&&(window.addEventListener("touchend",this.touchEndHandler),window.addEventListener("mouseup",this.touchEndHandler),window.addEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.addEventListener("mousemove",this.touchMoveHandler),t.target.addEventListener("click",this.clickHandler),this.L(t.target,!0),this.S(t.target,"onclick","rocket-onclick"),this.C())}o(t){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler),t.target.removeEventListener("click",this.clickHandler),this.L(t.target,!1),this.S(t.target,"rocket-onclick","onclick"),this.M()}h(){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler)}u(t){t.target.removeEventListener("click",this.clickHandler),this.L(t.target,!1),this.S(t.target,"rocket-onclick","onclick"),this.interceptedClicks.push(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.M()}O(){window.removeEventListener("touchstart",this.touchStartHandler,{passive:!0}),window.removeEventListener("mousedown",this.touchStartHandler),this.interceptedClicks.forEach((t=>{t.target.dispatchEvent(new MouseEvent("click",{view:t.view,bubbles:!0,cancelable:!0}))}))}l(t){EventTarget.prototype.addEventListenerWPRocketBase=EventTarget.prototype.addEventListener,EventTarget.prototype.addEventListener=function(e,i,o){"click"!==e||t.windowLoaded||i===t.clickHandler||t.interceptedClickListeners.push({target:this,func:i,options:o}),(this||window).addEventListenerWPRocketBase(e,i,o)}}L(t,e){this.interceptedClickListeners.forEach((i=>{i.target===t&&(e?t.removeEventListener("click",i.func,i.options):t.addEventListener("click",i.func,i.options))})),t.parentNode!==document.documentElement&&this.L(t.parentNode,e)}D(){return new Promise((t=>{this.P?this.M=t:t()}))}C(){this.P=!0}M(){this.P=!1}S(t,e,i){t.hasAttribute&&t.hasAttribute(e)&&(event.target.setAttribute(i,event.target.getAttribute(e)),event.target.removeAttribute(e))}t(){this._(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this.R.bind(this)):this.R()}k(){let t=[];document.querySelectorAll("script[type=rocketlazyloadscript][data-rocket-src]").forEach((e=>{let i=e.getAttribute("data-rocket-src");if(i&&!i.startsWith("data:")){0===i.indexOf("//")&&(i=location.protocol+i);try{const o=new URL(i).origin;o!==location.origin&&t.push({src:o,crossOrigin:e.crossOrigin||"module"===e.getAttribute("data-rocket-type")})}catch(t){}}})),t=[...new Map(t.map((t=>[JSON.stringify(t),t]))).values()],this.T(t,"preconnect")}async R(){this.lastBreath=Date.now(),this.j(this),this.F(this),this.I(),this.W(),this.q(),await this.A(this.delayedScripts.normal),await this.A(this.delayedScripts.defer),await this.A(this.delayedScripts.async);try{await this.U(),await this.H(this),await this.J()}catch(t){console.error(t)}window.dispatchEvent(new Event("rocket-allScriptsLoaded")),this.everythingLoaded=!0,this.D().then((()=>{this.O()})),this.N()}W(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((t=>{t.hasAttribute("data-rocket-src")?t.hasAttribute("async")&&!1!==t.async?this.delayedScripts.async.push(t):t.hasAttribute("defer")&&!1!==t.defer||"module"===t.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(t):this.delayedScripts.normal.push(t):this.delayedScripts.normal.push(t)}))}async B(t){if(await this.G(),!0!==t.noModule||!("noModule"in HTMLScriptElement.prototype))return new Promise((e=>{let i;function o(){(i||t).setAttribute("data-rocket-status","executed"),e()}try{if(navigator.userAgent.indexOf("Firefox/")>0||""===navigator.vendor||this.CSPIssue)i=document.createElement("script"),[...t.attributes].forEach((t=>{let e=t.nodeName;"type"!==e&&("data-rocket-type"===e&&(e="type"),"data-rocket-src"===e&&(e="src"),i.setAttribute(e,t.nodeValue))})),t.text&&(i.text=t.text),i.hasAttribute("src")?(i.addEventListener("load",o),i.addEventListener("error",(function(){i.setAttribute("data-rocket-status","failed-network"),e()})),setTimeout((()=>{i.isConnected||e()}),1)):(i.text=t.text,o()),t.parentNode.replaceChild(i,t);else{const i=t.getAttribute("data-rocket-type"),s=t.getAttribute("data-rocket-src");i?(t.type=i,t.removeAttribute("data-rocket-type")):t.removeAttribute("type"),t.addEventListener("load",o),t.addEventListener("error",(i=>{this.CSPIssue&&i.target.src.startsWith("data:")?(console.log("WPRocket: data-uri blocked by CSP -> fallback"),t.removeAttribute("src"),this.B(t).then(e)):(t.setAttribute("data-rocket-status","failed-network"),e())})),s?(t.removeAttribute("data-rocket-src"),t.src=s):t.src="data:text/javascript;base64,"+window.btoa(unescape(encodeURIComponent(t.text)))}}catch(i){t.setAttribute("data-rocket-status","failed-transform"),e()}}));t.setAttribute("data-rocket-status","skipped")}async A(t){const e=t.shift();return e&&e.isConnected?(await this.B(e),this.A(t)):Promise.resolve()}q(){this.T([...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async],"preload")}T(t,e){var i=document.createDocumentFragment();t.forEach((t=>{const o=t.getAttribute&&t.getAttribute("data-rocket-src")||t.src;if(o&&!o.startsWith("data:")){const s=document.createElement("link");s.href=o,s.rel=e,"preconnect"!==e&&(s.as="script"),t.getAttribute&&"module"===t.getAttribute("data-rocket-type")&&(s.crossOrigin=!0),t.crossOrigin&&(s.crossOrigin=t.crossOrigin),t.integrity&&(s.integrity=t.integrity),i.appendChild(s),this.trash.push(s)}})),document.head.appendChild(i)}j(t){let e={};function i(i,o){return e[o].eventsToRewrite.indexOf(i)>=0&&!t.everythingLoaded?"rocket-"+i:i}function o(t,o){!function(t){e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=i(arguments[0],t),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=i(arguments[0],t),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(o)}function s(e,i){let o=e[i];e[i]=null,Object.defineProperty(e,i,{get:()=>o||function(){},set(s){t.everythingLoaded?o=s:e["rocket"+i]=o=s}})}o(document,"DOMContentLoaded"),o(window,"DOMContentLoaded"),o(window,"load"),o(window,"pageshow"),o(document,"readystatechange"),s(document,"onreadystatechange"),s(window,"onload"),s(window,"onpageshow");try{Object.defineProperty(document,"readyState",{get:()=>t.rocketReadyState,set(e){t.rocketReadyState=e},configurable:!0}),document.readyState="loading"}catch(t){console.log("WPRocket DJE readyState conflict, bypassing")}}F(t){let e;function i(e){return t.everythingLoaded?e:e.split(" ").map((t=>"load"===t||0===t.indexOf("load.")?"rocket-jquery-load":t)).join(" ")}function o(o){function s(t){const e=o.fn[t];o.fn[t]=o.fn.init.prototype[t]=function(){return this[0]===window&&("string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=i(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach((t=>{const e=arguments[0][t];delete arguments[0][t],arguments[0][i(t)]=e}))),e.apply(this,arguments),this}}o&&o.fn&&!t.allJQueries.includes(o)&&(o.fn.ready=o.fn.init.prototype.ready=function(e){return t.domReadyFired?e.bind(document)(o):document.addEventListener("rocket-DOMContentLoaded",(()=>e.bind(document)(o))),o([])},s("on"),s("one"),t.allJQueries.push(o)),e=o}o(window.jQuery),Object.defineProperty(window,"jQuery",{get:()=>e,set(t){o(t)}})}async H(t){const e=document.querySelector("script[data-webpack]");e&&(await async function(){return new Promise((t=>{e.addEventListener("load",t),e.addEventListener("error",t)}))}(),await t.K(),await t.H(t))}async U(){this.domReadyFired=!0;try{document.readyState="interactive"}catch(t){}await this.G(),document.dispatchEvent(new Event("rocket-readystatechange")),await this.G(),document.rocketonreadystatechange&&document.rocketonreadystatechange(),await this.G(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this.G(),window.dispatchEvent(new Event("rocket-DOMContentLoaded"))}async J(){try{document.readyState="complete"}catch(t){}await this.G(),document.dispatchEvent(new Event("rocket-readystatechange")),await this.G(),document.rocketonreadystatechange&&document.rocketonreadystatechange(),await this.G(),window.dispatchEvent(new Event("rocket-load")),await this.G(),window.rocketonload&&window.rocketonload(),await this.G(),this.allJQueries.forEach((t=>t(window).trigger("rocket-jquery-load"))),await this.G();const t=new Event("rocket-pageshow");t.persisted=this.persisted,window.dispatchEvent(t),await this.G(),window.rocketonpageshow&&window.rocketonpageshow({persisted:this.persisted}),this.windowLoaded=!0}m(){document.onreadystatechange&&document.onreadystatechange(),window.onload&&window.onload(),window.onpageshow&&window.onpageshow({persisted:this.persisted})}I(){const t=new Map;document.write=document.writeln=function(e){const i=document.currentScript;i||console.error("WPRocket unable to document.write this: "+e);const o=document.createRange(),s=i.parentElement;let n=t.get(i);void 0===n&&(n=i.nextSibling,t.set(i,n));const c=document.createDocumentFragment();o.setStart(c,0),c.appendChild(o.createContextualFragment(e)),s.insertBefore(c,n)}}async G(){Date.now()-this.lastBreath>45&&(await this.K(),this.lastBreath=Date.now())}async K(){return document.hidden?new Promise((t=>setTimeout(t))):new Promise((t=>requestAnimationFrame(t)))}N(){this.trash.forEach((t=>t.remove()))}static run(){const t=new RocketLazyLoadScripts;t.p(t)}}RocketLazyLoadScripts.run()})();</script>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<script type="rocketlazyloadscript" id="cookie-law-info-gcm-var-js">
var _ckyGcm = {"status":true,"default_settings":[{"analytics":"denied","advertisement":"denied","functional":"denied","necessary":"granted","ad_user_data":"denied","ad_personalization":"denied","regions":"All"}],"wait_for_update":2000,"url_passthrough":false,"ads_data_redaction":false};
</script>
<script type="rocketlazyloadscript" id="cookie-law-info-gcm-js" data-rocket-type="text/javascript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/cookie-law-info/lite/frontend/js/gcm.min.js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-minify="1" id="cookieyes" data-rocket-type="text/javascript" data-rocket-src="https://uttsmobil.com/wp-content/cache/min/1/client_data/bf9a48436259eacd8f6f3c8b/script.js?ver=1733478729" data-rocket-defer defer></script>
	<!-- This site is optimized with the Yoast SEO Premium plugin v22.0 (Yoast SEO v23.1) - https://yoast.com/wordpress/plugins/seo/ -->
	<title>UTTS Başvurusu Yap | Ulusal Taşıt Tanıma Sistemi | UTTS Mobil</title>
	<meta name="description" content="UTTS başvurunuzu hemen yapın! Ad, soyad ve telefon bilgilerinizi girerek Ulusal Taşıt Tanıma Sistemi talebinizi kolayca oluşturun." />
	<link rel="canonical" href="https://uttsmobil.com/basvuru/" />
	<meta property="og:locale" content="tr_TR" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="UTTS Başvuru" />
	<meta property="og:description" content="UTTS başvurunuzu hemen yapın! Ad, soyad ve telefon bilgilerinizi girerek Ulusal Taşıt Tanıma Sistemi talebinizi kolayca oluşturun." />
	<meta property="og:url" content="https://uttsmobil.com/basvuru/" />
	<meta property="og:site_name" content="UTTS Mobil" />
	<meta property="article:publisher" content="https://www.facebook.com/uttsmobil/" />
	<meta property="article:modified_time" content="2024-12-06T10:03:54+00:00" />
	<meta name="twitter:card" content="summary_large_image" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://uttsmobil.com/basvuru/","url":"https://uttsmobil.com/basvuru/","name":"UTTS Başvurusu Yap | Ulusal Taşıt Tanıma Sistemi | UTTS Mobil","isPartOf":{"@id":"https://uttsmobil.com/#website"},"datePublished":"2024-10-16T14:33:46+00:00","dateModified":"2024-12-06T10:03:54+00:00","description":"UTTS başvurunuzu hemen yapın! Ad, soyad ve telefon bilgilerinizi girerek Ulusal Taşıt Tanıma Sistemi talebinizi kolayca oluşturun.","breadcrumb":{"@id":"https://uttsmobil.com/basvuru/#breadcrumb"},"inLanguage":"tr","potentialAction":[{"@type":"ReadAction","target":["https://uttsmobil.com/basvuru/"]}]},{"@type":"BreadcrumbList","@id":"https://uttsmobil.com/basvuru/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Anasayfa","item":"https://uttsmobil.com/"},{"@type":"ListItem","position":2,"name":"UTTS Başvuru"}]},{"@type":"WebSite","@id":"https://uttsmobil.com/#website","url":"https://uttsmobil.com/","name":"UTTS Mobil","description":"","publisher":{"@id":"https://uttsmobil.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://uttsmobil.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"tr"},{"@type":"Organization","@id":"https://uttsmobil.com/#organization","name":"UTTS Mobil","url":"https://uttsmobil.com/","logo":{"@type":"ImageObject","inLanguage":"tr","@id":"https://uttsmobil.com/#/schema/logo/image/","url":"https://uttsmobil.com/wp-content/uploads/2024/07/UTTS-RS-Otomotiv-Grubu-Logo-Yeni.svg","contentUrl":"https://uttsmobil.com/wp-content/uploads/2024/07/UTTS-RS-Otomotiv-Grubu-Logo-Yeni.svg","width":610,"height":305,"caption":"UTTS Mobil"},"image":{"@id":"https://uttsmobil.com/#/schema/logo/image/"},"sameAs":["https://www.facebook.com/uttsmobil/","https://www.instagram.com/uttsmobil","https://www.youtube.com/@UTTSMobil"],"description":"Ulusal Taşıt Tanıma Sistemi (UTTS), akaryakıt piyasasında adil rekabeti sağlamak ve kayıt dışı ekonomi ile mücadele etmek amacıyla geliştirilen bir teknolojidir.","email":"info@uttsmobil.com","telephone":"0850 777 88 77","legalName":"UTTS Mobil","numberOfEmployees":{"@type":"QuantitativeValue","minValue":"201","maxValue":"500"}}]}</script>
	<!-- / Yoast SEO Premium plugin. -->


<link rel='dns-prefetch' href='//maps.googleapis.com' />
<link rel='dns-prefetch' href='//maps.gstatic.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//fonts.gstatic.com' />
<link rel='dns-prefetch' href='//ajax.googleapis.com' />
<link rel='dns-prefetch' href='//apis.google.com' />
<link rel='dns-prefetch' href='//google-analytics.com' />
<link rel='dns-prefetch' href='//www.google-analytics.com' />
<link rel='dns-prefetch' href='//ssl.google-analytics.com' />
<link rel='dns-prefetch' href='//youtube.com' />
<link rel='dns-prefetch' href='//api.pinterest.com' />
<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
<link rel='dns-prefetch' href='//connect.facebook.net' />
<link rel='dns-prefetch' href='//platform.twitter.com' />
<link rel='dns-prefetch' href='//syndication.twitter.com' />
<link rel='dns-prefetch' href='//platform.instagram.com' />
<link rel='dns-prefetch' href='//disqus.com' />
<link rel='dns-prefetch' href='//sitename.disqus.com' />
<link rel='dns-prefetch' href='//s7.addthis.com' />
<link rel='dns-prefetch' href='//platform.linkedin.com' />
<link rel='dns-prefetch' href='//w.sharethis.com' />
<link rel='dns-prefetch' href='//i0.wp.com' />
<link rel='dns-prefetch' href='//i1.wp.com' />
<link rel='dns-prefetch' href='//i2.wp.com' />
<link rel='dns-prefetch' href='//stats.wp.com' />
<link rel='dns-prefetch' href='//pixel.wp.com' />
<link rel='dns-prefetch' href='//s.gravatar.com' />
<link rel='dns-prefetch' href='//0.gravatar.com' />
<link rel='dns-prefetch' href='//2.gravatar.com' />
<link rel='dns-prefetch' href='//1.gravatar.com' />
<link rel="alternate" type="application/rss+xml" title="UTTS Mobil &raquo; akışı" href="https://uttsmobil.com/feed/" />
<link rel='stylesheet' id='wp-block-library-css' href='https://uttsmobil.com/wp-includes/css/dist/block-library/style.min.css?ver=6.6.2' media='all' />
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css'>
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='hello-elementor-css' href='https://uttsmobil.com/wp-content/themes/hello-elementor/style.min.css?ver=3.1.0' media='all' />
<link rel='stylesheet' id='hello-elementor-theme-style-css' href='https://uttsmobil.com/wp-content/themes/hello-elementor/theme.min.css?ver=3.1.0' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://uttsmobil.com/wp-content/uploads/elementor/css/custom-frontend-lite.min.css?ver=1732519167' media='all' />
<link data-minify="1" rel='stylesheet' id='swiper-css' href='https://uttsmobil.com/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=1733478729' media='all' />
<link rel='stylesheet' id='elementor-post-9-css' href='https://uttsmobil.com/wp-content/uploads/elementor/css/post-9.css?ver=1732519167' media='all' />
<link rel='stylesheet' id='elementor-pro-css' href='https://uttsmobil.com/wp-content/uploads/elementor/css/custom-pro-frontend-lite.min.css?ver=1732519167' media='all' />
<link rel='stylesheet' id='elementor-global-css' href='https://uttsmobil.com/wp-content/uploads/elementor/css/global.css?ver=1732519168' media='all' />
<link rel='stylesheet' id='elementor-post-13-css' href='https://uttsmobil.com/wp-content/uploads/elementor/css/post-13.css?ver=1733328328' media='all' />
<link rel='stylesheet' id='elementor-post-16-css' href='https://uttsmobil.com/wp-content/uploads/elementor/css/post-16.css?ver=1732519168' media='all' />
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;subset=latin-ext&#038;ver=6.6.2' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><meta name="generator" content="Elementor 3.23.1; features: e_optimized_css_loading, e_font_icon_svg, additional_custom_breakpoints, e_optimized_control_loading, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap">
<script type="rocketlazyloadscript">
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied", 
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted",
        wait_for_update: 2000,
    });
    gtag("set", "ads_data_redaction", true);
    gtag("set", "url_passthrough", true);
</script>

<!-- Google Tag Manager -->
<script type="rocketlazyloadscript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLGXDJSH');</script>
<!-- End Google Tag Manager -->

<link rel="icon" href="https://uttsmobil.com/wp-content/uploads/2024/07/cropped-favicon-fit-1-32x32-1.png" sizes="32x32" />
<link rel="icon" href="https://uttsmobil.com/wp-content/uploads/2024/07/cropped-favicon-fit-1-32x32-1.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://uttsmobil.com/wp-content/uploads/2024/07/cropped-favicon-fit-1-32x32-1.png" />
<meta name="msapplication-TileImage" content="https://uttsmobil.com/wp-content/uploads/2024/07/cropped-favicon-fit-1-32x32-1.png" />
		<style id="wp-custom-css">
			p{
	margin-bottom:0!important;
}
		</style>
		<meta name="generator" content="WP Rocket 3.17.2" data-wpr-features="wpr_delay_js wpr_defer_js wpr_minify_js wpr_image_dimensions wpr_minify_css wpr_desktop wpr_dns_prefetch wpr_preload_links" /></head>
<body class="page-template page-template-multistep page-template-multistep-php page page-id-1068 elementor-default elementor-kit-9">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLGXDJSH"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<a class="skip-link screen-reader-text" href="#content">İçeriğe atla</a>

		<div data-rocket-location-hash="b8a40188a980c5a02c21d372623614e7" data-elementor-type="header" data-elementor-id="13" class="elementor elementor-13 elementor-location-header" data-elementor-post-type="elementor_library">
			<div class="elementor-element elementor-element-6d04c21 e-flex e-con-boxed e-con e-parent" data-id="6d04c21" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
					<div data-rocket-location-hash="da3b654b339ed49f0234db69a353a170" class="e-con-inner">
		<div class="elementor-element elementor-element-aa3df9c e-con-full e-flex e-con e-child" data-id="aa3df9c" data-element_type="container">
		<div class="elementor-element elementor-element-720cf26 e-con-full e-flex e-con e-child" data-id="720cf26" data-element_type="container">
				<div class="elementor-element elementor-element-9b53578 elementor-widget elementor-widget-image" data-id="9b53578" data-element_type="widget" title="RS Otomotiv Grubu" data-widget_type="image.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.23.0 - 15-07-2024 */
.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>											<a href="https://www.rsotomotivgrubu.com/" target="_blank">
							<img fetchpriority="high" width="1000" height="160" src="https://www.utts.gov.tr/assets/logo-siyah-darphane-CAMU7ghk.svg" class="attachment-full size-full wp-image-2406" alt="RS Otomotiv Logo" srcset="https://www.utts.gov.tr/assets/logo-siyah-darphane-CAMU7ghk.svg 1000w, https://uttsmobil.com/wp-content/uploads/2024/07/logo-rs-otomotiv-300x48.webp 300w, https://uttsmobil.com/wp-content/uploads/2024/07/logo-rs-otomotiv-768x123.webp 768w" sizes="(max-width: 1000px) 100vw, 1000px" />								</a>
													</div>
				</div>
				<div class="elementor-element elementor-element-408f060 elementor-widget elementor-widget-off-canvas" data-id="408f060" data-element_type="widget" data-settings="{&quot;prevent_scroll&quot;:&quot;yes&quot;}" data-widget_type="off-canvas.default">
				<div class="elementor-widget-container">
			<style>/*! elementor-pro - v3.23.0 - 15-07-2024 */
body.e-off-canvas__no-scroll,body.e-off-canvas__no-scroll-animation{overflow:hidden}.elementor-widget-off-canvas{height:-moz-fit-content;height:fit-content;--e-off-canvas-width:400px;--e-off-canvas-height:100vh;--e-off-canvas-justify-content:flex-start;--e-off-canvas-align-items:flex-start;--e-off-canvas-animation-duration:1.5s;--e-off-canvas-content-overflow:auto;--e-off-canvas-overlay-opacity:1;--e-off-canvas-animation-duration-minimum:Max(0.001s,var(--e-off-canvas-animation-duration))}.elementor-widget-off-canvas .e-off-canvas{width:100%;height:100%;top:0;left:0;z-index:2147483630;position:fixed;pointer-events:none}.elementor-widget-off-canvas .e-off-canvas[aria-hidden=true]{visibility:hidden;opacity:0}.elementor-widget-off-canvas .e-off-canvas[aria-hidden=true] .elementor-add-section{display:none}.elementor-widget-off-canvas .e-off-canvas__overlay{background-color:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;position:absolute;pointer-events:all;opacity:var(--e-off-canvas-overlay-opacity);transition:0s}.elementor-widget-off-canvas .e-off-canvas__overlay.no-pointer-events{pointer-events:none}.elementor-widget-off-canvas .e-off-canvas__main{display:flex;justify-content:var(--e-off-canvas-justify-content);align-items:var(--e-off-canvas-align-items);width:100%;height:100%;top:0;left:0;position:absolute}.elementor-widget-off-canvas .e-off-canvas__main.animated{animation-duration:var(--e-off-canvas-animation-duration-minimum)}.elementor-widget-off-canvas .e-off-canvas__main.animated.none{opacity:1;visibility:visible;animation:e-off-canvas-without-animation 1ms}.elementor-widget-off-canvas .e-off-canvas__main.animated.none.reversed{opacity:0;visibility:hidden}.elementor-widget-off-canvas .e-off-canvas__content{background-color:#fff;box-shadow:2px 8px 23px 3px rgba(0,0,0,.2);width:var(--e-off-canvas-width);height:var(--e-off-canvas-height);pointer-events:all;overflow:var(--e-off-canvas-content-overflow)}.elementor-widget-off-canvas .animated-reverse-wrapper{visibility:hidden;opacity:0;transform:none}.elementor-widget-off-canvas .animated-reverse-wrapper:not(.no-animation){animation:e-off-canvas-close var(--e-off-canvas-animation-duration-minimum)}.elementor-widget-off-canvas .animated-reverse-wrapper .no-animation{animation:e-off-canvas-close 1ms}@keyframes e-off-canvas-close{0%,99.99%{visibility:visible;opacity:1}to{visibility:hidden;opacity:0;transform:none}}@keyframes e-off-canvas-without-animation{0%{visibility:hidden;opacity:0}to{visibility:visible;opacity:1}}</style>		<div id="off-canvas-408f060" class="e-off-canvas" role="dialog" aria-hidden="true" aria-label="Off-Canvas" aria-modal="true" inert="" data-delay-child-handlers="true">
			<div class="e-off-canvas__overlay"></div>
			<div class="e-off-canvas__main">
				<div class="e-off-canvas__content">
					<div class="elementor-element elementor-element-1441a30 e-con-full e-flex e-con e-child" data-id="1441a30" data-element_type="container">
				<div class="elementor-element elementor-element-50f55d2 elementor-widget elementor-widget-text-editor" data-id="50f55d2" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.23.0 - 15-07-2024 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<p>HIZLI MENÜ</p>						</div>
				</div>
				<div class="elementor-element elementor-element-2fed626 elementor-view-stacked elementor-shape-square elementor-absolute elementor-widget elementor-widget-icon" data-id="2fed626" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="#elementor-action%3Aaction%3Doff_canvas%3Aclose%26settings%3DeyJpZCI6IjQwOGYwNjAiLCJkaXNwbGF5TW9kZSI6ImNsb3NlIn0%3D">
			<svg aria-hidden="true" class="e-font-icon-svg e-fas-times" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>			</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-be1c33a elementor-nav-menu--dropdown-tablet_extra elementor-nav-menu__text-align-center elementor-widget elementor-widget-nav-menu" data-id="be1c33a" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;svg class=\&quot;e-font-icon-svg e-fas-caret-down\&quot; viewBox=\&quot;0 0 320 512\&quot; xmlns=\&quot;http:\/\/www.w3.org\/2000\/svg\&quot;&gt;&lt;path d=\&quot;M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\&quot;&gt;&lt;\/path&gt;&lt;\/svg&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;}}" data-widget_type="nav-menu.default">
				<div class="elementor-widget-container">
			<link rel="stylesheet" href="https://uttsmobil.com/wp-content/uploads/elementor/css/custom-pro-widget-nav-menu.min.css?ver=1732519168?ver=1732519168">			<nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-none">
				<ul id="menu-1-be1c33a" class="elementor-nav-menu sm-vertical"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-801"><a title="Mobil UTTS Montajı" href="https://uttsmobil.com/mobil-utts-montaji/" class="elementor-item">Mobil UTTS Montajı</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-357"><a title="UTTS Mobil Nedir?" href="https://uttsmobil.com/utts-mobil-nedir/" class="elementor-item">UTTS Mobil Nedir?</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-526"><a title="Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-item">Hizmet Noktalarımız</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017"><a title="İstanbul UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/istanbul-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS İstanbul</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1018"><a title="Ankara UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/ankara-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS Ankara</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1019"><a title="İzmir UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/izmir-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS İzmir</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1020"><a title="Kocaeli UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/kocaeli-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS Kocaeli</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1021"><a title="Bursa UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/bursa-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS Bursa</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"><a href="https://uttsmobil.com/utts-hizmet-haritasi/" class="elementor-sub-item">UTTS Hizmet Haritası</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1022"><a title="Diğer Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-sub-item">Diğer Hizmet Noktalarımız</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709"><a title="UTTS Hakkında" href="https://uttsmobil.com/utts-hakkinda/" class="elementor-item">UTTS Hakkında</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5382"><a href="https://uttsmobil.com/utts-bayilik-basvurusu/" class="elementor-sub-item">UTTS Bayilik Başvurusu</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-716"><a title="UTTS Başvuru Nasıl Yapılır?" href="/#nasil-basvuru-yapilir" class="elementor-sub-item elementor-item-anchor">UTTS Başvuru Nasıl Yapılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1042"><a title="UTTS Nereden Alınır?" href="https://uttsmobil.com/utts-nereden-alinir/" class="elementor-sub-item">UTTS Nereden Alınır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1065"><a title="UTTS Nasıl Takılır?" href="https://uttsmobil.com/utts-nasil-takilir-utts-mobil-montaj/" class="elementor-sub-item">UTTS Nasıl Takılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1053"><a title="UTTS Fiyatları" href="https://uttsmobil.com/utts-fiyatlari/" class="elementor-sub-item">UTTS Fiyatları</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a title="UTTS Yetkili Montaj Firmaları" href="https://uttsmobil.com/utts-yetkili-montaj-firmalari/" class="elementor-sub-item">UTTS Yetkili Montaj Firmaları</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1524"><a title="UTTS Blog" href="https://uttsmobil.com/kategori/blog/" class="elementor-sub-item">UTTS Blog</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-410"><a title="İletişim" href="https://uttsmobil.com/iletisim/" class="elementor-item">İletişim</a></li>
</ul>			</nav>
						<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
				<ul id="menu-2-be1c33a" class="elementor-nav-menu sm-vertical"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-801"><a title="Mobil UTTS Montajı" href="https://uttsmobil.com/mobil-utts-montaji/" class="elementor-item" tabindex="-1">Mobil UTTS Montajı</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-357"><a title="UTTS Mobil Nedir?" href="https://uttsmobil.com/utts-mobil-nedir/" class="elementor-item" tabindex="-1">UTTS Mobil Nedir?</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-526"><a title="Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-item" tabindex="-1">Hizmet Noktalarımız</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017"><a title="İstanbul UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/istanbul-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS İstanbul</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1018"><a title="Ankara UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/ankara-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS Ankara</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1019"><a title="İzmir UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/izmir-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS İzmir</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1020"><a title="Kocaeli UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/kocaeli-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS Kocaeli</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1021"><a title="Bursa UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/bursa-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS Bursa</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"><a href="https://uttsmobil.com/utts-hizmet-haritasi/" class="elementor-sub-item" tabindex="-1">UTTS Hizmet Haritası</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1022"><a title="Diğer Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-sub-item" tabindex="-1">Diğer Hizmet Noktalarımız</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709"><a title="UTTS Hakkında" href="https://uttsmobil.com/utts-hakkinda/" class="elementor-item" tabindex="-1">UTTS Hakkında</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5382"><a href="https://uttsmobil.com/utts-bayilik-basvurusu/" class="elementor-sub-item" tabindex="-1">UTTS Bayilik Başvurusu</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-716"><a title="UTTS Başvuru Nasıl Yapılır?" href="/#nasil-basvuru-yapilir" class="elementor-sub-item elementor-item-anchor" tabindex="-1">UTTS Başvuru Nasıl Yapılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1042"><a title="UTTS Nereden Alınır?" href="https://uttsmobil.com/utts-nereden-alinir/" class="elementor-sub-item" tabindex="-1">UTTS Nereden Alınır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1065"><a title="UTTS Nasıl Takılır?" href="https://uttsmobil.com/utts-nasil-takilir-utts-mobil-montaj/" class="elementor-sub-item" tabindex="-1">UTTS Nasıl Takılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1053"><a title="UTTS Fiyatları" href="https://uttsmobil.com/utts-fiyatlari/" class="elementor-sub-item" tabindex="-1">UTTS Fiyatları</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a title="UTTS Yetkili Montaj Firmaları" href="https://uttsmobil.com/utts-yetkili-montaj-firmalari/" class="elementor-sub-item" tabindex="-1">UTTS Yetkili Montaj Firmaları</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1524"><a title="UTTS Blog" href="https://uttsmobil.com/kategori/blog/" class="elementor-sub-item" tabindex="-1">UTTS Blog</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-410"><a title="İletişim" href="https://uttsmobil.com/iletisim/" class="elementor-item" tabindex="-1">İletişim</a></li>
</ul>			</nav>
				</div>
				</div>
		<div class="elementor-element elementor-element-244f625 e-flex e-con-boxed e-con e-child" data-id="244f625" data-element_type="container">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-ce3a0dc elementor-widget elementor-widget-button" data-id="ce3a0dc" data-element_type="widget" title="Başvuru Yap" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="/basvuru/">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Başvuru Yap</span>
					</span>
					</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-3522638 elementor-widget elementor-widget-button" data-id="3522638" data-element_type="widget" title="Başvuru Yap" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="/utts-bayilik-basvurusu/">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Bayilik Başvurusu</span>
					</span>
					</a>
		</div>
				</div>
				</div>
					</div>
				</div>
				</div>
						</div>
			</div>
		</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-0044b6d e-con-full elementor-hidden-mobile e-flex e-con e-child" data-id="0044b6d" data-element_type="container">
				<div class="elementor-element elementor-element-4ab22d1 elementor-widget elementor-widget-text-editor" data-id="4ab22d1" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>destekmasasi@utts.gov.tr</p>					
                            
                            
                            
                            
                            
                            </div>
				</div>
				<div class="elementor-element elementor-element-4129f90 elementor-widget elementor-widget-text-editor" data-id="4129f90" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>0850 777 88 77</p>						</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-97e375a elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-widget elementor-widget-text-editor" data-id="97e375a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Yetkili UTTS Taşıt<br />Montaj Firması</p>						</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-6ca47ab e-con-full e-flex e-con e-child" data-id="6ca47ab" data-element_type="container">
		<div class="elementor-element elementor-element-37693a8 e-con-full e-flex e-con e-child" data-id="37693a8" data-element_type="container">
				<div class="elementor-element elementor-element-9696235 elementor-widget elementor-widget-image" data-id="9696235" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
										<figure class="wp-caption">
											<a href="/" rel="UTTS Yetkili Taşıt Montaj Servisi">
							<img width="610" height="305" src="https://uttsmobil.com/wp-content/uploads/2024/07/UTTS-RS-Otomotiv-Grubu-Logo-Yeni.svg" class="attachment-full size-full wp-image-1629" alt="UTTS Logo" />								</a>
											<figcaption class="widget-image-caption wp-caption-text"></figcaption>
										</figure>
							</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-3f44ec9 e-con-full e-flex e-con e-child" data-id="3f44ec9" data-element_type="container">
				<div class="elementor-element elementor-element-2f817f8 elementor-view-stacked elementor-shape-square elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-laptop elementor-widget elementor-widget-icon" data-id="2f817f8" data-element_type="widget" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<a class="elementor-icon" href="#elementor-action%3Aaction%3Doff_canvas%3Aopen%26settings%3DeyJpZCI6IjQwOGYwNjAiLCJkaXNwbGF5TW9kZSI6Im9wZW4ifQ%3D%3D">
			<svg aria-hidden="true" class="e-font-icon-svg e-fas-align-justify" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>			</a>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-3d05af8 elementor-nav-menu--dropdown-none elementor-hidden-mobile_extra elementor-hidden-mobile elementor-hidden-tablet elementor-hidden-tablet_extra elementor-widget elementor-widget-nav-menu" data-id="3d05af8" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;svg class=\&quot;e-font-icon-svg e-fas-caret-down\&quot; viewBox=\&quot;0 0 320 512\&quot; xmlns=\&quot;http:\/\/www.w3.org\/2000\/svg\&quot;&gt;&lt;path d=\&quot;M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\&quot;&gt;&lt;\/path&gt;&lt;\/svg&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;}}" data-widget_type="nav-menu.default">
				<div class="elementor-widget-container">
						<nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
				<ul id="menu-1-3d05af8" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-801"><a title="Mobil UTTS Montajı" href="https://uttsmobil.com/mobil-utts-montaji/" class="elementor-item">Mobil UTTS Montajı</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-357"><a title="UTTS Mobil Nedir?" href="https://uttsmobil.com/utts-mobil-nedir/" class="elementor-item">UTTS Mobil Nedir?</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-526"><a title="Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-item">Hizmet Noktalarımız</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017"><a title="İstanbul UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/istanbul-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS İstanbul</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1018"><a title="Ankara UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/ankara-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS Ankara</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1019"><a title="İzmir UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/izmir-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS İzmir</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1020"><a title="Kocaeli UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/kocaeli-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS Kocaeli</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1021"><a title="Bursa UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/bursa-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item">UTTS Bursa</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"><a href="https://uttsmobil.com/utts-hizmet-haritasi/" class="elementor-sub-item">UTTS Hizmet Haritası</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1022"><a title="Diğer Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-sub-item">Diğer Hizmet Noktalarımız</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709"><a title="UTTS Hakkında" href="https://uttsmobil.com/utts-hakkinda/" class="elementor-item">UTTS Hakkında</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5382"><a href="https://uttsmobil.com/utts-bayilik-basvurusu/" class="elementor-sub-item">UTTS Bayilik Başvurusu</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-716"><a title="UTTS Başvuru Nasıl Yapılır?" href="/#nasil-basvuru-yapilir" class="elementor-sub-item elementor-item-anchor">UTTS Başvuru Nasıl Yapılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1042"><a title="UTTS Nereden Alınır?" href="https://uttsmobil.com/utts-nereden-alinir/" class="elementor-sub-item">UTTS Nereden Alınır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1065"><a title="UTTS Nasıl Takılır?" href="https://uttsmobil.com/utts-nasil-takilir-utts-mobil-montaj/" class="elementor-sub-item">UTTS Nasıl Takılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1053"><a title="UTTS Fiyatları" href="https://uttsmobil.com/utts-fiyatlari/" class="elementor-sub-item">UTTS Fiyatları</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a title="UTTS Yetkili Montaj Firmaları" href="https://uttsmobil.com/utts-yetkili-montaj-firmalari/" class="elementor-sub-item">UTTS Yetkili Montaj Firmaları</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1524"><a title="UTTS Blog" href="https://uttsmobil.com/kategori/blog/" class="elementor-sub-item">UTTS Blog</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-410"><a title="İletişim" href="https://uttsmobil.com/iletisim/" class="elementor-item">İletişim</a></li>
</ul>			</nav>
						<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
				<ul id="menu-2-3d05af8" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-801"><a title="Mobil UTTS Montajı" href="https://uttsmobil.com/mobil-utts-montaji/" class="elementor-item" tabindex="-1">Mobil UTTS Montajı</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-357"><a title="UTTS Mobil Nedir?" href="https://uttsmobil.com/utts-mobil-nedir/" class="elementor-item" tabindex="-1">UTTS Mobil Nedir?</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-526"><a title="Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-item" tabindex="-1">Hizmet Noktalarımız</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1017"><a title="İstanbul UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/istanbul-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS İstanbul</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1018"><a title="Ankara UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/ankara-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS Ankara</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1019"><a title="İzmir UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/izmir-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS İzmir</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1020"><a title="Kocaeli UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/kocaeli-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS Kocaeli</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1021"><a title="Bursa UTTS" href="https://uttsmobil.com/hizmet-noktalarimiz/bursa-utts-ulusal-tasit-tanima-sistemi/" class="elementor-sub-item" tabindex="-1">UTTS Bursa</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"><a href="https://uttsmobil.com/utts-hizmet-haritasi/" class="elementor-sub-item" tabindex="-1">UTTS Hizmet Haritası</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1022"><a title="Diğer Hizmet Noktalarımız" href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" class="elementor-sub-item" tabindex="-1">Diğer Hizmet Noktalarımız</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-709"><a title="UTTS Hakkında" href="https://uttsmobil.com/utts-hakkinda/" class="elementor-item" tabindex="-1">UTTS Hakkında</a>
<ul class="sub-menu elementor-nav-menu--dropdown">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5382"><a href="https://uttsmobil.com/utts-bayilik-basvurusu/" class="elementor-sub-item" tabindex="-1">UTTS Bayilik Başvurusu</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-716"><a title="UTTS Başvuru Nasıl Yapılır?" href="/#nasil-basvuru-yapilir" class="elementor-sub-item elementor-item-anchor" tabindex="-1">UTTS Başvuru Nasıl Yapılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1042"><a title="UTTS Nereden Alınır?" href="https://uttsmobil.com/utts-nereden-alinir/" class="elementor-sub-item" tabindex="-1">UTTS Nereden Alınır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1065"><a title="UTTS Nasıl Takılır?" href="https://uttsmobil.com/utts-nasil-takilir-utts-mobil-montaj/" class="elementor-sub-item" tabindex="-1">UTTS Nasıl Takılır?</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1053"><a title="UTTS Fiyatları" href="https://uttsmobil.com/utts-fiyatlari/" class="elementor-sub-item" tabindex="-1">UTTS Fiyatları</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769"><a title="UTTS Yetkili Montaj Firmaları" href="https://uttsmobil.com/utts-yetkili-montaj-firmalari/" class="elementor-sub-item" tabindex="-1">UTTS Yetkili Montaj Firmaları</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1524"><a title="UTTS Blog" href="https://uttsmobil.com/kategori/blog/" class="elementor-sub-item" tabindex="-1">UTTS Blog</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-410"><a title="İletişim" href="https://uttsmobil.com/iletisim/" class="elementor-item" tabindex="-1">İletişim</a></li>
</ul>			</nav>
				</div>
				</div>
				<div class="elementor-element elementor-element-920be0b elementor-nav-menu--dropdown-none elementor-hidden-mobile_extra elementor-hidden-mobile elementor-hidden-tablet elementor-hidden-tablet_extra elementor-widget elementor-widget-nav-menu" data-id="920be0b" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;horizontal&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;svg class=\&quot;e-font-icon-svg e-fas-caret-down\&quot; viewBox=\&quot;0 0 320 512\&quot; xmlns=\&quot;http:\/\/www.w3.org\/2000\/svg\&quot;&gt;&lt;path d=\&quot;M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\&quot;&gt;&lt;\/path&gt;&lt;\/svg&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;}}" data-widget_type="nav-menu.default">
				<div class="elementor-widget-container">
						<nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-framed e--animation-fade">
				<ul id="menu-1-920be0b" class="elementor-nav-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1518"><a href="/basvuru/" aria-current="page" class="elementor-item elementor-item-active">Başvuru Yap</a></li>
</ul>			</nav>
						<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
				<ul id="menu-2-920be0b" class="elementor-nav-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-1518"><a href="/basvuru/" aria-current="page" class="elementor-item elementor-item-active" tabindex="-1">Başvuru Yap</a></li>
</ul>			</nav>
				</div>
				</div>
				</div>
				</div>
					</div>
				</div>
				</div>
		

<!-- Tippy.js CSS -->
<link data-minify="1" rel="stylesheet" href="https://uttsmobil.com/wp-content/cache/min/1/tippy.js@6/animations/scale.css?ver=1733478733">
<link data-minify="1" rel="stylesheet" href="https://uttsmobil.com/wp-content/cache/min/1/tippy.js@6/dist/tippy.css?ver=1733478733">
<!-- Select2 CSS -->
<link data-minify="1" href="https://uttsmobil.com/wp-content/cache/min/1/npm/select2@4.1.0-rc.0/dist/css/select2.min.css?ver=1733478733" rel="stylesheet" />

<style>
.utts-form-container,
.desc-container {
    max-width: 1400px;
    margin: 80px auto;
    padding: 0;
    border-radius: 8px;
    width: 96%;
}
.desc-container p{
    text-align:center;
}
.desc-container a{
    color:#dd812e;
}
	
.title {
    font-size: 3rem;
    font-weight: 600;
    width: fit-content;
    margin-bottom: 30px;
    color: #212121;
    position: relative;
}

.title::before {
    content: '';
    width: 100%;
    height: 14px;
    background-color: #d1d5d8;
    position: absolute;
    bottom: 10px;
    left: 0;
    z-index: -1;
}

.container_wrapper {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 40px;
}

.left-section {
    width: 100%;
}

.left-section img {
    width: 100%;
	min-height:350px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
	
	[type=button]:focus:not(:focus-visible), [type=submit]:focus:not(:focus-visible), button:focus:not(:focus-visible){
		background:#de8130!important;
	}

.right-section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
	height:100%;
    text-align: left;
    font-weight: bold;
    padding: 0 40px 40px 40px;
    background-color: #f7f7f7;
    border-radius: 10px;
}

.input-group {
    margin-bottom: 15px;
    width: 100%;
}


.form-row {
    display: flex;
    gap: 20px;
}

.form-row .input-group {
    flex: 1;
}


.radio-group {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
	flex-direction:column!important;
    align-items: start!important;
}

.radio-group p {
    font-size: 1.1rem;
    color: #de8131;
    font-weight: 600;
}

.input-group input,
.input-group select,
.input-group label,
.input-group .submit-button {
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.input-group input:focus {
    border-color: #007bff;
    outline: none;
}

.info-text {
    font-size: 14px;
    color: #777;
    margin-bottom: 15px;
}

.submit-button {
    width: 100%; 
    height: 50px;
    background-color: #dd812e;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    padding:0;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 15px;
    position: relative;
    text-align: center;
    line-height: 50px;
    overflow: hidden;
}
.submit-button:hover {
    background-color: #bf6a20;
}

.submit-button .loading,
.submit-button .success {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.submit-button.loading-state .loading {
    display: inline-block;
}

.submit-button.loading-state .text {
    display: none;
}

.submit-button.success-state .loading,
.submit-button.success-state .text {
    display: none;
}

.submit-button.success-state .success {
    display: inline-block;
}


.radio-group {
    display: flex;
    align-items: center;
    gap: 20px;
}

.radio-group label {
 display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: #212121;
    font-weight: 500;
}

.radio-group input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
   width: 34px;
    height: 34px;
    border: 2px solid #de8130;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}

.radio-group input[type="radio"]:checked::before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #de8130;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
	
.steps-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
	margin-top:-20px;
    margin-bottom: 30px;
    padding: 0 20px;
    position: relative;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
    position: relative;
    flex: 1; /* Çubukların esnek genişliğini artırır */
}

.step span {
    width: 40px; /* Noktayı büyütün */
    height: 40px; /* Noktayı büyütün */
    display: inline-block;
    background: #ddd;
    color: #fff;
    border-radius: 50%;
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
	text-align:center!important;
    transition: background 0.3s ease, color 0.3s ease;
    position: relative;
    z-index: 1; /* Çizginin üstünde kalması için */
}

.step p {
    margin: 0;
    font-size: 14px;
    color: #212121;
	font-weight: 600; /* Kalın yazı */
}

.step.completed span {
    background: #28a745; /* Yeşil renk */
    color: #fff;
	
}

.step.active span {
    background: #dd812e; /* Turuncu renk */
    color: #fff;
    border: 2px solid #ff7300; /* Daha belirgin çerçeve */
    transform: scale(1.2); /* Boyut büyütme */
	
}

.step.active p {
    color: #212121; /* Yazı rengi */
    font-weight: 600; /* Kalın yazı */
}

.step.active::before {
    content: '';
    position: absolute;
    width: 60px; /* Daha geniş bir arka plan */
    height: 60px;
    background: rgba(255, 200, 100, 0.2); /* Yarı saydam arka plan */
    border-radius: 50%;
    z-index: -1;
    top: -10px;
    left: calc(50% - 30px);
}

.step.inactive span {
    background: #ddd; /* Gri renk */
    color: #bbb;
}

.step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 20px; /* Çizgiyi hizalayın */
    left: calc(50% + 20px); /* Başlangıç noktasını düzeltin */
    width: calc(100% - 40px); /* Çizgi genişliğini ayarlayın */
    height: 4px; /* Çizgi kalınlığını artırın */
    background: #ddd;
    z-index: 1; /* Noktaların altında kalması için */
}

.step.completed:not(:last-child)::after {
    background: #28a745; /* Tamamlanmış adımlar için çizgi */
}

.step.active:not(:last-child)::after {
    background: #dd812e; /* Aktif adımlar için çizgi */
}

.step.last-visible::after {
    display: none; /* Son görünen stepten sonra çubuğu kaldır */
}


/* Gizli adımları tamamen görünmez yapar */
.hidden {
    display: none;
}

/* Görünür adımları açık tutar */
.visible {
    display: block;
}
.form-row-inline-first-step {
    display: flex;
    gap: 20px; /* Seçim kutuları arasındaki boşluk */
}

.form-row-inline-first-step .input-group {
    flex: 1; /* Her seçim kutusu eşit genişlikte olacak */
}
	
	/* Select görünümünü tamamen özelleştir */
.form-row-inline .input-group select {
    -webkit-appearance: none !important; /* Safari ve iOS için */
    -moz-appearance: none !important; /* Firefox için */
    appearance: none !important; /* Modern tarayıcılar için */
    background-color: #fff !important; /* Arka plan rengi */
    border: 1px solid #e0e0e0 !important; /* Kenarlık */
    border-radius: 8px !important; /* Köşe yuvarlama */
    padding: 12px !important; /* İç boşluk */
    font-size: 16px !important; /* Yazı boyutu */
    color: #212121 !important; /* Yazı rengi */
    cursor: pointer !important; /* İmleç görünümü */
    width: 100% !important; /* Genişlik */
    transition: border-color 0.3s ease !important;
}

/* Odaklanıldığında */
.form-row-inline .input-group select:focus {
    border-color: #007bff !important; /* Odaklandığında kenarlık rengi */
    outline: none !important; /* Varsayılan odak çerçevesini kaldır */
}

/* Seçenek stili */
.form-row-inline .input-group select option {
    color: #212121 !important; /* Seçenek yazı rengi */
    background-color: #fff !important; /* Seçenek arka plan rengi */
}

/* Select için özel ok simgesi */
.form-row-inline .input-group {
    position: relative; /* Ok simgesi için konumlandırma */
}

.form-row-inline .input-group select::-ms-expand {
    display: none !important; /* Eski IE için varsayılan oku kaldır */
}

.form-row-inline .input-group::after {
    content: '▾'; /* Minimal bir ok simgesi (daha ince bir stil) */
    position: absolute;
    top: 50%;
    right: 10px; /* Sağdan daha az boşluk */
    transform: translateY(-50%);
    pointer-events: none; /* Tıklanamaz */
    color: #dd812e;
    font-size: 22px; /* Daha küçük bir simge */
}

.radio-label {
    position: relative;
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
}

.info-icon {
	margin-top:-16px!important;
    margin-left: 4px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
}

.info-icon svg {
    transition: transform 0.3s ease, fill 0.3s ease, stroke 0.3s ease;
}

.info-icon:hover svg circle {
    fill: #007bff; /* Dairenin içi mavi olacak */
    stroke: #007bff; /* Dairenin kenarları aynı renk olacak */
}

.info-icon:hover svg line,
.info-icon:hover svg circle:last-of-type {
    stroke: #ffffff; /* Çizgi ve dairenin son noktası beyaz olacak */
}

.info-icon:hover svg,
.info-icon:focus svg {
    transform: scale(1.1);
}


.info-icon::after,
.info-icon::before {
    opacity: 0;
}

	/* Yeni CSS: Radyo grubu dikey sıralama */
.radio-group-vertical {
    margin-bottom: 20px;
}

.radio-group-vertical p {
    font-size: 1.1rem;
    color: #de8131;
    font-weight: 600;
    margin-bottom: 8px;
}

/* Radyo butonları için yatay görünüm */
.radio-options {
    display: flex;
    align-items: center;
    gap: 20px;
}

.radio-options label {
    display: inline-flex;
    align-items: center;
    font-size: 1.1rem;
    color: #212121;
    font-weight: 500;
    margin-right: 10px;
	margin-top:10px!important;
}

.radio-options input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 34px;
    height: 34px;
    border: 2px solid #de8130;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}
	
.styled-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.1rem;
    color: #212121;
    font-weight: 500;
}

.styled-checkbox input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid #de8130;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    position: relative;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}

.styled-checkbox input[type="checkbox"]:checked::before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #de8130;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

	#user-table{
		width:100%!important;
		overflow:scroll!important;
	}
.checkbox-custom {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 2px solid #de8130;
    border-radius: 6px;
    background-color: #fff;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.styled-checkbox input[type="checkbox"]:checked + .checkbox-custom {
    background-color: #de8130;
    border-color: #de8130;
	    width: 24px;
    height: 24px;
}

.styled-checkbox input[type="checkbox"]:focus + .checkbox-custom {
    border: 2px solid #de8130;
}

.radio-options input[type="radio"]:checked::before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: #de8130;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
	
/* Overlay için stil */
#modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
    display: none;
}
	
/* Çakışmaları önlemek için input grubu */
.custom-input-group .input-group {
    margin-bottom: 15px;
    width: 100%;
}

.custom-input-group label {
    font-weight: 600;
    margin-bottom: 5px;
    display: block;
    margin-top: 14px;
    padding: 0;
    border: none;
    color: #212121;
}

.custom-input-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.custom-input-group input:focus {
    border-color: #007bff;
    outline: none;
}

/* Tehlike (danger) uyarı rozeti */
.warning-badge {
    display: block;
    color: #d9534f; /* Bootstrap Danger Rengi */
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 5px;
}



/* Genel Modal Stilleri */
#videoModal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px;
    background: #fff;
    border-radius: 10px;
    z-index: 1000;
    padding: 20px;
    overflow: visible; /* Overflow sorunu çözmek için updated */
}

#videoModal iframe {
    width: 100%;
    height: 450px; /* Yüksekliği artırdım, modal içinde daha iyi görünmesi için */
    border: none;
	border-radius:12px!important;
	margin-bottom:-6px!important;
}

/* Kapat Butonu */
#closeButton {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 30px;
    height: 30px;
    background: #de8131;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
}

#closeButton:hover {
    background-color: #bf6a20;
}
	
		.form-row-inline{
		display:flex;
			gap:20px;
	}
	
	.tippy-content{
		font-weight:400!important;
	}
		.tippy-content b{
		font-weight:600!important;
	}

	.tooltip-content {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: calc(100% - 20px); /* Mobilde ekranın tamamını kapsar */
    max-width: 600px; /* Maksimum genişlik belirlenir, bu masaüstünde kullanılır */
    text-align: left;
    line-height: 1.4;
    left: 50%; /* Ortalamak için kullanılır */
    transform: translateX(-50%); /* Sol kenardan taşmayı engeller */
}
	
	    .tooltip-content {
        width: auto; /* Masaüstü için genişliği sınırlamak gerekmez */
        max-width: 600px;
    }
	
	#howToApplyLink{
		font-size:.9rem!important; 
		font-weight:600!important; 
		padding:4px 12px 4px 12px!important;
		border-radius:6px!important;
		color:#fff!important; 
		margin-bottom:-12px!important; 
		background-color:red!important; 
		display:flex!important; 
		align-items:center!important;
		line-height:16px!important;
	}
	
	#howToApplyLink svg{
		margin-right:10px!important;
	}
	
	@media (max-width: 1140px) {
		.steps-container{
			padding:0!important;
		}
		.form-row-inline,
		.form-row-inline-first-step{
	gap: 0!important;
    flex-direction: column!important;
		}
	}
	
		@media (max-width: 991px) {
			.left-section{
				width:70%!important;
			}
	}
	
			@media (max-width: 870px) {
	    .container_wrapper {
        flex-direction: column-reverse; 
        gap: 20px; 
	    margin-top:54px!important;
		}
				.left-section{
				width:100%!important;
			}
				.left-section img{
					height:300px!important;
				}
				.utts-form-container{
					margin:40px auto!important;
				}
				.desc-container{
					margin:20px auto 80px auto!important;
				}
	}

@media (max-width: 768px) {
	.tooltip-content{
		transform:translateX(-48%)!important;
		left:50%!important;
	}
	
    #videoModal {
        width: 90%;
        max-width: 400px;
        padding: 15px;
    }

    #videoModal iframe {
        height: 250px; /* Mobilde yükseklik azaltıldı */
    }

    #closeButton {
        top: -15px;
        right: -15px;
        width: 25px;
        height: 25px;
        font-size: 18px;
    }

.utts-form-container{
    margin: 40px auto!important;
	padding:0 10px 0 10px!important;
}
	.container_wrapper{
		margin-top:44px!important;
	}
	
    .title {
    font-size: 2rem;
    margin: 0 auto 20px auto;
    text-align: center;
    }
.title:before{
       display:none!important;
    }


    .left-section,
    .right-section {
        max-width: 100%; 
    }
		.right-section{
			padding:0 10px 0 10px!important;
		}
    .left-section img {
        height: 250px!important;
		min-height:250px!important;
    }

    .submit-button {
        font-size: 16px;
        height: 50px; 
        line-height: 50px; 
    }
		    .form-row-inline {
        flex-direction: column; /* Mobilde kutuları üst üste al */
				gap:0!important;
    }
	.step p {
text-align:center!important;
		line-height:14px!important;
		margin-top:6px!important;
		font-size:12px!important;
}
	.step.active span{
		transform:scale(1)!important;
	}
	.form-container{
		padding:0 10px 20px 10px!important;
	}
		#howToApplyLink{
		padding:0 12px 0 12px!important;
	}
	
	#howToApplyLink svg{
		height:50px!important;
		width:50px!important;
	}
}
	
	/* Küçük cihazlar (mobil telefonlar) için */
@media (max-width: 480px) {
    .modal-content {
        width: 100%;
        margin: 20% auto; /* Yükseklik ayarlaması yapıldı */
        padding: 10px;
    }

    .close-button {
        font-size: 20px; /* Daha küçük kapatma simgesi */
        top: 5px; /* Daha az yukarıdan boşluk */
        right: 8px; /* Daha az sağdan boşluk */
    }

    .video-container {
        padding-bottom: 75%; /* Yüksekliği biraz artırarak daha dikey görünüm */
    }
}

</style>




<div data-rocket-location-hash="92ec3a7b041d368cb6f79af75130056e" class="utts-form-container">
    <h1 class="title">UTTS <span style="font-weight:300!important;">Başvuru Yap</span></h1>
    <div data-rocket-location-hash="c01e1a82cd239ba563a7496050306e06" class="container_wrapper">
        <div data-rocket-location-hash="3bb17fc47d2532b972d734947884d19c" class="left-section" id="imageSection">
            <img width="2048" height="1152" src="/wp-content/uploads/2024/11/utts-basvuru.webp" alt="UTTS Başvuru">
        </div>
        <div data-rocket-location-hash="8fe2b18968090c3e9e11356d1ab297e1" class="right-section">
			<div class="steps-container">
    <div class="step" data-step="1">
        <span>1</span>
        <p>Kişisel Bilgiler</p>
    </div>
    <div class="step" data-step="2">
        <span>2</span>
        <p>Başvuru</p>
    </div>
    <div class="step" data-step="3">
        <span>3</span>
        <p>Adres Bilgileri</p>
    </div>
    <div class="step" data-step="4">
        <span>4</span>
        <p>Hizmet Türü</p>
    </div>
    <div class="step" data-step="5">
        <span>5</span>
        <p>Ek Bilgiler</p>
    </div>
</div>

            <!-- Form Container Başlangıcı -->
            <div class="form-container" id="form-container">
<!-- Adım 1 -->
<div id="step-1" style="display: block;">
    <form id="formStep1" method="POST">
        <div class="input-group">
            <input type="text" name="adSoyad" placeholder="Adınız ve Soyadınız" required />
        </div>
        <div class="form-row-inline-first-step">
            <div class="input-group">
                <input type="text" name="firmaAdi" placeholder="Firma Adı" required />
            </div>
            <div class="input-group">
                <input type="email" name="email" placeholder="E-posta Adresiniz" required/>
            </div>
        </div>
        <div class="input-group">
            <input 
                type="tel" 
                name="telefon" 
                id="phoneInput" 
                placeholder="+90 (5XX)-XXX-XX-XX" 
                maxlength="17"
                required 
            />
        </div>
        
<!-- KVKK ve İYS Onay Kutuları -->
<div class="input-group-2" style="margin-top: 20px;">
    <label class="styled-checkbox">
        <input type="checkbox" name="kvkk" required>
        <span class="checkbox-custom"></span>
        <a href="/kvkk/" target="_blank" style="color: #dd812e; text-decoration: underline; font-size:.9rem!important; font-weight:600!important;">KVKK Aydınlatma Metnini Onaylıyorum</a>
    </label>
</div>

<div class="input-group-2" style="margin-top: 10px;">
    <label class="styled-checkbox">
        <input type="checkbox" name="iys">
        <span class="checkbox-custom"></span>
        <a href="/iys/" target="_blank" style="color: #dd812e; text-decoration: underline; font-size:.9rem!important; font-weight:600!important;">Ticari İletişim İzni'ni Onaylıyorum</a>
    </label>
</div>



        <button type="submit" class="submit-button" id="submitButton" disabled>
            <span class="text">İlerle</span>
        </button>
    </form>
</div>



<!-- Adım 2 -->
<div id="step-2" style="display: none;">
    <form id="formStep2" method="POST">
        <div class="radio-group">
            
			<a href="#" id="howToApplyLink"><svg id="" height="34" viewBox="0 0 75 75" width="40"> stroke="#fff" fill="#fff"></path></svg> Başvuru işlemleri için Darphane ve Damga Matbaası Genel Müdürlüğü tarafından belirlenen başvuru ücretini ödemeniz gerekmektedir.</a>
			<p><a href="https://www.utts.gov.tr/" target="_blank" style="color:#de8131!important;"></a>Başvuru türünüzü seçiniz.</p>
            <label><input type="radio" name="odemeDurumu" value="evet" required /> İstasyon Montaj Firması Başvuru</label>
            <label><input type="radio" name="odemeDurumu" value="evet" required /> Taşıt Sahibi Mükellef İşlemleri</label>
            <label><input type="radio" name="odemeDurumu" value="evet" required /> Akaryakıt İstasyonları Firma Kayıt</label>
            <label><input type="radio" name="odemeDurumu" value="evet" required /> YN Pompa ÖKC Firması Kayıt İşlemleri</label>
            <label><input type="radio" name="odemeDurumu" value="evet" required /> Akaryakıt Dağıtım Şirketi Başvuru</label>
            <label><input type="radio" name="odemeDurumu" value="evet" required /> Donanım Üreticisi Firma Başvuru</label>
        </div>
        <button type="submit" class="submit-button">
            <span class="text">İlerle</span>
        </button>
    </form>
</div>

<!-- Video Modal -->
<div id="videoModal" style="display: none;">
    <button id="closeButton">&times;</button>
    <iframe 
        src="https://www.youtube.com/embed/sXPPZVQs-iE?si=FlrbuUMOSYoP8I1O" 
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>

<!-- Overlay -->
<div id="modalOverlay" style="display: none;"></div>


<!-- Adım 3 -->
<div id="step-3" style="display: none;">
    <form id="formStep3" method="POST">
        <div id="paymentYes" style="display: none;">
            <div class="form-row-inline">
                <div class="input-group">
                    <select name="il" id="il" required>
                        <option value="">İl Seçiniz</option>
                    </select>
                </div>

                <div class="input-group">
                    <select name="ilce" id="ilce" required>
                        <option value="">İlçe Seçiniz</option>
                    </select>
                </div>

                <div class="input-group">
                    <select name="mahalle" id="mahalle">
                        <option value="">Mahalle Seçiniz</option>
                    </select>
                </div>
            </div>

            <div class="input-group">
                <textarea name="adres" id="adres" placeholder="Adresinizi giriniz" rows="4" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #e0e0e0; font-size: 16px; resize: none;" required></textarea>
            </div>

            <div class="input-group">
                <input type="text" name="vkn" placeholder="VKN No" minlength="10" maxlength="11" pattern="\d{10,11}" oninput="this.value = this.value.replace(/[^0-9]/g, '')"/>
            </div>


<!-- Yeni Soru 1: GPS Cihazı Var mı? -->
<div class="radio-group-vertical">

</div>

<!-- Yeni Soru 2: Taşıt Tanıma Sistemi Var mı? -->
<div class="radio-group-vertical">


</div>


        </div>

        <div id="paymentNo" style="display: none;">
            <div class="radio-group">
                <p>Size nasıl ulaşmamızı istersiniz?</p>
                <label><input type="radio" name="callBack" value="evet" /> Telefon ile aranmak istiyorum.</label>
                <label><input type="radio" name="callBack" value="hayir" /> Mesaj ile bilgi almak istiyorum.</label>
            </div>
        </div>

        <button type="submit" class="submit-button">
            <span class="text">Tamamla</span>
        </button>
    </form>
</div>


<!-- Hizmet Türü (Step 4) -->
<div id="step-4" style="display: none;">
    <form id="formStep4" method="POST">
        <div class="radio-group">
            <p style="margin-bottom:6px!important; font-weight:600!important; font-size:1.1rem!important; color:#de8131!important;">Hizmet Türü</p>
            <label class="radio-label">
    <input type="radio" name="hizmetTuru" value="Mobil Montaj Hizmeti" required /> Mobil (Yerinde) Montaj
    <span class="info-icon" data-tooltip="UTTS Montajı, mobil ekiplerimizce adresinizde gerçekleştirilir. Oluşturduğunuz randevuya gelmemeniz durumunda, tarafınızdan 250₺ hizmet bedeli tahsil edileceğini lütfen unutmayınız.">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#007bff" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#007bff" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#007bff"/>
        </svg>
    </span>
</label>
<label class="radio-label">
    <input type="radio" name="hizmetTuru" value="Sabit Montaj Hizmeti" required /> Servis Noktasında Montaj
    <span class="info-icon" data-tooltip="UTTS Cihazı, araçlarınızı getireceğiniz servis noktalarımızda monte edilir.">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#007bff" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#007bff" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#007bff"/>
        </svg>
    </span>
</label>

        </div>

<!-- Takvim ve Saat Seçimi (Başlangıçta gizli) -->
<div id="date-time-selection" style="display: none; margin-top: 20px;">
    <div class="custom-input-group" style="display: flex; gap: 20px; width:100%!important;">
        <div class="input-group" style="flex: 1;">
            <label for="randevuTarihi">Randevu Tarihi:</label>
            <input type="date" id="randevuTarihi" name="randevuTarihi" required />
        </div>
        <div class="input-group" style="flex: 1;">
            <label for="randevuSaati">Randevu Saati:</label>
            <select id="randevuSaati" name="randevuSaati" required>
                <option value="" disabled selected>--:--</option>
                <!-- Saat seçenekleri dinamik olarak doldurulacak -->
            </select>
            <div id="time-warning" class="warning-badge" style="display: none;">Saat 08:30 ile 19:00 arasında olmalıdır.</div>
        </div>
    </div>
</div>

<div id="step-5" style="display: none;">
    <form id="formStep5" method="POST">
        <div class="radio-group">
            <p style="margin-bottom:6px!important; font-weight:600!important; font-size:1.1rem!important; color:#de8131!important;">Hizmet Türü</p>
            <label class="radio-label">
    <input type="radio" name="hizmetTuru" value="Mobil Montaj Hizmeti" required /> Mobil (Yerinde) Montaj
    <span class="info-icon" data-tooltip="UTTS Montajı, mobil ekiplerimizce adresinizde gerçekleştirilir. Oluşturduğunuz randevuya gelmemeniz durumunda, tarafınızdan 250₺ hizmet bedeli tahsil edileceğini lütfen unutmayınız.">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#007bff" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#007bff" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#007bff"/>
        </svg>
    </span>
</label>
<label class="radio-label">
    <input type="radio" name="hizmetTuru" value="Sabit Montaj Hizmeti" required /> Servis Noktasında Montaj
    <span class="info-icon" data-tooltip="UTTS Cihazı, araçlarınızı getireceğiniz servis noktalarımızda monte edilir.">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#007bff" stroke-width="2"/>
            <line x1="12" y1="8" x2="12" y2="12" stroke="#007bff" stroke-width="2" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" fill="#007bff"/>
        </svg>
    </span>
</label>

        </div>





        <button type="submit" class="submit-button">
            <span class="text">Tamamla</span>
            <span class="loading">Gönderiliyor...</span>
            <span class="success">Gönderildi!</span>
        </button>
    </form>
</div>




            </div>
            <!-- Form Container Bitişi -->
        </div>
    </div>
</div>
<div data-rocket-location-hash="f9944718351f1250ef29f9bff1fb96cf" class="desc-container">
    <p>Ulusal Taşıt Tanıma Sistemi (UTTS), akaryakıt sektöründe rekabet eşitliğini sağlamak ve kayıt dışı ekonomi ile mücadele etmek amacıyla geliştirilmiştir. Bu sistem, taşıt plaka bilgilerini otomatik olarak akaryakıt pompalarına aktaran bir teknolojidir. UTTS başvuru formu ile adınızı, soyadınızı ve telefon bilginizi girerek, başvurunuzu kolayca tamamlayabilirsiniz. UTTS ile akaryakıt alışverişlerinizi daha güvenli ve verimli hale getirin.</p><br>
    <p>RS Otomotiv Grubu olarak UTTS montaj ve hizmetlerinde yetkili firma konumundayız. UTTS başvurunuz sonrasında, mobil hizmet randevusu almak için <a href="tel:08507778877">0850 777 88 77</a> numaralı telefondan ya da <a href="/iletisim/">uttsmobil.com</a> adresinden bize ulaşabilirsiniz. Sizin için güvenilir ve hızlı bir hizmet sunmayı amaçlıyoruz.</p><br>
    <p>UTTS, akaryakıt işlemlerinizde hem zaman kazandırır hem de maliyetlerinizi kontrol altında tutmanıza yardımcı olur. Hemen UTTS başvuru formunu doldurun ve bu yenilikçi sistemin avantajlarından yararlanmaya başlayın!</p>
</div>


<!-- Tippy.js JavaScript -->
<script type="rocketlazyloadscript" data-rocket-src="https://unpkg.com/@popperjs/core@2" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://unpkg.com/tippy.js@6" data-rocket-defer defer></script>

<script type="rocketlazyloadscript">
	
	
	
document.addEventListener('DOMContentLoaded', function () {
    const formSteps = ['#formStep1', '#formStep2', '#formStep3', '#formStep4', '#formStep5'];

    // Form verilerini toplama ve JSON'a çevirme
    function collectFormData() {
        const storedData = JSON.parse(localStorage.getItem('serviceFormData')) || {};
        return transformStoredDataToJson(storedData);
    }

    // Form verilerini localStorage'a kaydetme
    function saveToLocalStorage(step, data) {
        const currentData = JSON.parse(localStorage.getItem('serviceFormData')) || {};
        currentData[step] = data;
        localStorage.setItem('serviceFormData', JSON.stringify(currentData));
    }

   
    // Form ilerleme (submit) işlemlerinde sadece localStorage'a kaydetme
    formSteps.forEach(formSelector => {
        const form = document.querySelector(formSelector);
        if (form) {
            form.addEventListener('input', function () {
                const data = new FormData(form);
                let jsonData = {};
                data.forEach((value, key) => {
                    jsonData[key] = value;
                });
                saveToLocalStorage(formSelector, jsonData);
            });

            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const data = new FormData(form);
                let jsonData = {};
                data.forEach((value, key) => {
                    jsonData[key] = value;
                });
                saveToLocalStorage(formSelector, jsonData);

                // Form tamamlandığında işaretle
                if (formSelector === '#formStep4') {
                    handleCompletion();
                }
            });
        }
    });

    // Step 3 Callback veya Step 4 tamamlandığında handleCompletion() fonksiyonunu çağırma
    function handleCompletion() {
        console.log("handleCompletion çağrıldı, veri gönderiliyor.");
        const jsonToPost = collectFormData();
        if (Object.keys(jsonToPost).length > 0) {
            sendDataToApi(jsonToPost);
        }

        // Verileri sıfırla ve formun tamamlandığını işaretle
        localStorage.setItem('formCompleted', 'true');
        localStorage.removeItem('serviceFormData');
    }

    // Step 3 Callback tamamlandığında API'ye veri gönderme
    const step3CallbackForm = document.querySelector('#formStep3'); // Step 3 Callback form
    if (step3CallbackForm) {
        step3CallbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const paymentStatus = JSON.parse(localStorage.getItem('serviceFormData'))?.['#formStep2']?.odemeDurumu;

            // Eğer ödeme durumu "hayır" ise, callback süreci tamamlanmış demektir ve handleCompletion() çağırılır.
            if (paymentStatus === 'hayir') {
                handleCompletion();
            }
        });
    }
});



	
document.addEventListener('DOMContentLoaded', function () {
    const aracSayisiInput = document.querySelector('input[name="aracSayisi"]');
    const randevuTarihiInput = document.getElementById('randevuTarihi');
    const randevuSaatiSelect = document.getElementById('randevuSaati');
    const dateSelectionDiv = document.getElementById('date-time-selection');
    const formStep4 = document.querySelector('#formStep4');
    const submitButtonStep4 = formStep4.querySelector('.submit-button');
    const formStep5 = document.querySelector('#formStep5');
    const submitButtonStep5 = formStep5.querySelector('.submit-button');
     // Step 4'teki buton

    // Uyarı Mesajı Step 3 için
    const messageWarningDivStep3 = document.createElement('div');
    messageWarningDivStep3.style.display = 'none';
messageWarningDivStep3.style.color = '#28a745'; // Önceden #dd812e idi
messageWarningDivStep3.style.marginTop = '10px';
messageWarningDivStep3.style.background = '#28a74530'; // Yeşil tonlu bir arka plan
messageWarningDivStep3.style.fontSize = '.9rem'; // Küçük boyutta yazı
messageWarningDivStep3.style.borderRadius = '8px'; // Köşeler yuvarlatıldı
messageWarningDivStep3.style.padding = '10px'; // İç boşluk
messageWarningDivStep3.style.lineHeight = '18px'; // Satır yüksekliği
messageWarningDivStep3.textContent = '25 adet ve üzeri araç montajında, özel müşteri temsilcimiz işlemleriniz için size ulaşacaktır.';
    aracSayisiInput.parentNode.appendChild(messageWarningDivStep3);
			

    // Uyarı Mesajı Step 4 için (Butonun hemen üstüne ekleniyor)
    const messageWarningDivStep4 = document.createElement('div');
    messageWarningDivStep4.style.display = 'none';
messageWarningDivStep4.style.color = '#28a745'; // Önceden #dd812e idi
messageWarningDivStep4.style.marginTop = '10px'; // Yukarıda 10px boşluk eklemek için (Buton ile arasındaki boşluk)
messageWarningDivStep4.style.background = '#28a74530'; // Yeşil tonlu bir arka plan
messageWarningDivStep4.style.fontSize = '.9rem'; // Küçük boyutta yazı
messageWarningDivStep4.style.borderRadius = '8px'; // Köşeler yuvarlatıldı
messageWarningDivStep4.style.padding = '10px'; // İç boşluk
messageWarningDivStep4.style.lineHeight = '18px'; // Satır yüksekliği
messageWarningDivStep4.textContent = '25 adet ve üzeri araç montajında, özel müşteri temsilcimiz işlemleriniz için size ulaşacaktır.';
    formStep4.insertBefore(messageWarningDivStep4, submitButtonStep4);





    const messageWarningDivStep5 = document.createElement('div');
    messageWarningDivStep5.style.display = 'none';
messageWarningDivStep5.style.color = '#28a745'; // Önceden #dd812e idi
messageWarningDivStep5.style.marginTop = '10px'; // Yukarıda 10px boşluk eklemek için (Buton ile arasındaki boşluk)
messageWarningDivStep5.style.background = '#28a74530'; // Yeşil tonlu bir arka plan
messageWarningDivStep5.style.fontSize = '.9rem'; // Küçük boyutta yazı
messageWarningDivStep5.style.borderRadius = '8px'; // Köşeler yuvarlatıldı
messageWarningDivStep5.style.padding = '10px'; // İç boşluk
messageWarningDivStep5.style.lineHeight = '18px'; // Satır yüksekliği
messageWarningDivStep5.textContent = '25 adet ve üzeri araç montajında, özel müşteri temsilcimiz işlemleriniz için size ulaşacaktır.';
    formStep5.insertBefore(messageWarningDivStep5, submitButtonStep5);

    // Araç sayısını gerçek zamanlı olarak izleme ve mesajı gösterme/gizleme (Step 3 ve Step 4)
    aracSayisiInput.addEventListener('input', function () {
        const value = parseInt(aracSayisiInput.value);

        if (!isNaN(value) && value >= 25) {
            // Araç sayısı 50'den fazlaysa:
            dateSelectionDiv.style.display = 'none'; // Tarih ve saat seçimi alanını gizle
            messageWarningDivStep3.style.display = 'block'; // Step 3 için özel mesajı göster
            messageWarningDivStep4.style.display = 'block';
            messageWarningDivStep5.style.display = 'block'; // Step 4 için özel mesajı göster

            // Yarın tarihini ayarla
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1); // Bugünün bir gün sonrası
            const yyyy = tomorrow.getFullYear();
            const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
            const dd = String(tomorrow.getDate()).padStart(2, '0');
            const minDate = `${yyyy}-${mm}-${dd}`;

            // Yarınki tarihi otomatik olarak set et
            randevuTarihiInput.value = minDate;
            randevuSaatiSelect.value = '08:30'; // Varsayılan saat olarak 08:30 set et

            // "required" özelliğini kaldır
            randevuTarihiInput.removeAttribute('required');
            randevuSaatiSelect.removeAttribute('required');
        } else {
            // Araç sayısı 50'den küçükse:
            dateSelectionDiv.style.display = 'flex'; // Tarih ve saat seçimi alanını göster
            messageWarningDivStep3.style.display = 'none'; // Step 3 için özel mesajı gizle
            messageWarningDivStep4.style.display = 'none';
            messageWarningDivStep5.style.display = 'none';// Step 4 için özel mesajı gizle

            // "required" özelliğini ekle
            randevuTarihiInput.setAttribute('required', 'required');
            randevuSaatiSelect.setAttribute('required', 'required');
        }
    });

    // Tarih Seçimi İçin Geçmiş Tarihleri Kapatma
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;

    randevuTarihiInput.setAttribute('min', minDate);
    randevuTarihiInput.addEventListener('change', function () {
        const selectedDate = new Date(randevuTarihiInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Bugünün tarihini sadece tarih kısmı olarak alıyoruz

        if (selectedDate <= today) {
            randevuTarihiInput.value = ''; // Eğer seçilen tarih bugünden önce veya bugüne eşitse temizle
            alert('Geçmiş bir tarih veya bugünü seçemezsiniz. Lütfen yarından itibaren geçerli bir tarih seçin.');
        }
    });

    // Hizmet türü ve saat seçimi ayarlaması
    const hizmetTuruInputs = document.querySelectorAll('input[name="hizmetTuru"]');
    hizmetTuruInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (input.checked && input.value === 'Mobil Montaj Hizmeti') {
                // Mobil montaj için 24 saatlik zaman seçimi yapılabilir
                randevuSaatiSelect.innerHTML = '';
                for (let i = 0; i < 24; i++) {
                    const hour = String(i).padStart(2, '0');
                    const option = document.createElement('option');
                    option.value = `${hour}:00`;
                    option.textContent = `${hour}:00`;
                    randevuSaatiSelect.appendChild(option);
                }
            } else if (input.checked && input.value === 'Sabit Montaj Hizmeti') {
                // Sabit montaj için 8:30 - 19:00 arası zaman seçimi yapılabilir
                randevuSaatiSelect.innerHTML = '';
                for (let i = 8; i <= 19; i++) {
                    const hour = String(i).padStart(2, '0');
                    const option = document.createElement('option');
                    option.value = `${hour}:00`;
                    option.textContent = `${hour}:00`;
                    randevuSaatiSelect.appendChild(option);
                }
            }
        });
    });
});











	
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const overlay = document.getElementById('modalOverlay');
    const closeButton = document.getElementById('closeButton');
    const howToApplyLink = document.getElementById('howToApplyLink');
    const iframe = modal.querySelector('iframe');  // iframe elementini seçiyoruz
    const originalSrc = iframe.src;  // iframe'in orijinal src değerini saklıyoruz

    // Modal'ı aç
    function openModal() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    // "Başvuru ve ödeme nasıl yapılır?" bağlantısına tıklayınca modal aç
    howToApplyLink.addEventListener('click', function(event) {
        event.preventDefault();
        openModal();
    });

    // Hayır radyo butonuna tıklayınca modal aç
    const radioNo = document.querySelector('input[name="odemeDurumu"][value="hayir"]');
    if (radioNo) {
        radioNo.addEventListener('change', function() {
            if (radioNo.checked) {
                openModal(); // "Hayır" seçeneği seçildiyse modal'ı aç
            }
        });
    }

    // Modal'ı kapat
    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        // Video durdurma: iframe'in src değerini boşaltarak videoyu durduruyoruz
        iframe.src = '';
        // Modal kapandıktan sonra iframe'in src'sini eski haline getiriyoruz
        setTimeout(() => {
            iframe.src = originalSrc;
        }, 200);  // 200ms gecikme, videoyu durdurması için biraz zaman tanıyoruz
    }

    // Kapatma butonuna tıklayınca modal'ı kapat
    closeButton.addEventListener('click', function() {
        closeModal();
    });

    // Overlay'e tıklayınca modal'ı kapat
    overlay.addEventListener('click', function() {
        closeModal();
    });

    // ESC tuşuna basılınca modal'ı kapat
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});







	
document.addEventListener('DOMContentLoaded', function () {
    // Tippy.js ile tooltip oluşturma
    tippy('.info-icon', {
        content(reference) {
            return reference.getAttribute('data-tooltip');
        },
        allowHTML: true, // HTML içeriği desteklemesi için
        interactive: true, // Tooltip'in üzerinde gezinmeye izin verir
        animation: 'scale', // Giriş/çıkış animasyonu
        theme: 'light-border', // Tooltip için önceden tanımlanmış bir tema
        placement: 'top', // Tooltip'in yukarıda yer alması
        delay: [100, 100], // Gecikme süresi
        maxWidth: 400 // Maksimum genişlik ayarı
    });
});





	

document.addEventListener('DOMContentLoaded', function () {
    const step3Form = document.querySelector('#step-3 form'); // Step 3 formunu seçiyoruz
    const ilSelect = document.querySelector('select[name="il"]'); // İl dropdown
    const ilceSelect = document.querySelector('select[name="ilce"]'); // İlçe dropdown
    const mahalleSelect = document.querySelector('select[name="mahalle"]'); // Mahalle dropdown
    const adresTextarea = document.querySelector('textarea[name="adres"]'); // Adres textarea

    const paymentYesSection = document.getElementById('paymentYes'); // Ödeme evet bölümü
    const paymentNoSection = document.getElementById('paymentNo'); // Ödeme hayır bölümü
    const vknInput = document.querySelector('input[name="vkn"]');
    const aracSayisiInput = document.querySelector('input[name="aracSayisi"]');

    // Tüm sayfalardaki verileri getiren bir fonksiyon
    async function loadAllData(url) {
        let allData = [];
        let page = 1;
        let hasMorePages = true;

        while (hasMorePages) {
            try {
                const response = await fetch(`${url}?page=${page}`, {
                    headers: {
                        'X-Auth-Token': 'zFTDRWiK1eGzIUH4EcWBlpv3'
                    }
                });
                const data = await response.json();
                if (data.data && data.data.length > 0) {
                    allData = allData.concat(data.data);
                    page++;
                } else {
                    hasMorePages = false;
                }
            } catch (error) {
                console.error('Veriler yüklenirken bir hata oluştu:', error);
                hasMorePages = false;
            }
        }

        return allData;
    }

// İlleri API'den yükle
async function loadProvinces() {
    try {
        const cities = await loadAllData('https://crm.uttsmobil.com/api/public/cities');

        // Öncelikli olarak İstanbul, Ankara, İzmir en başa ekleniyor
        const priorityCities = ['İstanbul', 'Ankara', 'İzmir'];
        let priorityCitiesList = [];
        
        // İstanbul, Ankara, İzmir'i öncelikli listeye ekle
        priorityCities.forEach(priorityCity => {
            const foundCity = cities.find(city => city.name === priorityCity);
            if (foundCity) {
                priorityCitiesList.push(foundCity);
            }
        });

        // Diğer iller ve "Diğer" seçeneği için liste oluşturma
        let otherCitiesList = cities.filter(city => !priorityCities.includes(city.name) && city.name !== 'Diğer');

        // Diğer illeri alfabetik sıralama
        otherCitiesList.sort((a, b) => a.name.localeCompare(b.name));

        // 'Diğer' seçeneğini bul ve en sona koy
        let otherCity = cities.find(city => city.name === 'Diğer');
        if (otherCity) {
            otherCitiesList.push(otherCity);
        }

        // Nihai şehir listesi: Öncelikli + Diğerleri + 'Diğer'
        const finalCityList = [...priorityCitiesList, ...otherCitiesList];

        populateIlSelect(finalCityList);
    } catch (error) {
        console.error('İller yüklenirken bir hata oluştu:', error);
    }
}

function populateIlSelect(cities) {
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.id; // İl ID'si
        option.textContent = city.name; // İl adı
        ilSelect.appendChild(option);
    });
}



    // İlçeleri API'den yükle
    async function loadCounties(cityId) {
        ilceSelect.innerHTML = '<option value="">İlçe Seçiniz</option>'; // Önce temizle
        mahalleSelect.innerHTML = '<option value="">Mahalle Seçiniz</option>'; // Mahalleyi de temizle
        if (!cityId) return;

        try {
            const counties = await loadAllData(`https://crm.uttsmobil.com/api/public/cities/${cityId}/counties`);
            counties.sort((a, b) => {
                if (a.name === 'Diğer') {
                    return 1; // 'Diğer' en sona taşınacak
                } else if (b.name === 'Diğer') {
                    return -1; // 'Diğer' en sona taşınacak
                } else {
                    return a.name.localeCompare(b.name); // Diğer ilçeler alfabetik sıralama
                }
            });
            populateIlceSelect(counties);
        } catch (error) {
            console.error('İlçeler yüklenirken bir hata oluştu:', error);
        }
    }

    // İlçe dropdown doldurma
    function populateIlceSelect(counties) {
        counties.forEach(county => {
            const option = document.createElement('option');
            option.value = county.id; // İlçe ID'si
            option.textContent = county.name; // İlçe adı
            ilceSelect.appendChild(option);
        });
    }

// Mahalleleri API'den yükle
async function loadNeighborhoods(cityId, countyId) {
    mahalleSelect.innerHTML = '<option value="">Mahalle Seçiniz</option>'; // Önce temizle
    if (!cityId || !countyId) return;

    try {
        const neighborhoods = await loadAllData(`https://crm.uttsmobil.com/api/public/cities/${cityId}/counties/${countyId}/neighborhoods`);
        
        // Eğer mahalle listesi boşsa veya mahalle adında 'Diğer' yoksa, manuel olarak ekle
        if (neighborhoods.length === 0 || !neighborhoods.some(neighborhood => neighborhood.name === 'Diğer')) {
            neighborhoods.push({ id: 'other', name: 'Diğer' }); // 'Diğer' seçeneğini ekle
        }

        neighborhoods.sort((a, b) => {
            if (a.name === 'Diğer') {
                return 1; // 'Diğer' en sona taşınacak
            } else if (b.name === 'Diğer') {
                return -1; // 'Diğer' en sona taşınacak
            } else {
                return a.name.localeCompare(b.name); // Diğer mahalleler alfabetik sıralama
            }
        });

        populateMahalleSelect(neighborhoods);
    } catch (error) {
        console.error('Mahalleler yüklenirken bir hata oluştu:', error);
    }
}

// Mahalle dropdown doldurma
function populateMahalleSelect(neighborhoods) {
    neighborhoods.forEach(neighborhood => {
        const option = document.createElement('option');
        option.value = neighborhood.id; // Mahalle ID'si
        option.textContent = neighborhood.name; // Mahalle adı
        mahalleSelect.appendChild(option);
    });
}

    // İl seçildiğinde ilçeleri yükle
    ilSelect.addEventListener('change', function () {
        const cityId = ilSelect.value;
        loadCounties(cityId);
    });

    // İlçe seçildiğinde mahalleleri yükle
    ilceSelect.addEventListener('change', function () {
        const cityId = ilSelect.value;
        const countyId = ilceSelect.value;
        loadNeighborhoods(cityId, countyId);
    });

    // Form alanlarının gerekliliğini güncelle
    function updateRequiredFields(paymentStatus) {
        if (paymentStatus === 'evet') {
            ilSelect.setAttribute('required', 'required');
            ilceSelect.setAttribute('required', 'required');
            //mahalleSelect.setAttribute('required', 'required');
            vknInput.setAttribute('required', 'required');
            aracSayisiInput.setAttribute('required', 'required');
            adresTextarea.setAttribute('required', 'required'); // Adres alanını gerekli yap
            adresTextarea.style.display = 'block'; // Adres alanını göster
        } else {
            ilSelect.removeAttribute('required');
            ilceSelect.removeAttribute('required');
            mahalleSelect.removeAttribute('required');
            vknInput.removeAttribute('required');
            aracSayisiInput.removeAttribute('required');
            adresTextarea.removeAttribute('required'); // Adres alanını gereklilikten çıkar
            adresTextarea.style.display = 'none'; // Adres alanını gizle
        }
    }

    // Ödeme durumu değiştikçe formu güncelle
    document.querySelectorAll('input[name="odemeDurumu"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const paymentStatus = this.value;

            if (paymentStatus === 'evet') {
                paymentYesSection.style.display = 'block'; // Ödeme evet bölümü göster
                paymentNoSection.style.display = 'none'; // Ödeme hayır bölümü gizle
                updateRequiredFields('evet');
            } else if (paymentStatus === 'hayir') {
                paymentYesSection.style.display = 'none'; // Ödeme evet bölümü gizle
                paymentNoSection.style.display = 'block'; // Ödeme hayır bölümü göster
                updateRequiredFields('hayir');
            }
        });
    });

    // Sayfa yüklendiğinde başlangıç ayarları
    loadProvinces();
    updateRequiredFields('hayir'); // Başlangıçta alanların gerekliliklerini kaldır
});




	
	

	
document.addEventListener('DOMContentLoaded', function () {
    const allSteps = [ // Tüm adımları tanımlıyoruz
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
        document.getElementById('step-4'),
        document.getElementById('step-5')
    ];
    const paymentYesSection = document.getElementById('paymentYes');
    const paymentNoSection = document.getElementById('paymentNo');

    let currentStep = 1; // İlk adım
    let totalSteps = allSteps.length; // Toplam adım sayısı

    // Sayfa en üste kaydırma fonksiyonu
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Sayfanın en üstüne kaydır
    }

    // Adımı göstermek için DOM'u güncelle
    function showStep(stepNumber) {
        allSteps.forEach((step, index) => {
            if (index + 1 === stepNumber) {
                step.style.display = 'block'; // Geçerli adımı görünür yap
            } else {
                step.style.display = 'none'; // Diğer adımları gizle
            }
        });

        // Her adımda sayfa en üste kaydır
        scrollToTop();

        // Ödeme durumu özel kontrol
        if (stepNumber === 3) {
            const paymentStatus = document.querySelector('input[name="odemeDurumu"]:checked')?.value;

            if (paymentStatus === 'evet') {
                paymentYesSection.style.display = 'block'; // "Evet" içeriğini göster
                paymentNoSection.style.display = 'none'; // "Hayır" içeriğini gizle
                totalSteps = 4; // Toplam adımları 4'e ayarla
            } else if (paymentStatus === 'hayir') {
                paymentNoSection.style.display = 'block'; // "Hayır" içeriğini göster
                paymentYesSection.style.display = 'none'; // "Evet" içeriğini gizle
                totalSteps = 3; // Toplam adımları 3'e ayarla
            } else {
                paymentYesSection.style.display = 'none'; // Varsayılan olarak gizle
                paymentNoSection.style.display = 'none';
            }
        }
    }

    function updateSteps() {
        const steps = document.querySelectorAll('.step'); // Adım başlıklarını seç
        steps.forEach((step, index) => {
            const stepNumber = index + 1;

            if (stepNumber < currentStep) {
                step.classList.remove('active');
                step.classList.add('completed');
                step.classList.remove('inactive');
            } else if (stepNumber === currentStep) {
                step.classList.remove('completed');
                step.classList.add('active');
                step.classList.remove('inactive');
            } else {
                step.classList.remove('active', 'completed');
                step.classList.add('inactive');
            }

            // Step gizleme (Hayır seçildiğinde step 4 gizlenir)
            if (stepNumber > totalSteps) {
                step.style.display = 'none'; // Gizle
            } else {
                step.style.display = 'flex'; // Görünür yap
            }

            // Çubuk kontrolü: Son stepten sonra çizgiyi kaldır
            if (stepNumber === totalSteps) {
                step.classList.add('last-visible'); // Son görünen step
            } else {
                step.classList.remove('last-visible'); // Çizgiyi sıfırla
            }
        });
    }

    // Başlangıç: İlk adımı göster
    showStep(currentStep);
    updateSteps();

    // Form adımları için submit işlemleri
    allSteps.forEach((form, index) => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const step = index + 1;

            // Ödeme durumu kontrolü (Step 2)
            if (step === 2) {
                const paymentStatus = document.querySelector('input[name="odemeDurumu"]:checked')?.value;

                if (!paymentStatus) {
                    alert('Lütfen bir ödeme durumu seçin!');
                    return;
                }

                if (paymentStatus === 'hayir') {
                    totalSteps = 3; // "Hayır" seçilirse toplam adım sayısını 3 yap
                } else {
                    totalSteps = 4; // "Evet" seçilirse toplam adım sayısını 4 yap
                }
            }

            // Son adımda işlem yap
            if (step === totalSteps) {
                return;
            }

            // Bir sonraki adıma geç
            if (step < totalSteps) {
                currentStep++;
                showStep(currentStep);
                updateSteps();
            }
        });
    });

    // Formu sıfırla
    function resetSteps() {
        currentStep = 1;
        totalSteps = allSteps.length;
        showStep(currentStep); // İlk adımı göster
        updateSteps(); // Adım başlıklarını güncelle

        // Tüm formları sıfırla
        allSteps.forEach(form => form.reset());

        // Ödeme durumu bölümlerini gizle
        paymentYesSection.style.display = 'none';
        paymentNoSection.style.display = 'none';
    }

    // Reset butonunu bağlama
    document.querySelector('#resetButton')?.addEventListener('click', resetSteps);
});







	
document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phoneInput');
    const submitButton = document.querySelector('form button[type="submit"]');

    // Telefon numarasını doğrulama
    function validatePhoneNumber() {
        const phoneValue = phoneInput.value.replace(/\D/g, ''); // Tüm harf dışı karakterleri temizle
        const startsWithFive = phoneValue.charAt(2) === '5'; // 90'dan sonra gelen ilk karakter "5" olmalı

        if (phoneValue.length === 12 && phoneValue.startsWith('90') && startsWithFive) { // Doğru uzunlukta ve 90 ile başlıyor
            submitButton.disabled = false; // Butonu aktif et
        } else {
            submitButton.disabled = true; // Butonu pasif yap
        }
    }

    // Giriş yapıldığında formatlama
    phoneInput.addEventListener('input', function () {
        let x = phoneInput.value.replace(/\D/g, ''); // Sadece rakamları al

        // Eğer +90 yoksa ekle
        if (!x.startsWith('90')) {
            x = '90' + x;
        }

        // Maksimum uzunluk kontrolü (90 + 10 haneli numara)
        x = x.substring(0, 12);

        // Kullanıcı 90 sonrası "5" dışında bir rakam yazarsa, düzelt
        if (x.length > 2 && x.charAt(2) !== '5') {
            x = x.substring(0, 2); // Yalnızca "90" bırakılır
        }

        // Formatlama işlemi
        let formattedValue = '+90 ';
        if (x.length > 2) {
            formattedValue += x.substring(2, 5);
        }
        if (x.length > 5) {
            formattedValue += '-' + x.substring(5, 8);
        }
        if (x.length > 8) {
            formattedValue += '-' + x.substring(8, 10);
        }
        if (x.length > 10) {
            formattedValue += '-' + x.substring(10, 12);
        }

        phoneInput.value = formattedValue; // Formatlanmış değeri input alanına yaz
        validatePhoneNumber(); // Her değişiklikte numarayı kontrol et
    });

    // İlk yükleme sırasında doğrulama
    validatePhoneNumber();

    // Backspace engellemesi (Başındaki +90 kısmını silmeye karşı)
    phoneInput.addEventListener('keydown', function (e) {
        const cursorPosition = phoneInput.selectionStart; // İmlecin mevcut pozisyonu

        if (e.key === 'Backspace') {
            // Eğer +90 kısmı silinmeye çalışılıyorsa engelle
            if (cursorPosition <= 4) {
                e.preventDefault();
            }
        }
    });

    // Form gönderim sırasında temiz numarayı backend'e gönder
    const form = document.querySelector("#formStep1");
    form.addEventListener("submit", function (e) {
        const hiddenPhoneInput = document.createElement("input");
        hiddenPhoneInput.type = "hidden";
        hiddenPhoneInput.name = "telefon"; // Aynı name attribute kullanıyoruz
        hiddenPhoneInput.value = phoneInput.value.replace(/\D/g, '').substring(2); // Sadece numara ve baştaki +90'ı çıkar
        form.appendChild(hiddenPhoneInput);

        // Orijinal input'un backend'e gönderilmesini engellemek için disabled yapıyoruz
        phoneInput.disabled = true;
    });
});





	
	
document.addEventListener('DOMContentLoaded', function () {
    const step1 = document.getElementById('formStep1');
    const step2 = document.getElementById('formStep2');
    const step3 = document.getElementById('formStep3');
    const step4 = document.getElementById('formStep4');
    const step5 = document.getElementById('formStep5');
    const paymentYesSection = document.getElementById('paymentYes');
    const paymentNoSection = document.getElementById('paymentNo');


    // Yönlendirme işlemi
    function redirectToCompletionPage() {
        window.location.href = '/talebiniz-alindi/';
    }

    // Form sıfırlama ve sayfa yenileme işlemi
    function resetAndReload() {
        fetch('?action=reset_user_id') // Yeni user_id oluştur
            .then(response => response.json())
            .then(() => {
                location.reload(); // Sayfayı yeniden yükle
            });
    }

    // Adım 1
    step1.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(step1);
        formData.append('step', '1');

        fetch('', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('step-1').style.display = 'none';
                    document.getElementById('step-2').style.display = 'block';
                }
            });
    });

    // Adım 2
    step2.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(step2);
        formData.append('step', '2');

        fetch('', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const paymentStatus = formData.get('odemeDurumu');
                    document.getElementById('step-2').style.display = 'none';
                    if (paymentStatus === 'evet') {
                        paymentYesSection.style.display = 'block';
                        paymentNoSection.style.display = 'none';
                        document.getElementById('step-3').style.display = 'block';
                    } else {
                        paymentYesSection.style.display = 'none';
                        paymentNoSection.style.display = 'block';
                        document.getElementById('step-3').style.display = 'block';
                    }
                }
            });
    });

// Adım 3 formu
step3.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(step3);
    formData.append('step', '3');

    // Ödeme durumu kontrol
    const paymentStatus = document.querySelector('input[name="odemeDurumu"]:checked')?.value;

    if (paymentStatus === 'hayir') {
        const callBack = document.querySelector('input[name="callBack"]:checked')?.value;
        if (!callBack) {
            alert('Lütfen geri dönüş tercihinizi seçin!');
            return;
        }
    }

    fetch('', { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Eğer geri dönüş tercihi "evet" ise "talebiniz alındı" sayfasına yönlendirin
                if (paymentStatus === 'hayir') {
                    const callBack = document.querySelector('input[name="callBack"]:checked')?.value;
                    if (callBack === 'evet') {
                        // Eğer "evet" seçildiyse "talebiniz alındı" sayfasına yönlendirme yap
                        window.location.href = '/talebiniz-alindi/';
                    } else {
                        // Eğer "hayır" seçildiyse sayfayı yenile (SMS gönderimi sonrasında)
                        window.location.href = '/bilgilendirme-talebiniz-alindi/';
                    }
                } else if (paymentStatus === 'evet' && data.next_step === "4") {
                    // Ödeme durumu "evet" ise Step 4'e geç
                    document.getElementById('step-3').style.display = 'none';
                    document.getElementById('step-4').style.display = 'block';
                }
            }
        })
        .catch(error => console.error('Fetch Hatası:', error));
});






    // Adım 4
    step4.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(step4);
        formData.append('step', '4');

        fetch('', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    redirectToCompletionPage(); // Form tamamlandığında yönlendirme
                }
            });
    });
});



</script>


		<div data-elementor-type="footer" data-elementor-id="16" class="elementor elementor-16 elementor-location-footer" data-elementor-post-type="elementor_library">
			<div class="elementor-element elementor-element-fe5e3d5 e-con-full elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con e-parent" data-id="fe5e3d5" data-element_type="container" data-settings="{&quot;position&quot;:&quot;fixed&quot;}">
		<div class="elementor-element elementor-element-03d17b3 e-con-full e-flex e-con e-child" data-id="03d17b3" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-element elementor-element-3b5087f elementor-icon-list--layout-inline elementor-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3b5087f" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
			<link rel="stylesheet" href="https://uttsmobil.com/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css?ver=1732519168">		<ul class="elementor-icon-list-items elementor-inline-items">
							<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://api.whatsapp.com/send?phone=908507778877">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>						</span>
										<span class="elementor-icon-list-text">0850 777 88 77</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-4e3732d1 e-flex e-con-boxed e-con e-parent" data-id="4e3732d1" data-element_type="container">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-2a6246aa e-flex e-con-boxed e-con e-child" data-id="2a6246aa" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
					<div class="e-con-inner">
				<div class="elementor-element elementor-element-a1869ec elementor-widget elementor-widget-heading" data-id="a1869ec" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.23.0 - 15-07-2024 */
.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><span class="elementor-heading-title elementor-size-default">Hemen <span style="font-weight:200;">Başvuru Yap</span></span>		</div>
				</div>
				<div class="elementor-element elementor-element-0221858 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="0221858" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.23.0 - 15-07-2024 */
.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>				<p>Hemen montaj talebi oluşturmak için <a href="tel:08507778877">0850 777 88 77</a>&#8216;yi arayın veya UTTS mobil sitesinden başvuru yapabilirsiniz.</p>						</div>
				</div>
				<div class="elementor-element elementor-element-32cddb2 elementor-widget elementor-widget-button" data-id="32cddb2" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="/basvuru/">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Başvuru Yap</span>
					</span>
					</a>
		</div>
				</div>
				</div>
					</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-2b777d4f e-flex e-con-boxed e-con e-parent" data-id="2b777d4f" data-element_type="container">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-799068b8 e-con-full e-flex e-con e-child" data-id="799068b8" data-element_type="container">
				<div class="elementor-element elementor-element-72cdb93 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image" data-id="72cdb93" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.23.0 - 15-07-2024 */
.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>											<a href="/" title="UTTS Mobil">
							<img width="610" height="305" src="https://uttsmobil.com/wp-content/uploads/2024/07/UTTS-RS-Otomotiv-Grubu-Logo-Yeni.svg" class="attachment-full size-full wp-image-1629" alt="UTTS Logo" />								</a>
													</div>
				</div>
				<div class="elementor-element elementor-element-3ae42c98 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-id="3ae42c98" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							UTTS, taşıt plaka bilgilerinin otomatik aktarımını sağlayarak yakıt alım işlemlerini hızlandıran ve kolaylaştıran bir sistemdir.						</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-6fc5ef09 e-con-full e-flex e-con e-child" data-id="6fc5ef09" data-element_type="container">
				<div class="elementor-element elementor-element-69239834 elementor-widget elementor-widget-heading" data-id="69239834" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">UTTS Hakkında</span>		</div>
				</div>
				<div class="elementor-element elementor-element-136ef6e3 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="136ef6e3" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="/#nasil-basvuru-yapilir" title="UTTS Başvuru Nasıl Yapılır?">

											<span class="elementor-icon-list-text">UTTS Başvuru Nasıl Yapılır?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/utts-nereden-alinir/" title="UTTS Nereden Alınır?">

											<span class="elementor-icon-list-text">UTTS Nereden Alınır?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/utts-nasil-takilir-utts-mobil-montaj/" title="UTTS Nasıl Takılır?">

											<span class="elementor-icon-list-text">UTTS Nasıl Takılır?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/utts-fiyatlari/" title="UTTS Fiyatları">

											<span class="elementor-icon-list-text">UTTS Fiyatları</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/utts-yetkili-montaj-firmalari/" title="UTTS Yetkili Montaj Firmaları">

											<span class="elementor-icon-list-text">UTTS Yetkili Montaj Firmaları</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/utts-mobil-nedir/" title="UTTS Mobil Nedir?">

											<span class="elementor-icon-list-text">UTTS Mobil Nedir?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/mobil-utts-montaji/" title="Mobil UTTS Montajı">

											<span class="elementor-icon-list-text">Mobil UTTS Montajı</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-39e9de76 e-con-full e-flex e-con e-child" data-id="39e9de76" data-element_type="container">
				<div class="elementor-element elementor-element-60e321d9 elementor-widget elementor-widget-heading" data-id="60e321d9" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Hizmet Noktalarımız</span>		</div>
				</div>
				<div class="elementor-element elementor-element-687cb45c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="687cb45c" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/hizmet-noktalarimiz/istanbul-utts-ulusal-tasit-tanima-sistemi/" title="İstanbul UTTS">

											<span class="elementor-icon-list-text">UTTS İstanbul</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/hizmet-noktalarimiz/ankara-utts-ulusal-tasit-tanima-sistemi/" title="Ankara UTTS">

											<span class="elementor-icon-list-text">UTTS Ankara</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/hizmet-noktalarimiz/izmir-utts-ulusal-tasit-tanima-sistemi/" title="İzmir UTTS">

											<span class="elementor-icon-list-text">UTTS İzmir</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/hizmet-noktalarimiz/kocaeli-utts-ulusal-tasit-tanima-sistemi/" title="Kocaeli UTTS">

											<span class="elementor-icon-list-text">UTTS Kocaeli</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/hizmet-noktalarimiz/bursa-utts-ulusal-tasit-tanima-sistemi/" title="Bursa UTTS">

											<span class="elementor-icon-list-text">UTTS Bursa</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/utts-hizmet-haritasi/" title="Bursa UTTS">

											<span class="elementor-icon-list-text">UTTS Hizmet Haritası</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/kategori/hizmet-noktalarimiz/" title="Diğer Hizmet Noktalarımız">

											<span class="elementor-icon-list-text">Diğer Hizmet Noktalarımız</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-f2f509e e-con-full e-flex e-con e-child" data-id="f2f509e" data-element_type="container">
				<div class="elementor-element elementor-element-20afc38 elementor-widget elementor-widget-heading" data-id="20afc38" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<span class="elementor-heading-title elementor-size-default">Blog Yazılarımız</span>		</div>
				</div>
				<div class="elementor-element elementor-element-a40f78e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="a40f78e" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/blog/utts-zorunlu-mu-utts-kimler-icin-zorunlu/" title="UTTS Zorunlu mu?">

											<span class="elementor-icon-list-text">UTTS Zorunlu mu?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/blog/utts-montaji-nerede-yaptirilir-adim-adim-utts-montaji/" title="UTTS Montajı Nerede Yaptırılır?">

											<span class="elementor-icon-list-text">UTTS Montajı Nerede Yaptırılır?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/blog/utts-montaj-ve-basvuru-nasil-yapilir/" title="UTTS Montaj ve Başvuru Nasıl Yapılır?">

											<span class="elementor-icon-list-text">UTTS Montaj ve Başvuru Nasıl Yapılır?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/blog/rfid-kart-nedir-tasit-tanima-sistemi/" title="RFID Kart Nedir?">

											<span class="elementor-icon-list-text">RFID Kart Nedir?</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://uttsmobil.com/blog/" title="Diğer Blog Yazılarımız">

											<span class="elementor-icon-list-text">Diğer Blog Yazılarımız</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-735f06c3 e-flex e-con-boxed e-con e-parent" data-id="735f06c3" data-element_type="container">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-7a391f78 e-con-full e-flex e-con e-child" data-id="7a391f78" data-element_type="container">
				<div class="elementor-element elementor-element-55e7c3fe elementor-widget elementor-widget-text-editor" data-id="55e7c3fe" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>© 2024 destekmasasi@utts.gov.tr</p>						</div>
				</div>
				<div class="elementor-element elementor-element-615bb6aa elementor-shape-rounded elementor-grid-0 e-grid-align-center elementor-widget elementor-widget-social-icons" data-id="615bb6aa" data-element_type="widget" data-widget_type="social-icons.default">
				<div class="elementor-widget-container">
			<style>/*! elementor - v3.23.0 - 15-07-2024 */
.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container{line-height:1;font-size:0}.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid{display:inline-grid}.elementor-widget-social-icons .elementor-grid{grid-column-gap:var(--grid-column-gap,5px);grid-row-gap:var(--grid-row-gap,5px);grid-template-columns:var(--grid-template-columns);justify-content:var(--justify-content,center);justify-items:var(--justify-content,center)}.elementor-icon.elementor-social-icon{font-size:var(--icon-size,25px);line-height:var(--icon-size,25px);width:calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em));height:calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em))}.elementor-social-icon{--e-social-icon-icon-color:#fff;display:inline-flex;background-color:#69727d;align-items:center;justify-content:center;text-align:center;cursor:pointer}.elementor-social-icon i{color:var(--e-social-icon-icon-color)}.elementor-social-icon svg{fill:var(--e-social-icon-icon-color)}.elementor-social-icon:last-child{margin:0}.elementor-social-icon:hover{opacity:.9;color:#fff}.elementor-social-icon-android{background-color:#a4c639}.elementor-social-icon-apple{background-color:#999}.elementor-social-icon-behance{background-color:#1769ff}.elementor-social-icon-bitbucket{background-color:#205081}.elementor-social-icon-codepen{background-color:#000}.elementor-social-icon-delicious{background-color:#39f}.elementor-social-icon-deviantart{background-color:#05cc47}.elementor-social-icon-digg{background-color:#005be2}.elementor-social-icon-dribbble{background-color:#ea4c89}.elementor-social-icon-elementor{background-color:#d30c5c}.elementor-social-icon-envelope{background-color:#ea4335}.elementor-social-icon-facebook,.elementor-social-icon-facebook-f{background-color:#3b5998}.elementor-social-icon-flickr{background-color:#0063dc}.elementor-social-icon-foursquare{background-color:#2d5be3}.elementor-social-icon-free-code-camp,.elementor-social-icon-freecodecamp{background-color:#006400}.elementor-social-icon-github{background-color:#333}.elementor-social-icon-gitlab{background-color:#e24329}.elementor-social-icon-globe{background-color:#69727d}.elementor-social-icon-google-plus,.elementor-social-icon-google-plus-g{background-color:#dd4b39}.elementor-social-icon-houzz{background-color:#7ac142}.elementor-social-icon-instagram{background-color:#262626}.elementor-social-icon-jsfiddle{background-color:#487aa2}.elementor-social-icon-link{background-color:#818a91}.elementor-social-icon-linkedin,.elementor-social-icon-linkedin-in{background-color:#0077b5}.elementor-social-icon-medium{background-color:#00ab6b}.elementor-social-icon-meetup{background-color:#ec1c40}.elementor-social-icon-mixcloud{background-color:#273a4b}.elementor-social-icon-odnoklassniki{background-color:#f4731c}.elementor-social-icon-pinterest{background-color:#bd081c}.elementor-social-icon-product-hunt{background-color:#da552f}.elementor-social-icon-reddit{background-color:#ff4500}.elementor-social-icon-rss{background-color:#f26522}.elementor-social-icon-shopping-cart{background-color:#4caf50}.elementor-social-icon-skype{background-color:#00aff0}.elementor-social-icon-slideshare{background-color:#0077b5}.elementor-social-icon-snapchat{background-color:#fffc00}.elementor-social-icon-soundcloud{background-color:#f80}.elementor-social-icon-spotify{background-color:#2ebd59}.elementor-social-icon-stack-overflow{background-color:#fe7a15}.elementor-social-icon-steam{background-color:#00adee}.elementor-social-icon-stumbleupon{background-color:#eb4924}.elementor-social-icon-telegram{background-color:#2ca5e0}.elementor-social-icon-threads{background-color:#000}.elementor-social-icon-thumb-tack{background-color:#1aa1d8}.elementor-social-icon-tripadvisor{background-color:#589442}.elementor-social-icon-tumblr{background-color:#35465c}.elementor-social-icon-twitch{background-color:#6441a5}.elementor-social-icon-twitter{background-color:#1da1f2}.elementor-social-icon-viber{background-color:#665cac}.elementor-social-icon-vimeo{background-color:#1ab7ea}.elementor-social-icon-vk{background-color:#45668e}.elementor-social-icon-weibo{background-color:#dd2430}.elementor-social-icon-weixin{background-color:#31a918}.elementor-social-icon-whatsapp{background-color:#25d366}.elementor-social-icon-wordpress{background-color:#21759b}.elementor-social-icon-x-twitter{background-color:#000}.elementor-social-icon-xing{background-color:#026466}.elementor-social-icon-yelp{background-color:#af0606}.elementor-social-icon-youtube{background-color:#cd201f}.elementor-social-icon-500px{background-color:#0099e5}.elementor-shape-rounded .elementor-icon.elementor-social-icon{border-radius:10%}.elementor-shape-circle .elementor-icon.elementor-social-icon{border-radius:50%}</style>		<div class="elementor-social-icons-wrapper elementor-grid">
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-681c743" href="https://www.instagram.com/uttsmobil/" target="_blank">
						<span class="elementor-screen-only">Instagram</span>
						<svg class="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-1f5e5fd" href="https://www.facebook.com/uttsmobil/" target="_blank">
						<span class="elementor-screen-only">Facebook</span>
						<svg class="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>					</a>
				</span>
							<span class="elementor-grid-item">
					<a class="elementor-icon elementor-social-icon elementor-social-icon-youtube elementor-repeater-item-ad3044d" href="https://www.youtube.com/@UTTSMobil" target="_blank">
						<span class="elementor-screen-only">Youtube</span>
						<svg class="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>					</a>
				</span>
					</div>
				</div>
				</div>
				</div>
					</div>
				</div>
		<div class="elementor-element elementor-element-1210620 elementor-hidden-widescreen elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet e-flex e-con-boxed e-con e-parent" data-id="1210620" data-element_type="container" data-settings="{&quot;position&quot;:&quot;fixed&quot;}">
					<div class="e-con-inner">
		<div class="elementor-element elementor-element-f809ef6 e-con-full e-flex e-con e-child" data-id="f809ef6" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-element elementor-element-4750225 elementor-icon-list--layout-inline elementor-mobile_extra-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4750225" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items elementor-inline-items">
							<li class="elementor-icon-list-item elementor-inline-item">
											<a href="https://api.whatsapp.com/send?phone=908507778877">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Whatsapp</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				</div>
		<div class="elementor-element elementor-element-6e06b5b e-con-full e-flex e-con e-child" data-id="6e06b5b" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div class="elementor-element elementor-element-d6b2120 elementor-mobile_extra-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="d6b2120" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="tel:08507778877">

												<span class="elementor-icon-list-icon">
							<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>						</span>
										<span class="elementor-icon-list-text">Hemen Ara</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				</div>
					</div>
				</div>
				</div>
		
<script type="rocketlazyloadscript" id="rocket-browser-checker-js-after">
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script id="rocket-preload-links-js-extra">
var RocketPreloadLinksConfig = {"excludeUris":"\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index.php\/)?(.*)wp-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm","siteUrl":"https:\/\/uttsmobil.com","onHoverDelay":"100","rateThrottle":"3"};
</script>
<script type="rocketlazyloadscript" id="rocket-preload-links-js-after">
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.2.1" id="smartmenus-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.23.0" id="elementor-pro-webpack-runtime-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.23.1" id="elementor-webpack-runtime-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.23.1" id="elementor-frontend-modules-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-includes/js/dist/hooks.min.js?ver=2810c76e705dd1a53b18" id="wp-hooks-js"></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></script>
<script type="rocketlazyloadscript" id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script type="rocketlazyloadscript" id="elementor-pro-frontend-js-before">
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/uttsmobil.com\/wp-admin\/admin-ajax.php","nonce":"28286a51aa","urls":{"assets":"https:\/\/uttsmobil.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/uttsmobil.com\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"tr_TR","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/uttsmobil.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.23.0" id="elementor-pro-frontend-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2" id="elementor-waypoints-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Facebook\u2019ta payla\u015f","shareOnTwitter":"Twitter\u2019da payla\u015f\u0131n","pinIt":"Sabitle","download":"\u0130ndir","downloadImage":"G\u00f6rseli indir","fullscreen":"Tam Ekran","zoom":"Yak\u0131nla\u015ft\u0131r","share":"Payla\u015f","playVideo":"Videoyu Oynat","previous":"\u00d6nceki","next":"Sonraki","close":"Kapat","a11yCarouselWrapperAriaLabel":"Karuzel | Yatay kayd\u0131rma: Sol ve Sa\u011f Ok","a11yCarouselPrevSlideMessage":"\u00d6nceki Slayt","a11yCarouselNextSlideMessage":"Sonraki Slayt","a11yCarouselFirstSlideMessage":"Bu ilk slayt","a11yCarouselLastSlideMessage":"Bu son slayt","a11yCarouselPaginationBulletMessage":"Slayta Git"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobil Portre","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobil G\u00f6r\u00fcn\u00fcm\u00fc","value":880,"default_value":880,"direction":"max","is_enabled":true},"tablet":{"label":"Tablet Portresi","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet G\u00f6r\u00fcn\u00fcm\u00fc","value":1200,"default_value":1200,"direction":"max","is_enabled":true},"laptop":{"label":"Diz\u00fcst\u00fc bilgisayar","value":1366,"default_value":1366,"direction":"max","is_enabled":true},"widescreen":{"label":"Geni\u015f ekran","value":2400,"default_value":2400,"direction":"min","is_enabled":true}}},"version":"3.23.1","is_static":false,"experimentalFeatures":{"e_optimized_css_loading":true,"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"container_grid":true,"e_swiper_latest":true,"e_nested_atomic_repeaters":true,"e_optimized_control_loading":true,"e_onboarding":true,"theme_builder_v2":true,"hello-theme-header-footer":true,"home_screen":true,"editor_v2":true,"nested-elements":true,"e_element_cache":true,"link-in-bio":true,"floating-buttons":true,"display-conditions":true,"mega-menu":true,"taxonomy-filter":true,"search":true},"urls":{"assets":"https:\/\/uttsmobil.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/uttsmobil.com\/wp-admin\/admin-ajax.php"},"nonces":{"floatingButtonsClickTracking":"7f27e06a89"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_mobile_extra","viewport_tablet","viewport_tablet_extra","viewport_laptop","viewport_widescreen"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":1068,"title":"UTTS%20Ba%C5%9Fvurusu%20Yap%20%7C%20Ulusal%20Ta%C5%9F%C4%B1t%20Tan%C4%B1ma%20Sistemi%20%7C%20UTTS%20Mobil","excerpt":"","featuredImage":false}};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.23.1" id="elementor-frontend-js" data-rocket-defer defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://uttsmobil.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.23.0" id="pro-elements-handlers-js" data-rocket-defer defer></script>

<script>var rocket_beacon_data = {"ajax_url":"https:\/\/uttsmobil.com\/wp-admin\/admin-ajax.php","nonce":"28017967e0","url":"https:\/\/uttsmobil.com\/basvuru","is_mobile":false,"width_threshold":1600,"height_threshold":700,"delay":500,"debug":null,"status":{"atf":true,"lrc":true},"elements":"img, video, picture, p, main, div, li, svg, section, header, span","lrc_threshold":1800}</script><script data-name="wpr-wpr-beacon" src='https://uttsmobil.com/wp-content/plugins/wp-rocket/assets/js/wpr-beacon.min.js' async></script><script> class RocketElementorAnimation{constructor(){this.deviceMode=document.createElement("span"),this.deviceMode.id="elementor-device-mode-wpr",this.deviceMode.setAttribute("class","elementor-screen-only"),document.body.appendChild(this.deviceMode)}_detectAnimations(){let t=getComputedStyle(this.deviceMode,":after").content.replace(/"/g,"");this.animationSettingKeys=this._listAnimationSettingsKeys(t),document.querySelectorAll(".elementor-invisible[data-settings]").forEach(t=>{const e=t.getBoundingClientRect();if(e.bottom>=0&&e.top<=window.innerHeight)try{this._animateElement(t)}catch(t){}})}_animateElement(t){const e=JSON.parse(t.dataset.settings),i=e._animation_delay||e.animation_delay||0,n=e[this.animationSettingKeys.find(t=>e[t])];if("none"===n)return void t.classList.remove("elementor-invisible");t.classList.remove(n),this.currentAnimation&&t.classList.remove(this.currentAnimation),this.currentAnimation=n;let s=setTimeout(()=>{t.classList.remove("elementor-invisible"),t.classList.add("animated",n),this._removeAnimationSettings(t,e)},i);window.addEventListener("rocket-startLoading",function(){clearTimeout(s)})}_listAnimationSettingsKeys(t="mobile"){const e=[""];switch(t){case"mobile":e.unshift("_mobile");case"tablet":e.unshift("_tablet");case"desktop":e.unshift("_desktop")}const i=[];return["animation","_animation"].forEach(t=>{e.forEach(e=>{i.push(t+e)})}),i}_removeAnimationSettings(t,e){this._listAnimationSettingsKeys().forEach(t=>delete e[t]),t.dataset.settings=JSON.stringify(e)}static run(){const t=new RocketElementorAnimation;requestAnimationFrame(t._detectAnimations.bind(t))}}document.addEventListener("DOMContentLoaded",RocketElementorAnimation.run);</script></body>
</html>

<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1733488454 -->
