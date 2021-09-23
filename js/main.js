function changePage() {
  location.href = 'https://incognizuu.github.io/finalprogDT/products.html';
}
var x = document.getElementById('p1');
var y = document.getElementById('p2');
var z = document.getElementById('p3');
function pg1() {
  x.style.display = 'flex';
  y.style.display = 'none';
  z.style.display = 'none';
}
function pg2() {
  x.style.display = 'none';
  y.style.display = 'flex';
  z.style.display = 'none';
}
function pg3() {
  x.style.display = 'none';
  y.style.display = 'none';
  z.style.display = 'flex';
}
