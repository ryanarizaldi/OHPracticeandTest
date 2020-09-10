$(document).ready(function () {
  let i = 1;
  let pageNumber = $("#pageNum");
  pageNumber.text(i);

  $("#next").click(function () {
    let currentSlide = $(".slide.active");
    let nextSlide = currentSlide.next();

    currentSlide.fadeOut(100).removeClass("active");
    i++;
    pageNumber.text(i);

    nextSlide.fadeIn(100).addClass("active");

    if (nextSlide.length == 0) {
      // $("#next").addClass("btn-hide");
      $(".slide").first().fadeIn(100).addClass("active");
      i = 1;
      pageNumber.text(i);
    }
  });

  $("#prev").click(function () {
    let currentSlide = $(".slide.active");
    let prevSlide = currentSlide.prev();

    currentSlide.fadeOut(100).removeClass("active");
    i--;
    pageNumber.text(i);
    prevSlide.fadeIn(100).addClass("active");

    if (prevSlide.length == 0) {
      $(".slide").last().fadeIn(100).addClass("active");
      i = 3;
      pageNumber.text(i);
    }
  });
});
