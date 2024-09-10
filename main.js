$(document).ready(function() {
	// This is the hamburger menu
// 	$(".hamburger").click(function(){

// 	  $(this).toggleClass('active');
// 	  $(".menu").fadeToggle();
// 		});

// // put class of exit on elements to make them navigate back to page-nav
// 		$(".exit").click(function(){

// 		$(this).toggleClass('active');
// 		$(".menu").fadeToggle();
// 		});

        $(".hamburger a").click(function(){
            // e.preventDefault();
            $(this).toggleClass('active');
            $(".menu-div").fadeToggle();
        });
    
        $(".exit").click(function(){
            $(".hamburger a").toggleClass('active');
            $(".menu-div").fadeToggle();
        });


    // Count Up Function


    // Function to start count animation when element is in viewport
    function startCountAnimation(entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetNumber = parseInt(entry.target.getAttribute('data-target-number'));
    
            // Start the count animation for the element
            $(entry.target).prop('Counter', 0).animate({
            Counter: targetNumber
            }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
            });
    
            // Unobserve the element after triggering animation once
            observer.unobserve(entry.target);
        }
        });
    }
  
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(startCountAnimation, { threshold: 0.5 });
    
    // Observe each element with the 'count' class
    $('.count').each(function() {
        observer.observe(this);
    });
  
    // Slick


          
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      autoplay: true,
      speed: 3000,
      pauseOnHover: true,
    });

    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
      autoplay: true,
      speed: 3000,
      pauseOnHover: true,
    });
      

    //   Slick Slider effect ends here

    // Accordion Styles

    var accordionTimer;

    $(" .accordion-item").on({
        mouseenter: function() {
            clearTimeout(accordionTimer); // Clear any existing timer
        },
        mouseleave: function() {
            var $content = $(this).find(".accordion-content");
            var $iconPlus = $(this).find(".icon-plus");
            var $iconMinus = $(this).find(".icon-minus");

            accordionTimer = setTimeout(function() {
                $content.slideUp(700);
                $iconPlus.show();
                $iconMinus.hide();
            }, 200); // Delay of 200 milliseconds (2rems = 200ms, assuming 1rem = 100ms)
        }
    });

    $(".accordion-item").click(function() {
        var $content = $(this).find(".accordion-content");
        var $iconPlus = $(this).find(".icon-plus");
        var $iconMinus = $(this).find(".icon-minus");

        // Collapse all accordion contents except the clicked one
        $(".accordion-content").not($content).slideUp(700);
        $(".icon-plus").not($iconPlus).show();
        $(".icon-minus").not($iconMinus).hide();

        // Toggle current accordion content and icons
        $content.slideToggle(700);
        $iconPlus.toggle();
        $iconMinus.toggle();
    });

    // Service Categories page

    var currentPage = window.location.pathname;

    // Find the link that matches the current URL and adjust the hr width
    $('a[href="' + currentPage + '"] hr').css('width', '60%'); 


    
});