function pentagonArea() {
  const a = parseFloat(document.getElementById('pentagon-side').value);
  let area = document.getElementById('pentagon-area');
  area.innerHTML = (0.25*Math.sqrt(5*(5+2*Math.sqrt(5)))*a*a).toFixed(2);
}

document.getElementById('pentagon-calculate-btn').addEventListener('click', pentagonArea);