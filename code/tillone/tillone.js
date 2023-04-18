// question
let nTilloneCurrentQuestion = 0;
let nTilloneCorrectAnswers = 0;
let arrTilloneQuestions = [];
let bTilloneVisited
// const
const AMOUNT_OF_TILLONE_QUESTION = DATA.tillone.amountOfQuestions; // how many questions we want out of the array
/* tillone
--------------------------------------------------------------
Description: start tillone app*/
var tillone = () => {
    strCurrentApp = "tillone";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tillone`).classList.remove(`hidden`);
    document.querySelector(`#backToHomePage`).classList.remove(`hidden`);
    if(!bTilloneVisited) {
        bTilloneVisited = true;
        arrTilloneQuestions = shuffle(DATA.tillone.appContent);
        addContentToTilloneQuestion();
    }
}

/* addContentToTilloneQuestion
--------------------------------------------------------------
Description: */
const addContentToTilloneQuestion = () => {
    document.querySelector(`.tilloneReviewContainer`).innerHTML = "";
    document.querySelector(`.tilloneTopBar`).innerHTML = `דיווח ${nTilloneCurrentQuestion + 1}/${AMOUNT_OF_TILLONE_QUESTION}`;
    // add question
    let question = El("div", {cls: `tilloneQuestion`}, arrTilloneQuestions[nTilloneCurrentQuestion].question);
    document.querySelector(`.tilloneContentContainer`).append(question);
    // add answeres     
    let ansContainer = El("div", {cls: `ansContainer`},);
    document.querySelector(`.tilloneContentContainer`).append(ansContainer);
    for(let i = 0; i < arrTilloneQuestions[nTilloneCurrentQuestion].answers.length; i++){
        let answer = El("div", {classes: [`tilloneAns`, `ans${i}`, `ans`] , listeners: {click : onClickTilloneAnswer}},
            El("div", {attributes: {class: `tilloneQuestionIconContainer`}},
                El("img", {attributes: {class: `tilloneQuestionIcon`, src: arrTilloneQuestions[nTilloneCurrentQuestion].icons[i]}} ),
            ),
            arrTilloneQuestions[nTilloneCurrentQuestion].answers[i],
        );
        document.querySelector(`.tillone .ansContainer`).append(answer);
    }
}

/* onClickTilloneAnswer
--------------------------------------------------------------
Description: */
const onClickTilloneAnswer = (event) => {
    let correctAns = arrTilloneQuestions[nTilloneCurrentQuestion].correctAns;
    // check if answer is correct
    if(event.currentTarget.classList[1] === String(correctAns)){
        nTilloneCorrectAnswers++;
    }
    // show right container
    document.querySelector(`.tilloneContentContainer`).innerHTML = "";
    // add next button
    document.querySelector(`.tilloneTopBar`).innerHTML = ``;
    let next = El("img", {attributes: {src: `../assets/images/tillone/leftArrow.svg`, class: `tilloneNextArrrow`}});
    document.querySelector(`.tilloneTopBar`).append(next);
    // add review
    let review = El("div", {classes: [`tilloneReview`]}, 
        El("img", {attributes: {src: arrTilloneQuestions[nTilloneCurrentQuestion].icons[correctAns.slice(3)], class: `tilloneAnswerIcon`}}),
        El("div", {cls: `tilloneReviewQuestion`}, arrTilloneQuestions[nTilloneCurrentQuestion].question),
        arrTilloneQuestions[nTilloneCurrentQuestion].answers[correctAns.slice(3)],
        );
    document.querySelector(`.tilloneReviewContainer`).append(review);
    // add explanation
    let explaine = El("div", {classes: [`tilloneExplaine`]},
        El("div", {cls: `tilloneExplainetion`},arrTilloneQuestions[nTilloneCurrentQuestion].explanation),
    );
    document.querySelector(`.tilloneReviewContainer`).append(explaine);
    // send to next question.
    nTilloneCurrentQuestion++;
    if(nTilloneCurrentQuestion < AMOUNT_OF_TILLONE_QUESTION) {
        document.querySelector(`.tilloneNextArrrow`).addEventListener("click", addContentToTilloneQuestion);
    } else {
        document.querySelector(`.tilloneNextArrrow`).addEventListener("click", tilloneEnd);
    }
}

/* tilloneEnd
--------------------------------------------------------------
Description: start tillone app*/
const tilloneEnd = () => {
    // show right container
    document.querySelector(`.tilloneReviewContainer`).innerHTML = "";
    document.querySelector(`.tilloneTopBar`).innerHTML = ``;
    let content = El("div", {classes: [`tilloneFeedbackContainer`, `flexCenter`]},
        El("div", {cls: `tilloneFeedbackTitleContainer`}, 
            El("div", {classes: [`bold`]}, `שלום, ${userName}`),
            El("div", {cls: `tilloneFeedbackTitle`}, 
                El("img",{attributes: {class: `tilloneFeedbackTitleIcon`, src: `../assets/images/tillone/checkMark.png`}}),
                El("div", {cls: `tilloneFeedbackTitleText`}, `כל הכבוד! מכאן ישר לשלישות`)
            ),
        ),
        El("div", {cls: `tilloneFeedbackTextContainer`}, 
            El("div", {classes: [`tilloneFeedbackBlue`, `bold`]}, `איזה דיווח אוטומטי!`),
            El("img", {attributes: {src: `../assets/images/tillone/home.svg`, class: `tilloneAnswerIcon`}}),
            El("div", {cls: `tilloneFeedbackText`}, `${nTilloneCorrectAnswers} תשובות נכונות`),
            El("div", {cls: `tilloneFeedbackBattery`}, `זכיתם ב${calcPercentageWin(nTilloneCorrectAnswers, AMOUNT_OF_TILLONE_QUESTION)}% טעינה`),
            El("div", {cls: `tilloneFeedbackGray`}, `${AMOUNT_OF_TILLONE_QUESTION - nTilloneCorrectAnswers} תשובות שגויות`),
        ),
        El("div", {cls: `tilloneEndbuttonContainer`, listeners: {click: sendHome}}, 
            El("img", {attributes: {src: `../assets/images/tillone/calendar.svg`, class: `tilloneEndIcon`}}),
            El("div", {classes: [`bold`]}, `דיווחתי!`),
        ),
    );
    document.querySelector(`.tillone`).append(content);
    if(nTilloneCorrectAnswers/AMOUNT_OF_TILLONE_QUESTION < PASSING_RATE) {
        document.querySelector(`.tilloneFeedbackTitleText`).innerHTML = `השלישות מאוכזבים ממך! תחזור מחר`;
        document.querySelector(`.tilloneFeedbackBlue`).innerHTML = `פשוט תקלה בדיווח`;
        document.querySelector(`.tilloneFeedbackBattery`).innerHTML = `חבל סתם בזבזתם 5%`;
        document.querySelector(`.tilloneFeedbackTitleIcon`).setAttribute(`src`, `../assets/images/tillone/crossCircle.svg`);
        updatePercentage(-5);
    }
    DATA.tillone.completed = true;
}
