// question
let ntilleryCorrectAnswers = 0;
let ntilleryMovesUsed = 0;
let nFlippedCards = 0;
let arrtilleryCards = [];
let bTilleryVisited = false;
// const
const AMOUNT_OF_TILLERY_QUESTION = DATA.tillery.amountOfQuestions;
const MOVES = DATA.tillery.moves;
/* tillery
--------------------------------------------------------------
Description: start tillery app*/
var tillery = () => {
    strCurrentApp = "tillery";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillery`).classList.remove(`hidden`);
    document.querySelector(`#backToHomePage`).classList.remove(`hidden`);
    if(!bTilleryVisited){
        bTilleryVisited = true;
        arrtilleryCards = shuffle(DATA.tillery.appContent);
        createtilleryContent();
    }
}

/* createtilleryContent
--------------------------------------------------------------
Description: start tillgram app*/
const createtilleryContent = () => {
    let title = El("div", {classes: [`tilleryCardTitle`]}, `TILLERY`,
        El("div",{cls: "tilleryTrackersContainer"},
            El("div",{cls: "tilleryMovesContainer"},
            El("img",{cls: "tilleryMovesImg", attributes: {src: "../assets/images/tillery/arrows-repeat.svg"}},),
                El("div",{cls: "tilleryMoves"}, `${ntilleryMovesUsed}/${MOVES} מהלכים`),
            ),
            El("div",{cls: "tilleryPairsContainer"},
            El("img",{cls: "tilleryPairsImg", attributes: {src: "../assets/images/tillery/playing-cards.svg"}},),
                El("div",{cls: "tilleryPairs"}, `${ntilleryCorrectAnswers} זוגות`),
            ),
        ),
        El("div",{cls: "tilleryInstractions"}, "התאימו בין המושג לתמונה במשחק הזיכרון"),
    );
    document.querySelector(`.tillery`).prepend(title)
    let card;
    for(let i = 0; i < arrtilleryCards.length; i++) {
        if(Object.keys(arrtilleryCards[i])[0] === "src"){
            card = El("div", {classes: [`tilleryCard`, `tilleryCard${arrtilleryCards[i].group}`, `flexCenter`], listeners: {click: flipCard}},
                El("img", {attributes: {class: `tilleryCardBack`, src: arrtilleryCards[i].src}}),
                El("img", {attributes: {class: `tilleryCardFront`, src: `../assets/images/tillery/tillLogo.svg`}}),
            );
        } else {
            card = El("div", {classes: [`tilleryCard`, `tilleryCard${arrtilleryCards[i].group}`, `flexCenter`], listeners: {click: flipCard}},
                El("div", {attributes: {class: `tilleryCardBack`}},
                    El("div", {attributes: {class: `tilleryCardBackText`}}, arrtilleryCards[i].definitions),
                ),
                El("img", {attributes: {class: `tilleryCardFront`, src: `../assets/images/tillery/tillLogo.svg`}}),
            );
        }
        document.querySelector(`.tilleryBoard`).append(card)
    }
    // tilleryEnd();
}

const flipBackCards = () => {
    document.querySelectorAll('.tilleryCard:not(.matched)').forEach(card => {
        card.classList.remove('flipped');
        card.addEventListener("click", flipCard);
    });
    nFlippedCards = 0;
    // If there are no more cards that we can flip, we won the game
    if (ntilleryCorrectAnswers === AMOUNT_OF_TILLERY_QUESTION || ntilleryMovesUsed > MOVES) {
        tilleryEnd();
    }
}

const flipCard = (event) => {
    let card = event.currentTarget;
    card.removeEventListener("click", flipCard);
    nFlippedCards++ 

    if (nFlippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (nFlippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')
        if (flippedCards[0].classList[1] === flippedCards[1].classList[1]) {
            ntilleryCorrectAnswers++;
            document.querySelector(".tilleryPairs").innerHTML = `${ntilleryCorrectAnswers} זוגות`;
            flippedCards[0].classList.add('matched');
            flippedCards[1].classList.add('matched');
        }

        ntilleryMovesUsed++;
        document.querySelector(".tilleryMoves").innerHTML = `${ntilleryMovesUsed}/${MOVES} מהלכים`;

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }
}

/* tilleryEnd
--------------------------------------------------------------
Description: start tillgram app*/
const tilleryEnd = () => {
    document.querySelector(`.tilleryBoardContainer`).classList.add(`hidden`);
    document.querySelector(`.tilleryTrackersContainer`).classList.add(`hidden`);
    let end;
    if(ntilleryMovesUsed > MOVES) {
        updatePercentage(-5);
        document.querySelector(`.tilleryInstractions`).innerHTML = "אויי... כמעט! לא בדיוק ההתאמה שחיפשנו";
        end = El("div", {cls: `tilleryEndContainer`}, 
            El("div",{},`נגמרו לכם המהלכים... הספקתם להשלים רק ${ntilleryCorrectAnswers} זוגות`,),
            El("div",{},`הזיכרון שלכם לא משהו... שכחתם להטעין את הטלפון וסתם בזבזתם 5 אחוזים`),
        );
    } else {
        document.querySelector(`.tilleryInstractions`).innerHTML = "ידענו שאתם מתאימים למשימה!";
        end = El("div", {cls: `tilleryEndContainer`}, 
            El("div",{},`כל הכבוד! הצלחתם להתאים את כל המושגים לתמונות ב ${ntilleryMovesUsed} מהלכים בלבד!`,),
            El("div",{},`איזה זכרון נהדר יש לכם... זכרתם להטעין גם הטלפון ונוספו לכם ${calcPercentageWin(ntilleryCorrectAnswers, AMOUNT_OF_TILLERY_QUESTION)} אחוזים`),
        );
    }
    document.querySelector(`.tillery`).append(end);
    DATA.tillery.completed = true;
}