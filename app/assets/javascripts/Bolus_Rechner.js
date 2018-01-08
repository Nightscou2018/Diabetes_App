


//Standard Data for a 3 Year old child



function currentMinutes(){
    let date = new Date();
    return date.getMinutes();
}
function currentHours(){
    let date = new Date();
    return date.getHours();
}
function time() {
    let hours = currentHours()
    let minutes = currentMinutes()
    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    return (hours + ":" + minutes + "Uhr");
}

function showTime(){
    let uHr = document.getElementById("Uhrzeit");
    if (uHr === null){return}
    uHr.innerHTML = "Es ist " + time() + ".";
}
// Displaying the Timebased carbohydrate Faktor (BE-Faktor) and the actual time inside the form and htmluhrzeit document.addEventListener("turbolinks:load", 
function timeFakt() {
    let hours = currentHours()
    showTime();
    let beFactorNight = 0.5; 
    let beFactorMorning = 1.3;
    let beFactorNoon = 0.8;
    let beFactorEvening = 0.5;

    let beFactor = document.getElementById("faktor");
    if (beFactor === null){return}
    if (hours > 20 || hours < 6) {
     beFactor.value = beFactorNight;
     
    }
    else if (hours >= 6 && hours < 11) {
     beFactor.value = beFactorMorning;
    
    }
 
    else if (hours >= 11 && hours < 18) {
     beFactor.value = beFactorNoon;
     
    }
    else if (hours >= 18 && hours <= 20) {
        beFactor.value = beFactorEvening;
     
 }

};
document.addEventListener("turbolinks:load", timeFakt);
// Possibiltiy to change the carbohydrate factor (BE Faktor)

function faktorAendern() {
    let beFactorNight = 0.5; 
    let beFactorMorning = 1.3;
    let beFactorNoon = 0.8;
    let beFactorEvening = 0.5;
    let beFaktor = document.getElementById("faktor");
    if (beFaktor === null){return}
    let hours = currentHours()
    if (hours > 20 || hours < 6) {

        beFactorNight = beFaktor.value;
    }
    else if (hours >= 6 && hours < 11) {

        beFactorMorning = beFaktor.value;
    }

    else if (hours >= 11 && hours < 18) {

        beFactorNoon = beFaktor.value;
    }
    else if (hours >= 18 && hours <= 20) {

        beFactorEvening = beFaktor.value;
    };

    
};

// Calculation of the needed insulin for the amount of carbohydrates eaten

function insulinBerechnen() {
    let beFaktor = document.getElementById("faktor");
    if (beFaktor === null){return} 
    
   
    let eat = document.getElementById("be").value;
    let uLin = document.getElementById("insulin");
    
    
    let hours = currentHours()
    if (hours > 20 || hours < 6) {
        if (beFaktor.value === ""){beFactorNight = 0.5}
        else {beFactorNight = beFaktor.value};
        uLin.innerHTML = (eat * beFactorNight).toFixed(2).toString();
    }
    else if (hours >= 6 && hours < 11) {
        if (beFaktor.value === ""){beFactorMorning = 1.3}
        else {beFactorMorning = beFaktor.value};
        uLin.innerHTML = (eat * beFactorMorning).toFixed(2).toString();
    }

    else if (hours >= 11 && hours < 18) {
        if (beFaktor.value === ""){beFactorNoon = 0.8}
        else {beFactorNoon = beFaktor.value};
        uLin.innerHTML = (eat * beFactorNoon).toFixed(2).toString();
    }
    else if (hours >= 18 && hours <= 20) {
        if (beFaktor.value === ""){beFactorEvening = 0.8}
        else {beFactorEvening = beFaktor.value};
        uLin.innerHTML = (eat * beFactorEvening).toFixed(2).toString();
    };

};


