$(window).on('load', function() {
  $('#myModal').modal('show');
	function explode(){
 		$('#pop').removeClass('d-none');
		$('#pop').addClass('fadeIn');
		$('.hand-phone').addClass('bounceInUp')
		
}
	
//	hiding biz creator
	
	$('#create-next').on('click', function(){
		bizinfo_hide();
	});
	$('#location-next').on('click', function(){
		location_hide();
	});
	$('#owners-next').on('click', function(){
		owner_hide();
	});
	
//	span clicking
	
	
	$('.start-clickable').on('click', function(){
		bizinfo_hide2();
		
	});
	
	// Get the element, add a click listener...
	document.getElementById("point-indicator").addEventListener("click", function(e) {
	    // e.target is the CHANGING Element!
	    // If it was an input item
	    if(e.target && e.target.matches(".location-clickable")) {
		// List item found!  Output the ID!
		location_hide();
	}
});
	
	// Get the element, add a click listener...
	document.getElementById("point-indicator").addEventListener("click", function(e) {
	    // e.target is the CHANGING Element!
	    // If it was an input item
	    if(e.target && e.target.matches(".info-clickable")) {
		// List item found!  Output the ID!
		bizinfo_hide();
	}
});
	
	
	// Get the element, add a click listener...
	document.getElementById("activity-btns").addEventListener("click", function(e) {
	    // e.target is the CHANGING Element!
	    // If it was an input item
	    if(e.target && e.target.matches(".text-prev")) {
		// List item found!  Output the ID!
		
		location_hide();
	}
});
	
	// Get the element, add a click listener...
	document.getElementById("location-btns").addEventListener("click", function(e) {
	    // e.target is the CHANGING Element!
	    // If it was an input item
	    if(e.target && e.target.matches(".text-prev")) {
		// List item found!  Output the ID!
		
		bizinfo_hide2();
	}
});
	
	// Get the element, add a click listener...
	document.getElementById("owner-btns").addEventListener("click", function(e) {
	    // e.target is the CHANGING Element!
	    // If it was an input item
	    if(e.target && e.target.matches(".text-prev")) {
		// List item found!  Output the ID!
		
		bizinfo_hide();
	}
});
	
	$('location-info .text-prev').on('click',function(){
		bizinfo_hide2();
	});
	
	
//	$('#activity-next').on('click', function(){
//		activity_hide();
//	});
	function bizinfo_hide2(){
//			$('.biz-info').addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
			$('.biz-info').removeClass('d-none').removeClass('bounceOutRight').addClass('bounceInLeft').siblings().addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
			$('.point-indicator span').eq(0).addClass('active').addClass('start-clickable').siblings().removeClass('active');
		}
	
		function bizinfo_hide(){
//			$('.biz-info').addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
			$('.location-info').removeClass('d-none').removeClass('bounceOutRight').addClass('bounceInLeft').siblings().addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
			$('.point-indicator span').eq(1).addClass('active').addClass('info-clickable').siblings().removeClass('active');
		}
	
		function location_hide(){
			$('.owners-info').removeClass('d-none').removeClass('bounceOutRight').addClass('bounceInLeft').siblings().addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
			$('.point-indicator span').eq(2).addClass('active').addClass('location-clickable').siblings().removeClass('active');
		}
		function owner_hide(){
			$('.activity-info').removeClass('d-none').removeClass('bounceOutRight').addClass('bounceInLeft').siblings().addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
			$('.point-indicator span').eq(3).addClass('active').addClass('owner-clickable').siblings().removeClass('active');
		}
//	function owner_hide(){
//			$('.activity-info').addClass('d-none').addClass('bounceOutRight').removeClass('bounceInLeft');
//			$('.activity-info').removeClass('d-none').removeClass('bounceOutRight').addClass('bounceInLeft');
//		}
	
	
	
	
	function popitem(){
		$('.pop-item').addClass('tada');
	}
setTimeout(explode, 5000);
	setTimeout(popitem, 5200);
	
	$('.close-pop').on('click',function(){
		closepop();
	});
	
	$('#close-pricepop').on('click',function(){
		closepaypop();
	});
	
	
	
	function closepop(){
		setTimeout($('#pop').addClass('d-none'),2000);		
		$('#pop').removeClass('fadeIn');
		$('.pop-item').removeClass('tada');
		
		$('#pop').addClass('zoomOut');
		$('.pop-item').addClass('rollOut');
		
	}
	
	function closereceiptform(){
		setTimeout($('#search-receipt').addClass('d-none'),2000);		
		$('#search-receipt').removeClass('fadeIn');
		$('#get-receipt-container').removeClass('tada');
		
		$('#search-receipt').addClass('zoomOut');
		$('#get-receipt-container').addClass('rollOut');
		
	}
	
	
	function closepaypop(){
		$('#pay-confirmation-pop').addClass('d-none');
		$('#pay-confirmation-pop').removeClass(' zoomOut');
	}
	
	
	function showreceiptform(){
		$('#search-receipt').removeClass('zoomOut');
		$('#search-receipt').removeClass('d-none');
		$('#search-receipt').addClass('fadeIn');
		$('#get-receipt-container').removeClass('rollOut');
		$('#get-receipt-container').addClass('tada');
	}
	
	$('.close-receipt-form').on('click',function(){
		closereceiptform();
	});
	
	$('#get-a-receipt').on('click',function(){
		showreceiptform();
	});
	
	$('.get-a-receipt').on('click',function(){
		showreceiptform();
	});
	
	
});

