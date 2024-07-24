

    function submitAptitude () {
        debugger
        const selectedLabels = {};
        const questionContainers = document.querySelectorAll('.option-container');

        questionContainers.forEach(function(container, index) {
            const checkedRadioButton = container.querySelector('input[type="radio"]:checked');
            if (checkedRadioButton) {
                const labelElement = container.querySelector('label[for="' + checkedRadioButton.id + '"]');
                selectedLabels['question' + (index + 1)] = labelElement.textContent.trim();
            }
        });
        if((Object.keys(selectedLabels)).length=== 5){

            let count = 0;
            if(selectedLabels["question1"].toLowerCase() ==="30"){
                count += 1;
            }
            if(selectedLabels["question2"].toLowerCase() ==="64"){
                count += 1;
            }
            if(selectedLabels["question3"].toLowerCase() ==="15"){
                count += 1;
            }
            if(selectedLabels["question4"].toLowerCase() ==="Hello World"){
                count += 1;
            }
            if(selectedLabels["question5"].toLowerCase() ==="1, 4, 9, 16, ..."){
                count += 1;
            }
            console.log(count);
            let previousData = sessionStorage.getItem("storedData");
            console.log(previousData);
            if(previousData !='[object Object]' && previousData != null && previousData != undefined){
                let intialObj = localStorage.getItem("registered-user-data")
                let userName = intialObj.split(",")[0]
                let parsedData = JSON.parse(previousData);
                parsedData[userName]={}
                parsedData[userName]["logical"] = count
                sessionStorage.setItem("storedData",JSON.stringify(parsedData))
                if(count >= 3){
                    window.location.href = "aptitudeTest.html";
                }else{
                    window.location.href = "failureMessage.html";
                }
            }else{
                previousData = {}
                let intialObj = localStorage.getItem("registered-user-data")
                let userName = intialObj.split(",")[0]
                previousData[userName]={}
                previousData[userName]["logical"] = count
                sessionStorage.setItem("storedData",JSON.stringify(previousData))
                if(count >= 3){
                    window.location.href = "aptitudeTest.html";
                }else{
                    window.location.href = "failureMessage.html";
                }
            }
        }else{
            alert("All the questions are Mandatory!");
        }

        

    

    }

    



