/*
    File Name: app.js
    Full Name: Aleksandr Sokolov
    StudentID: 301139655
    Date: 2021-10-26
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

/*This function was taken from the w3schools and updated to work on my webapp*/
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementsByClassName("table")[0];
    switching = true;
    while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
    shouldSwitch = false;
    x = rows[i].getElementsByTagName("td")[0];
    y = rows[i + 1].getElementsByTagName("td")[0];
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
    shouldSwitch = true;
    break;
    }
    }
    if (shouldSwitch) {
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    }
    }
} 

window.addEventListener("load", sortTable);