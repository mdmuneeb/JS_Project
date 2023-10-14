const messageForm = document.querySelector(".message-form");
const messageInput = document.getElementById("message-input");
const messageBtn = document.getElementById("message-btn");
const message = document.getElementById("message");
const messageHeader = document.getElementById("messege-header");


const messageSaver = (a) =>{
    a.preventDefault();
    var inputMessage = messageInput.value;
    console.log(inputMessage);
    if (inputMessage == ""){
        message.style.color = "red";
        message.textContent = "Plz enter anything first";
        console.log(message.textContent);
    }
    else{
        message.style.color = "lightgreen"
        message.textContent = inputMessage;

        console.log(message.textContent);    
    }

}

messageForm.addEventListener("submit",messageSaver); 


