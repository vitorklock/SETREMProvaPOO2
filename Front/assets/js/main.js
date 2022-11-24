
$(document).ready(async () => {

    let reqSuppliers = await fetch("http://localhost:8080/supplier"),
        suppliers = await reqSuppliers.json();

    console.log(suppliers)

    for (let supplier of suppliers) {
        let transactions = [];

        for (let i of supplier.transactions) {
            console.log(i)
            let transactionIndex = suppliers.transactions[i];
            console.log("teste")
            console.log(transactionIndex)

            let reqTransaction = await fetch(`http://localhost:8080/transaction/${transactionIndex}`),
                transaction = await reqTransaction.json();
            transactions.push(transaction);
            console.log(transaction)
        }
    }
    console.log(transactions)

});