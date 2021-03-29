$(document).ready(function() {
    // Side Navbar Player Hover 
    $(".side-nav-div").mouseenter(function() {
        $(".s-content").css("z-index", "-1");
    });
	$(".main-div").mouseenter(function() {
        $(".s-content").css("z-index", "unset");
    });
    $(".side-nav-div").mouseleave(function() {
        $(".s-content").css("z-index", "unset");
    });
	
    // End Of Code Section
	
	$(".lPar1").click(function() {
        $(".lPar1").css({ "color": "#000"});
        $(".lPar2").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar3").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar4").css({ "color": "rgba(0, 0, 0, 0.6)"});
    });
	$(".lPar2").click(function() {
        $(".lPar1").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar3").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar4").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar2").css({ "color": "#000"});
    });
	$(".lPar3").click(function() {
        $(".lPar2").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar1").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar4").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar3").css({ "color": "#000"});
    });
	$(".lPar4").click(function() {
        $(".lPar1").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar2").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar3").css({ "color": "rgba(0, 0, 0, 0.6)"});
        $(".lPar4").css({ "color": "#000"});
    });
	
    
    $(".HovTSee").mouseenter(function() {
        $(".OnHoverVisible").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee").mouseleave(function() {
        $(".OnHoverVisible").css("display", "none");
    });
    $(".HovTSee1").mouseenter(function() {
        $(".OnHoverVisible1").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee1").mouseleave(function() {
        $(".OnHoverVisible1").css("display", "none");
    });
    $(".HovTSee2").mouseenter(function() {
        $(".OnHoverVisible2").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee2").mouseleave(function() {
        $(".OnHoverVisible2").css("display", "none");
    });
    $(".HovTSee3").mouseenter(function() {
        $(".OnHoverVisible3").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee3").mouseleave(function() {
        $(".OnHoverVisible3").css("display", "none");
    });
    $(".HovTSee4").mouseenter(function() {
        $(".OnHoverVisible4").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee4").mouseleave(function() {
        $(".OnHoverVisible4").css("display", "none");
    });
    $(".HovTSee5").mouseenter(function() {
        $(".OnHoverVisible5").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee5").mouseleave(function() {
        $(".OnHoverVisible5").css("display", "none");
    });
    $(".HovTSee6").mouseenter(function() {
        $(".OnHoverVisible6").css({ "display": "block", "z-index": "1" });
    });
    $(".HovTSee6").mouseleave(function() {
        $(".OnHoverVisible6").css("display", "none");
    });
    //Overlay on Image Hover Section

    $('.wrap0').mouseover(function() {
        $('.Imgoverlay').show();
    });
    $('.wrap0').mouseout(function() {
        $('.Imgoverlay').hide();
    });

    $('.wrap1').mouseover(function() {
        $('.Imgoverlay1').show();
    });
    $('.wrap1').mouseout(function() {
        $('.Imgoverlay1').hide();
    });

    $('.wrap2').mouseover(function() {
        $('.Imgoverlay2').show();
    });
    $('.wrap2').mouseout(function() {
        $('.Imgoverlay2').hide();
    });

    $('.wrap3').mouseover(function() {
        $('.Imgoverlay3').show();
    });
    $('.wrap3').mouseout(function() {
        $('.Imgoverlay3').hide();
    });

    $('.wrap4').mouseover(function() {
        $('.Imgoverlay4').show();
    });
    $('.wrap4').mouseout(function() {
        $('.Imgoverlay4').hide();
    });

    $('.wrap5').mouseover(function() {
        $('.Imgoverlay5').show();
    });
    $('.wrap5').mouseout(function() {
        $('.Imgoverlay5').hide();
    });
    $('.wrap6').mouseover(function() {
        $('.Imgoverlay6').show();
    });
    $('.wrap6').mouseout(function() {
        $('.Imgoverlay6').hide();
    });

    $('.wrap7').mouseover(function() {
        $('.Imgoverlay7').show();
    });
    $('.wrap7').mouseout(function() {
        $('.Imgoverlay7').hide();
    });

    //End Of Section Code

    // Sort Icon Change OnClick
    $("#chg-icon").click(function() {
        $(this).html("<img class='song-icon' src='images/icons/click-icon.png'>");
    });
    //End Of Section Code

    // Sort Icon Change OnClick
    $(".chgShareIcon").click(function() {
        $(this).html("<img class='sListShare' src='images/icons/MobPlayIcon.png'>");
    });
    $(".main-div, .SingArtDiv1").click(function() {
        $(".chgShareIcon").html("<img class='sListShare' src='images/icons/sIco1.png'>");
    });
    //End Of Section Code


    // Bottom Sticky Bar Code
    $(".mob-s-div").hover(function() {
        $(this).css("height", "420px");
    });
    $("#content").hover(function() {
        $(".mob-s-div").css("height", "82px");
    });
    //End Of Section Code

    // Sort DropDown Code
    $(".show-sortDiv").hover(function() {
        $(".sort-div").css({ "display": "block", "z-index": "1" });
    });
    $(".main-div,.my-div1,.lib-head,.container").hover(function() {
        $(".sort-div").css({ "display": "none", "z-index": "-1" });
    });
    //End Of Code Section
	$("#clickMe,#clickMe1").click(function() {
        $(".helpDiv,#overlay").css({ "display": "block"});
    });
	$("#text,.sideCross").click(function() {
        $("#overlay,.helpDiv").css({ "display": "none"});
    });
    // Filter Slide Jquery Code
    $("#DId").click(function() {
        if ($(window).width() > 769) {
            $("#mySidenav").css("width", "1040");
        }
    });
    $(".closebtn").click(function() {
        if ($(window).width() > 769) {
            $("#mySidenav").css("width", "0");
        }
    });
    $("#DId").click(function() {
        if ($(window).width() <= 769) {
            $("#mySidenav").css("width", "786");
            $(".tab-search svg").css("z-index", "-1");
        }
    });
    $(".closebtn").click(function() {
        if ($(window).width() <= 769) {
            $("#mySidenav").css("width", "0");
            $(".tab-search svg").css("z-index", "1");
        }
    });
    $("#DId").click(function() {
        if ($(window).width() <= 540) {
            $("#mySidenav").css("width", "559");
            $(".mb-search .nav-icon").css("z-index", "-1");
        }
    });
    $(".closebtn").click(function() {
        if ($(window).width() <= 540) {
            $("#mySidenav").css("width", "0");
            $(".mb-search .nav-icon").css("z-index", "1");
        }
    });

    $("#DId").click(function() {
        if ($(window).width() <= 420) {
            $("#mySidenav").css("width", "400");
            $(".mb-search .nav-icon").css("z-index", "-1");
        }
    });
    $(".closebtn").click(function() {
        if ($(window).width() <= 420) {
            $("#mySidenav").css("width", "0");
            $(".mb-search .nav-icon").css("z-index", "1");
        }
    });

    $("#DId").click(function() {
        if ($(window).width() <= 375) {
            $("#mySidenav").css("width", "370");
            $(".mb-search .nav-icon").css("z-index", "-1");
        }
    });
    $(".closebtn").click(function() {
        if ($(window).width() <= 375) {
            $("#mySidenav").css("width", "0");
            $(".mb-search .nav-icon").css("z-index", "1");
        }
    });
    // End Of Section Code
	
	
	
	// Mobile Navigation 
    $(".sidebar-header-tab").click(function() {
		if ($(window).width() <= 769) {
		  $("#sidebar").css({ "left": "0","width": "100%","transition":"2s", "z-index": "1"});
		  $(".nav-icon,.owl-carousel").css({ "z-index": "-1"});
		}
    });
	$(".sideCross").click(function() {
		if ($(window).width() <= 769) {
          $(".nav-icon,.owl-carousel").css({ "z-index": "unset"});
		  $("#sidebar").css({ "left": "-770px","transition":"2s"});
		}
    });
    // End Of Code Section
	
	
	
	

    $(".OnClick").click(function() {
        $(".OnClick").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick1").click(function() {
        $(".OnClick").html(`<div>
					  <div class="DivBod ">
					   <div class="pos">
						<img class="g1" src="images/icons/g2.png"/>
						<span class="IText">Advertising</span>
					   </div>
					  </div>
					</div>`);
        $(".OnClick1").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick2").click(function() {
        $(".OnClick1").html(`<div>
					  <div class="DivBod ">
					   <div class="pos">
						<img class="g1" src="images/icons/g2.png"/>
						<span class="IText">Advertising</span>
					   </div>
					  </div>
					</div>`);
        $(".OnClick2").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick3").click(function() {
        $(".OnClick2").html(`<div>
					  <div class="DivBod ">
					   <div class="pos">
						<img class="g1" src="images/icons/g3.png"/>
						<span class="IText">Podcast</span>
					   </div>
					  </div>
					</div>`);
        $(".OnClick3").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick4").click(function() {
        $(".OnClick3").html(`<div>
					  <div class="DivBod ">
					   <div class="pos">
						<img class="g1" src="images/icons/g4.png"/>
						<span class="IText">Cinema</span>
					   </div>
					  </div>
					</div>`);
        $(".OnClick4").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick5").click(function() {
        $(".OnClick4").html(`<div>
					  <div class="DivBod ">
					   <div class="pos">
						<img class="g1" src="images/icons/g5.png"/>
						<span class="IText">Video Games</span>
					   </div>
					  </div>
					</div>`);
        $(".OnClick5").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick6").click(function() {
        $(".OnClick5").html(`<div>
					  <div class="DivBod ">
					   <div class="pos">
						<img class="g1" src="images/icons/g6.png"/>
						<span class="IText">Video On Demand</span>
					   </div>
					  </div>
					</div>`);
        $(".OnClick6").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick7").click(function() {
        $(".OnClick7").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });
    $(".OnClick8").click(function() {
        $(".OnClick8").html(`<div>
							<div class='DivBod DivBod1'>
								<div class='pos'>
								<img class='g1' src='images/icons/g1.png'/>
								<span class='IText'>Advertising<br/><span class='ISubText'>Youtube, Instagram, Vimeo, Facebook, etc.</span></span>
								</div>
							</div>
						  </div>`);
    });

});