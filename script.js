document.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Save as PDF via system print dialog (cleaned with @media print)
  const btn = document.getElementById('downloadPdfBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      // Ensure any accordions or dynamic content are expanded before print if needed
      window.print();
    });
  }
});
