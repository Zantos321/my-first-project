$(".job-1").click(function () {
  $(".para-text-1").toggle("fast");
  $(".chev-right-1").toggle();
  $(".chev-down-1").toggle();
});

$(".job-2").click(function () {
  $(".para-text-2").toggle("fast");
  $(".chev-right-2").toggle();
  $(".chev-down-2").toggle();
});

$(".job-3").click(function () {
  $(".para-text-3").toggle("fast");
  $(".chev-right-3").toggle();
  $(".chev-down-3").toggle();
});

$("#professional").click(function () {
  $("#email-send").html("Email professional request");
});

$("#personal").click(function () {
  $("#email-send").html("Email personal request");
});

$("#email-text").keypress(function () {
  $("#email-send").removeAttr("disabled");
});

$("#human-validation").click(function () {
  $("#human-validation").removeClass("is-invalid");
});

$("#email-send").click(function () {
  window.open(
    "mailto:eljoe1985@gmail.com?subject=Hi&body=" + $("#email-text").val(),
    "_blank"
  );
});
// this is a change