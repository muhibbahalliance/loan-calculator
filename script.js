function calculate() {

  const salary = Number(document.getElementById("salary").value);
  const deduction = Number(document.getElementById("deduction").value);
  const loan = Number(document.getElementById("loan").value);
  const tenure = Number(document.getElementById("tenure").value);

  // COSHARE settings
  const interest = 0.0665;
  const payout = 0.8;

  const totalInterest = loan * interest * tenure;
  const totalPayable = loan + totalInterest;
  const monthly = totalPayable / (tenure * 12);

  const grossPayout = loan * payout;
  const cashInHand = grossPayout - 12480 - 11054.9;

  document.getElementById("cash").innerText =
    "RM " + cashInHand.toFixed(2);

  if (monthly <= (salary * 0.6 - deduction)) {
    document.getElementById("status").innerText = "Status: LAYAK";
  } else {
    document.getElementById("status").innerText = "Status: TIDAK LAYAK";
  }
}
