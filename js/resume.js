
function submitFormData  () {
  
  let mobRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  let emailRegex = /^\S+@\S+\.\S+$/;

  let mobile =(mobRegex)?.test(document.getElementById("phone").value);
  let email = (emailRegex)?.test(document.getElementById("email").value);

  let skills = (document.getElementById("skills").value)?.includes(",");
  let certificates = (document.getElementById("certification").value)?.includes(",")
  let awards = (document.getElementById("awards").value)?.includes(",")
  let languages = (document.getElementById("languages").value)?.includes(",")

  if(!mobile){
    alert("Please provide valid mobile number")
  }

  if(!email){
    alert("Please provide valid email")
  }

  if (!skills){
    alert("Please provide comma seperated values for skills and activities" )
  }

  if(!certificates){
    alert("Please provide comma seperated values for certificates")
  }

  if(!awards){
    alert("Please provide comma seperated values for awards")
  }

  if (!languages){
    alert("Please provide comma seperated values for languages")
  }

  let previousData = JSON.parse(sessionStorage.getItem("storedData"));
  let intialObj = localStorage.getItem("registered-user-data");
  let userName = intialObj.split(",")[0];
  if(mobile && email && skills && certificates && awards && languages){
    
    let resumeObj = {}
    resumeObj["fullName"] = document.getElementById("fullName").value;
    resumeObj["address"]  = document.getElementById("address").value;
    resumeObj["phone number"] = document.getElementById("phone").value;
    resumeObj["email"] = document.getElementById("email").value;
    resumeObj["date of birth"] = document.getElementById("dob").value;
    resumeObj["skills and activities"] =document.getElementById("skills").value;
    resumeObj["certificates"] = document.getElementById("certification").value;
    resumeObj["awards and rewards"] =document.getElementById("awards").value;
    resumeObj["profile"] =document.getElementById("profile").value;
    resumeObj["SSC board"] =document.getElementById("SSC-board").value;
    resumeObj["SSC year"] =document.getElementById("SSC-year").value;
    resumeObj["SSC percentage"] = document.getElementById("SSC-percentage").value;
    resumeObj["HSC board"] =document.getElementById("HSC-board").value;
    resumeObj["HSC year"] =document.getElementById("HSC-year").value;
    resumeObj["HSC percentage"] =document.getElementById("HSC-percentage").value;
    resumeObj["Bachelors"]=document.getElementById("Bachelors").value;
    resumeObj["bachelors year"] =document.getElementById("bachelors-year").value;
    resumeObj["bachelors percentage"] = document.getElementById("bachelors-percentage").value;
    resumeObj["experience"]=document.getElementById("experience").value;
    resumeObj["languages"] = document.getElementById("languages").value;

    const uploadInput = document.getElementById('uploadInput');
  const imageContainer = document.getElementById('imageContainer');

  const file = uploadInput.files[0]; // Get the selected file

    const reader = new FileReader();

    reader.onload = function(e) {
      const imageData = e.target.result; // Get the data URL of the uploaded image
      resumeObj["image"] = imageData
      // localStorage.setItem('storedImage', imageData); // Store the image data in localStorage
      previousData[userName]["resume"] = resumeObj
      sessionStorage.setItem("storedData",JSON.stringify(previousData))
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  
    
  }

}



