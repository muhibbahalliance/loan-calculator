<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <title>Kalkulator Pinjaman Penjawat Awam</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Kalkulator Pinjaman Penjawat Awam</h1>
<p class="subtitle">
Pengiraan ini adalah anggaran berdasarkan jadual koperasi.
</p>

<div class="card">

  <!-- SECTION A -->
  <h3>Maklumat Pendapatan</h3>

  <label>Gaji Pokok + Elaun Tetap (RM)</label>
  <input type="number" id="salary" placeholder="Contoh: 5500">

  <label>Jumlah Potongan Sedia Ada (RM)</label>
  <input type="number" id="deduction" placeholder="Contoh: 2010">

  <!-- PINJAMAN -->
  <h3>Maklumat Pinjaman</h3>

  <label>Jumlah Pinjaman (RM)</label>
  <input type="number" id="loan" value="50000">

  <label>Tempoh Pembiayaan (Tahun)</label>
  <input type="number" id="tenure" value="15">

  <!-- OVERLAP -->
  <h3>Maklumat Overlap</h3>

  <label>Ada Overlap Loan?</label>
  <select id="hasOverlap">
    <option value="no">Tidak</option>
    <option value="yes">Ya</option>
  </select>

  <label>Ansuran Overlap Bulanan (RM)</label>
  <input type="number" id="overlapMonthly" value="0" placeholder="Contoh: 100">

  <label>Jumlah Baki Hutang Overlap (RM)</label>
  <input type="number" id="overlapAmount" value="0" placeholder="Contoh: 10000">

  <button onclick="calculate()">Kira</button>

  <!-- SECTION B -->
  <div class="result">
    <h2>Ringkasan Pengiraan</h2>

    <table class="summary-table">
      <tr>
        <td>Ansuran Bulanan</td>
        <td id="monthly">RM 0.00</td>
      </tr>
      <tr>
        <td>Takaful, Admin, Stamp & Legal</td>
        <td id="sumFees">RM 0.00</td>
      </tr>
      <tr>
        <td>SST</td>
        <td id="sumSST">RM 0.00</td>
      </tr>
      <tr>
        <td>Advance Installment</td>
        <td id="sumAdvance">RM 0.00</td>
      </tr>
    </table>

    <h3 class="cash-title">DAPAT TANGAN</h3>
    <p id="cash" class="cash-amount">RM 0.00</p>

    <p id="status"></p>
  </div>

</div>

<p class="disclaimer">
Penafian: Keputusan ini adalah anggaran sahaja dan tertakluk kepada kelulusan pihak koperasi dan majikan.
</p>

<script src="script.js"></script>
</body>
</html>
