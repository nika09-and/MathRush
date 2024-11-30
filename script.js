const userResult = document.getElementById("userWindow");
const number1 = document.getElementById("n1");
const number2 = document.getElementById("n2");
const number3 = document.getElementById("n3");
const number4 = document.getElementById("n4");
const number5 = document.getElementById("n5");
const number6 = document.getElementById("n6");
const number7 = document.getElementById("n7");
const number8 = document.getElementById("n8");
const number9 = document.getElementById("n9");
const number0 = document.getElementById("n0");
const clear = document.getElementById("clear");
const firstNumber = document.getElementById("first");
const secondNumber = document.getElementById("second");
const operation = document.getElementById("operation");
const backSpace = document.getElementById("backSpace")
const bsubmit = document.getElementById("submit")
const submit = document.getElementById("submit");
const score = document.getElementById("Uscore");
const start = document.getElementById("startButton");
const rulesB = document.getElementById("rulesButton");
const backMB = document.getElementById("backMButton");
const rStartB = document.getElementById("rStartButton");
const settingsB = document.getElementById("settingsButton");
const themesB = document.getElementById("themesButton");
const greenB = document.getElementById("greenButton");
const blueB = document.getElementById("blueButton");
const themesToSettingsB = document.getElementById("themesToSettingsButton");
const settingsToMainB = document.getElementById("settingsToMainButton");
const purpleB = document.getElementById("purpleButton");
const pauseB = document.getElementById("pauseButton");


const shadow1 = document.getElementById("bShadow1")
const shadow2 = document.getElementById("bShadow2")
const shadow3 = document.getElementById("bShadow3")
const shadow4 = document.getElementById("bShadow4")
const shadow5 = document.getElementById("bShadow5")
const shadow6 = document.getElementById("bShadow6")
const shadow7 = document.getElementById("bShadow7")
const shadow8 = document.getElementById("bShadow8")
const shadow9 = document.getElementById("bShadow9")
const shadow0 = document.getElementById("bShadow0")
const shadowC = document.getElementById("clearShadow")
const shadowS = document.getElementById("submitShadow")
const shadowB = document.getElementById("backShadow")
const shadowSu = document.getElementById("submitShadow")
const shadowST = document.getElementById("startShadow");
const shadowR = document.getElementById("rulesShadow");
const shadowMB = document.getElementById("backMShadow");
const shadowRS = document.getElementById("rStartShadow");
const shadowSE = document.getElementById("settingsShadow");
const shadowT = document.getElementById("themesShadow");
const shadowG = document.getElementById("greenShadow");
const shadowBL = document.getElementById("blueShadow");
const shadowTTS = document.getElementById("themesToSettingsShadow");
const shadowSTM = document.getElementById("settingsToMainShadow");
const shadowPU = document.getElementById("purpleShadow");
const shadowPau = document.getElementById("bShadow");


const sound = new Audio('sounds/buttons.mp3');
const soundC = new Audio('sounds/correct.mp3');
const soundW = new Audio('sounds/wrong.mp3');
const conatainer = document.getElementById("container");
const mainMenu = document.getElementById("mainMenu");
const rulesMenu = document.getElementById("rulesMenu");
const settingsMenu = document.getElementById("settingsMenu");
const themesMenu = document.getElementById("themesMenu");
const pad = document.getElementById("pad");

let index = -1


number1.onclick = () => click(number1, shadow1, "1");
number2.onclick = () => click(number2, shadow2, "2");
number3.onclick = () => click(number3, shadow3, "3");
number4.onclick = () => click(number4, shadow4, "4");
number5.onclick = () => click(number5, shadow5, "5");
number6.onclick = () => click(number6, shadow6, "6");
number7.onclick = () => click(number7, shadow7, "7");
number8.onclick = () => click(number8, shadow8, "8");
number9.onclick = () => click(number9, shadow9, "9");
number0.onclick = () => click(number0, shadow0, "0");
pauseB.onclick = () => click(pauseB, shadowPau, "Pa");
start.onclick = () => click(start, shadowST, "S");
clear.onclick = () => click(clear, shadowC, "C");
rulesB.onclick = () => click(rulesB, shadowR, "R")
backMB.onclick = () => click(backMB, shadowMB, "O") 
rStartB.onclick = () => click(rStartB, shadowRS, "S") 
backSpace.onclick = () => click(backSpace, shadowB, "B");
settingsB.onclick = () => click(settingsB, shadowSE, "SE");
themesB.onclick = () => click(themesB, shadowT, "T");
greenB.onclick = () => click(greenB, shadowG, "G");
blueB.onclick = () => click(blueB, shadowBL, "BL");
purpleB.onclick = () => click(purpleB, shadowPU, "PU");
themesToSettingsB.onclick = () => click(themesToSettingsB, shadowTTS, "TTS");
settingsToMainB.onclick = () => click(settingsToMainB, shadowSTM, "STM");
submit.onclick = () => submitFunction(submit, submitShadow);


