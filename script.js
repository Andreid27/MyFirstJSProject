 function makeDefault(element){
        element.value = ``
        element.classList.remove('defaultText');
        element.classList.add("ActiveText")
        console.log(element)
 }
 document.querySelector('#FirstName').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#FirstName'))})
 document.querySelector('#LastName').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#LastName'))})
 document.querySelector('#EmailAdress').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#EmailAdress'))})
 document.querySelector('#Password').addEventListener('click',function(e) {e.preventDefault(); makeDefault(document.querySelector('#Password'))})