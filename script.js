document.getElementById("calculate").addEventListener('click', function () {

    const loanAmount = document.getElementById("loanAmount")
    const interestRate = document.getElementById("interestRate")
    const loanTerm = document.getElementById("loanTerm")


    const loanAmountInput = parseInt(loanAmount.value);
    const interestRateInput = parseInt(interestRate.value);
    const loanTermInput = parseInt(loanTerm.value);


    let result;


    if (isNaN(loanAmountInput)){
        alert("please input loanAmount")
    }

    else if (isNaN(interestRateInput)){
        alert("please input ineterestRate")
    }

    else if (isNaN(loanTermInput)){
        alert("please input loanTerm")
    }

    const monthyInterest = (interestRateInput / 100) / 12;
    const numPayment = loanTermInput;
    const monthlyPayment = (loanAmountInput * monthyInterest);


     result = document.getElementById("result").innerHTML = `your monthly interest is${monthyInterest} and monthly payment is ${monthlyPayment} ${result}`
    
});