(function($) {

  function closesublinks() {
    $(".construction1").addClass("left");
    $(".wallet1").addClass("left");
    $(".parking1").addClass("left");
    $(".rent1").addClass("left");
    $(".unified-biz-permit1").addClass("left");
    $('.land-rate1').addClass("left");

  }

  $(".option").on("click", function() {
    checkWidth();
  });
  $(".hidden-links-container").on("click", function() {
    $(this).hide();
  });

  function checkWidth() {
    var windowSize = $(window).width();

    if (windowSize < 993) {
      $(".hidden-links-container").css("display", "flex");
    }
  }

  // Execute on load

  $(".option").on("click", function() {
    closesublinks();
    $(this).addClass("active").siblings().removeClass("active");
    $(this).children(".active-triangle").removeClass("display-none");
    $(this).siblings().children(".active-triangle").addClass("display-none");
  });

  $('.business-permit').on("click", function() {
    $('.unified-biz-permit1').removeClass("left");
  });

  $('.construction').on("click", function() {
    closesublinks();
    $('.construction1').removeClass("left");
  });

  $('.E-Wallet').on("click", function() {
    $('.wallet1').removeClass("left");
  });

  $('.rents').on("click", function() {
    $('.rent1').removeClass("left");
  });

  $('.parking').on("click", function() {
    $('.parking1').removeClass("left");
  });

  $('.land-rates').on("click", function() {
    $('.land-rate1').removeClass("left");
  });

  $(".name-discount").on("click", function() {
    $(".toogle-user-container").slideToggle();
  });

  $(".dp").on("click", function() {
    $(".toogle-user-container").slideToggle();
  });

  $(".toogle-user-container").on("click", function() {
    $(".toogle-user-container").slideUp();
  });

  //	payment methods mpesa direct
  $(".m-pesa-direct").on("click", function() {
    $(".m-pesa-direct-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".direct-indicator").css("opacity", "1");


  });

  //	payment methods mpesa standard
  $(".mpesa-standard").on("click", function() {
    $(".m-pesa-standard-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".std-indicator").css("opacity", "1");
  });

  //	payment methods credits
  $(".viza-master").on("click", function() {
    $(".credit-payment-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".visa-indicator").css("opacity", "1");
  });

  //	payment methods airtel
  $(".airtell").on("click", function() {
    $(".airtell-inputs").slideToggle().siblings(".payment-details").slideUp();
    $(this).siblings().children("span").css("opacity", "0");
    $(".airtel-indicator").css("opacity", "1");
  });
	
	
	$('.user-nav .wrap').on('click', function(){
		$('.user-nav .wrap').removeClass('display-tri');
		$('.user-nav .wrap').removeClass('active-item')
		$(this).addClass('display-tri');
		$(this).addClass('active-item');
	});
	
	$('.acount-details-form input').on('change', function(){
		$('.submit-btn').prop("disabled", false);
	})



})(jQuery);

$(document).ready(function() {
  // Toggles the side menu and overlay
  $('.toogle-btn').on('click', function() {
    $(".overlay").toggleClass("display-none");
    // $('.toogle-menu-container').toggleClass('hide show');
  })

  // Closes the side menu and removes the overlay when the overlay is clicked
  $('.overlay').on('click', function() {
    // $('.toogle-menu-container').toggleClass('hide show');
    $(".overlay").toggleClass("display-none");
  })

  // ScrollMagic for Options
  var controller = new ScrollMagic.Controller();
  var ourScene = new ScrollMagic.Scene({
      triggerElement: '.option',
      triggerHook: 0.7
    }).setClassToggle('.option', 'fade-in')
    .addTo(controller)
});



//this part affects the transactions page
(function($) {
	$(".main-transaction-container").on("click", function(){
		returnpannels();
		var parent=$(this).parent();		
		$(this).addClass("active-transaction").parent().siblings().children("active-transaction").removeClass("active-transaction");
		$(this).siblings(".transaction-more-details").addClass("display-flex");
		$(this).siblings(".transaction-more-details").slideDown();
		parente.siblings(".transaction-more-details").removeClass("display-flex");
		
//		$(".transaction-more-details").eq(index).removeClass("display-none");
//		console.log(index);
		
	});
	
	$(".close-panel-container").on("click", function(){
		$(this).parent().slideUp();	
		$(this).parent().removeClass("display-flex");
	});
	
	
	
	
	function returnpannels()
	{
		$(".main-transaction-container").removeClass("active-transaction");
		$(".transaction-more-details").slideUp();
		$(".transaction-more-details").removeClass("display-flex");
		
	}
	
	
//	showing and removing assets form
	
	$('#add-asset').on('click', function(){
		showassetsform();
	});
	
	$('#close-asset-form').on('click', function(){
		hideassetsform();
	})
	
	function showassetsform(){
		$(".assets-form-container").removeClass('left');
		$('.assets-container').addClass('right');
		
	}
	
	function hideassetsform(){
		$(".assets-form-container").addClass('left');
		$('.assets-container').removeClass('right');
		
	}
	$('.drop-title').on('click', function(){
		$(this).parent().siblings('.drop-container').slideToggle();
	})
	
	$('.assets-container .drop-container li').on('click', function(){
		var thetext=$(this).text();
		$('.assets-container .the-assets-text').text(thetext);
		$('.drop-container').slideUp();
		console.log(thetext);
	});
	
	
//	for the assets form
	
	$('.assets-form-container .drop-container li').on('click', function(){
		var thetext=$(this).text();
		$('.assets-form-container .the-assets-text').text(thetext);
		$('.drop-container').slideUp();
		console.log(thetext);
	});
	
	
//	interchanging forms
	$('.the-assets-form-group li').on('click', function(){
		$('.the-assets-form').addClass('d-none');
	});
	
	$('.nyumba').on('click',function(){
		$('.house-form-inputs').removeClass('d-none');
	});
	
	$('.gari').on('click',function(){
		$('.car-form-inputs').removeClass('d-none');
	});
	
	$('.soko').on('click',function(){
		$('.stalls-form-inputs').removeClass('d-none');
	});
	
	$('.gari').on('click',function(){
		$('.car-form-inputs').removeClass('d-none');
	});
	
	$('.shamba').on('click',function(){
		$('.land-form-inputs').removeClass('d-none');
	});
	
	
//	payment method
	$(".pay-container .pay-method").on('click', function(){
		$(this).addClass('gray-bg').siblings().removeClass('gray-bg');
	});
	
//	closing price container
	
	
//	function showhideprice2(parking_zone){
//		if(parking_zone!="-- select off-street zone --"){
//		$('.price-container').slideDown();
//	}
	function showhideprice(parking_zone, car_type){
		if((parking_zone!="-- select parking zone --") && (car_type!="-- select vehicle type --")){
		$('.price-container').slideDown();
	}
	else if((parking_zone=="-- select parking zone --") || (car_type=="-- select vehicle type --")){
		$('.price-container').slideUp();	
	}
	}
	
	$('.close-price-container').on('click', function(){
		$(this).parent().slideUp();
	});
	
	$('#zone').on('change',function(){
		var parking_zone=$('#zone option:selected').val();
	var car_type=$('#car_type option:selected').val();
		showhideprice(parking_zone, car_type);
		
	})
	
	$('#car_type').on('change',function(){
		var parking_zone=$('#zone option:selected').val();
	var car_type=$('#car_type option:selected').val();
		showhideprice(parking_zone, car_type);
	})
	
	$('#parking-zone').on('change',function(){
		
		var parking_zone=$('#parking-zone option:selected').val();
		var car_type=$('parking zone category').val();
		showhideprice(parking_zone, car_type);
	})
	
	
//	back to form
	$('.back-toform').on('click',function(){
		$('.details-confirm').addClass('fadeOutRight');
		$('.details-confirm').addClass('d-none');
		$('.the-transaction-form').removeClass('d-none');
		$('.the-transaction-form').addClass('fadeInLeft');
		$('.the-transaction-form').removeClass('fadeOutLeft');
	});
	
	$('.transaction-form-btn').on('click',function(){
		$('.details-confirm').removeClass('fadeOutRight');
		$('.details-confirm').removeClass('d-none');
		$('.the-transaction-form').removeClass('fadeInLeft');
		$('.the-transaction-form').addClass('fadeOutLeft');
		$('.the-transaction-form').addClass('d-none');
		$('.details-confirm').addClass('fadeInRight');
		
	});
	
	$('.confirm-btn').on('click', function(){
		$('.btn-txt').addClass('d-none');
		$('.lds-ellipsis').removeClass('d-none');
		
		
		
		
		setTimeout(popprice, 2200);
		setTimeout(showloader, 4200);
		
	});
	
	function popprice(){
			$('#pay-confirmation-pop').removeClass('d-none');
		}
	
	function showloader(){
		$('.lds-roller').addClass('fadeOut');
		$('.lds-roller').addClass('position-absolute');
		$('.confirmed-pay').addClass('fadeIn');
		$('.confirmed-pay').removeClass('d-none');
		$('.transacton-instructions').addClass('d-none');
		$('.transactions-actions').addClass('fadeIn');
		$('.transactions-actions').removeClass('d-none');
		
		$('.payment-status').text('Received!');
	}
	
//	delete pop functions
	$('.cars-container').on('click','.remove-car', function () {
		$('.notification-container').addClass('fadeIn');

		$('.notification-container').removeClass('d-none');

		$('.notification-container').removeClass('fadeOut');
		$('.notification-container').removeClass('d-none');
		$('.notification-container .card').addClass('bounceUp');
		var title="lamba;";
		var title=$(this).siblings().text();
		$('#record-name').text(title);
		
		console.log(title);
	});
	
	$('.transactions-details-container').on('click','.remove-car', function () {
		$('.notification-container').addClass('fadeIn');
		$('.notification-container').removeClass('d-none');
		$('.notification-container').removeClass('fadeOut');
		$('.notification-container').removeClass('d-none');
		$('.notification-container .card').addClass('bounceUp');
		var title="lamba;";
		var title=$(this).parent().siblings().children("strong").text();
		$('#record-name').text(title);
		
		console.log(title);
	});
	
	$('.close-delete').on('click', function(){
		closedeletealert();
	});
	
	
	function closedeletealert() {
		$('.notification-container').addClass('fadeOut');
		$('.notification-container').addClass('d-none');
		$('.notification-container .card').addClass('fadeOutDown');

		setTimeout(function () {
			$('.notification-container').removeClass('fadeOut');
			$('.notification-container .card').removeClass('fadeOutDown');
		}, 1000);
	}
	
//	sign up form animations
	$('.toogle-loginfforms li').on('click', function(){
		$(this).addClass('active-log').siblings().removeClass('active-log');
	})
	
	function showsignup(){
		$('#signup-form').removeClass('d-none');
		$('#signup-form').removeClass('bounceOutLeft');
		$('#signup-form').addClass('bounceInRight');
		$('#login-form').addClass('d-none');
		$('#login-form').addClass('bounceOutLeft');
		
	}
	
	function showlogin(){
		$('#login-form').removeClass('d-none');
		$('#login-form').removeClass('bounceOutLeft');
		$('#login-form').addClass('bounceInRight');
		$('#signup-form').addClass('d-none');
		$('#signup-form').addClass('bounceOutLeft');
		
	}
	
	$('.show-signup').on('click', function(){
		showsignup();
	});
	
	$('.show-login').on('click', function(){
		showlogin();
	});
	
	
	$('.profile-nav .nav-item a, .transactions-link').on('click', function(){
		$('.my-profile-linker').addClass('d-none');
		$('.my-profile-linker').removeClass('fadeIn');
		$(this).addClass('active').parent().siblings().children().removeClass('active');
		$('.profile-loader').removeClass('d-none');
		$('.profile-loader').addClass('fadeIn');
		$('.txt-loader').removeClass('d-none');
		$('.account-txt-block p,.account-txt-block h4').addClass('d-none');
		$('.account-txt-block').addClass('mb-5');
		$('#transactions-minor').removeClass('d-none');
		$('#transactions-main').removeClass('fadeIn');
			$('#transactions-main').addClass('d-none');
		setTimeout(function () {
			$('.profile-loader').addClass('d-none');
			$('.profile-loader').removeClass('col-md-12,col-lg-12');
		$('.profile-loader').removeClass('fadeIn');
			$('.account-txt-block p,.account-txt-block h4').removeClass('d-none');
			$('.txt-loader').addClass('d-none');
			$('.account-txt-block').removeClass('mb-5');
		}, 1800);
		
		
		
		
		
	});
	
	$('.account-link').on('click', function(){
		$('.account-txt-block h4').text('My account')
			$('.account-txt-block p').text('Below Are Etails On Your Profile. Do Remember To Save Your Work Once You Have Edited An Item In Your Profile')
		
		setTimeout(function () {
			$('.my-profile-linker').addClass('d-none');
			$('#my-account').addClass('fadeIn');
			$('#my-account').removeClass('d-none');
			
		
		}, 1801);
	});
	
	$('.assets-link').on('click', function(){
		$('.account-txt-block h4').text('My Assets')
			$('.account-txt-block p').text('This Are Some Of The Assets Registered Under Your Account')
		
		setTimeout(function () {
			$('.my-profile-linker').addClass('d-none');
			$('#the-assets').addClass('fadeIn');
			$('#the-assets').removeClass('d-none');
		
		}, 1801);
	});
	
	
	$('.bills-link').on('click', function(){
		$('.account-txt-block h4').text('My bills')
			$('.account-txt-block p').text('bellow are a number of bills that were raised for you at the county')
		
		setTimeout(function () {
			$('.my-profile-linker').addClass('d-none');
			$('#my-bills').addClass('fadeIn');
			$('#my-bills').removeClass('d-none');
		
		}, 1801);
	});
	
	
	$('.year-list li').on('click',function(){
		$(this).addClass('checked').siblings().removeClass('checked');
	})
	
	
	$('.transactions-link').on('click', function(){
		$('.account-txt-block h4').text('My transactions');
			$('.account-txt-block p').text('bellow are a number of transactions that you have done within the county');
		$('.profile-loader').addClass('col-md-12,col-lg-12');
		$('#transactions-minor').addClass('d-none');
		
		
		
		setTimeout(function () {
			
			$('#transactions-main').addClass('fadeIn');
			$('#transactions-main').removeClass('d-none');
			
			$('.my-profile-linker').addClass('d-none');
			$('.my-profile-linker').removeClass('fadeIn');
		
		}, 1801);
		
		
//		create business form changeing
		
		
	});
	
//	data tables
	$(document).ready(function() {
    $('#example').DataTable( {
       
        "ordering": false,
		pageLength: 5,
       
    } );
		
		
} );
	$(document).ready(function() {
    $('#bill-table').DataTable( {
       
        "ordering": false,
		pageLength: 5,
       
    } );
		
		
} );
//	data tables
	
	
	
	$('#carouselExampleSlidesOnly').carousel();

	
	
	
	
	
	
	
	
	
	
})(jQuery);

//this part affects the transactions page
