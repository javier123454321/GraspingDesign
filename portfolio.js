


function setInactive(button){
  // console.log('set inactive called');
  // console.log(button);
  if (button.getAttribute('class') != 'button active'){
    document.getElementsByClassName('button active')[0].setAttribute('class', 'button')
    button.setAttribute('class', 'button active')
  }}



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

// function clickToggleActive(buttons){
//   'click', () => {
//   if (elem.getAttribute('class') == 'button active'){
//       elem.addEventListener('click', setInactive(activeButton))
//     }
//   })
// }


clickToggleActive(buttons);



//
// $('button').click(some_function)
//
//
//
// function setInactive(button){
//   button.setAttribute('id', '')
// }
//
// function setActive(button){
//   button.setAttribute('id', 'active')
// }
//
// let activeButton = document.getElementsbyClassName("active")
//
// activeButton.addEventListener('click', setInactive(activeButton));
