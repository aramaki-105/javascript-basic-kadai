const editBtn = document.getElementById('btn');
const h2Text = document.getElementById('text');

editBtn.addEventListener('click',  () => {
  setTimeout(() => {
    h2Text.textContent = 'ボタンをクリックしました';
  },2000);
  });