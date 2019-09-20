
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
    btns[i].addEventListener('click', function(){
      console.log(this.parentElement.nextElementSibling);
      this.parentElement.nextElementSibling.style.display = "block";
    })

    closeModal[i].addEventListener('click', function(){
      this.parentElement.parentElement.parentElement.style.display = "none";
    })

    window.onclick = function(event) {
      let modal = document.getElementsByClassName("modal")
      for (i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
          modal[i].style.display = "none";
        }
      }
    }

  }
}



setModals();
