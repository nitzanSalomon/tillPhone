const FORCE = 0;
const DONT_FORCE = 1;
const DATA = { 
    // tillder
    "tillder": {
        "icon": "../assets/images/homePage/tillder.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "completed": false,
        "appContent":  [
            {
                "type": "binary",
                "src": "../assets/images/tillder/dog.jpg",
                "question": "שאלת נכון או לא נכון שהתשובה אליה היא נכון",
                "correctAns": true,
                "selectedAns": "",
            },
            {
                "type": "binary",
                "src": "../assets/images/tillder/exemple6.jpg",
                "question": "שאלת נכון או לא נכון שהתשובה אליה היא לא נכון",
                "correctAns": false,
                "selectedAns": "",
            },
        ],
    },
    // tillhang
    "tillhang": {
        "icon": "../assets/images/homePage/tillhang.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "completed": false,
        "appContent":  [
            {
                "src": "../assets/images/homePage/tillder.png",
                "definition": "הגדרה של מושג כי מושג זה כיף",
                "answer": [// if you want two words put a dash between them, not more then 8 letters
                    "מ",
                    "ו",
                    "ש",
                    "ג",
                    "-",
                    "א",
                ],
            },
            {
                "src": "../assets/images/homePage/tillder.png",
                "definition": "הגדרה של עוד מושג כי מושג זה כיף",
                "answer": [// if you want two words put a dash between them, not more then 8 letters
                    "מ",
                    "ו",
                    "ש",
                    "ג",
                    "-",
                    "ב",
                ],
            },
        ],
    },
    // tillone
    "tillone": {
        "icon": "../assets/images/homePage/tillone.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "completed": false,
        "appContent":  [
            {
                "question": "שאלה ששואלת מה עדיף לעשות?",
                "answers": ["לטוס", "לעשות אוריגאמי", "לטייל", "להיות בבית", "לאהוב", "לכתוב"],
                "icons": [
                    "../assets/images/tillone/world.svg",
                    "../assets/images/tillone/paper-plane.svg",
                    "../assets/images/tillone/marker.svg",
                    "../assets/images/tillone/home.svg",
                    "../assets/images/tillone/heart.svg",
                    "../assets/images/tillone/document.svg",
                ],
                "correctAns": "ans5",// location in answers array (start from 0)
                "explanation": "התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל",// explain why correct answer is correct
            },
            {
                "question": "שאלה שאלתית שיש לתשובות שלה אייקונים כי למה לא בעצם?",
                "answers": ["לטוס", "לעשות אוריגאמי", "לטייל", "להיות בבית", "לאהוב", "לכתוב"],
                "icons": [
                    "../assets/images/tillone/world.svg",
                    "../assets/images/tillone/paper-plane.svg",
                    "../assets/images/tillone/marker.svg",
                    "../assets/images/tillone/home.svg",
                    "../assets/images/tillone/heart.svg",
                    "../assets/images/tillone/document.svg",
                ],
                "correctAns": "ans1",// location in answers array (start from 0)
                "explanation": "התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל",// explain why correct answer is correct
            },
        ],
    },
    // tillgram
    "tillgram": {
        "icon": "../assets/images/homePage/tillgram.svg",
        "completed": false,
        "appContent":  [
            {
                "title": "כותרת לנושא",
                "icon": "../assets/images/tillgram/dog.jpg",
                "text": "היי אני טקסט שנלווה לתמונה והוא גם מאוד קשור אליה ועוזר לתאר אותה ואת הקשר לנושא",
                "src": ["../assets/images/tillgram/exemplePic.jpg", "../assets/images/tillgram/exemple2.jpg", "../assets/images/tillgram/exemple3.jpg"],
                "currentPic": 0, // dont tuch
                "notRead": true,
            },
            {
                "title": "כותרת לנושא",
                "icon": "../assets/images/tillgram/dog.jpg",
                "text": "היי אני טקסט שנלווה לתמונה והוא גם מאוד קשור אליה ועוזר לתאר אותה ואת הקשר לנושא",
                "src": ["../assets/images/tillgram/exemplePic.jpg", "../assets/images/tillgram/exemple2.jpg", "../assets/images/tillgram/exemple3.jpg"],
                "currentPic": 0, // dont tuch
                "notRead": true,
            },
        ],
    },
    // tillery
    "tillery": {
        "icon": "../assets/images/homePage/tillery.svg",
        "amountOfQuestions": 6, // how many pers of cards will actualy appear
        "completed": false,
        "moves": 20, // how many moves they have until they lose
        "appContent":  [
            {
                "src": "../assets/images/tillery/exemple1.jpg",
                "group": "1",
            },
            {
                "definitions": "כלב",
                "group": "1",
            },
            {
                "src": "../assets/images/tillery/exemple6.jpg",
                "group": "2",
            },
            {
                "definitions": "פנדה",
                "group": "2",
            },
            {
                "src": "../assets/images/tillery/exemple7.jpg",
                "group": "3",
            },
            {
                "definitions": "אריה",
                "group": "3",
            },
            {
                "src": "../assets/images/tillery/exemple8.jpg",
                "group": "4",
            },
            {
                "definitions": "דולפין",
                "group": "4",
            },
            {
                "src": "../assets/images/tillery/exemple4.jpg",
                "group": "5",
            },
            {
                "definitions": "סוס",
                "group": "5",
            },
            {
                "src": "../assets/images/tillery/exemple5.jpg",
                "group": "6",
            },
            {
                "definitions": "זאב",
                "group": "6",
            },
        ],
    },
    // tilloto
    "tilloto": {
        "icon": "../assets/images/homePage/tilloto.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "completed": false,
        "appContent":  [
            ["1מושג", "1הסבר על מושג"],
            ["2מושג", "2הסבר על מושג"],
            ["3מושג", "3הסבר על מושג"],
            ["4מושג", "4הסבר על מושג"],
            ["5מושג", "5הסבר על מושג"],
            ["6מושג", "6הסבר על מושג"],
            ["7מושג", "7הסבר על מושג"],
            ["8מושג", "8הסבר על מושג"],
            ["9מושג", "9הסבר על מושג"],
            ["10מושג", "10הסבר על מושג"],
            ["11מושג", "11הסבר על מושג"],
            ["12מושג", "12הסבר על מושג"],
            ["13מושג", "13הסבר על מושג"],
            ["14מושג", "14הסבר על מושג"],
            ["15מושג", "15הסבר על מושג"],
            ["16מושג", "16הסבר על מושג"],
            ["17מושג", "17הסבר על מושג"],
            ["18מושג", "18הסבר על מושג"],
        ],
    },
    // tillsms
    "tillsms": {
        "icon": "../assets/images/homePage/tillsms.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "completed": false,
        "appContent": [
            {
                pic: "../assets/images/tillsms/example1.jpg",
                title: "תרגול בנושא 1",
                curretntQuestion: 0,
                status: "לא הותחל",
                content: [
                {
                    type: `manyPics`,
                    question: `שאלה עם המון תמונות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["../assets/images/tillsms/exemple8.jpg","../assets/images/tillsms/exemple8.jpg","../assets/images/tillsms/exemple8.jpg", "../assets/images/tillsms/exemple8.jpg", "../assets/images/tillsms/exemple8.jpg", "../assets/images/tillsms/exemple8.jpg"],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans3`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12", "תשובה 13", "תשובה 14", "תשובה 15", "תשובה 16",],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans2`, `ans5`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 3", "תשובה 4",],// the legth will determine how many answers will apear
                    correctAns: [`ans1`] // the legth will determine how many answers are reqwiered
                },
            ],},
            {
                pic: "../assets/images/tillsms/example1.jpg",
                title: "תרגול בנושא 2",
                curretntQuestion: 0,
                status: "לא הותחל",
                content: [
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12",],// the legth will determine how many answers will apear
                    correctAns: [`ans1`, `ans6`] // the legth will determine how many answers are reqwiered
                },
            ],},
            {
                pic: "../assets/images/tillsms/example1.jpg",
                title: "תרגול בנושא 3",
                curretntQuestion: 0,
                status: "לא הותחל",
                content: [
                {
                    type: `manyChoices`,
                    question: `שאלה עם המון אפשרויות שאפשר לבחור מהן כמה שרוצים`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9",],// the legth will determine how many answers will apear
                    correctAns: [`ans2`, `ans5`] // the legth will determine how many answers are reqwiered
                },
            ],},
        ]
        
    },
    // tillwatch
    "tillwatch": {
        "icon": "../assets/images/homePage/tillwatch.svg",
        "amountOfQuestions": 2, // how many questions will actualy appear
        "completed": false,
        "appContent": {
            "playlistName": [
                {
                    "videoTitle": "שם הסרטון",
                    "src": "n0t9iFlGO20",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": FORCE,// force user to watch 
                },
                {
                    "videoTitle": "תפוח",
                    "src": "n0t9iFlGO20",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "גלידה",
                    "src": "w141thRQ-ks",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
            ],
            "playlistName1": [
                {
                    "videoTitle": "כלבלבים",
                    "src": "ysb_gxJ8LE4",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "חלומות",
                    "src": "n0t9iFlGO20",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "משחק מחשב",
                    "src": "w141thRQ-ks",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
            ],
            "playlistName2": [
                {
                    "videoTitle": "בולונז",
                    "src": "ysb_gxJ8LE4",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "ראול",
                    "src": "n0t9iFlGO20",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "בתיה",
                    "src": "w141thRQ-ks",
                    "info": "מידע על הסרטוןןןןן מלא תוכןן יאייי",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
            ],
        },
    },
    // tillburger
    "tillburger": {
        "icon": "../assets/images/homePage/tillburger.svg",
        "amountOfQuestions": 3, // how many questions will actualy appear
        "completed": false,
        "appContent": [
            {
                instructions: "סדרו את החודשים לפי סדר כרונולוגי",
                rangeTop: "ראשון",
                rangeBottom: "אחרון",
                options: ["ינואר", "פברואר", "מרץ", "אפריל","מאי"]
            },
            {
                instructions: "סדרו לפי סדר הפעולות",
                rangeTop: "ראשונה",
                rangeBottom: "אחרונה",
                options: ["פעולה ראשונה", "פעולה שנייה", "פעולה שלישית", "פעולה רביעית",]
            },
            {
                instructions: "סדרו לפי גודל החייה",
                rangeTop: "הכי גדולה",
                rangeBottom: "הכי קטנה",
                options: ["פיל", "אריה", "כלב", "ארנב", "עכבר", "נמלה"]
            },
        ]
    },
};