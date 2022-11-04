let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = "Obsuliman " + thisYear + ".";

footer.appendChild(copyright);

let skills =["JavaScript","Html","CSS","VSCode","Git","GitHub"];

let skillsSection = document.getElementById("skills");

let skillsList =skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText= skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message")[0];
//const removeButton = document.createElement("button");

function submitFunction(event){
    event.preventDefault();
   let fullName = event.target.name.value;
   let emailAddress = event.target.email.value;
   let enterMessage =event.target.message.value;

    console.log(fullName);
    console.log(emailAddress);
    console.log(enterMessage);

    let messageSection = document.getElementById("message");
    
    let messageList =messageSection.querySelector("ul");

    let newMessage = document.createElement("li");

    newMessage.innerHTML = '<a href="mailto:' + emailAddress + '">' + fullName +'</a>' + '<span>' + ' --- Wrote: ' + enterMessage + '</span> ' ;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";

    removeButton.setAttribute("type", "button",);
    removeButton.setAttribute("class", "class_button_remove");

    removeButton.addEventListener("click",funcButtonRmv);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    document.getElementsByName("leave_message")[0].reset();
}

function funcButtonRmv(event){
    const removeButton = event.target;
    let entry = removeButton.parentNode;
    entry.remove();
}

messageForm.addEventListener("submit", submitFunction);

let githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/obsulinam/repos");
githubRequest.send();

githubRequest.addEventListener('load', myCallbackFunction);
let repositories = [];

function myCallbackFunction(event) {
    repositories = JSON.parse(this.response);
    console.log(repositories);

    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for(let i = 0; i < repositories.length; i++){
        let project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
}

