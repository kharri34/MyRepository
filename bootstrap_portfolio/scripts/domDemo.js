console.log(document);

function testTheDom(){
    console.log("testing the dom");

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for(let node of nodes){
        console.log(node.textContent);
    }

    var checkingNode = document.getElementById("checking");
    //console.log(checkingNode.textContent);
    //checkingNode.textContent = "Changed!";
    balance = parseInt(checkingNode.textContent);
    console.log(balance);
    balance += 100;
    checkingNode.textContent = balance;
}

function depositChecking(){
    var td = document.getElementById("checking");
    checking = parseInt(td.textContent, 10);
    checking += 100;
    td.textContent = checking;
}

function depositSavings(){
    var td = document.getElementById("saving");
    var saving = td.textContent;
    saving = parseInt(saving, 10);
    if(saving == 0){
        var head = document.getElementById('header');
        head.textContent = "Bank Accounts";
    }
    saving += 100;
    td.textContent = saving;
}

function emptySavings(){
    var td = document.getElementById("saving");
    td.textContent = 0;
    var head = document.getElementById("header");
    head.textContent = "ALERT: Savings Empty";
}