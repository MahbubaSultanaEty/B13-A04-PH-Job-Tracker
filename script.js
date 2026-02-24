let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
// console.log(totalCount, interviewCount, rejectedCount);

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

    let currentId = id;
    if (id == "interview-filter-btn") {
        allCard.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterview();
    } else if (id == "all-filter-btn") {
        allCard.classList.remove("hidden");
        filteredSection.classList.add("hidden");
    } else if(id == "rejected-filter-btn"){
         allCard.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejected();
         }

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
    console.log(companyName,position, salary, currentStatus, jobDesciption);
   
    if (event.target.classList.contains("interview-btn")) {
        const cardInfo = {
            companyName,
            position,
            currentStatus: "Interview",
            salary,
            jobDesciption
        }


        parentNode.querySelector(".current-position").innerText = "Interview";
        parentNode.querySelector(".current-position").classList.add("text-green-700")
        parentNode.querySelector(".current-position").classList.remove("text-blue-950")
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            interviewList.push(cardInfo);
        }
    } calculateCount()

    if (event.target.classList.contains("rejected-btn")) {
        const cardInfo = {
            companyName,
            position,
            currentStatus: "Interview",
            salary,
            jobDesciption
        }


        parentNode.querySelector(".current-position").innerText = "Rejected";
        parentNode.querySelector(".current-position").classList.add("text-red-700")
        parentNode.querySelector(".current-position").classList.remove("text-blue-950")
        const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            rejectedList.push(cardInfo);
        }
        
    } calculateCount()

})

const filteredSection = document.getElementById("filtered-section");

function renderInterview() {
    filteredSection.innerHTML = ""
    
    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement("div");
        div.className = 'card-div mt-6 p-4 md:p-8 bg-white flex justify-between';
        div.innerHTML = `
        <div class="card-div p-4 md:p-8 bg-white flex justify-between">
                <div>
                <h5 class="company-name text-lg md:text-2xl font-bold">${interview.companyName}</h5>
                <p class="position text-base md:text-lg">${interview.position}</p>
                <p class="salary  text-xs md:text-sm my-4">${interview.salary}</p>
                <p class="current-position bg-blue-50 text-green-700 font-semibold max-w-[120px] text-center p-1">${interview.currentStatus}</p>
                <p class="job-description text-sm md:text-base my-3">${interview.jobDesciption}</p>
                <!-- button -->
                 <div class="space-x-4 mt-4">
                    <button id="interview-btn" class="interview-btn    btn btn-outline btn-success ">Interview</button>
                    <button id="rejected-btn" class="rejected-btn  btn btn-outline btn-error ">Rejected</button>
                 </div>
                 </div>
                 <div class="delete-button">
                   <button id="delete-btn" class="btn btn-ghost btn-sm text-neutral-500 hover:bg-red-100">
                     <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
             </div>
        `
        filteredSection.appendChild(div);
    }
}
function renderRejected() {
    filteredSection.innerHTML = ""
    
    for (let rejected of rejectedList) {
        // console.log(rejected);
        let div = document.createElement("div");
        div.className = 'card-div mt-6 p-4 md:p-8 bg-white flex justify-between';
        div.innerHTML = `
        <div class="card-div p-4 md:p-8 bg-white flex justify-between">
                <div>
                <h5 class="company-name text-lg md:text-2xl font-bold">${rejected.companyName}</h5>
                <p class="position text-base md:text-lg">${rejected.position}</p>
                <p class="salary  text-xs md:text-sm my-4">${rejected.salary}</p>
                <p class="current-position bg-blue-50 text-red-700 font-semibold max-w-[120px] text-center p-1">${rejected.currentStatus}</p>
                <p class="job-description text-sm md:text-base my-3">${rejected.jobDesciption}</p>
                <!-- button -->
                 <div class="space-x-4 mt-4">
                    <button id="interview-btn" class="interview-btn    btn btn-outline btn-success ">Interview</button>
                    <button id="rejected-btn" class="rejected-btn  btn btn-outline btn-error ">Rejected</button>
                 </div>
                 </div>
                 <div class="delete-button">
                   <button id="delete-btn" class="btn btn-ghost btn-sm text-neutral-500 hover:bg-red-100">
                     <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
             </div>
        `
        filteredSection.appendChild(div);
    }
}