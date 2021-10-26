/*
    File Name: app.js
    Full Name: Aleksandr Sokolov
    StudentID: 301139655
    Date: 2021-10-06
*/

// IIFE - Immediately Invoked Function Expression
(function() {

    function Start(){
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
        
    }

    window.addEventListener("load", Start);
})();