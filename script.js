 let lastEl = ""
 let FirstName = document.querySelector('#FirstName')
 let LastName = document.querySelector('#LastName')
 let EmailAdress = document.querySelector('#EmailAdress')
 let Password = document.querySelector('#Password')
 let vectorInput = [FirstName,LastName,EmailAdress,Password]
 let vectorInputBOOL = [false,false,false,false]
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


function removeError(element){
  lastEl=element.value
  element.classList.remove("Error-color")
   element.classList.add("defaultText")
   element.style.borderColor = "rgb(220, 220, 220)"
   //console.log(element)
}

function deleteChild(element) {

  //FirstName  NU DEPINDE DE NIMENI
  if(element.id==="FirstName"){
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[1]);
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[1]);
    }
  if(FirstName.className==="Error-color") // DACA FirstName este pe EROARE
  {
    if(element.id==="LastName"){
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[4]);
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[4]);
    }
    if(LastName.className==="Error-color"){//DACA LastName este pe EROARE
      if(element.id==="EmailAdress"){
      document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[7]);
      document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[7]);
      }
      if(EmailAdress.className==="Error-color"){
        if(element.id==="Password"){
          document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[10]);
          document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[10]);
          }
      }
}
}


if(FirstName.className!="Error-color") // DACA FirstName NU este pe EROARE
{
  if(element.id==="LastName"){
  document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[2]);
  document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[2]);
  }
  if(LastName.className==="Error-color"){//DACA LastName este pe EROARE
    if(element.id==="EmailAdress"){
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[5]);
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[5]);
    }
    if(EmailAdress.className==="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[8]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[8]);
        }
    }
}

}




if(FirstName.className!="Error-color") // DACA FirstName NU este pe EROARE
{
  if(LastName.className!="Error-color"){//DACA LastName  NU este pe EROARE
    if(element.id==="EmailAdress"){
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[3]);
    document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[3]);
    }
    if(EmailAdress.className==="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[6]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[6]);
        }
    }
}

}


if(FirstName.className!="Error-color") // DACA FirstName NU este pe EROARE
{
  if(LastName.className!="Error-color"){//DACA LastName  NU este pe EROARE
    if(EmailAdress.className!="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[4]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[4]);
        }
    }
}

} //Pana aici E bine sigur


if(FirstName.className==="Error-color") // DACA FirstName NU este pe EROARE
{
  if(LastName.className==="Error-color"){//DACA LastName  NU este pe EROARE
    if(EmailAdress.className!="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[8]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[8]);
        }
    }
}

}


if(FirstName.className!="Error-color") // DACA FirstName NU este pe EROARE
{
  if(LastName.className==="Error-color"){//DACA LastName  NU este pe EROARE
    if(EmailAdress.className!="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[6]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[6]);
        }
    }
}

}



if(FirstName.className==="Error-color") // DACA FirstName este pe EROARE
{
  if(LastName.className!="Error-color"){//DACA LastName  NU este pe EROARE
    if(element.id==="EmailAdress"){
      document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[5]);
      document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[5]);
      }
    if(EmailAdress.className==="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[8]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[8]);
        }
    }
}

}

if(FirstName.className==="Error-color") // DACA FirstName este pe EROARE
{
  if(LastName.className!="Error-color"){//DACA LastName  NU este pe EROARE
    if(EmailAdress.className!="Error-color"){
      if(element.id==="Password"){
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[6]);
        document.getElementById("panou-date").removeChild(document.getElementById("panou-date").children[6]);

        }
    }
}

}
} //AICI AM TERMINAT CAZURILE PENTRU Erori







function CheckBOOLS(){
  for(let i=0; i<4;i++)
    {if(vectorInput[i].className!="Error-color"){
      vectorInputBOOL[i]=true}
    }

    let k=0 //contor
    for(let i=0; i<4;i++)
    {if (vectorInputBOOL[i]===true){
      k++
    }
    }
    console.log(k)
    if(k===4)
    {return true}
    
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
               inputId = element.id;
               inputValue=element.value
               let inputClass=element.classList   

                if (inputValue!=``&inputClass=="Error-color" ) {
                  removeError(element)
                  deleteChild(element)
                }
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
                       errValid=true
                       makeError(element)
                 }

           console.log(errValid)

           return errValid; // Do Nothing
       
       }
       console.log("mesaj2"+errValid)

function checkComplete(){
            for(let i=0; i<4;i++){
            // {if(validateForm(vectorInput[i])===false)
            //   location.replace("www.dinca.one")

            // }
            validateForm(vectorInput[i])
            }
            if(CheckBOOLS()==true){
              location.replace("www.dinca.one")

}
}