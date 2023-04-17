var form=document.querySelector(".main__form");
var inputForm=form.querySelector(".emailInput");
var submitButton=form.querySelector(".submitButton");
var hero=document.querySelector(".main__hero");

var es_valido=true;


inputForm.addEventListener("blur",()=>{

    if(form.checkValidity()==true)  {
        inputForm.classList.remove("emailInput--invalid");
        form.classList.remove("main__form--invalid");
        hero.classList.remove("hero--overlay");
    }
   else {
    inputForm.classList.add("emailInput--invalid");
    form.classList.add("main__form--invalid");
    hero.classList.add("hero--overlay");
    es_valido=false;
   }


})

