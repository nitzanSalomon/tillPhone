let userName;
let nPercent = 0;
let lastPrecent = 0;
let strCurrentApp;
const PERCENT_PER_APP = 100/Object.keys(DATA).length;
const PASSING_RATE = 0.5;
const PASSING_GRADE = 60;
const BONUS = 2;// NOT MORE THEN 5
var elem = document.querySelector("html");

/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    document.querySelector(`.loader`).classList.add(`fade`);
    document.querySelector(`.nameEntry`).classList.add(`fade`);
    document.querySelector(`.submitName`).addEventListener(`click`, () => {
        if(document.querySelector(`#name`).value) {
            startApp();
        }
    });
    document.querySelector(`.submitName`).addEventListener(`click`,openFullscreen);
});

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullscreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    } 
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler(){
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement){
        let addFullscreen = El("img", {attributes: {src: "../assets/images/homePage/fullScreenButton.svg", class: "fullScreenButton"}, listeners: {"click": openFullscreen}});
        document.querySelector(".logoAndFullScreen").prepend(addFullscreen);
        document.exitFullscreen();
    } else {
        let addFullscreen = document.querySelector(".fullScreenButton")
        if (addFullscreen) {
            document.querySelector(".logoAndFullScreen").removeChild(addFullscreen);
        }
    }
}

/* startApp
--------------------------------------------------------------
Description: */
const startApp = () => {
    // saves user name
    userName = document.querySelector(`#name`).value;
    document.querySelector(`.nameEntry`).classList.add(`hidden`);
    let app;
    for(key of Object.keys(DATA)){
        app = El("div", {classes: [`app`, `${key}App`], listeners: {"click": window[key]}},
            El("img", {attributes: {class: `appIcon`, src: DATA[key].icon}}),
            El("div", {cls: `appTitle`}, key),
        );
        document.querySelector(`.appsContainer`).append(app);
    };
    customAlert(`${userName}! הסוללה במצב 0% וזקוקה להטענה! זה הזמן לשחק במשחקים ולצבור נקודות כדי להגיע ל100%.`, `מוכנים לאתגר!`);
    document.querySelector(`#backToHomePage`).addEventListener("click", sendHome);
    new ldBar("#batteryProgress");
    document.querySelector("#batteryProgress").style.width = "52vw"
    document.querySelector("#batteryProgress").style.height = "52vw"
}

/* sendHome
--------------------------------------------------------------
Description: hide and enable recent app, shoe home page*/
const sendHome = () => {
    checkEndGame();
    document.querySelector(`.homePage`).classList.remove(`hidden`);
    document.querySelector(`.${strCurrentApp}`).classList.add(`hidden`);
    document.querySelector(`#backToHomePage`).classList.add(`hidden`);
    if(lastPrecent !== nPercent) {
        lastPrecent = nPercent;
        ldBar("#batteryProgress").set(Math.floor(nPercent));
        document.querySelector(".batteryProgressContainer").classList.add("progressAnimation");
        document.querySelector(".batteryProgressContainer").addEventListener("animationend", () => {
            document.querySelector(".batteryProgressContainer").classList.remove("progressAnimation");
        },)
    }
}

/* alert
--------------------------------------------------------------
Description: gets an allert in animation.
parameters: text - the content of the alert, button - the content of the button
 */
const customAlert = (text, button, onCloseAlert) => {
    document.querySelector(`.alertText`).innerHTML = text;
    document.querySelector(`.alertButton`).innerHTML = button;
    // add alert in animation
    document.querySelector(`.alertContainer`).style.animation = "getAlert 2s forwards";
    document.querySelector(`.alert`).style.animation = "fadeIn 2s forwards";
    // listener to remove alert
    document.querySelector(`.alertButton`).addEventListener("click", () => {
        document.querySelector(`.alertContainer`).style.animation = "removeAlert 2s forwards";
        document.querySelector(`.alert`).style.animation = "fadeOut 2s forwards";
        if(onCloseAlert) {
            onCloseAlert();
        }
    })
}

