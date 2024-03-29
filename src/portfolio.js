
// Setting up the menu bar to search for Portfolio projects based on category
function toggleActiveMenu(button){
  if (button.getAttribute('class') != 'menuButton active'){
    document.getElementsByClassName('menuButton active')[0].setAttribute('class', 'menuButton')
    button.setAttribute('class', 'menuButton active')
  }
}

let buttons = document.getElementsByClassName("menuButton");

function clickToggleActiveMenu(buttons){
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
      console.log('clicked ' + this.getAttribute('name'));
      toggleActiveMenu(this)
      selectPortfolio(this.getAttribute('name'))});
  };
 }

function selectPortfolio(buttonName){
 // Makes it so that every project that is not of the category that was clicked become unclickable
 // It changes the styling in those projects to indicate its unclickability by adding class 'offProject'
 // it changes the styling on the clickable buttons to reinforce  their clickability by adding class 'onProject'

   let projects = document.getElementsByClassName('portfolioProject')

   if (buttonName != 'allButton'){
     for (i = 0; i < projects.length; i++){

       if(projects[i].classList.contains(buttonName)){
         projects[i].classList.remove('offProject');
         projects[i].classList.add('onProject');
       } else {
         projects[i].classList.remove('onProject');
         projects[i].classList.add('offProject');
          }
        }

  }else{
        // the allButton resets the classes of all
        for (i = 0; i < projects.length; i++){
          projects[i].classList.remove('offProject');
          projects[i].classList.remove('onProject');
          }
      }
   }

function setModals(){

  var btns = document.getElementsByClassName("portfolioProject");
  var closeModal = document.getElementsByClassName("close");

  for (i = 0; i < btns.length; i++) {

    let activeButton = btns[i];
    let activeModal = activeButton.parentElement.nextElementSibling;

    activeButton.addEventListener('click', function(){
      if(activeButton.classList.contains("offProject")){
        return;
      }else{
        activeModal.style.display = "block";
        setTimeout(function(){slideInModal(activeModal)}, 10)
      };
    }, false)

    closeModal[i].addEventListener('click', function(){


      setTimeout(function(){
        slideOutModal(activeModal);
        }, 1, activeModal);
      this.parentElement.parentElement.parentElement.style.display = "none";
    })

    window.onclick = function(event) {
      let modal = document.getElementsByClassName("modal")
      for (i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
          slideOutModal(modal[i])
          modal[i].style.display = "none";
}}}}}

function slideInModal(modal){
  modal.children[0].style.transform = "translatex(-50%)";
  console.log("slideIn called");
}

function slideOutModal(modal){
  modal.children[0].style.transform = "translatex(-150%)";
  console.log("slideOut called");
}
//********************************Set event Listeners, etc*******************************//
clickToggleActiveMenu(buttons);
setModals();
