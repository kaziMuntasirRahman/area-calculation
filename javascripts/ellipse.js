function ellipseArea() {
  const semiMajor = parseFloat(document.getElementById('ellipse-major').value);
  const semiMinor = parseFloat(document.getElementById('ellipse-minor').value);
  document.getElementById('ellipse-area').innerText = Math.PI*semiMajor*semiMinor.toFixed(2);
}

document.getElementById('ellipse-calculate-btn').addEventListener('click', ellipseArea);