/* updatePercentage
--------------------------------------------------------------
Description: update the percentage */
const updatePercentage = (nPercentToAdd) => {
    nPercent = nPercent + nPercentToAdd
    // createProgress();
    if(nPercent <= 0){
        // lowBattery;
        nPercent = 0;
        customAlert("נגמרה הסוללה! תצטרכו להתחיל את הלומדה מהתחלה", "פעם הבאה אני אצליח!", restartTillphone)
    } else if (nPercent > 0 && nPercent <= 20){
        // change pic to low battery
        document.querySelector("#batteryImg").setAttribute("src", "../assets/images/topBar/batteryEmpty.svg");
        document.querySelector(".ldBar path.mainline").style.stroke = "rgb(210, 8, 8)";
    } else if (nPercent > 20 && nPercent < 50){
        // change pic to half battery
        document.querySelector("#batteryImg").setAttribute("src", "../assets/images/topBar/batteryAlmostEmpty.svg");
        document.querySelector(".ldBar path.mainline").style.stroke = "rgb(248, 178, 106)";
    } else if (nPercent >= 50 && nPercent < 100){
        // change pic to high battery
        document.querySelector("#batteryImg").setAttribute("src", "../assets/images/topBar/batteryAlmostFull.svg");
        document.querySelector(".ldBar path.mainline").style.stroke = "rgb(119, 184, 104)";
    } else if (nPercent >= 100) {
        nPercent = 100;
        document.querySelector("#batteryImg").setAttribute("src", "../assets/images/topBar/batteryFull.svg");
        document.querySelector(".ldBar path.mainline").style.stroke = "rgb(67, 172, 81)";
        // endGame;
    }
    document.querySelector(`#battery`).innerHTML = `${Math.floor(nPercent)}%`;
}

/* calcPercentage
--------------------------------------------------------------
Description: calculate the current percentage and send to update */
const calcPercentageWin = (correctAnswers, answers, bonus) => {
    let winningRatio = correctAnswers/answers;
    let percentage = PERCENT_PER_APP * winningRatio;
    if (bonus){
        percentage = percentage + bonus
    }
    updatePercentage(percentage);
    return Math.floor(percentage);
}

/* calcPercentage
--------------------------------------------------------------
Description: calculate the current percentage and send to update */
const checkEndGame = () => {
    let allCompleted = true;
    for (const app of Object.keys(DATA)) {
        if (!DATA[app].completed) {
            allCompleted = false;
        }
    }

    if (allCompleted) {
        if(nPercent >= PASSING_GRADE) {
            customAlert(`${userName} הסוללה מלאה איזה כיף! ידענו שאפשר לסמוך עליכם. הטענתם את הסוללה והגעתם ל${Math.floor(nPercent)} אחוזים! אל תשכחו לצלם מסך למפקדים שיראו איזה אלופים אתם!`, `להתראות!`, endTillphone);
        } else {
            customAlert(`${userName} נרדמת בתפקיד?? הסוללה רק ב ${Math.floor(nPercent)} אחוזים מה תעשו בשעת ט"ש? מאמינים בכם שתנסו שוב ותצליחו!`, `פעם הבאה אני אצליח!`, restartTillphone);
        }
    }
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

/* El
--------------------------------------------------------------
Description: create html elements */
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}

const scaleFontSize = (element, initialFont) => {
    element.style.fontSize = `${initialFont}em`
    let fontSize = Number(element.style.fontSize.replace("em", ""));
    while (element.scrollHeight > element.clientHeight) {
        element.style.fontSize = `${fontSize - 0.1}em`;
        fontSize = Number(element.style.fontSize.replace("em", ""));
    }
}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/_/g, ' ');
}

const restartTillphone = () => {
    location.reload()
}

const endTillphone = () => {
    window.close();
}

function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}