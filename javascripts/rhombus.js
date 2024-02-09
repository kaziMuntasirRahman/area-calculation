function rhombusArea() {
  const base = parseFloat(document.getElementById('rhombus-base').value);
  const height = parseFloat(document.getElementById('rhombus-height').value);
  document.getElementById('rhombus-area').innerText = base*height.toFixed(2);
}

document.getElementById('rhombus-calculate-btn').addEventListener('click', rhombusArea);