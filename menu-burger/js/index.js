document.addEventListener('click', documentActions);

function documentActions(e){
  const targetElement = e.target
  if(targetElement.closest('.header__burger')){
    document.body.classList.toggle('menu-open')
  }
}