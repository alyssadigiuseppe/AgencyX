(function () {
  console.log('fired!');
  //set up variables for images, headline, subtext, main content, and an empty variable called appliedClass
  var theImages = document.querySelectorAll(".image-holder"),
      theSubhead = document.querySelector(".main-copy h2"),
      theHeading = document.querySelector(".heading"),
      theSeasonText = document.querySelector(".main-copy p"),
      appliedClass;

function changeElements() {
  //take the id of the clicked element, use it to retrieve the correct content and then replace it
  //remove the class so it can update
  theSubhead.classList.remove(appliedClass);
  theHeading.classList.remove(appliedClass);
  //change the color
  theSubhead.classList.add(this.id);
  theHeading.classList.add(this.id);

  appliedClass = this.id;

  //changing content
theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;


}

      [].forEach.call(theImages, function(image){ //array data type, for each one of the images, pass thru one at a time
        image.addEventListener('click', changeElements, false);
      });

})();
