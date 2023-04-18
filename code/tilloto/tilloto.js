let arrTillotoData;
let arrTillotoTerm = [];
let arrTillotoInfo = [];
let arrInfoCurrentNum = [];
let nInfoCurrentNum;
let bTillotoVisited;
const BINGO_SQUERS = 16;

let isBingo = [[false, false, false, false],
[false, false, false, false],
[false, false, false, false],
[false, false, false, false],]

/* tilloto
--------------------------------------------------------------
Description: start tillder app*/
var tilloto = () => {
    strCurrentApp = "tilloto";
    document.querySelector(`.homePage`).classList.add(`hidden`);
    document.querySelector(`.tilloto`).classList.remove(`hidden`);
    document.querySelector(`#backToHomePage`).classList.remove(`hidden`);
    if(!bTillotoVisited){
      bTillotoVisited = true;
      document.querySelector(".tillotoRandomTermGemerator").addEventListener("click", generateRandomBingoInfo);
      arrTillotoData = shuffle(DATA.tilloto.appContent.slice(0, 16));
      createBingoBord();
    }
}
  
const createBingoBord = () => {
    arrTillotoData.forEach(array => {
        arrTillotoTerm.push(array[0]);
        arrTillotoInfo.push(array[1]);
    });

    let squre;
    let row = 0;
    let column = 0;
    arrTillotoTerm.forEach((phrase, index) => {
      squre = El("div", {id: `${row}${column}`,classes: ["bingoSqure", `infoNum${index}`], listeners: {click: clickBingoSqure}}, phrase);
      document.querySelector(".tillotoBingoContainer").append(squre);
      column++;
      if(column === 4) {
        row++;
        column = 0;
      }
    });
}
  
const clickBingoSqure = (event) => {
    document.querySelector(".tillotoBingoContainer").style.pointerEvents = "none";
    let termNum = Number(event.currentTarget.classList[1].slice(7));
    if (termNum === nInfoCurrentNum) {
        arrInfoCurrentNum.push(nInfoCurrentNum);
        event.currentTarget.style.backgroundColor = "var(--tillotoMainLight)";
        document.querySelector(".tillotoInfoContainer").innerHTML = `מעולים! הגרילו שוב כדי להמשיך`;
        event.currentTarget.removeEventListener("click", clickBingoSqure);
        let placement = event.currentTarget.id;
        isBingo[placement.slice(0,1)][placement.slice(1)] = true;
        checkForBingo();
    } else {
        event.currentTarget.classList.add("flashRed");
        document.querySelector(".tillotoInfoContainer").innerHTML = `זה לא המושג המתאים! נסו להגריל שוב!`;
        setTimeout(() => {
            document.querySelector(".flashRed").classList.remove("flashRed");
        }, 2000);
    };
}

const generateRandomBingoInfo = () => {
    let bNumInArray = true;
    while(bNumInArray) {
        bNumInArray = false
        nInfoCurrentNum = Math.floor(Math.random() * (15 - 0) + 1);
        arrInfoCurrentNum.forEach(num => {
            if(nInfoCurrentNum === num) {
                bNumInArray = true;
            }
        })
    }
    document.querySelector(".tillotoBingoContainer").style.pointerEvents = "all";
    document.querySelector(".tillotoInfoContainer").innerHTML = `הסבר : ${arrTillotoInfo[nInfoCurrentNum]}`;
}
  
const checkForBingo = () => {
    isWinColum();
    isWinRow();
    isWinDiagonal1();
    isWinDiagonal2();
}
  
const wingame = () => {
    document.querySelector(".tillotoRandomTermGemerator").removeEventListener("click", generateRandomBingoInfo);
    document.querySelector(".tillotoInfoContainer").innerHTML = `בינגו! עם המזל שלכם מי צריך לוטו??`;
    DATA.tilloto.completed = true;
    winConfetti();
}
  
const winConfetti = () => {
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 500); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };
  
    //  for stopping the confetti 
    const stop = () => {
        setTimeout(function() {
            confetti.stop()
            document.querySelector(".tillotoInfoContainer").innerHTML = `כל הכבוד! זכיתם בלוטו ב${calcPercentageWin(1,1)} אחוזים`;
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };
    // after this here we are calling both the function so it works
    start();
    stop();
}
  
const isWinRow = () => {
    // check for row
    let isWinRow = true;
    for (let colum = 0; colum < 4; colum++) {
      for (let row = 0; row < 4; row++) {
        if(!isBingo[row][colum]) {
          isWinRow = false;
        }
      }
      if(isWinRow) {
        wingame();
        console.log("ניצחון של טור");
      } else {
        isWinRow = true;
      }
    }
}
  
const isWinColum = () => {
    // check for colum
    let isWinColum = true;
    for (let row = 0; row < 4; row++) {
      for (let colum = 0; colum < 4; colum++) {
        if(!isBingo[row][colum]) {
          isWinColum = false;
        }
      }
      if(isWinColum) {
        wingame();
        console.log("ניצחון של שורה");
      } else {
        isWinColum = true;
      }
    }
}
  
const isWinDiagonal1 = () => {
    // check for diagonal1
    let isWinDiagonal1 = true;
    for (let colum = 0; colum < 4; colum++) {
      if(!isBingo[colum][colum]) {
        isWinDiagonal1 = false;
      }
    }
    if(isWinDiagonal1) {
      wingame();
      console.log("ניצחון של אלכסון");
    } else {
      isWinDiagonal1 = true;
    }
}
  
const isWinDiagonal2 = () => {
    // check for diagonal2
    let isWinDiagonal2 = true;
    for (let colum = 0; colum < 4; colum++) {
      if(!isBingo[colum][3 - colum]) {
        isWinDiagonal2 = false;
      }
    }
    if(isWinDiagonal2) {
      wingame();
      console.log("2ניצחון של אלכסון");
    } else {
      isWinDiagonal2 = true;
    }
}
  
  
  