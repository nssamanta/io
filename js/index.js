//select body element 
const body = document.querySelector("body");
//create new footer element
const footerElement = document.createElement("footer");
//append footer to the body
body.appendChild(footerElement);

//get the current date
let today = new Date();
//extract the current year from the date object
let thisYear = today.getFullYear();
//Select the appended footer
let footer = document.querySelector("footer");
//create new paragraph element 
let copyright = document.createElement("p");
//display copyright info and append paragraph element to the footer
copyright.textContent = `\u00A9 Nely Santos ${thisYear}`;
footerElement.appendChild(copyright);
//define array with a list of skills
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

//select section wlement with the id skills
let skillsSection = document.querySelector("#skills");
//find ul within skills section
let skillList = skillsSection.querySelector("ul");
//loop through each item in the skills array
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillList.appendChild(skill);
};

const messageForm = document.querySelector("form[name='leave_message']");
let messageSection = document.querySelector("#messages");
let messageList = messageSection.querySelector("ul");

//hide messages if there are none
function toggleMessageSection() {
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

//call the toggle function to hide section if empty
toggleMessageSection();

messageForm.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents form from refreshing the page

    //form values
    let nameTarget = e.target.usersName.value;
    let emailTarget = e.target.usersEmail.value;
    let messageTarget = e.target.usersMessage.value;

    console.log(nameTarget, emailTarget, messageTarget);

    


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
        toggleMessageSection(); //check if message list is empty after removal
    }); 

    //append removeButton to newMessage element <li>
    newMessage.appendChild(removeButton);
    
    //append the newMessage <li> to the messageList <ul>
    messageList.appendChild(newMessage);
    
    //show message section for added message
    toggleMessageSection();

    //reset the form after submission
    messageForm.reset();
});

fetch("https://api.github.com/users/nssamanta/repos")
    .then (response => {  //function returns response JSON data
        if(!response.ok) { //check for 200-299 error 
        throw new Error("Network response was not ok");
    }
    return response.json(); 
})
.then (repositories => {
    console.log(repositories); //log repositories array
    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");

    //loop through repositories array and create list items with links
    for (let i = 0; i < repositories.length; i++) {
        const repo = repositories[i];
        const project = document.createElement("li");

        //create anchor element
        const projectLink = document.createElement("a")
        //set the href to the repository url
        projectLink.href = repo.html_url;
        //set the link text to the repository name
        projectLink.textContent = repo.name;
        //open link in a new tab when clicked
        projectLink.target = "_blank";

        //append achor tag to li element 
        project.appendChild(projectLink);
        //project.textContent = repositories[i].name;
        //append the li element to the project list
        projectList.appendChild(project);
    }
})
.catch(error => {
    console.error('There was an error', error); //handle any network or fetch errors
});

