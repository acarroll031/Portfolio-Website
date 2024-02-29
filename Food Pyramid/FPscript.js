////// Increase Decrease Numbers ///////

//Array to store nums for each level
var counterStore = [0,0,0,0,0,0];

function increase(pos, id, pyramidlevel){
    counterStore[pos]++;
    document.getElementById(id).innerText = counterStore[pos];
}

function decrease(pos, id){
    counterStore[pos]--;
    if(counterStore[pos] < 0) counterStore[pos] = 0;
    document.getElementById(id).innerText = counterStore[pos];
}

////// Change colour of numbers depending on recommendations //////

//2 Arrays to store recommended values for adults and children
var recommendedAdult = [0,0,2,3,4,6];
var recommendedChild = [0,0,2,3,3,4];

function checkRecommended(pos, id){

    if(fourplus){ //If >4 use adult recommendations
        var rec = recommendedAdult[pos];
    }
    else{ //If <4 use child recommendations
        var rec = recommendedChild[pos];
    }
    var count = document.getElementById(id).innerText;

    if(id == 'l1') return false; //If in top level of pyramid, ignore

    if(count == rec){ //If num items same as recommended, border green
        document.getElementById(id).style.borderColor = 'green';
    }
    else if(count == rec+1 || count == rec-1){ //If num items +-1 recommended, border yellow
        document.getElementById(id).style.borderColor = 'yellow';
    }
    else{ //If num items >+-1 recommended, border red
        document.getElementById(id).style.borderColor = 'red';
    }

}

////// Set the age from the dropdown //////

//Boolean to keep track of if 4+ is selected
var fourplus = true;

function setAge(){
    var select = document.querySelector('#age');
    var ageRange = select.value;

    if(ageRange == 'onetofour'){
        fourplus = false;
    }
    else {
        fourplus = true;
    }
}

////// Check if date inputted is todays date //////

//Create a date object for todays date
const todaysDate = new Date();
//Format object to a string that is the same format as the input string from the date input field
const formattedTodaysDate = todaysDate.toISOString().substring(0,10);

function setDate(){
    var select = document.querySelector('#date');
    var date = select.value;

    if(date != formattedTodaysDate){
        alert('Not Todays date!');
    }
}