function calculate() {

  // ========= INPUTS =========
  const salary = Number(document.getElementById("salary").value || 0);
  const deduction = Number(document.getElementById("deduction").value || 0);
  const loan = Number(document.getElementById("loan").value || 0);
  const tenure = Number(document.getElementById("tenure").value || 0);

  const hasOverlap = document.getElementById("hasOverlap").value;
  const overlapMonthly = Number(document.getElementById("overlapMonthly").value || 0);
  const overlapAmount = Number(document.getElementById("overlapAmount").value || 0);

  // ========= FIXED RULES (FROM EXCEL) =========
  const INTEREST_RATE = 0.0665;        // 6.65% flat
  const PAYOUT_RATE = 0.80;            // 80%
  const MAX_DEDUCTION_RATE = 0.59;     // 59%

  const TAKAFUL_ADMIN_FIXED = 10000;   // Fixed
  const SST_FIXED = 500;               // Fixed
  const ADVANCE_RATE = 0.011098;       // 1.1098%

  // ========= ANSURAN BULANAN =========
  const totalInterest = loan * INTEREST_RATE * tenure;
  const totalPayable = loan + totalInterest;
  const monthlyInstallment = totalPayable / (tenure * 12);

  // ========= SECTION A: KELAYAKAN =========
  const maxAllowed = salary * MAX_DEDUCTION_RATE;
  const available =
    maxAllowed -
    deduction -
    (hasOverlap === "yes" ? overlapMonthly : 0);

  const isEligible = monthlyInstallment <= available;

  // ========= SECTION B: TUNAI BERSIH =========
  const settlement = hasOverlap === "yes" ? overlapAmount : 0;
  const advance = loan * ADVANCE_RATE;

  const totalFees =
    TAKAFUL_ADMIN_FIXED +
    SST_FIXED +
    advance;

  const grossPayout = loan * PAYOUT_RATE;

  const cashInHand =
    grossPayout -
    settlement -
    totalFees;

  // ========= DISPLAY =========
  document.getElementById("monthly").innerText =
    "RM " + monthlyInstallment.toFixed(2);

  document.getElementById("sumFees").innerText =
    "RM " + TAKAFUL_ADMIN_FIXED.toFixed(2);

  document.getElementById("sumSST").innerText =
    "RM " + SST_FIXED.toFixed(2);

  document.getElementById("sumAdvance").innerText =
    "RM " + advance.toFixed(2);

  document.getElementById("cash").innerText =
    "RM " + cashInHand.toFixed(2);

  document.getElementById("status").innerText =
    isEligible ? "PASS" : "FAIL";
}
