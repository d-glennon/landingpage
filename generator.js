const luckyInstructions = {
    // 6 days as Sunday is off
    day:  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ],
    // a lucky colour you must wear the day of that lottery
    color: ["red", "green", "blue", "yellow", "black", "white", "pink", "orange", "navy", "purple", "grey"]
};

// 7 lotto numbers 1 to 50 empty array
const numbers = [];

//a function that creates an array of 7 numbers between 1 and 50 that don't repeat
const lottoNumberer = () =>{
for (let i = 0; i < 7;){
    let tempNum = Math.floor((Math.random() * 49) + 1);
    if (!numbers.includes(tempNum)) {
        numbers.push(tempNum);
        i++;
        }
    };
};  

//execution of number selector and storage in numbers array
lottoNumberer();
luckyInstructions.lottoNumbers = numbers;

//set up array with lotto numbers to later fill with colour and day
let todaysChoice = [numbers];

//select both a random day and colour by creating this function
const arrayRandomizer = arr => {
    return Math.floor(Math.random() * arr.length)
};

//push the colour and the day into the todaysChoice array
const whichDayIndex = arrayRandomizer(luckyInstructions.day);
const whichColorIndex = arrayRandomizer(luckyInstructions.color);
todaysChoice.push(luckyInstructions.day[whichDayIndex], luckyInstructions.color[whichColorIndex]);

//hmtl interactivity
document.addEventListener("DOMContentLoaded", function() {
    const runButtonDiv = document.getElementById("run-button");
    const resultsDiv = document.getElementById("results");

    runButtonDiv.addEventListener("click", function() {
        //JavaScript function here.
        const result = myFunctionToRunOnce();

        // Display the result on the webpage.
        resultsDiv.innerHTML = result;
    });

    //JavaScript function to run once.
    function myFunctionToRunOnce() {
        return `If you choose to do the lottery, then do it <strong>${todaysChoice[1]}</strong>.</br>Here are your numbers: <strong>${todaysChoice[0]}</strong>.</br>Don't forget to wear something <strong>${todaysChoice[2]}!</strong></br>Good Luck!!!`;
    }
});