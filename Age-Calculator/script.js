let dob = document.getElementById("dob");
let CalcBtn = document.getElementById("calcBtn");
let ClearBtn = document.getElementById("clearBtn");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();

CalcBtn.addEventListener("click", () => {
    
  const InputDate = new Date(dob.value);
  const BirthTime = InputDate.getTime();
  const CurrTime = today.getTime();

  const diffTime = CurrTime - BirthTime;

  console.log(BirthTime);
  console.log(CurrTime);
  console.log(diffTime);

  const Myyears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

  const Mymonths = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );

  const Mydays = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  console.log(Myyears);
  console.log(Mymonths);
  console.log(Mydays);

  day.innerText = Mydays;
  month.innerText = Mymonths;
  year.innerText = Myyears;
});

ClearBtn.addEventListener("click", () => {
  dob.value = "";
});
