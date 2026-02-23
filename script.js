let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
console.log(totalCount, interviewCount, rejectedCount);

const allCard = document.getElementById('all-card');

let interviewList = [];
let rejectedList = [];

function calculateCount() {
    totalCount.innerText = allCard.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function toggleBtn(id) {
     allFilterBtn.classList.remove("bg-blue-950", "text-white")
    interviewFilterBtn.classList.remove("bg-blue-950", "text-white")
    rejectedFilterBtn.classList.remove("bg-blue-950", "text-white");

    allFilterBtn.classList.add("bg-white", "text-black")
    interviewFilterBtn.classList.add("bg-white", "text-black") 
    rejectedFilterBtn.classList.add("bg-white", "text-black");

    let selected = document.getElementById(id);
    selected.classList.add("bg-blue-950", "text-white");
    selected.classList.remove("bg-white", "text-black");

}

const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    
    const parentNode = event.target.parentNode.parentNode;
    console.log(parentNode);
    const companyName = parentNode.querySelector(".company-name").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const currentStatus = parentNode.querySelector(".current-position").innerText;
    const jobDesciption = parentNode.querySelector(".job-description").innerText;
   
    if (event.target.classList.contains("interview-btn")) {
        const cardInfo = {
            companyName,
            position,
            currentStatus: "Interview",
            salary,
            jobDesciption
        }

        parentNode.querySelector(".current-position").innerText= "Interview"
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        if(companyExist){}
    }

})