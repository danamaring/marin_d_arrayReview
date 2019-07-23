(() => {
  console.log('yadayada');

  let textContainer = document.querySelector(".text-container"),
  textButton = document.querySelector("button"),
  bioButtons = document.querySelectorAll(".bio-buttons button");


  const dataContainer = ["This ", "is ", "some ", "text "];
  const newContainer = ["This", "is", "a", "join", "method", "result"];
  const billAndTed = ["I am Bill S Preston, Esq", "And I am Ted Theodore Logan. Party on, dude!"]

  function showBioInfo() {
    arrayIndex = this.dataset.arrayref;

    textContainer.textContent = billAndTed[arrayIndex];
  }


  function joinArray() {
    textContainer.textContent = newContainer.join(" ");
  }

  dataContainer.forEach((word, index) => {
    textContainer.textContent += word;
    console.log(index);
  });

  //OLD WAY
  for (let i=0; i<dataContainer.length; i++) {
   console.log(i, dataContainer[i]);

  //apend the array contents to the paragraph tag
    textContainer.textContent += dataContainer[i];
  }

  textContainer.textContent += "I just added this with a script";
  textButton.addEventListener("click", joinArray);

  bioButtons.forEach(button => button.addEventListener("click", showBioInfo));

})();
