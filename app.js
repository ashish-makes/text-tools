const textEntered = document.querySelector(".text");
const result = document.querySelector(".textResult");
const upperCase = document.querySelector(".upper");
const lowerCase = document.querySelector(".lower");
const swapCase = document.querySelector(".swap");
const randomCase = document.querySelector(".random");
const removeExtraSpaces = document.querySelector(".extraSpaces");
const removeExtraLines = document.querySelector(".extraLines");
const removeDuplicateLines = document.querySelector(".duplicateLines");
const search = document.querySelector(".findthis");
const replaceWithnew = document.querySelector(".replacethis");
const replacebtn = document.querySelector(".replacewithtext");
const SentenceCount = document.querySelector(".CountSentences");
const ClearBtn = document.querySelector(".clear");
const CopyBtn = document.querySelector(".copy");

const upCase = () => {
    let text = textEntered.value;
    let upLetters = text.toUpperCase();
    textEntered.value = upLetters;
}

const lowCase = () => {
    let text = textEntered.value;
    let lowLetters = text.toLowerCase();
    textEntered.value = lowLetters;
}

const swCase = () => {
    let text = textEntered.value;
    let len = text.length;
    let swLetters = ""
    for ( let i = 0; i < len; i++ ) {
        if (text[i] === text[i].toLowerCase()) {
            swLetters = swLetters + text[i].toUpperCase()
        } else {
            swLetters = swLetters + text[i].toLowerCase()
        }
    }
    textEntered.value = swLetters;
}

const rdCase = () => {
    let text = textEntered.value;
    let rndLetters = text.split('').map((randomLetters) => Math.round(Math.random()) ? randomLetters.toUpperCase() : randomLetters.toLowerCase()).join('');
    textEntered.value = rndLetters;
}

const rmvExtSpace = () => {
    let text = textEntered.value;
    // let spaceRemoved = text.trim();
    let spaceRemoved = text.replace(/\s+/g,' ').trim();
    textEntered.value = spaceRemoved;
}

const rmvExtLines = () => {
    let text = textEntered.value;
    let linesRemoved = text.replace(/\r?\n|\r/g,' ');
    textEntered.value = linesRemoved;
}

const rmvDupLines = () => {
    let text = textEntered.value;
    let dupStringRemoved = text.split("\n").filter((item, i, allItems) => {
        return i === allItems.indexOf(item);
    }).join("\n").trim();
    textEntered.value = dupStringRemoved;
}

const replace = () => {
    let text = textEntered.value;
    let find = search.value;
    let replaceWith = replaceWithnew.value;
    let replaced = text.replaceAll(find, replaceWith);
    textEntered.value = replaced;
}

const deleteText = () => {
    let ClearText = ""
    textEntered.value = ClearText;
}

const CopyText = () => {
    let text = textEntered.value;
    let Copytext = text;
    navigator.clipboard.writeText(Copytext).then(function () {
        if (Copytext === "") {
            textEntered.value = "No text entered!";
            setTimeout (() => {textEntered.value = ""}, 2000)
        } else {
            textEntered.value = "Text Copied!";
            setTimeout (() => {textEntered.value = Copytext}, 2000)
        }
    });
}

// const countSen = () => {
//     let text = textEntered.value;
//     const count = text.split(/[.!?]/).length - 1;
//     result.innerHTML = count;
// }

upperCase.addEventListener("click", upCase);
lowerCase.addEventListener("click", lowCase);
swapCase.addEventListener("click", swCase);
randomCase.addEventListener("click", rdCase);
removeExtraSpaces.addEventListener("click", rmvExtSpace);
removeExtraLines.addEventListener("click", rmvExtLines);
removeDuplicateLines.addEventListener("click", rmvDupLines);
replacebtn.addEventListener("click", replace);
ClearBtn.addEventListener("click", deleteText);
CopyBtn.addEventListener("click", CopyText);
// SentenceCount.addEventListener("click", countSen);