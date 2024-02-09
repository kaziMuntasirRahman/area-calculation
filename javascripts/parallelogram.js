function parallelogramArea() {
  const base = parseFloat(document.getElementById('parallelogram-base').value);
  const height = parseFloat(document.getElementById('parallelogram-height').value);
  document.getElementById('parallelogram-area').innerText = base*height.toFixed(2);
}

document.getElementById('parallelogram-calculate-btn').addEventListener('click', parallelogramArea);