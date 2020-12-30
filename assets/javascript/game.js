
  function update() {
    document.querySelector("#steps").innerHTML = "Steps: "+ misses ;
    document.querySelector("#guessed").innerHTML = guessed;
    document.querySelector("#word").innerHTML = blank;
  }
  function win() {
            update();
            if (blank === wordMatch){
            alert("Gratz!  You Win!\n\n"+word.toUpperCase());
            youWin = true;
            }
  }
  function wrongType() {
    document.querySelector("#billboard").innerHTML = "You must pick a letter....";

  }
  function already() {
    document.querySelector("#billboard").innerHTML = "Already used, go again....";
  }
  function bad() {
    document.querySelector("#billboard").innerHTML = "Bad choice.  You are one step closer.  Try Again.";
  }
  function goodbye() {
    document.querySelector("#billboard").innerHTML = "Goodbye to you";
    goodbyeImg();
    setTimeout(restart, 8000);
  }
  function afraid() {
    document.querySelector("#billboard").innerHTML = "Don't let them see you're afraid kid!  Pick a letter..." ;
  }

  function goodbyeImg() {
    document.querySelector("#header").innerHTML = ('<div class="mx-0 px-0 embed-responsive embed-responsive-4by3">'
   + '\n<iframe class="embed-responsive-item" src="assets/images/goodbye.mp4" allowfullscreen></iframe>'
   +'\n</div>')
  }
  function innocentImg() {
    document.querySelector("#header").innerHTML = ('<div class="embed-responsive embed-responsive-4by3">'
    + '\n<iframe class="embed-responsive-item" src="assets/images/innocent.mp4" allowfullscreen></iframe>'
    +'\n</div>')
    setTimeout(loadHeader, 5000);
  }
  function afraidImg() {
    document.querySelector("#header").innerHTML = ('<div class="embed-responsive embed-responsive-4by3">'
    + '\n<iframe class="embed-responsive-item" src="assets/images/afraid.mp4" allowfullscreen></iframe>'
    +'\n</div>')
    setTimeout(loadHeader, 5000);
  }
  function riotImg() {
    document.querySelector("#header").innerHTML = ('<div class="mx-0 px-0 embed-responsive embed-responsive-4by3">'
    + '\n<iframe class="embed-responsive-item" src="assets/images/riot.mp4" allowfullscreen></iframe>'
    +'\n</div>')
    setTimeout(loadHeader, 3000);
}
function winImg() {
  document.querySelector("#header").innerHTML = ('<div class="embed-responsive embed-responsive-4by3">'
  + '\n<iframe class="embed-responsive-item" src="assets/images/win.mp4" allowfullscreen></iframe>'
  +'\n</div>')
  setTimeout(restart, 8000);
}
  function loadHeader() {

    document.querySelector("#header").innerHTML = '<img src="assets/images/top.jpg" class="card-img-top w=100" alt="The Brutal Dirty Dozen Hangman">';
  }
  function start() {
    selected = "";
    letter = "";
    misses = 6;
    guessed = [];
    wordMatch = "";
    blank = "";
    youWin = false;
    word = randy[Math.floor(Math.random() * randy.length)].toLowerCase();
    for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat(" "+ x );
    }
  }

  function restart() {
    start();
    document.querySelector("#outer").innerHTML = '  <div class="container mt-1 bg-danger " id="top">'
    +'<div id="header" class="mx-0 px-0">'
    +  '<img src="assets/images/top.jpg" class="card-img-top w-80 mx-0 +px-0" alt="The Brutal Dirty Dozen Hangman">'
    +'</div>'
  +'</div>'
  +'<div class="row" id="below">'
    +'<div class="col-md-1" id="left">'
    +'</div>'
    +'<div id="guessedImg" class="col-md-10 row mx-auto">'
      +'<div class="row  row mx-auto">'
        +'<div class="card h-85  mx-auto" style="width: 18rem;">'
          +'<img src="assets/images/guessed.jpg" class="card-img-top" alt="Guessed">'
          +'<div class="card-body">'
            +'<h4 class="card-text" id="guessed">Already guessed</h4>'
          +'</div>'
        +'</div>'
        +'<table class="bg-white font-weight-bold m-auto" style="cursor:pointer">'
        +'<tr>'
          +'<td id="tdA" onclick="content(this)">A</td>'
          +'<td id="tdB" onclick="content(this)">B</td>'
        +'</tr>'
        +'<tr>'
          +'<td id="tdC" onclick="content(this)">C</td>'
          +'<td id="tdD" onclick="content(this)">D</td>'
        +'</tr>'
        +'<tr>'
          +'<td id="tdE" onclick="content(this)">E</td>'
          +'<td id="tdF" onclick="content(this)">F</td>'
        +'</tr>'
        +'<tr>'
          +'<td id="tdG" onclick="content(this)">G</td>'
          +'<td id="tdH" onclick="content(this)">H</td>'
        +'</tr>'
        +'<tr>'
          +'<td id="tdI" onclick="content(this)">I</td>'
          +'<td id="tdJ" onclick="content(this)">J</td>'
        +'</tr>'
        +'<tr>'
          +'<td id="tdK" onclick="content(this)">K</td>'
          +'<td id="tdL" onclick="content(this)">L</td>'
        +'</tr>'
        +'<tr>'
          +'<td id="tdM" onclick="content(this)">M</td>'
          +'<td id="tdN" onclick="content(this)">N</td>'
        +'</tr>'
      +'</table>'
        +'<div id="wordImg" class="card h-85  mx-auto" style="width: 18rem;">'
          +'<img src="assets/images/word.jpg" class="card-img-top" alt="The WORD">'
          +'<div class="card-body">'
            +'<h4 class="card-text" id="word">The WORD</h4>'
          +'</div>'
        +'</div>'
        +'<table class="bg-white font-weight-bold m-auto" style="cursor:pointer">'
          +'<tr>'
            +'<td id="tdO" onclick="content(this)">O</td>'
            +'<td id="tdP" onclick="content(this)">P</td>'
          +'</tr>'
          +'<tr>'
            +'<td id="tdQ" onclick="content(this)">Q</td>'
            +'<td id="tdR" onclick="content(this)">R</td>'
          +'</tr>'
          +'<tr>'
            +'<td id="tdS" onclick="content(this)">S</td>'
            +'<td id="tdT" onclick="content(this)">T</td>'
          +'</tr>'
          +'<tr>'
            +'<td id="tdU" onclick="content(this)">U</td>'
            +'<td id="tdV" onclick="content(this)">V</td>'
          +'</tr>'
          +'<tr>'
            +'<td id="tdW" onclick="content(this)">W</td>'
            +'<td id="tdX" onclick="content(this)">X</td>'
          +'</tr>'
          +'<tr>'
            +'<td id="tdY" onclick="content(this)">Y</td>'
            +'<td id="tdZ" onclick="content(this)">Z</td>'
          +'</tr>'
        +'</table>'
        +'<div class="card h-85 mx-auto" style="width: 18rem;">'
          +'<img src="assets/images/steps.jpg" class="card-img-top" alt="Missed">'
          +'<div class="card-body">'
            +'<h4 class="card-text" id="steps">Steps remaining</h4>'
          +'</div>'
        +'</div>'
        +'<div class="col-md-12  text-center  bg-white">'
          +'<h3 class="" id="billboard">'+"Keep telling them you're innocent!  Pick a letter...</h3>"
        +'</div>'
        +'<p class="col-md-12 text-center bg-white "> &copyMMXX Gonkulishus</p>'
      +'</div>'
      +'<div class="col-md-1"></div>'
    +'</div>'
    +'<div class="col-md-1" id="right">'
    +'</div>'
  +'</div>'
  +'</div>'
  +'</div>'
  }

  function content(letter){
    letter.style.backgroundColor="red";
    good = false;
    console.log(letter.innerText);
    selected = letter.innerText.toLowerCase();
    console.log(selected);
    logic()
  }

  function logic(){
    document.querySelector("#td"+selected.toUpperCase()).outerHTML = '<td class="bg-danger">'+selected.toUpperCase()+'</td>'
    if (selected >= "a" && selected <= "z"){
      if (guessed.indexOf(selected) === -1){
      guessed.push(selected);
      guessed = guessed.sort();
      console.log("guessed  " + guessed);
        if (wordMatch.indexOf(selected)!=-1){
          good = true;
              }else {
                  misses--;
                  update();
                  if( misses === 5){
                    riotImg();
                  } if( misses === 4){
                    innocentImg();
                      } if( misses === 3){
                        riotImg();
                        } if( misses === 2){
                          afraidImg();
                          } if( misses === 1){
                            riotImg();
                            } if( misses === 0){
                              goodbye();
                            } else {
                                update();
                                bad(); }}
            }else{already();}
    } else { wrongType();}

  if (good != false){
      afraid();
  for (x=0;x < wordMatch.length;x++){
    if (selected === wordMatch.charAt(x)){
        if (x === blank.length){
            (blank = blank.slice(0, blank.length ) + selected);
            }
            else {blank = blank.slice(0, x) + selected + blank.slice(x+1);
            }
        }
        win();
        if (youWin === true){
        break;
        }
    }
    if (youWin === true){
      winImg();
    }}
  }



let randy = ["Fizzling","Quiz","Quinsy","Jives","Babbling","Bopped","Swizz","Shagginess","Zigzagging","Buzzed","Klutz","Ivory","Banjo","Azure","Blizzard","Baffles","Buffoon","Daiquiri","Queue","Groggy","Vortex","Voodoo","Schnapps","Schizophrenia","Zephyr","Spritz","Thriftless","Thumbscrew","Squawk","Voyeurism","Vaporize","Zodiac","Rhubarb","Transgress","Rickshaw","Snazzy","Quixotic","Knapsack","Jinx","Affix"];



/*provide a guess the letter prompt with a list of already selected letters*/

let selected = "";
let letter = "";
let misses = 6;
let guessed = [];
let wordMatch = "";
let blank = "";
let youWin = false;
let word = randy[Math.floor(Math.random() * randy.length)].toLowerCase();
let good = false;

    for (x of word){
    blank = blank.concat(" _");
    wordMatch = wordMatch.concat(" "+ x );
    }

window.addEventListener('keydown', (KeyboardEvent) =>
    { console.log(KeyboardEvent.key);
        let keyIn = (KeyboardEvent.key);
        good = false;
        selected = keyIn.toLowerCase();
        logic()
});

