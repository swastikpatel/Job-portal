function submitAptitude () {
    debugger
    const selectedLabels = {};
    const questionContainers = document.querySelectorAll('.aptitude-option-container');

    questionContainers.forEach(function(container, index) {
        const checkedRadioButton = container.querySelector('input[type="radio"]:checked');
        if (checkedRadioButton) {
            const labelElement = container.querySelector('label[for="' + checkedRadioButton.id + '"]');
            selectedLabels['question' + (index + 1)] = labelElement.textContent.trim();
        }
    });

    console.log(selectedLabels);

    if((Object.keys(selectedLabels)).length=== 10){
            let count = 0;
            
                if(selectedLabels["question1"].toLowerCase() ==="html"){
                    count += 1;
                }
                if(selectedLabels["question2"].toLowerCase() ===".html"){
                    count += 1;
                }
                if(selectedLabels["question3"].toLowerCase() ==="javaScript is an object-based language"){
                    count += 1;
                }
                if(selectedLabels["question4"].toLowerCase() ==="it is an ordered list of values"){
                    count += 1;
                }
                if(selectedLabels["question5"].toLowerCase() ==="all of the mentioned"){
                    count += 1;
                }
                if(selectedLabels["question6"].toLowerCase() ==="interpreting the javascript"){
                    count += 1;
                }
                if(selectedLabels["question7"].toLowerCase() ==="background-color"){
                    count += 1;
                }
                if(selectedLabels["question8"].toLowerCase() ==="allows javascript code to alter the behaviour of windows"){
                    count += 1;
                }
                if(selectedLabels["question9"].toLowerCase() ==="external"){
                    count += 1;
                }
                if(selectedLabels["question10"].toLowerCase() ==="both a and b"){
                    count += 1;
                }
                 let previousData = JSON.parse(sessionStorage.getItem("storedData"));
                 let intialObj = localStorage.getItem("registered-user-data");
                 let userName = intialObj.split(",")[0];
                 previousData[userName]["technical"] = count
                 sessionStorage.setItem("storedData",JSON.stringify(previousData))
                debugger
                if(count >= 7){
                    window.location.href = "resume.html";
                }else{
                    window.location.href = "failureMessage.html";
                }
    }else{
        alert("All the questions are Mandatory!")
    }

}