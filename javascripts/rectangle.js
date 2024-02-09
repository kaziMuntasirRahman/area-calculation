function rectangleArea() {
  const length = parseFloat(document.getElementById('rectangle-length').value);
  const width = parseFloat(document.getElementById('rectangle-width').value);
  document.getElementById('rectangle-area').innerText = length*width.toFixed(2);
}

document.getElementById('rectangle-calculate-btn').addEventListener('click', rectangleArea);