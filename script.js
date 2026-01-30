function calculate() {

  // 1. USER INPUTS
  const salary = Number(document.getElementById("salary").value || 0);
  const deduction = Number(document.getElementById("deduction").value || 0);
  const loan = Number(document.getElementById("loan").value || 0);
  const tenure = Number(document.getElementById("tenure").value || 0);

  const hasOverlap = document.getElementById("hasOverlap").value;
  const overlapAmount = Number(document.getElementById("overlapAmount").value || 0);

  const fees = Number(document.getElementById("fees").value || 0);
  const advance = Number(document.getElementById("advance").value || 0);

  // 2. PRODUCT SETTINGS (COSHARE)
  const INTEREST_RATE = 0.0665;   // 6.65% flat p.a
  const PAYOUT_RATE = 0.80;       // 80%
  const MAX_DEDUCTION_RATE = 0.60;

  // 3. MONTHLY INSTALLMENT (FLAT RATE)
  const totalInterest = loan * INTEREST_RATE * tenure;
  const totalPayable = loan + totalInterest;
  const monthlyInstallment = totalPayable / (tenure * 12);

  // 4. ELIGIBILITY CHECK
  const maxAllowedDeduction = salary * MAX_DEDUCTION_RATE;
  const availableForLoan = maxAllowedDeduction - deduction;
  const isEligible = monthlyInstallment <= availableForLoan;

  // 5. OVERLAP
  const settlement = hasOverlap === "yes" ? overlapAmount : 0;

  // 6. CASH IN HAND
  const grossPayout = loan * PAYOUT_RATE;
  const cashInHand =
    grossPayout -
    settlement -
    fees -
    advance;

  // 7. DISPLAY RESULT
  document.getElementById("cash").innerText =
    "RM " + cashInHand.toFixed(2);

  document.getElementById("status").innerText =
    isEligible
      ? "Status: LAYAK"
      : "Status: TIDAK LAYAK (Potongan Melebihi Had)";
}
