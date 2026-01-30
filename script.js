function calculate() {

  // INPUTS
  const salary = Number(document.getElementById("salary").value || 0);
  const deduction = Number(document.getElementById("deduction").value || 0);
  const loan = Number(document.getElementById("loan").value || 0);
  const tenure = Number(document.getElementById("tenure").value || 0);

  const hasOverlap = document.getElementById("hasOverlap").value;
  const overlapAmount = Number(document.getElementById("overlapAmount").value || 0);

  // CONSTANTS (EXCEL RULES)
  const INTEREST_RATE = 0.0665;
  const PAYOUT_RATE = 0.80;
  const MAX_DEDUCTION_RATE = 0.60;
  const OTHER_FEES_RATE = 0.20;
  const ADVANCE_RATE = 0.011098;
  const SST_RATE = 0.08;

  // INSTALLMENT (FLAT)
  const totalInterest = loan * INTEREST_RATE * tenure;
  const totalPayable = loan + totalInterest;
  const monthlyInstallment = totalPayable / (tenure * 12);

  // ELIGIBILITY
  const maxAllowed = salary * MAX_DEDUCTION_RATE;
  const available = maxAllowed - deduction;
  const isEligible = monthlyInstallment <= available;

  // OVERLAP
  const settlement = hasOverlap === "yes" ? overlapAmount : 0;

  // AUTO FEES
  const otherFees = loan * OTHER_FEES_RATE;
  const sst = otherFees * SST_RATE;
  const advance = loan * ADVANCE_RATE;

  const totalFees = otherFees + sst + advance;

  // CASH IN HAND
  const grossPayout = loan * PAYOUT_RATE;
  const cashInHand = grossPayout - settlement - totalFees;

  // DISPLAY
  document.getElementById("monthly").innerText = "RM " + monthlyInstallment.toFixed(2);
  document.getElementById("sumFees").innerText = "RM " + otherFees.toFixed(2);
  document.getElementById("sumSST").innerText = "RM " + sst.toFixed(2);
  document.getElementById("sumAdvance").innerText = "RM " + advance.toFixed(2);
  document.getElementById("cash").innerText = "RM " + cashInHand.toFixed(2);

  document.getElementById("status").innerText =
    isEligible ? "Status: LAYAK" : "Status: TIDAK LAYAK (Potongan Melebihi Had)";
}
