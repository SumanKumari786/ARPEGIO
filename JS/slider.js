$(document).ready(function(){
	var one = $("#one");
	var two = $("#two");
	var three = $("#three");
	var four = $("#four");
	one.owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			540:{
				items:2
			},
			1000:{
				items:4
			}
		}
	})	
	two.owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			540:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})	
	three.owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		responsive:{
			0:{
				items:4
			},
			540:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})	
	
	four.owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			540:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})	
});
