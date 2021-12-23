 let lastEl = ""
 let FirstName = document.querySelector('#FirstName')
 let LastName = document.querySelector('#LastName')
 let EmailAdress = document.querySelector('#EmailAdress')
 let Password = document.querySelector('#Password')
 let vectorInput = [FirstName,LastName,EmailAdress,Password]
 let errValid= false
 
 function makeDefault(element){
       lastEl=element.value
       if (element.value==="First Name" || element.value==="Last Name" || element.value==="Email Adress"||element.value==="Password") 
       { element.value = ``
        element.classList.remove('defaultText');
        element.classList.add("ActiveText")
       // console.log(element)
       }
 }
 function makeError(element){
      lastEl=element.value
      if (element.value==="First Name" || element.value==="Last Name" || element.value==="Email Adress"||element.value==="Password") 
      { element.value = ``
       element.classList.remove("defaultText")
       element.classList.add("Error-color")
       element.style.borderColor = "red"
      // console.log(element)
      }
}

 function restoreDefault(){
       if(FirstName.value===``)
       {element = FirstName
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}
       
       if(LastName.value===``)
       {element = LastName
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}
       
       if(EmailAdress.value===``)
       {element = EmailAdress
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}
              
       if(Password.value===``)
       {element = Password
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}

     } 

       FirstName.addEventListener('click',function(e) {e.preventDefault(); makeDefault(FirstName)})
       LastName.addEventListener('click',function(e) {e.preventDefault(); makeDefault(LastName)})
       EmailAdress.addEventListener('click',function(e) {e.preventDefault(); makeDefault(EmailAdress)})
       Password.addEventListener('click',function(e) {e.preventDefault(); makeDefault(Password)})
       document.getElementById("start").addEventListener('click',function(e) {e.preventDefault(); checkComplete()})
       document.body.addEventListener('click', function(e) {e.preventDefault(); if (errValid===false) {restoreDefault()}}, true)
       function validateForm(element) {
           // Declare all the local variable
           let inputElements, inputId, inputType, i, inputLength, inputNode;
           //modificarea mea la declarari
           let inputValue
       
           inputElements = document.getElementsByTagName("input");
       
           //for (i = 0, inputLength = inputElements.length; i < inputLength; i++) {
               inputId = element.id;
               inputValue=element.value
               let inputClass=element.classList   
               //if (inputType === "text") {
                 if ((inputValue==="First Name" || inputValue==="Last Name" || inputValue==="Email Adress" ||inputValue==="Password" ||inputValue===``)&inputClass!="Error-color" ) {
                   inputNode = document.getElementById(inputId);
                   //if (inputNode.value === "") {
                       var spanTag = document.createElement("span");
                       var imgTag = document.createElement("img");
                       imgTag.src = "./images/icon-error.svg"
                       imgTag.classList.add("error-msg")
                      //  spanTag.classList.add("error-msg")`<span class=">${element.value} cannot be empty</span>`
                       spanTag.append(element.value + " cannot be empty")
                       spanTag.classList.add("error-msg")
                       inputNode.parentNode.insertBefore(spanTag, inputNode.nextSibling)
                       inputNode.parentNode.insertBefore(imgTag, inputNode.nextSibling)
                       makeError(element)
                       errValid=true
                  console.log("sa moara jiubilan daca mai intra") 
                 // }
                  }
                  
          // }
          if ((inputValue!="First Name" || inputValue!="Last Name" || inputValue!="Email Adress" ||inputValue!="Password" ||inputValue===``)&inputClass=="Error-color" ) {
            makeDefault(element)
            // errValid=false
            console.log("a intrat si in cacat de data asta")
          }
           console.log(errValid)

           return false; // Do Nothing
       
       }
       console.log("mesaj2"+errValid)

function checkComplete(){
            for(let i=0; i<4;i++)
            validateForm(vectorInput[i])
              

}