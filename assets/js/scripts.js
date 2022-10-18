	
	
	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.product').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.product').eq(i).appendTo('.Products');
	            }
	            else {
	                $('.product').eq(0).appendTo('.Products');
	            }
	        }
	    }
	});





	$('#carousel-example1').on('slide.bs.carousel', function (e) {


	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
			
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.holysite').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.holysite').eq(i).appendTo('.Holysite');
	            }
	            else {
	                $('.holysite').eq(0).appendTo('.Holysite');
	            }
	        }
	    }
	});

	$('#carousel-example2').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.fproduct').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.fproduct').eq(i).appendTo('.FProducts');
	            }
	            else {
	                $('.fproduct').eq(0).appendTo('.FProducts');
	            }
	        }
	    }
	});

	$('#carousel-example3').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.courses').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.courses').eq(i).appendTo('.Courses');
	            }
	            else {
	                $('.courses').eq(0).appendTo('.Courses');
	            }
	        }
	    }
	});

	$('#carousel-example4').on('slide.bs.carousel', function (e) {

	
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.tour').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.tour').eq(i).appendTo('.Tour');
	            }
	            else {
	                $('.tour').eq(0).appendTo('.Tour');
	            }
	        }
	    }
	});

	$('#carousel-example5').on('slide.bs.carousel', function (e) {

	
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.rproduct').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.rproduct').eq(i).appendTo('.RProducts');
	            }
	            else {
	                $('.rproduct').eq(0).appendTo('.RProducts');
	            }
	        }
	    }
	});
	$('#carousel-example7').on('slide.bs.carousel', function (e) {

	
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.sitename').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.sitename').eq(i).appendTo('.SiteName');
	            }
	            else {
	                $('.sitename').eq(0).appendTo('.SiteName');
	            }
	        }
	    }
	});
	$('#carousel-example6').on('slide.bs.carousel', function (e) {

	
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.site').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.site').eq(i).appendTo('.Site');
	            }
	            else {
	                $('.site').eq(0).appendTo('.Site');
	            }
	        }
	    }
	});

	
	