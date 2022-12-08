import { appBD } from './app/app.js';

document.addEventListener("DOMContentLoaded", function(event) {
    let viewDB = new appBD

    viewDB.run();

    window.onhashchange = function(){
        if (window.location.hash == "#viewDB"){
            let viewDB = new appBD

            viewDB.run();
            //personalización
            document.getElementById("viewDB").children[0].classList.add("bg-verde", "text-white")
        }
    }


});