function addExpense(){
    var table = document.getElementById("expenseTable");
    var row = table.insertRow(-1); // create new row
    var cellOne = row.insertCell(0); // create <td> elements
    var cellTwo = row.insertCell(1);
    var cellThree = row.insertCell(2); 
    var cellFour = row.insertCell(3);

    var clearButton = document.createElement("button"); // submit is default action for buttons.
    clearButton.innerHTML = "X";                      // force form to return false to counteract
    clearButton.setAttribute("class","clearButton");
    clearButton.addEventListener("click", clearExpense);

    cellOne.innerHTML = document.getElementById("expenseName").value;
    cellTwo.innerHTML = document.getElementById("expenseDate").value;
    cellThree.innerHTML = "$" + document.getElementById("expenseAmount").value;
    cellFour.appendChild(clearButton);

    document.getElementById("expenseName").value = ""; // reset text field to empty
    document.getElementById("expenseDate").value = "";
    document.getElementById("expenseAmount").value = "";

}

// clears singular expense
function clearExpense(){
    var x = this.parentNode.parentNode.rowIndex; // Row index
    document.getElementById("expenseTable").deleteRow(x); // remove row
}