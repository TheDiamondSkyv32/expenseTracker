function addExpense(){
    var table = document.getElementById("expenseTable");
    var row = table.insertRow(-1); // create new row
    var cellOne = row.insertCell(0); // create <td> elements
    var cellTwo = row.insertCell(1);
    var cellThree = row.insertCell(2); 
    
    cellOne.innerHTML = document.getElementById("expenseName").value;
    cellTwo.innerHTML = document.getElementById("expenseDate").value;
    cellThree.innerHTML = "$" + document.getElementById("expenseAmount").value;

    document.getElementById("expenseName").value = ""; // reset text field to empty
    document.getElementById("expenseDate").value = "";
    document.getElementById("expenseAmount").value = "";
}