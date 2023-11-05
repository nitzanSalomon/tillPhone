const FORCE = 0;
const DONT_FORCE = 1;
const DATA = { 
    // tillder
    // "tillder": {
    //     "icon": "../assets/images/homePage/tillder.svg",
    //     "amountOfQuestions": 2, // how many questions will actualy appear
    //     "completed": false,
    //     "appContent":  [
    //         {
    //             "type": "binary",
    //             "src": "../assets/images/tillder/dog.jpg",
    //             "question": "שאלת נכון או לא נכון שהתשובה אליה היא נכון",
    //             "correctAns": true,
    //             "selectedAns": "",
    //         },
    //         {
    //             "type": "binary",
    //             "src": "../assets/images/tillder/exemple6.jpg",
    //             "question": "שאלת נכון או לא נכון שהתשובה אליה היא לא נכון",
    //             "correctAns": false,
    //             "selectedAns": "",
    //         },
    //     ],
    // },
    // tillhang
    // "tillhang": {
    //     "icon": "../assets/images/homePage/tillhang.svg",
    //     "amountOfQuestions": 2, // how many questions will actualy appear
    //     "completed": false,
    //     "appContent":  [
    //         {
    //             "src": "../assets/images/homePage/tillder.png",
    //             "definition": "הגדרה של מושג כי מושג זה כיף",
    //             "answer": [// if you want two words put a dash between them, not more then 8 letters
    //                 "מ",
    //                 "ו",
    //                 "ש",
    //                 "ג",
    //                 "-",
    //                 "א",
    //             ],
    //         },
    //         {
    //             "src": "../assets/images/homePage/tillder.png",
    //             "definition": "הגדרה של עוד מושג כי מושג זה כיף",
    //             "answer": [// if you want two words put a dash between them, not more then 8 letters
    //                 "מ",
    //                 "ו",
    //                 "ש",
    //                 "ג",
    //                 "-",
    //                 "ב",
    //             ],
    //         },
    //     ],
    // },
    // tillone
    // "tillone": {
    //     "icon": "../assets/images/homePage/tillone.svg",
    //     "amountOfQuestions": 2, // how many questions will actualy appear
    //     "completed": false,
    //     "appContent":  [
    //         {
    //             "question": "שאלה ששואלת מה עדיף לעשות?",
    //             "answers": ["לטוס", "לעשות אוריגאמי", "לטייל", "להיות בבית", "לאהוב", "לכתוב"],
    //             "icons": [
    //                 "../assets/images/tillone/world.svg",
    //                 "../assets/images/tillone/paper-plane.svg",
    //                 "../assets/images/tillone/marker.svg",
    //                 "../assets/images/tillone/home.svg",
    //                 "../assets/images/tillone/heart.svg",
    //                 "../assets/images/tillone/document.svg",
    //             ],
    //             "correctAns": "ans5",// location in answers array (start from 0)
    //             "explanation": "התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל",// explain why correct answer is correct
    //         },
    //         {
    //             "question": "שאלה שאלתית שיש לתשובות שלה אייקונים כי למה לא בעצם?",
    //             "answers": ["לטוס", "לעשות אוריגאמי", "לטייל", "להיות בבית", "לאהוב", "לכתוב"],
    //             "icons": [
    //                 "../assets/images/tillone/world.svg",
    //                 "../assets/images/tillone/paper-plane.svg",
    //                 "../assets/images/tillone/marker.svg",
    //                 "../assets/images/tillone/home.svg",
    //                 "../assets/images/tillone/heart.svg",
    //                 "../assets/images/tillone/document.svg",
    //             ],
    //             "correctAns": "ans1",// location in answers array (start from 0)
    //             "explanation": "התשובה הנכונה היא לעשות אורגאמי כמובן לא רואה אפשרות אחרת בכלל",// explain why correct answer is correct
    //         },
    //     ],
    // },
    // tillgram
    // "tillgram": {
    //     "icon": "../assets/images/homePage/tillgram.svg",
    //     "completed": false,
    //     "appContent":  [
    //         {
    //             "title": "כותרת לנושא",
    //             "icon": "../assets/images/tillgram/dog.jpg",
    //             "text": "היי אני טקסט שנלווה לתמונה והוא גם מאוד קשור אליה ועוזר לתאר אותה ואת הקשר לנושא",
    //             "src": ["../assets/images/tillgram/exemplePic.jpg", "../assets/images/tillgram/exemple2.jpg", "../assets/images/tillgram/exemple3.jpg"],
    //             "currentPic": 0, // dont tuch
    //             "notRead": true,
    //         },
    //         {
    //             "title": "כותרת לנושא",
    //             "icon": "../assets/images/tillgram/dog.jpg",
    //             "text": "היי אני טקסט שנלווה לתמונה והוא גם מאוד קשור אליה ועוזר לתאר אותה ואת הקשר לנושא",
    //             "src": ["../assets/images/tillgram/exemplePic.jpg", "../assets/images/tillgram/exemple2.jpg", "../assets/images/tillgram/exemple3.jpg"],
    //             "currentPic": 0, // dont tuch
    //             "notRead": true,
    //         },
    //     ],
    // },
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
            ["כלב", "חיה שנובחת"],
            ["פנדה", "דוב בצבעי שחור לבן"],
            ["אריה", "מלך החיות"],
            ["סוס", "חיה שדוהרת"],
            ["זאב", "חייה שמייללת"],
            ["דולפין", "יונק ימי"],
            ["דבורה", "חיה שמייצרת דבש"],
            ["נמלה", "חיה שידועה בחריצותה"],
            ["פיל", "היונק הגדול ביותר"],
            ["ארנב", "חיה שמקפצת"],
            ["פרפר", "חיה שיוצאת מזחל"],
            ["חתול", "חית מחמד שמיללת"],
            ["נחש", "חיה שזוחלת"],
            ["זברה", "חיה עם פסים"],
            ["ג'ירפה", "חיה עם צאוור גבוה"],
            ["קוף", "חיה שנתלת על עצים"],
            ["עכביש", "חיה עם 8 רגלים"],
            ["קרנף", "חיה עם קרן"],
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
                    question: `בחרו בשתי החיות שמייללות`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: ["../assets/images/tillsms/exemple4.jpg","../assets/images/tillsms/exemple5.jpg","../assets/images/tillsms/exemple6.jpg", "../assets/images/tillsms/exemple7.jpg", "../assets/images/tillsms/exemple8.jpg", "../assets/images/tillsms/exemple1.jpg"],// the legth will determine how many answers will apear
                    correctAns: [`ans2`, `ans6`] // the legth will determine how many answers are reqwiered
                },
                {
                    type: `manyChoices`,
                    question: `בחרו בתשובות שמתחלקות ב5`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12", "תשובה 13", "תשובה 14", "תשובה 15", "תשובה 16",],// the legth will determine how many answers will apear
                    correctAns: [`ans5`, `ans10`, `ans15`,] // the legth will determine how many answers are reqwiered
                },
                {
                    type: `manyChoices`,
                    question: `איזה מהחיות חיה בים?`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "דולפין", "פנדה", "כלב", "אריה", "זאב", "סוס",],// the legth will determine how many answers will apear
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
                    question: `בחרו בתשובות  הגדולות מ10`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9", "תשובה 10", "תשובה 11", "תשובה 12",],// the legth will determine how many answers will apear
                    correctAns: [`ans11`, `ans12`] // the legth will determine how many answers are reqwiered
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
                    question: `בחרו בתשובות המתחלקות ב3`,
                    // recomended: no more than 16 answers, 8 if the are longer than one word
                    answers: [ "תשובה 1", "תשובה 2", "תשובה 3", "תשובה 4", "תשובה 5", "תשובה 6", "תשובה 7", "תשובה 8", "תשובה 9",],// the legth will determine how many answers will apear
                    correctAns: [`ans3`, `ans6`, `ans9`] // the legth will determine how many answers are reqwiered
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
            "שירים": [
                {
                    "videoTitle": "shivers",
                    "src": "Il0S8BoucSA",
                    "info": "מידע על הסרטון",
                    "forceToWatch": FORCE,// force user to watch 
                },
                {
                    "videoTitle": "as it was",
                    "src": "H5v3kku4y6Q",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "cake by the ocean",
                    "src": "PAzH-YAlFYc",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
            ],
            "למידה": [
                {
                    "videoTitle": "how to study",
                    "src": "TjPFZaMe2yw",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "How to enter flow state",
                    "src": "0rIjFCNay2Q",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "How to manage your time",
                    "src": "iDbdXTMnOmE",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
            ],
            "מתכונים": [
                {
                    "videoTitle": "cookie",
                    "src": "rEdl2Uetpvo",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "pie",
                    "src": "SR4R7GHxU1w",
                    "info": "מידע על הסרטון",
                    "forceToWatch": DONT_FORCE, // dont force user to watch
                },
                {
                    "videoTitle": "Croissants",
                    "src": "djnNkLi_K6E",
                    "info": "מידע על הסרטון",
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