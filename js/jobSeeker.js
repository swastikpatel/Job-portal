function getDetails(){
debugger
  let storedData = JSON.parse(sessionStorage.getItem('storedData'));
  let userList = Object.keys(storedData);
  let storedImageData;

  userList.forEach((ele)=>{
    let divLayer1 =document.createElement('div');
    divLayer1.classList.add('card-body');
    divLayer1.classList.add('seeker');

    let divChild1 = document.createElement('div');
    divChild1.classList.add('job-seeker-details');

        storedImageData= storedData[ele]?.resume?.image;
        const imageElement = document.createElement('img');
        imageElement.src = storedImageData; // Set the source of the image
        imageElement.style.maxWidth = '300px'; // Set maximum width for display
        let divChild1Image = document.createElement('div');
        divChild1Image.innerHTML = '';
        divChild1Image.appendChild(imageElement);
        divChild1.appendChild(divChild1Image);

        let divChild1Name = document.createElement('h4');
        divChild1Name.innerHTML = ele;
        divChild1.appendChild(divChild1Name);

        divLayer1.appendChild(divChild1)




    let divChild2 = document.createElement('div');
    divChild2.classList.add('job-seeker-marks');
      
        let divChild2LogicTitle = document.createElement('h5');
        divChild2LogicTitle.classList.add("card-title");
        divChild2LogicTitle.innerHTML ="Logical Reasoning Test";
        divChild2.appendChild(divChild2LogicTitle)

        let logicalPara = document.createElement('p');
        logicalPara.classList.add('card-text');
        logicalPara.innerHTML =storedData[ele].logical;
        divChild2.appendChild(logicalPara)

        let divChild2TechnicalTitle = document.createElement('h5');
        divChild2TechnicalTitle.classList.add("card-title");
        divChild2TechnicalTitle.innerHTML ="Logical Reasoning Test";
        divChild2.appendChild(divChild2TechnicalTitle)

        let technicalPara = document.createElement('p');
        technicalPara.classList.add('card-text');
        technicalPara.innerHTML =storedData[ele].technical;
        divChild2.appendChild(technicalPara)

    let anchor = document.createElement('a');
    anchor.classList.add('btn');
    anchor.classList.add('btn-primary');
    anchor.innerHTML ='Resume';
    anchor.href ="./cv.html?param=" + ele;
    divChild2.appendChild(anchor);

    divLayer1.appendChild(divChild2)

    document.getElementById("cardParent").appendChild(divLayer1);


  })


}

