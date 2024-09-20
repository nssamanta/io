const body = document.querySelector("body");
const footerElement = document.createElement("footer");
body.appendChild(footerElement);

let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.textContent = `\u00A9 Nely Santos ${thisYear}`;
footerElement.appendChild(copyright);

let skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "GitHub",
  "Figma",
  "Wireframing",
  "Prototyping",
  "Qualitative Research",
  "Quantitative Research",
  "Data Analysis",
  "A/B Testing",
];

let skillsSection = document.querySelector("#skills");
let skillList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillList.appendChild(skill);
};

const messageForm = document.querySelector("form[name='leave_message']");

messageForm.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents form from refreshing the page

    //form values
    let nameTarget = e.target.usersName.value;
    let emailTarget = e.target.usersEmail.value;
    let messageTarget = e.target.usersMessage.value;

    console.log(nameTarget, emailTarget, messageTarget);

    //select the messages section and the message list
    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");

    //create new list item for message
    let newMessage = document.createElement("li");

    //set the inner HTML for the message with a clickable link and span for message
    newMessage.innerHTML = `<a href="mailto:${emailTarget}">${nameTarget}</a> <span>: ${messageTarget}</span>`

    //create the remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button" //set button type to avoid submitting the form

    //add event listener to removeButton element that handles the "click" event
    removeButton.addEventListener("click", (e) => {
        let entry = e.target.parentNode; //finds the buttons parent <li> element using DOM Traversal
        entry.remove(); //removes the <li> from the DOM
    }); 

    //append removeButton to newMessage element <li>
    newMessage.appendChild(removeButton);
    
    //append the newMessage <li> to the messageList <ul>
    messageList.appendChild(newMessage);

    //reset the form after submission
    messageForm.reset();
});

