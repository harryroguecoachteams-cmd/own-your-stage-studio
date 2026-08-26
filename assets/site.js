const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
if(menuBtn && nav){
  menuBtn.addEventListener('click',()=>{
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open ? 'true':'false');
  });
}

document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const msg=form.querySelector('.form-note');
    if(msg) msg.textContent='Prototype form only. Connect this form to the final GHL workflow before launch.';
  });
});
