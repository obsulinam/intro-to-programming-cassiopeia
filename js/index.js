let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = "© " + "Obsuliman " + thisYear + ".";

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

function submitFunction(event){

    event.preventDefault();
   let fullName =event.target.name.value;
   let emailAddress = event.target.email.value;
   let enterMessage =event.target.message.value;

    console.log(event.target.name.value);
    console.log(emailAddress);
    console.log(enterMessage);

    function funcEditBtn(event){
        const formRset = document.getElementById("myform");
        formRset.name.value=fullName;
        formRset.email.value= emailAddress;
        formRset.message.value= enterMessage;
        funcButtonRmv(event);
       
    }

    let messageSection = document.getElementById("message");
    let messageList =messageSection.querySelector("ul");
    let newMessage = document.createElement("li");

    newMessage.innerHTML = '<a href="mailto:' + emailAddress + '">' + fullName +'</a>' + '<span>' + ' --- Wrote: ' + enterMessage + '</span> ' ;
    const removeButton = document.createElement("button");
    const editButton = document.createElement("button")
    removeButton.innerText = "remove";
    editButton.innerText = "edit";

    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("class", "class_button_remove");
    editButton.setAttribute("class","class_button_edit");
    editButton.setAttribute("type","button");

    removeButton.addEventListener("click",funcButtonRmv);
    editButton.addEventListener("click",funcEditBtn);

    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    document.getElementsByName("leave_message")[0].reset();
}

function funcButtonRmv(event){
    const removeButton = event.target;
    let entry = removeButton.parentNode;
    entry.remove();
}


messageForm.addEventListener("submit", submitFunction);

let repositories = [];

function myCallbackFunction(repositories) {
    console.log(repositories);

    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for(let i = 0; i < repositories.length; i++){
        let project = document.createElement("li");
        let projecDate = new Date(repositories[i].created_at)
        project.innerHTML = repositories[i].description + " " + "<a target='_blank' href=" + repositories[i].html_url + ">" + repositories[i].name + "</a>" + " : " + projecDate + ".";
        projectList.appendChild(project);
       
    }
}
fetch("https://api.github.com/users/obsulinam/repos")
    .then((response) => response.json())
    .then((data) => {myCallbackFunction(data)})
    .catch(console.log('se cayo!: '));

