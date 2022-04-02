import { appBD } from './app/app.js';

document.addEventListener("DOMContentLoaded", function(event) {
    let viewDB = new appBD

    viewDB.run();
});