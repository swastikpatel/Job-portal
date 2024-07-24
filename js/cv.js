


function populateResumeData () {
  debugger
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('param');
  let storedData = JSON.parse(sessionStorage.getItem("storedData"));

  let skills = storedData[param].resume["skills and activities"];
  let skillsArr  = skills.split(",");
  skillsArr.forEach((ele) =>{
    let li = document.createElement("li")
    li.textContent = ele
    li.style.color  = "black"
   document.getElementById("skills").appendChild(li)
  })

  let awards = storedData[param].resume["awards and rewards"];
  let awardsArr = awards.split(",");
  awardsArr.forEach((ele) =>{
    let li = document.createElement("li")
    li.textContent = ele
    li.style.color  = "black"
    document.getElementById("awards").appendChild(li)
  })

  let certificates = storedData[param].resume["certificates"];
  let certificateArr = certificates.split(",");
  certificateArr.forEach((ele) =>{
    let li = document.createElement("li")
    li.textContent = ele
    li.style.color  = "black"
    document.getElementById("certificate").appendChild(li)
  })

  let language = storedData[param].resume["languages"];
  let languageArr = language.split(",");
  languageArr.forEach((ele) =>{
    let li = document.createElement("li")
    li.textContent = ele
    li.style.color  = "black"
    document.getElementById("language").appendChild(li)
  })

   document.getElementById("name").innerHTML= storedData[param].resume["fullName"];
   document.getElementById("call").innerHTML  = storedData[param].resume["phone number"];
   document.getElementById("email").innerHTML  = storedData[param].resume["email"];
   document.getElementById("address").innerHTML = storedData[param].resume["address"];
   document.getElementById("sscBoard").innerHTML = storedData[param].resume["SSC board"];
   document.getElementById("sscYear").innerHTML  = storedData[param].resume["SSC year"];
   document.getElementById("sscPercentage").innerHTML  = storedData[param].resume["SSC percentage"];
   document.getElementById("hscBoard").innerHTML  = storedData[param].resume["HSC board"];
   document.getElementById("hscYear").innerHTML = storedData[param].resume["HSC year"];
   document.getElementById("hscPercentage").innerHTML  = storedData[param].resume["HSC percentage"];
   document.getElementById("college").innerHTML  = storedData[param].resume["Bachelors"];
   document.getElementById("collegeYear").innerHTML  = storedData[param].resume["bachelors year"];
   document.getElementById("collegePercentage").innerHTML = storedData[param].resume["bachelors percentage"];
   document.getElementById("profile").innerHTML  = storedData[param].resume["profile"];
   document.getElementById("experience").innerHTML = storedData[param].resume["experience"];


}