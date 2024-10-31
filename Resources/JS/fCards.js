import aircraftData from "./aircraftData.js"
import Utilities from "./utilities.js";
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

    nextButton.addEventListener('click', function () {
        ind++;
        getAircraft();
    });

    prevButton.addEventListener('click', function () {
        ind--;
        getAircraft();
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
        Utilities.sortObjectBy(aircraftData, "aircraft name")
        console.log(aircraftData);
        getAircraft();
    });

    shuffleButton.addEventListener('click', function () {
        shuffled = true;
        getShuffled();
        getAircraft();
    });

}

function getShuffled() {
    let original = aircraftData
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
    const data = shuffled === true ? shuffledData : filtered === true ? filteredData : aircraftData;

    if (data.length == 0) return filterError();

    if (ind > data.length - 1) {
        ind = 0;
    } else if (ind < 0) {
        ind = data.length - 1;
    }

    const item = data[ind];
    const aircraftName = item['aircraft name'];
    const wake = item['wake cat'];
    const picFile = aircraftName + '.jpg';
    const picUrl = "../../Images/Aircraft-Pics/" + picFile;
    console.log(picUrl)

    setAircraft(aircraftName, picUrl);
    setBorder(wake);
}


// ------- JQUERY BELOW -------


$(".front").on("click", function () {
    const cList = $(this).attr("class");
    const regex = new RegExp("animate");
    if (!regex.test(cList)) {
        firstFlip();
    } else {
        normalFlip();
    }
});

$(".back").on("click", normalFlip);

function firstFlip() {
    $(".front").toggleClass(["animate-out", "flipped"]);
    $(".back").toggleClass(["animate-in", "flipped"]);
}

function normalFlip() {
    $(".front").toggleClass(["animate-out", "animate-in", "flipped"]);
    $(".back").toggleClass(["animate-out", "animate-in", "flipped"]);
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

function setAircraft(name, url) {
    $("#aircraft-pic").css({ backgroundImage: `url("${url}")` });
    $("#aircraft-name").text(name);
}

function setBorder(cat) {
    $(".back").removeClass(["light", "medium", "heavy", "super"])
    switch (cat) {
        case "L": $(".back").addClass("border-wake-light");
            break;
        case "M": $(".back").addClass("border-wake-medium");
            break;
        case "H": $(".back").addClass("border-wake-heavy");
            break;
        case "J": $(".back").addClass("border-wake-super");
            break;
    }
}


