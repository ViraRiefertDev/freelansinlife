document.addEventListener('click', documentActions);

function documentActions(e){
  const targetElement = e.target
  if(targetElement.closest('.menu-burger')){
    document.body.classList.toggle('menu-open')
  }
}