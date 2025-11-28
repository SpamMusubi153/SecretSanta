


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
    let targetList = document.getElementById("recipientList");

    let recipientName = recipientField.value;
    recipientField.value = "";

    recipients.push(recipientName);

    let newNameDisplay = document.createElement("li");
    newNameDisplay.textContent = recipientName;
    targetList.appendChild(newNameDisplay);

}

function appendRecipient(targetElement, name) {

    let newNameDisplay = document.createElement("li");
    newNameDisplay.textContent = name;
    targetElement.appendChild(newNameDisplay);
    
}

function calculateResults() {

    let numberOfGifters = gifters.length;
    let resultsList = document.getElementById("results");

    resultsList.innerHTML = "";

    remainingRecipients = structuredClone(recipients);

    console.log(remainingRecipients);

    for (let i = 0; i < gifters.length; i++)
    {
        let newNameDisplay = document.createElement("h5");
        newNameDisplay.textContent = gifters[i];
        newNameDisplay.id = `gifter-results-${i}`
        resultsList.appendChild(newNameDisplay);

        if (remainingRecipients.length > 0){

            let selectedRecipientIndex = Math.floor(Math.random() * remainingRecipients.length);
            appendRecipient(document.getElementById(`gifter-results-${i}`), remainingRecipients[selectedRecipientIndex]);
            
            console.log(`Before|${selectedRecipientIndex}`);
            remainingRecipients.splice(selectedRecipientIndex, 1);
            console.log(`After|${selectedRecipientIndex}`);
        }
    }

    console.log(remainingRecipients);
    

    for(let i = 0; i < remainingRecipients.length; i++)
    {
        let selectedGifterIndex = Math.floor(Math.random() * numberOfGifters.length);
        let targetElement = document.getElementById(`gifter-results-${selectedGifterIndex}`)

        appendRecipient(targetElement, remainingRecipients[i]);
    }

}



var gifters = [];
var recipients = [];

document.addEventListener("DOMContentLoaded", ()  => {

    document.getElementById("gifterButton").addEventListener("click", addGifter);
    document.getElementById("recipientButton").addEventListener("click", addRecipient);

    document.getElementById("calculateResults").addEventListener("click", calculateResults);

});