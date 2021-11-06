var initial = 100;
console.log(initial);

var edu, worth, caste, skills, age, reputation;

function education(value){
    
    if(value=="bachelor"){
        edu = 1.5;
    }
    else if(value=="college"){
        edu = 1.2;
    }
    else if(value=="high_school"){
        edu = 1.05;
    }
    else if(value=="middle_school"){
        edu = 0.9;
    }
    console.log(edu);
}

function familyNetWorth(value){

    if(value=="upper_class"){
        worth = 2;
    }
    else if(value=="middle_class"){
        worth = 1.5;
    }
    else if(value="lower_class"){
        worth = 1.2;
    }
    console.log(worth);
}

function solCaste(value)
{
    switch(value){
        case "B":
            caste = 100;
            break;
        case "K":
            caste = 50;
            break;
        case "V":
            caste = 20;
            break;
        case "S":
            caste = 10;
            break;
        case "-V":
            caste = -50;
            break;
    }
    console.log(caste);
}

// function skill(value){
    
//     if(value=="musician" && value=="singer"){
//         skills= 10;
//     } else if(value=="cooker"){
//         skills = 20;
//     }else if(value=="good_person"){
//         skills = 15;
//     }

//     var sk = document.getElementsByTagName('Skills');
//     for (var i = 0; i < sk.length; i++)
//     {
//         if (sk[i].checked==true) {
//             skills += parseFloat(sk[i].value);
//         }
//     }
//     console.log(skills);
// }
 

function Age(value){
    
    switch(value){
        case "young":
            age = 1.5;
            break;
        case "adult":
            age = 1.2;
            break;
        case "elder":
            age = 0.95;
            break;
    }
    console.log(age);
}
var result;
function calcResult(){

    result = (initial*edu*worth+caste)*age;
    document.getElementById("submit").innerHTML = result + '$';
}


const educ = document.getElementById("educat");
const worth = document.getElementById("networth");
const caste = document.getElementById("caste");
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("aging");
const reputation = document.getElementsByClassName("reput");

const startingBid = document.getElementById("startingbid"); // element with id startingbid

const getCheckboxValuesFilterReduce = (html_collection, price) => { // create a function that accepts your HTMLCollection of elements and the current price
    let list = Array.from(html_collection).filter(filteration) // this method turn your HTMLCollection into array
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}

const getRadioValue = (node_list, price) => {
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

const calculate = (name, price,letter) => {
    while(name!=empty && price!=empty){
        price = ((Number(price)*educ.value*worth.value)+caste.value+skills.value)*age.value;
    }
    document.getElementById('result').innerHTML = "The price for your groom" +name+" is"+ price+ ". Your love letter is" + letter;
}

//there are no loops, as i didn't include skills and reputation calculation 