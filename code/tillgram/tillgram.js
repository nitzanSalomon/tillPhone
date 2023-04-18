let bTillgramVisited = false;
// const
const AMOUNT_OF_TILLGRAM_QUESTION = DATA.tillgram.appContent.length;

/* tillgram
--------------------------------------------------------------
Description: start tillgram app*/
var tillgram = () => {
    strCurrentApp = "tillgram";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillgram`).classList.remove(`hidden`);
    document.querySelector(`#backToHomePage`).classList.remove(`hidden`);
    if(!bTillgramVisited){
        bTillgramVisited = true;
        createTillgramContent();
    }
}

/* createTillgramContent
--------------------------------------------------------------
Description: start tillgram app*/
const createTillgramContent = () => {
    // create title
    let title = El("div", {classes: [`tillgramTitleContainer`, `centerX`]},
        El("div", {cls: `tillgramTitle`}, `Tillgram`),
        El("div", {classes: [`tillgramIconContainer`, `flexCenter`]},
        El("img", {attributes: {src: `../assets/images/tillgram/tiilLogo.svg`, class: `tillgramTitleIcon`}},),
        El("img", {attributes: {src: `../assets/images/tillgram/heart.svg`, class: `tillgramTitleIcon`}},),
        El("img", {attributes: {src: `../assets/images/tillgram/rocket.svg`, class: `tillgramTitleIcon`}},),
        ),
    );
    document.querySelector(`.tillgram`).append(title);
    // create page content - pics and texts
    let pageContent;
    for(let i = 0; i <  DATA.tillgram.appContent.length; i++){
        currentPost = DATA.tillgram.appContent[i]
        pageContent = El("div", {cls: `tillgramPictureContainer`},
            El("div", {cls: `tillgramPicTopContainer`},
                El("img", {attributes: {src: currentPost.icon, class: `tillgramPicIcon`}},),
                currentPost.title
            ),
            El("div", {classes: [`tillgramPicContainer`, `tillgramPicContainer${i}`]},
                El("img",
                    {attributes: {
                        src: currentPost.src[currentPost.currentPic],
                        class: `tillgramPic ${i} tillgramPic${i}`},
                    listeners: {dblclick: onRead}},
                ),
                El("div",{classes: [`tillgramReadAnimation`, `tillgramReadAnimation${i}`]}, `%`)
            ),
            El("div", {cls: `tillgramButtomIcon`},
                El("img", {attributes: {src: `../assets/images/tillgram/readIcon.svg`, class: `tillgramPicButtomIcon ${i} readIcon${i}`}, listeners: {click: onRead}},),
                El("img", {attributes: {src: `../assets/images/tillgram/heart.svg`, class: `tillgramPicButtomIcon`}},),
                El("img", {attributes: {src: `../assets/images/tillgram/rocket.svg`, class: `tillgramPicButtomIcon`}},),
            ),
            El("div", {cls: `tillgramPicContent`},currentPost.text),
        );
        document.querySelector(`.tillgramPageContent`).append(pageContent);
        if (currentPost.src.length > 1) {
            document.querySelector(`.tillgramPic${i}`).addEventListener('swiped', caruslePics);
            let picNumber = El("div", {classes: [`tillgramPicNumber`,`tillgramPicNumber${i}`]}, `1/${currentPost.src.length}`);
            document.querySelector(`.tillgramPicContainer${i}`).append(picNumber);
        }
    }
    // add end button
    let endButton = El("div", {classes: [`tillgramEndButtonContainer`, `centerX`, `flexCenter`]},
        El("img", {attributes: {src: `../assets/images/tillgram/checkMark.jpg`, class: `tillgramEndIcon`}},),
        El("div", {classes: [`tillgramEndText`, `bold`]}, `You’re all caught up`),
        El("div", {classes: [`tillgramEndTextGray`]}, `ראית את כל הפוסטים החדשים באפליקציה.`),
        El("div", {classes: [`tillgramEndButton`], listeners: {click: sendHome}}, `יציאה מהאפליקציה`),
    );
    document.querySelector(`.tillgramPageContent`).append(endButton);
}

/* onRead
--------------------------------------------------------------
Description: update battery if read*/
const onRead = (event) => {
    let currentPic = event.currentTarget.classList[1];
    if (DATA.tillgram.appContent[currentPic].notRead) {
        calcPercentageWin(1 , AMOUNT_OF_TILLGRAM_QUESTION);
        document.querySelector(`.tillgram .readIcon${currentPic}`).setAttribute("src", `../assets/images/tillgram/readIconSelected.svg`);
        document.querySelector(`.tillgramReadAnimation${currentPic}`).style.animation = "fadeInEnlarged 1s";
        DATA.tillgram.appContent[currentPic].notRead = false
    }
    
    let allRead = true;
    DATA.tillgram.appContent.forEach(pic => {
        if (pic.notRead) {
            allRead = false;
        }
    });

    if (allRead) {
        DATA.tillgram.completed = true;
    }
}

/* caruslePics
--------------------------------------------------------------
Description: start tillgram app*/
const caruslePics = (event) => {
    let currentPicContainer = event.currentTarget.classList[1];
    let currentPic = DATA.tillgram.appContent[currentPicContainer].currentPic;
    if(event.detail.dir === "left" && currentPic + 1 < DATA.tillgram.appContent[currentPicContainer].src.length) {
        currentPic++
    } else if (event.detail.dir === "right" && currentPic > 0) {
        currentPic--;
    }
    document.querySelector(`.tillgram .tillgramPic${currentPicContainer}`).setAttribute("src", DATA.tillgram.appContent[currentPicContainer].src[currentPic]);
    document.querySelector(`.tillgramPicNumber${currentPicContainer}`).innerHTML = `${currentPic + 1}/${DATA.tillgram.appContent[currentPicContainer].src.length}`;
    DATA.tillgram.appContent[currentPicContainer].currentPic = currentPic;
}
