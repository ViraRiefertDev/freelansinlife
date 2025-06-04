document.addEventListener('click', documentActions);

function documentActions(e){
  const targetElement = e.target
  if(targetElement.closest('.burger-icon')){
    document.body.classList.toggle('menu-open')
  }
}