document.addEventListener('keydown', function(event) {
    if (event.key === "1") {
        click(number1, shadow1, "1");
    }
    if (event.key === "2") {     
        click(number2, shadow2, "2");
    }
    if (event.key === "3") {
        click(number3, shadow3, "3");
    }
    if (event.key === "4") {
        click(number4, shadow4, "4");
    }
    if (event.key === "5") {
        click(number5, shadow5, "5");
    }
    if (event.key === "6") {
        click(number6, shadow6, "6");
    }
    if (event.key === "7") {
        click(number7, shadow7, "7");
    }
    if (event.key === "8") {
        click(number8, shadow8, "8");
    }
    if (event.key === "9") {
        click(number9, shadow9, "9");
    }
    if (event.key === "0") {
        click(number0, shadow0, "0");
    }
    if (event.key === "Backspace") {
        click(backSpace, shadowB, "B");
    }
    if (event.key === "p") {
        click(pauseB, shadowPau, "Pa");
    }
    if (event.key === "Enter") {

        if(conatainer.style.display === "block"){
            submitFunction(submit, submitShadow);
        }
        else{
            switch(index){
                case 0: {
                    if(mainMenu.style.display === "block"){
                        click(start, shadowST, "S");
                        index = -1;
                    }
                    if(settingsMenu.style.display === "block"){
                        click(themesB, shadowT, "T");
                        index = -1;
                    }
                    break;
                }
                case 1: {
                    if(mainMenu.style.display === "block"){
                        click(rulesB, shadowR, "R");
                        index = -1;
                    }
                    if(settingsMenu.style.display === "block"){
                        click(settingsToMainB, shadowSTM, "STM");
                        index = -1;
                    }
                    break;
                }
                case 2: {
                    click(settingsB, shadowSE, "SE");
                    index = -1;
                    break;
                }
            }
        }
    }
    if (event.key === " ") {
        click(clear, shadowC, "C");
    }
});
//===============functions================================

//===============click function================================

function click(number, shadow, value){
    sound.pause();
    sound.currentTime = 0;
    sound.play();

    start.style.backgroundColor = "#fff";
    rulesB.style.backgroundColor = "#fff";
    settingsB.style.backgroundColor = "#fff";
    themesB.style.backgroundColor = "#fff";
    settingsToMainB.style.backgroundColor = "#fff";
    index = -1;


    if(value == "C" ){
        userResult.value = "";

        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "139px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "140px";
        }, 300);
        return;
    }
    else if(value == "B"){
        if (userResult.value.length > 0) {
            userResult.value = userResult.value.slice(0, -1);
        }
    }

    else if(value == "O"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "197px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "200px";
            mainMenu.style.display = "block"; 
            rulesMenu.style.display = "none";
        }, 300);
        return;
    }

    else if(value == "R"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "197px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "200px";
            mainMenu.style.display = "none"; 
            rulesMenu.style.display = "block";
        }, 300);
        return;
    }

    else if(value == "S"){

        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "197px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "200px";
            mainMenu.style.display = "none"; 
            rulesMenu.style.display = "none"; 
            conatainer.style.display = "block";
        }, 300);
        return;
    }

    else if(value == "T"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "292px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "300px";
            settingsMenu.style.display = "none"; 
            themesMenu.style.display = "block"; 
        }, 300);
        return;
    }

    else if(value == "SE"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "197px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "200px";
            mainMenu.style.display = "none"; 
            settingsMenu.style.display = "block";
        }, 300);
        return;
    }

    else if(value == "G"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "292px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "300px";
            pad.style.backgroundColor = "#aeffda";
            rulesMenu.style.backgroundColor = "#aeffda";
            mainMenu.style.backgroundColor = "#aeffda";
            themesMenu.style.backgroundColor = "#aeffda";
            settingsMenu.style.backgroundColor = "#aeffda";

        }, 300);
        return;
    }

    else if(value == "PU"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "292px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "300px";
            pad.style.backgroundColor = "#d8c2d7";
            rulesMenu.style.backgroundColor = "#d8c2d7";
            mainMenu.style.backgroundColor = "#d8c2d7";
            themesMenu.style.backgroundColor = "#d8c2d7";
            settingsMenu.style.backgroundColor = "#d8c2d7";

        }, 300);
        return;
    }

    else if(value == "BL"){
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "292px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "300px";
            pad.style.backgroundColor = "#00a4ff";
            rulesMenu.style.backgroundColor = "#00a4ff";
            mainMenu.style.backgroundColor = "#00a4ff";
            themesMenu.style.backgroundColor = "#00a4ff";
            settingsMenu.style.backgroundColor = "#00a4ff";

        }, 300);
        return;
    }

    else if(value == "TTS"){
        
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "292px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "300px";
            themesMenu.style.display = "none"; 
            settingsMenu.style.display = "block";
        }, 300);
        return
    }

    else if(value == "Pa"){
        
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "59px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "60px";
            mainMenu.style.display = "block"; 
            conatainer.style.display = "none";
        }, 300);
        return
    }

    else if(value == "STM"){
        
        shadow.style.display = "none";
        number.style.height = "59px"; 
        number.style.width = "292px";

        setTimeout(function() {
            shadow.style.display = "block";
            number.style.height = "60px"; 
            number.style.width = "300px";
            mainMenu.style.display = "block"; 
            settingsMenu.style.display = "none";
        }, 300);
        return
    }

    else{
        userResult.value += value;
    }

    shadow.style.display = "none";
    number.style.height = "59px"; 
    number.style.width = "59px";

    setTimeout(function() {
        shadow.style.display = "block";
        number.style.height = "60px"; 
        number.style.width = "60px";
    }, 300);
}

