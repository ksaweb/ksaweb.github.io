// заміна на компанію з списку
var p = document.getElementById('title2');
var p2 = document.getElementById('name_right');

function f1() { p.innerHTML = 'КОНКУРЕНТ 1' 
                p2.innerHTML = 'КОНКУРЕНТ 1'}
function f2() { p.innerHTML = 'КОНКУРЕНТ 2' 
                p2.innerHTML = 'КОНКУРЕНТ 2'}
function f3() { p.innerHTML = 'КОНКУРЕНТ 3' 
                p2.innerHTML = 'КОНКУРЕНТ 3'}
function f4() { p.innerHTML = 'КОНКУРЕНТ 4' 
                p2.innerHTML = 'КОНКУРЕНТ 4'}
function f5() { p.innerHTML = 'КОНКУРЕНТ 5' 
                p2.innerHTML = 'КОНКУРЕНТ 5'}


// Розрахунок
function f9() {

  var e = document.getElementById('input_left').value;
  var ee = document.getElementById('input_right').value;
  var d = document.getElementById('input_hrn_left');
  var dd = document.getElementById('input_hrn_right');
  var s = document.getElementById('suma');
  var proz = document.getElementById('economy');
  var row = document.getElementById('row');
  var row2 = document.getElementById('row2');
  
  e = parseInt(e);
  ee = parseInt(ee);
   
  var res1 = e*9;
  var res2 = ee*18;
  var res3=res2-res1;
  var res4=res2*100/res1;
  res4=parseInt(res4);

  d.innerHTML = res1+ 'грн'
  dd.innerHTML = res2+ 'грн' 
  s.innerHTML = res3+ ' грн'
  proz.innerHTML = res4+ ' %'
 
  if (e<1) {
    document.getElementById("error1").style="display:block"
  }
  else if (ee<1) {
    document.getElementById("error2").style="display:block"
  }
  else if (res2<res1) {
    document.getElementById("row").style="display:none"
    document.getElementById("row2").style="display:block"
  }
}

// розгортання/згортання вікна з компаніями + інпути
$(document).ready(function(){
 	$('.btn_dn').click(function (){
 		 $(this).parent().children('.companies').slideDown();
 		 $(this).parent().children('.btn_up').slideDown();
  		return false;
 	});
	 $('.btn_up').click(function (){
 		 $(this).parent().children('.companies').slideUp();
 		 $(this).parent().children('.btn_up').slideUp();
  		return false;
	 });
	$('.names').click(function f6 (){
 		$('.companies').slideUp();
 	  $('.btn_up').slideUp();
  	$('.input').slideDown();
   	});

  $('.central_btn').click(function f7 (){
 		
    $('.modal').slideDown();
    $('.close').slideDown();
    
  });

    // $('input').keyup(function(){
    //   if(($('.input_right').val().length > 0) && ($('.input_left').val().length > 0))
    //     $(".central_btn").prop('disabled', false);
    //   else
    //     $(".central_btn").prop('disabled', true);
    // });

    // if(name.length != 0 || email.length != 0 ) {
    //     $('#central_btn').removeAttr('disabled');
    // }
    // else {
    //     $('#central_btn').attr('disabled', 'disabled');
    // }
  
  $('.close').click(function f8 (){
    $('.modal').slideUp();
    $('.close').slideUp();
  });
});

// Убираем placeholder при клике по input
 $(document).ready(function () {
 $('input').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

// ввід цифр з кнопок

$(document).ready(function () {

    // VARIABLES
    var calc = $('.calculator');
    var calcDisplay1 = calc.find('.input_left');
    var calcDisplay = calc.find('.input_right');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcSpace = calc.find('.calculator__backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

     // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
      ('input_left').focus(function(){
 
        calcDisplay1.val( calcDisplay1.val() + $(this).attr('value') );

    });
      ('input_right').focus(function(){
 
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );

    });
    });

     // BACKSPACE BUTTON
    calcSpace.on('click', function () { // https://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().slice(0, calcDisplay.val().length-1) );
    });


});



    
   
