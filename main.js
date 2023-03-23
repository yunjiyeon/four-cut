function showText(number){
  if (number === 1) {
    document.querySelector("#desc1").classList.remove("hideText");
    document.querySelector("#desc1").classList.add("showText");
  } else if (number === 2){
    document.querySelector("#desc2").classList.remove("hideText");
    document.querySelector("#desc2").classList.add("showText");
  } else {
    document.querySelector("#desc3").classList.remove("hideText");
    document.querySelector("#desc3").classList.add("showText");
  }
}

function hideText(number){
  if (number === 1) {
    document.querySelector("#desc1").classList.remove("showText");
    document.querySelector("#desc1").classList.add("hideText");
  } else if (number === 2){
    document.querySelector("#desc2").classList.remove("showText");
    document.querySelector("#desc2").classList.add("hideText");
  } else {
    document.querySelector("#desc3").classList.remove("showText");
    document.querySelector("#desc3").classList.add("hideText");
  }
}

function alertText(number){
  alert(`wavve에서 만나요! 😊`);
}