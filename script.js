const silder = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));
let isDragging = false;
slides.forEach((slide, index) => {
  //  prevent image draging
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  //                                                            Touch Event for Mobile

  //  When touch on the device
  slide.addEventListener("touchstart", touchStart(index));
  //   when touch up from the device
  slide.addEventListener("touchend", touchEnd);
  // When moving your finger arround the screen
  slide.addEventListener("touchmove", touchMove);

  //                                                            Mouse Event for Website

  // when click on the image
  slide.addEventListener("mousedown", touchStart(index));
  //  when click up
  slide.addEventListener("mouseup", touchEnd);
  //   when the mouse point over the screen
  slide.addEventListener("mouseleave", touchEnd);
  // When moving your fingmouse arround the screen
  slide.addEventListener("mousemove", touchMove);
});

// Stop the properties popup when click moues's right
window.oncontextmenu = function(event){
event.preventDefault();
event.stopPropagation()
return false


}

function touchStart(index) {
  return function (event) {
    console.log("start");
    isDragging = true;
  };
}
function touchEnd() {
  console.log("end");
  isDragging = false;
}
function touchMove() {
  if (isDragging) {
    console.log("move");
  }
}
