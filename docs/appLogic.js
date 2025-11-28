


function addGifter() {

    let gifterField = document.getElementById("gifterField");
    let gifterList = document.getElementById("gifterList");

    let gifterName = gifterField.value;
    gifterField.value = "";

    gifters.push(gifterName);

    let newNameDisplay = document.createElement("li");
    newNameDisplay.textContent = gifterName;
    gifterList.appendChild(newNameDisplay);

}

function addRecipient() {

    let recipientField = document.getElementById("recipientField");
    let recipientList = document.getElementById("recipientList");

    let recipientName = gifterField.value;
    gifterField.value = "";

    recipients.push(recipientName);

    let newNameDisplay = document.createElement("li");
    newNameDisplay.textContent = recipientName;
    recipientList.appendChild(newNameDisplay);
    
}

function calculateResults() {

    let numberOfGifters = gifters.length;
    let resultsList = document.getElementById("results");

    for (let i = 0; i < gifters.length; i++)
    {
        let newNameDisplay = document.createElement("p");
        newNameDisplay.textContent = `<strong>${gifters[i]}</strong>`;
        newNameDisplay.id = `gifter-results-${i}`
        resultsList.appendChild(newNameDisplay);

    }

    for(let i = 0; i < recipients.length; i++)
    {
        let selectedGifterIndex = Math.floor(Math.random() * numberOfGifters);
        let targetElement = document.getElementById(`gifter-results-${selectedGifterIndex}`)

        let newNameDisplay = document.createElement("li");
        newNameDisplay.textContent = recipients[i];
        targetElement.appendChild(newNameDisplay);
    }

}



var gifters = [];
var recipients = [];

document.addEventListener("DOMContentLoaded", ()  => {

    document.getElementById("gifterButton").addEventListener("click", addGifter);
    document.getElementById("recipientButton").addEventListener("click", addRecipient);

    document.getElementById("calculateResults").addEventListener("click", calculateResults);

});