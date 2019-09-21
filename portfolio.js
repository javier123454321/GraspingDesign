
// Setting up the menu bar to search for Portfolio projects based on category
function setInactive(button){
  if (button.getAttribute('class') != 'button active'){
    document.getElementsByClassName('button active')[0].setAttribute('class', 'button')
    button.setAttribute('class', 'button active')
  }
}

let buttons = document.getElementsByClassName("button");

function clickToggleActive(buttons){
  console.log(buttons);
  for (i = 0; i < buttons.length; i++) {
    // console.log(buttons[i]);
    buttons[i].addEventListener('click', function(){
      console.log('clicked ' + this.getAttribute('name'));

      setInactive(this)});
  };
 }

clickToggleActive(buttons);

function narrowPortfolio(buttonName){
  if (buttonName == 'allButton'){

  }
}


function setModals(){

  var btns = document.getElementsByClassName("portfolioProject");
  var closeModal = document.getElementsByClassName("close");

  for (i = 0; i < btns.length; i++) {

    let activeButton = btns[i];
    let activeModal = activeButton.parentElement.nextElementSibling;

    activeButton.addEventListener('click', function(){
      activeModal.style.display = "block";
      // activeModal.children[0].classList.add("showModal");
      setTimeout(translateModal, 1, activeModal);
    }, false)

    closeModal[i].addEventListener('click', function(){
      this.parentElement.parentElement.parentElement.style.display = "none";
      setTimeout(unTranslateModal, 1, activeModal);
      // activeModal.children[0].classList.remove("showModal")
    })

    window.onclick = function(event) {
      let modal = document.getElementsByClassName("modal")
      for (i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
          modal[i].style.display = "none";
          setTimeout(unTranslateModal, 1, modal[i]);
        }
      }
    }
  }
}

function translateModal(modal){
  modal.children[0].style.transform = "translatex(-50%)";
  console.log("translateModal fired");
}

function unTranslateModal(modal){
  modal.children[0].style.transform = "translatex(-150%)";
  console.log("unTranslateModal fired");
}


setModals();
