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
