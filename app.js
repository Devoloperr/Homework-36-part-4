let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newForm = new FormData(e.target);
    console.log(newForm.get("personname"));
    console.log(newForm.get("surname"));
    console.log(newForm.get("age"));
    
 })