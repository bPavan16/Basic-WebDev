let words = [
  { word: "Animal" },
  { word: "Apple" },
  { word: "Art" },
  { word: "Baseball" },
  { word: "Beach" },
  { word: "Bed" },
  { word: "Book" },
  { word: "Brother" },
  { word: "Business" },
  { word: "Camera" },
  { word: "Car" },
  { word: "Case" },
  { word: "Chair" },
  { word: "Child" },
  { word: "City" },
  { word: "Color" },
  { word: "Company" },
  { word: "Country" },
  { word: "Day" },
  { word: "Doctor" },
  { word: "Door" },
  { word: "Education" },
  { word: "Environment" },
  { word: "Event" },
  { word: "Fact" },
  { word: "Family" },
  { word: "Father" },
  { word: "Food" },
  { word: "Football" },
  { word: "Friend" },
  { word: "Game" },
  { word: "Government" },
  { word: "Group" },
  { word: "Hand" },
  { word: "Home" },
  { word: "Hospital" },
  { word: "House" },
  { word: "Idea" },
  { word: "Industry" },
  { word: "Information" },
  { word: "Internet" },
  { word: "Job" },
  { word: "Language" },
  { word: "Law" },
  { word: "Life" },
  { word: "Light" },
  { word: "Love" },
  { word: "Man" },
  { word: "Market" },
  { word: "Medicine" },
  { word: "Moon" },
  { word: "Mother" },
  { word: "Mountain" },
  { word: "Movie" },
  { word: "Music" },
  { word: "Name" },
  { word: "Nature" },
  { word: "Newspaper" },
  { word: "Ocean" },
  { word: "Part" },
  { word: "Peace" },
  { word: "People" },
  { word: "Picture" },
  { word: "Place" },
  { word: "Plant" },
  { word: "Player" },
  { word: "Point" },
  { word: "Power" },
  { word: "Price" },
  { word: "Problem" },
  { word: "Product" },
  { word: "Program" },
  { word: "Project" },
  { word: "Question" },
  { word: "Room" },
  { word: "Science" },
  { word: "School" },
  { word: "Sister" },
  { word: "Solution" },
  { word: "Song" },
  { word: "Sport" },
  { word: "Star" },
  { word: "Student" },
  { word: "Sunset" },
  { word: "System" },
  { word: "Table" },
  { word: "Teacher" },
  { word: "Technology" },
  { word: "Television" },
  { word: "Tennis" },
  { word: "Time" },
  { word: "Tree" },
  { word: "Water" },
  { word: "Week" },
  { word: "Window" },
  { word: "Woman" },
  { word: "Work" },
  { word: "World" },
  { word: "Year" },
  { word: "Zoo" },
  { word: "Beautiful" },
  { word: "Brave" },
  { word: "Bright" },
  { word: "Busy" },
  { word: "Clean" },
  { word: "Cold" },
  { word: "Cool" },
  { word: "Dark" },
  { word: "Easy" },
  { word: "Fast" },
  { word: "Fat" },
  { word: "Few" },
  { word: "Fine" },
  { word: "Free" },
  { word: "Full" },
  { word: "Funny" },
  { word: "Good" },
  { word: "Great" },
  { word: "Happy" },
  { word: "Hard" },
  { word: "Heavy" },
  { word: "High" },
  { word: "Hot" },
  { word: "Huge" },
  { word: "Important" },
  { word: "Kind" },
  { word: "Large" },
  { word: "Late" },
  { word: "Light" },
  { word: "Little" },
  { word: "Long" },
  { word: "Loud" },
  { word: "Low" },
  { word: "New" },
  { word: "Nice" },
  { word: "Old" },
  { word: "Open" },
  { word: "Poor" },
  { word: "Quick" },
  { word: "Quiet" },
  { word: "Rich" },
  { word: "Sad" },
  { word: "Short" },
  { word: "Slow" },
  { word: "Small" },
  { word: "Strong" },
  { word: "Tall" },
  { word: "Warm" },
  { word: "Weak" },
  { word: "Young" },
];

let CorrectWord;
let maxTime;
let j;
let score = 0;

let wordBox = document.querySelector(".word");
let refresh = document.querySelector(".refresh");
let check = document.querySelector(".check");
let inputField = document.querySelector("input");
let res = document.querySelector(".res");
let scoreRest = document.querySelector(".scoreRest");
let Status = document.querySelector(".Status");
let time = document.querySelector(".t");
let t;

function initTimer() {
  

}

const initGame = () => {
  Status.classList.remove("yes");
  Status.classList.remove("no");
  Status.innerHTML = "Guess the above word";
  t = 10;
  initTimer();
  let RandomObj = words[Math.floor(Math.random() * words.length)];
  let WordArray = RandomObj.word.split("");
  // console.log(WordArray)

  for (let i = 0; i < WordArray.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    let temp = WordArray[i];
    WordArray[i] = WordArray[j];
    WordArray[j] = temp;
  }

  let Guess = WordArray.join("");

  CorrectWord = RandomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", CorrectWord.length);
  wordBox.innerText = Guess;

  //
  console.log("Guess the word :  ");
  console.log(CorrectWord);
  console.log(Guess);
  console.log();

  //
};

const checkWord = () => {
  let UserWord = inputField.value.toLowerCase();
  if (UserWord == "") {
    // return alert("Please type a word in the box");
  } else if (UserWord == CorrectWord) {
    score += 1;
    Status.classList.add("yes");
    Status.innerText = "Correct";
    res.innerText = score;
    setTimeout(() => {
      initGame();
    }, 2000);
    // return alert("Correct");
  } else if (UserWord != CorrectWord) {
    Status.innerText = "Wrong";
    Status.classList.add("no");
    inputField.value = "";
    setTimeout(() => {
      Status.innerHTML = "TRY AGAIN";
    }, 1000);
    setTimeout(() => {
      Status.classList.remove("no");
      Status.innerHTML = "Guess the above word";
    }, 1000);

    // initGame();
    // return alert("Wrong");
  }
};

initGame();

refresh.addEventListener("click", initGame);
check.addEventListener("click", checkWord);

scoreRest.addEventListener("click", function () {
  score = 0;
  res.innerText = score;
  initGame();
});
