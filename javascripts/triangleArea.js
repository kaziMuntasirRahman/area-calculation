function triangleArea() {
  const base = parseFloat(document.getElementById('triangle-base').value);
  const height = parseFloat(document.getElementById('triangle-height').value);
  document.getElementById('triangle-area').innerText = .5*base*height.toFixed(2);
}

document.getElementById('triangle-calculate-btn').addEventListener('click', triangleArea);