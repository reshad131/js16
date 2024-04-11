let rowNum = 1;

document.getElementById("addButton").addEventListener("click", function() {
    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(-1);
    newRow.insertCell(0).innerHTML = rowNum++;
    newRow.insertCell(1).innerHTML = '<input type="text" class="nameInput" placeholder="Adı daxil et">';
    newRow.insertCell(2).innerHTML = '<input type="text" class="surnameInput" placeholder="Soyadı daxil et">';
    newRow.insertCell(3).innerHTML = '<input type="number" class="ageInput" placeholder="Yaşı daxil et">';
    newRow.insertCell(4).innerHTML = '<button class="saveButton">Yadda saxla</button>';
});

document.getElementById("myTable").addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("saveButton")) {
        let row = e.target.parentNode.parentNode;
        let name = row.querySelector(".nameInput").value;
        let surname = row.querySelector(".surnameInput").value;
        let age = row.querySelector(".ageInput").value;
        console.log("Name:", name, "Surname:", surname, "Age:", age);
    }
});
