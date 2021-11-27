function addExpense(){

    var expenseName = document.createElement("th");
    var expenseDate = document.createElement("th");
    var expenseAmount = document.createElement("th");

    var name = document.createTextNode(document.getElementById("expenseName").value);
    var date = document.createTextNode( document.getElementById("expenseDate").value);
    var amount = document.createTextNode(document.getElementById("expenseAmount").value);
    

    expenseName.appendChild(name);
    expenseDate.appendChild(date);
    expenseAmount.appendChild(amount);
    expenseAmount.prepend("$");
    
    var expense = document.createElement("tr");
    expense.appendChild(expenseName);
    expense.appendChild(expenseDate);
    expense.appendChild(expenseAmount);
    document.body.appendChild(expense);

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseDate").value = "";
    document.getElementById("expenseAmount").value = "";
}