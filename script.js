let toggleBtn = document.getElementById('switch');
let label = document.querySelector('.form-check-label');
document.querySelector('.sidebar .menu-toggle').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('active')
});

// themeToggleBtn.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark-mode');
// });

toggleBtn.addEventListener('click',()=>{
   document.body.classList.toggle('dark-mode');
   if(label.innerHTML === 'Dark Mode'){
    label.innerHTML = 'Light Mode';
   }
   else{
    label.innerHTML = 'Dark Mode'
   }
});

// document.addEventListener('mousemove',(e)=>{
//     let cursor = document.getElementById('followingCursor');
//     let x = e.clientX;
//     let y = e.clientY;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// });