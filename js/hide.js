$('.info').hide();
$('.info2').hide();
$('.hide').hide();
$('.hide1').hide();
$('.hide2').hide();
$('.hide3').hide();

$('#main').click(function () {
  $('#side').toggle(1000);
  $('.info').toggle(1000);
});
$('#side').click(function () {
  $('#main').toggle(1000);
  $('.info2').toggle(1000);
  if ($(this).hasClass('padd')) {
    $(this).removeClass('padd');
  } else {
    $(this).addClass('padd');
  }
});

$('.industry').click(function () {
  $('.hide').toggle(500);
  $('.hide1').hide();
  $('.hide2').hide();
  $('.hide3').hide();
});
$('.residential').click(function () {
  $('.hide').hide();
  $('.hide1').toggle(500);
  $('.hide2').hide();
  $('.hide3').hide();
});
$('.interior').click(function () {
  $('.hide').hide();
  $('.hide1').hide();
  $('.hide2').toggle(500);
  $('.hide3').hide();
});
$('.miscellaneous').click(function () {
  $('.hide').hide();
  $('.hide1').hide();
  $('.hide2').hide();
  $('.hide3').toggle(500);
});