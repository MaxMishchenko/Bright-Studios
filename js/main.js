let searchField=$("#searchField"),footerNavTitle=$(".footer__nav-title"),scrollToTopBtn=$("#scrollToTop"),accordeonTitle=$(".footer__accordeon-title"),body=$("body");const counterElement=$("#timer"),rakutenHeader=$("#rakutenHeader"),rakutenFooter=$("#rakutenFooter"),nextHeader=$("#nextHeader"),nextFooter=$("#nextFooter");function updatePlaceholder(){searchField.attr("placeholder",$(window).width()<=576?"Rechercher":"Que cherchez-vous?")}function mobileFooterAсcordion(){$(window).width()<768&&(footerNavTitle.click((function(){$(this).next().slideToggle(200),$(this).find("img").toggleClass("footer--nav-visible footer--nav-hidden")})),accordeonTitle.click((function(){$(this).parent().next().slideToggle(200),$(this).next().toggleClass("open")})))}function startCountdown(){timer=90;const e=setInterval((function(){counterElement.text(timer),0===timer?(clearInterval(e),switchSites()):timer--}),1e3)}function switchSites(){rakutenHeader.hasClass("visible")?(rakutenHeader.removeClass("visible"),rakutenFooter.removeClass("visible"),body.removeClass("rakuten").addClass("next"),document.title="Mens Clothing | Mens Fashion | Mens Clothes | Next Official Site",changeFavicon("./img/Next/favicon_next.png"),nextHeader.addClass("visible"),nextFooter.addClass("visible")):(nextHeader.removeClass("visible"),nextFooter.removeClass("visible"),document.title="Rakuten - Achat et vente neuf, occasion et reconditionné",changeFavicon("./img/Rakuten/favicon_rakuten.png"),body.removeClass("next").addClass("rakuten"),rakutenHeader.addClass("visible"),rakutenFooter.addClass("visible")),startCountdown()}function changeFavicon(e){let t=document.querySelector("link[rel='icon']");t||(t=document.createElement("link"),t.rel="icon",document.head.appendChild(t)),t.type="image/png",t.href=e}$(document).ready((function(){rakutenHeader.addClass("visible"),rakutenFooter.addClass("visible"),startCountdown(),updatePlaceholder(),mobileFooterAсcordion(),$(window).scroll((function(){$(this).scrollTop()>700?scrollToTopBtn.fadeIn():scrollToTopBtn.fadeOut()})),scrollToTopBtn.click((function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},600)}))})),$(window).resize((function(){updatePlaceholder(),mobileFooterAсcordion()}));