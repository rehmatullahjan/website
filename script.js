let formVisible=false;

function showForm(){
    let form =
    document.querySelector('#registrationForm');
    if(!formVisible){
        form.style.display = 'block';
        formVisibe = true; 
    } else{
        form.style.display ='none';
        formVisibe = false;
    }
   
}
showForm();