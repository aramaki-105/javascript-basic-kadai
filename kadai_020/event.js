const editBtn = document.getElementById('btn');
const h2Text = document.getElementById('text'); 

editBtn.addEventListener('click', () => {
   h2Text.textContent = 'ボタンをクリックしました'
});