////===============geting ranfom number================================

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation() {
    let operation = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

    if(operation == 1){return "-"}
    if(operation == 2){return "+"}
    if(operation == 3){return "*"}
    if(operation == 4){return "/"}
}

////===============submit and random function================================

function submitFunction(button, shadow) {
    let oldFirst = parseInt(firstNumber.innerText);
    let oldOp = operation.innerText;
    let oldSecond = parseInt(secondNumber.innerText);
    let result;

    // Calculate the result based on the old operation
    if (oldOp == "-") {
        result = oldFirst - oldSecond;
    } else if (oldOp == "+") {
        result = oldFirst + oldSecond;
    } else if (oldOp == "*") {
        result = oldFirst * oldSecond;
    } else if (oldOp == "/") {
        result = Math.floor(oldFirst / oldSecond); // Integer division for simplicity
    }

    const userInput = parseInt(userWindow.value);

    // Compare user input with the correct result
    if (userInput === result) {
        userWindow.style.backgroundColor = "#62b531"; // Green for correct
        userWindow.placeholder = "Correct!";
        score.innerText ++; 
        userWindow.style.setProperty("--placeholder-color", "white");
        soundC.pause();
        soundC.currentTime = 0;
        soundC.play();
    } else {
        userWindow.style.backgroundColor = "#f03333"; // Red for incorrect
        userWindow.placeholder = "Wrong!";
        userWindow.style.setProperty("--placeholder-color", "white");
        soundW.pause();
        soundW.currentTime = 0;
        soundW.play();
    }

    // Clear the user input and reset after a brief delay
    userWindow.value = "";
    setTimeout(function () {
        userWindow.style.backgroundColor = "#fff";
        userWindow.placeholder = "input result";
        userWindow.style.setProperty("--placeholder-color", "grey");
    }, 300);

    // Now generate new random numbers and operation
    let f1 = getRandomNumber(1, 100);
    let f2 = getRandomNumber(1, 100);
    let op = getRandomOperation();

    // Ensure f1 >= f2 for subtraction
    if (op == "-") {
        while (f1 < f2) {
            f2 = getRandomNumber(1, 100);
        }
    }

    // Set new numbers and operation
    firstNumber.innerText = f1;
    secondNumber.innerText = f2;
    operation.innerText = op;

    // Animation logic for button press
    shadow.style.display = "none";
    button.style.height = "59px";
    button.style.width = "139px";

    setTimeout(function () {
        shadow.style.display = "block";
        button.style.height = "60px";
        button.style.width = "140px";
    }, 300);
}

//menu movement

function updateButtons() {

    start.style.backgroundColor = "#fff";
    rulesB.style.backgroundColor = "#fff";
    settingsB.style.backgroundColor = "#fff";
    themesB.style.backgroundColor = "#fff";
    settingsToMainB.style.backgroundColor = "#fff";

    // Highlight the selected button based on index
    switch(index) {
        case 0:{
            start.style.backgroundColor = "#cecece";
            themesB.style.backgroundColor = "#cecece";
            break;
        }
        case 1:{
                rulesB.style.backgroundColor = "#cecece";
                settingsToMainB.style.backgroundColor = "#cecece";
            break;
        }
        case 2:{
            settingsB.style.backgroundColor = "#cecece";
            break;
        }
    }
}

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            index--;
            if (index < 0) index = 2; // Prevent going below 0
            break;
        case 'ArrowDown':
            index++;
            if (index > 2) index = 0; // Prevent going above 3
            break;
        default:
            return; // Exit if it's not an arrow key
    }
    
    updateButtons(); // Update button colors based on the new index
}

// Initialize button colors on page load
updateButtons();

// Add event listener for keydown
document.addEventListener('keydown', handleKeyPress);
