import aircraftData from "./aircraftData.js"
import Utilities from "./utilities.js";
let originalData = aircraftData;
let ind = 0;
let filtered = false;
let shuffled = false;
let filteredData;
let shuffledData;

window.onload = function () {

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const resetButton = document.getElementById('reset-button');
    const filterButton = document.getElementById('filter-button');
    const shuffleButton = document.getElementById('shuffle-button');

    getAircraft();
    setCardWidth();

    nextButton.addEventListener('click', function () {
        ind++;
        getAircraft();
        resetBack();
    });

    prevButton.addEventListener('click', function () {
        ind--;
        getAircraft();
        resetBack();
    });

    filterButton.addEventListener('click', function (event) {
        event.preventDefault();
        filtered = true;
        getFiltered();
        getAircraft();
    })

    resetButton.addEventListener('click', function () {
        filtered = false;
        shuffled = false;
        ind = 0;
        getAircraft(aircraftData);
        if ($('#front.flipped')[0] !== undefined) {
            normalFlip()
        };
    });

    shuffleButton.addEventListener('click', function () {
        shuffled = true;
        getShuffled();
        getAircraft();
    });

}

function getShuffled() {
    let original = originalData;
    shuffledData = filtered === true ? Utilities.shuffle(filteredData) : Utilities.shuffle(original);
}

function getFiltered() {
    clearFilterError();
    const filters = getFilters();
    filteredData = aircraftData.filter(function (item) {
        for (let key in filters) {
            if (item[key] != filters[key] || item[key] === undefined) {
                return false
            }
        }
        return true
    });
}

function filterError() {
    $('#filter-error').addClass('d-block');
}

function clearFilterError() {
    $('#filter-error').removeClass("d-block");
}

function getAircraft() {
    const data = shuffled === true ? shuffledData : filtered === true ? filteredData : typeof sourceData === "object" ? sourceData : originalData;

    if (data.length == 0) return filterError();

    if (ind > data.length - 1) {
        ind = 0;
    } else if (ind < 0) {
        ind = data.length - 1;
    }

    const aircraft = data[ind];
    const url = "./Images/Aircraft-Pics/" + aircraft["aircraft name"] + '.jpg';

    setAircraft(aircraft, url);
    setBorder(aircraft["wake cat"]);
}

// ------- JQUERY BELOW -------

function setAircraft(aircraft, url) {
    $("#aircraft-img-1").attr('src', url);
    $("#aircraft-name").text(aircraft["aircraft name"]);
    $('.specs-table td p').each(function () {
        const cellID = $(this).attr('id');

        if (cellID === "cruise speed") {
            $(this).text(`${aircraft["cruise speed (kts)"]} / ${aircraft["cruise speed (mach)"]}`);
        } else {
            $(this).text(aircraft[cellID]);
        }
    });
    setInitialDivPos();
}

function getFilters() {
    const wakeFilter = $('input[name="wake-cat"]:checked').attr('value');
    const appFilter = $('input[name="approach-cat"]:checked').attr('value');
    const filterObj = {};

    if (wakeFilter === undefined && appFilter === undefined) {
        return
    } else if (wakeFilter === undefined) {
        filterObj["approach category"] = appFilter;
    } else if (appFilter === undefined) {
        filterObj["wake cat"] = wakeFilter;
    } else {
        filterObj["wake cat"] = wakeFilter;
        filterObj["approach category"] = appFilter;
    }

    return filterObj
}

function setBorder(cat) {
    $(".back").removeClass(["shadow-wake-light", "shadow-wake-medium", "shadow-wake-heavy", "shadow-wake-super"])
    switch (cat) {
        case "L": $(".back").addClass("shadow-wake-light");
            break;
        case "M": $(".back").addClass("shadow-wake-medium");
            break;
        case "H": $(".back").addClass("shadow-wake-heavy");
            break;
        case "J": $(".back").addClass("shadow-wake-super");
            break;
    }
}

function setCardWidth() {
    const winWidth = $(window).width();
    const winHeight = $(window).height();
    const wScale = winWidth < 768 ? 0.9 : winWidth < 1025 ? 0.8 : 0.6;

    if ($("#main-cont").length === 1) $("#main-cont").width(winWidth * wScale);
    if ($("#multi-cont").length === 1) {
        $("#multi-cont").width(winWidth * 0.95);
        $("#multi-cont .card").height(winHeight * 0.4);
    }
}
