const letters = document.getElementById("letters")
const userinput = document.getElementById("userio")
const canvas = document.getElementById("canvas")
const newgame = document.getElementById("new-game")
const newgamebtn = document.getElementById("new-game-button")
let options = ["Abjure", "Future", "Picnic", "Agonistic", "Garland", "Protect", "Airline", "Gigantic", "Publish", "Bandit", "Goofy", "Quadrangle", "Banquet", "Government", "Recount", "Binoculars", "Grandnieces", "Redoubtable", "Biologist", "Handbook", "Reflection", "Blackboard", "Himself", "Reporter", "Board", "Indulge", "Ring", "Bookworm", "Inflatable", "Salesclerk", "Butterscotch", "Inimical", "Snapshot", "Camera", "Interim", "Shellfish", "Campus", "Invest", "Ship", "Catfish", "Jackpot", "Significance", "Carsick", "Kitchenette", "Sometimes", "Celebrate", "Law", "Sublime", "Celery", "Life", "Tabletop", "Citizen", "Lifeline", "Teamwork", "Coloring", "Love", "Tennis", "Compact", "Magnificent", "Timesaving", "Dark", "Malevolence", "Tree", "Damage", "Man", "Termination", "Dangerous", "Mascot", "Underestimate", "Decorum", "Marshmallow", "Vineyard", "Endorse", "Mine", "War", "Engender", "Moonwalk", "Way", "Erratic", "Near", "Wealth", "Envelope", "Nephogram", "Wednesday", "Etymology", "Newborn", "World", "Eyewitness", "Noisome", "Xerox", "Eulogy", "Owl", "You", "Fish", "Parenthesis", "Zestful", "Food", "Perpetrator","late","doll","blushing","mom","swift","count","boring","nerve","saw","slope","three","dad","sleep","move","upset","grain","queen","grip","ultra","upbeat","excuse","imaginary","science","earsplitting","park","soft","discussion","birds","bad","cheerful","manage","injure","suppose","cross","ordinary","borrow","equable","nail","ludicrous","false","careless","tramp","impossible","tawdry","toys","ubiquitous","meaty","fumbling","laughable","sick","telephone","drink","ski","pointless","sour","run","blood","pigs","approve","peck","pine","hate","inject","enormous","mysterious","splendid","ambitious","magnificent","amuse","skin","fog","many","tedious","available","disgusted","ask","hunt","swim","aftermath","quicksand","sloppy","miss","adhesive","curl","load","polish","juvenile","pedal","tray","bottle","cat","aromatic","playground","organic","amuck","level","chunky","peep","wretched","cattle","pathetic","fixed","gigantic","quiver","bell","mighty","night","governor","observation","applaud","female","crook","obsolete","hook","spark","treat","illfated","roof","unhealthy","tease","right","zoo","curve","mass","request","please","prevent","cats","rebel","explain","day","land","worm","slim","end","chickens","peel","educate","judge","tail","sister","mundane","volcano","rainy","intelligent","chance","ignore","unite","erratic","rhyme","dirt","stove","grade","prickly","pot","whisper","puzzling","flow","enjoy","average","xray","evasive","defective","bruise","imagine","mice","learned","volatile","ink","toe","quack","silky","quaint","pale","watch","big","snakes","stomach","dog","sigh","advice","jolly","shop","vacuous","children","innocent","bathe","water","multiply","unarmed","behave","testy","truthful","cup","depressed","collect","dispensable","bucket"]
let word = ""
const newword = () => {
    letters.classList.remove("hide");
    userinput.innerText = "";
    word = options[Math.floor(Math.random() * options.length)]
    word = word.toUpperCase()
    let displayItem = word.replace(/./g, '<span class="dashes">_</span>');
    userinput.innerHTML = displayItem;
}
const blocker = () => {
    let letterButtons = document.querySelectorAll(".letters2");
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newgame.classList.remove("hide");
};
const initial = () => {
    let win = 0;
    let count = 0;
    newgame.classList.add("hide")
    // letters.classList.add("hide")
    letters.innerHTML = ""
    newword()
    console.log(word)
    for (let i = 65; i < 91; i++) {
        let b = document.createElement("button")
        b.classList.add("letters2")
        b.innerText = String.fromCharCode(i)
        b.addEventListener("click", () => {
            let array_char = word.split("");
            let dashes = document.getElementsByClassName("dashes")
            if (array_char.includes(b.innerText)) {
                array_char.forEach((char, index) => {
                    if (char === b.innerText) {
                        dashes[index].innerText = char
                        win += 1
                        console.log(win)
                        if (win == array_char.length) {
                            result.innerHTML = `<h2 class="winner">You Win</h2><p>The word was <b>${word}</b></p></h2>`
                            blocker();
                        }
                    }
                }
                )
            }
            else{
                count+=1;
                drawMan(count);
                if(count==6){
                    result.innerHTML = `<h2 class="loser">You Lose </h2><p>The word was <strong>${word}</strong></p></h2>`
                    blocker();
                }
            }
            b.disabled=true;
        });
        letters.append(b)
    }
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let  {initialDrawing}= canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();

}
const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "brown";
    context.lineWidth = 3;
    //For drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.stroke();
    };
    const head = () => {
      context.beginPath();
      context.arc(70, 40, 10, 0, Math.PI * 2, true);
      context.stroke();
    };
    const body = () => {
      drawLine(70, 50, 70, 80);
    };
    const leftArm = () => {
      drawLine(70, 60, 50, 70);
    };
    const rightArm = () => {
      drawLine(70, 60, 90, 70);
    };
    const leftLeg = () => {
      drawLine(70, 80, 50, 100);
    };
    const rightLeg = () => {
      drawLine(70, 80, 90, 110);
    };
    const initialDrawing = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //bottom line
        drawLine(8, 130, 130, 130);
        //left line
        drawLine(10, 10, 10, 130);
        //top line
        drawLine(8, 10, 71, 10);
        //small top line
        drawLine(70, 10, 70, 30);
      };
      return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
}  
const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
      case 1:
        head();
        break;
      case 2:
        body();
        break;
      case 3:
        leftArm();
        break;
      case 4:
        rightArm();
        break;
      case 5:
        leftLeg();
        break;
      case 6:
        rightLeg();
        break;
      default:
        break;
    }
  };
newgamebtn.addEventListener("click", initial)
window.onload = initial


