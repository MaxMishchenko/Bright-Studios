let searchField = $('#searchField');
let footerNavTitle = $('.footer__nav-title');
let scrollToTopBtn = $('#scrollToTop');
let accordeonTitle = $('.footer__accordeon-title');
let body = $('body');

const counterElement = $('#timer');
const rakutenHeader = $('#rakutenHeader');
const rakutenFooter = $('#rakutenFooter');
const nextHeader = $('#nextHeader');
const nextFooter = $('#nextFooter');

$(document).ready(function () {
    rakutenHeader.addClass('visible');
    rakutenFooter.addClass('visible');

    startCountdown();
    updatePlaceholder();
    mobileFooterAсcordion();

    $(window).scroll(function () {
        $(this).scrollTop() > 700 ? scrollToTopBtn.fadeIn() : scrollToTopBtn.fadeOut();
    });

    scrollToTopBtn.click(function (e) {
        e.preventDefault();

        $('html, body').animate({scrollTop: 0}, 600);
    });
});

$(window).resize(function () {
    updatePlaceholder();
    mobileFooterAсcordion();
});

function updatePlaceholder() {
    searchField.attr('placeholder', $(window).width() <= 576 ? 'Rechercher' : 'Que cherchez-vous?');
}

function mobileFooterAсcordion() {
    if ($(window).width() < 768) {
        footerNavTitle.click(function () {
            $(this).next().slideToggle(200);
            $(this).find('img').toggleClass('footer--nav-visible footer--nav-hidden');
        });

        accordeonTitle.click(function () {
            $(this).parent().next().slideToggle(200);
            $(this).next().toggleClass('open');
        });
    }
}

function startCountdown() {
    timer = 90;

    const countdown = setInterval(function () {
        counterElement.text(timer);

        if (timer === 0) {
            clearInterval(countdown);
            switchSites();
        } else {
            timer--;
        }
    }, 1000);
}

function switchSites() {
    if (rakutenHeader.hasClass('visible')) {
        rakutenHeader.removeClass('visible');
        rakutenFooter.removeClass('visible');

        body.removeClass('rakuten').addClass('next');

        document.title = "Mens Clothing | Mens Fashion | Mens Clothes | Next Official Site";
        changeFavicon("./img/Next/favicon_next.png");

        nextHeader.addClass('visible');
        nextFooter.addClass('visible');
    } else {
        nextHeader.removeClass('visible');
        nextFooter.removeClass('visible');

        document.title = "Rakuten - Achat et vente neuf, occasion et reconditionné";
        changeFavicon("./img/Rakuten/favicon_rakuten.png");

        body.removeClass('next').addClass('rakuten');

        rakutenHeader.addClass('visible');
        rakutenFooter.addClass('visible');
    }

    startCountdown();
}

function changeFavicon(iconURL) {
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.type = 'image/png';
    favicon.href = iconURL;
}
