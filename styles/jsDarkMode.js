const body = document.getElementById("body");
const tittle = document.getElementById("tittle");
const boton = document.getElementById("boton");

boton.addEventListener ('click', (e) => {
    e.preventDefault;

    if(body.classList.contains("lightMode")){
        body.classList.remove("lightMode");
        body.classList.add("darkMode");

        tittle.textContent = 'Dark Mode';
    }else{
        body.classList.add("lightMode");
        body.classList.remove("darkMode");

        tittle.textContent = 'Light Mode';
    }

});