 let lastEl = ""
 
 function makeDefault(element){
       lastEl=element.value
       if (element.value==="First Name" || element.value==="Last Name" || element.value==="Email Adress"||element.value==="Password") 
       { element.value = ``
        element.classList.remove('defaultText');
        element.classList.add("ActiveText")
       // console.log(element)
       }
 }

 function restoreDefault(){
       if(document.querySelector('#FirstName').value===``)
       {element = document.querySelector('#FirstName')
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}
       
       if(document.querySelector('#LastName').value===``)
       {element = document.querySelector('#LastName')
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}
       
       if(document.querySelector('#EmailAdress').value===``)
       {element = document.querySelector('#EmailAdress')
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}
              
       if(document.querySelector('#Password').value===``)
       {element = document.querySelector('#Password')
       element.value=lastEl
       element.classList.remove("ActiveText")
       element.classList.add('defaultText')}

     } 

 document.querySelector('#FirstName').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#FirstName'))})
 document.querySelector('#LastName').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#LastName'))})
 document.querySelector('#EmailAdress').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#EmailAdress'))})
 document.querySelector('#Password').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#Password'))})

 document.body.addEventListener('click', function(e) {e.preventDefault(); restoreDefault()}, true)

