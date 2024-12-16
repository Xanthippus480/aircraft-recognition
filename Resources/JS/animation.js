$(".front").on("click", function () {
    const cList = $(this).attr("class");
    const regex = new RegExp("animate");
    if (!regex.test(cList)) {
        firstFlip();
    } else {
        normalFlip(Event);
    }
});

$(".back").on("click", function (event) {
    if (event.target.id === "dropdown-button") return
    normalFlip();
});

function firstFlip() {
    $(".front").toggleClass(["animate-out", "flipped"]);
    $(".back").toggleClass(["animate-in", "flipped"]);
}

function normalFlip() {
    $(".front").toggleClass(["animate-out", "animate-in", "flipped"]);
    $(".back").toggleClass(["animate-out", "animate-in", "flipped"]);
}

$('#dropdown-button').on('click', null, getInitialDivPos(), dropdownTrigger);

function getInitialDivPos() {
    const backHeight50 = $('.back').innerHeight() / 2;
    const divHeight50 = $('.back-wrapper').innerHeight() / 2;
    const initialPos = backHeight50 - divHeight50;
    return initialPos
}

function setInitialDivPos() {
    const initialPos = getInitialDivPos();
    $('.back-wrapper').css('top', initialPos + 'px');
}

function dropdownTrigger() {
    $('#dropdown-button').hide();
    $('.table-wrapper').removeClass('hidden');
    if ($(window).outerWidth() > 767) {
        $('.back-wrapper').animate({ top: '5.5rem' }, 400);
    } else {
        $('.back-wrapper').animate({ top: '2.3rem' }, 400);
    }
}

function resetBack() {
    $('.table-wrapper').addClass('hidden');
    const initialPos = getInitialDivPos();
    $('.back-wrapper').css({ top: initialPos });
    $('#dropdown-button').show();
}