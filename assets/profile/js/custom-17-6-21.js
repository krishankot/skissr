$("body").on('keydown', ".text_area", function(e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
         document.execCommand('insertLineBreak')
          e.preventDefault();
        // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
       
    }
});
$("body").on('keyup', ".text_area", function(e) {
	//alert(e.keyCode);
	//document.execCommand("defaultParagraphSeparator", false, "br"); //on enter put br instead of div
	var input_rel = $(this).attr('rel');
	var value_input = $.trim($(this).html());
	//var output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', value_input);
	value_input = value_input.replace(/(<[^>]+) style=".*?"/ig, '$1');
	value_input = value_input.replace(/(<[^>]+) class=".*?"/ig, '$1');
	
	$('#'+input_rel).val(value_input);
	$("h1,h2,h3,h4,h5,h6").replaceWith(function () {
	  return "<div>" + $(this).text() + "</div>";
	});
});

$("body").on('blur', ".text_area", function(e) {
	//document.execCommand("defaultParagraphSeparator", false, "br"); //on enter put br instead of div
	var input_rel = $(this).attr('rel');
	var value_input = $.trim($(this).html());
	//var output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', value_input);
	value_input = value_input.replace(/(<[^>]+) style=".*?"/ig, '$1');
	value_input = value_input.replace(/(<[^>]+) class=".*?"/ig, '$1');
	$(this).html(value_input);
	$('#'+input_rel).val(value_input);
	/* $("span").replaceWith(function () {
	  return $(this).text();
	}); */
	$("svg").remove();
	$("a").wrap('<span contentEditable="false"></span>');
	$("h1,h2,h3,h4,h5,h6").replaceWith(function () {
	  return "<div>" + $(this).text() + "</div>";
	});
	
});
var input_rel1 = "";
var object1 = "";
$("body").on('paste', ".text_area", function(e) {
	input_rel1 = $(this).attr('rel');
	object1 = $(this);
	var value_input = $.trim($(this).html());
	//var output = preg_replace('/(<[^>]+) style=".*?"/i', '$1', value_input);
	value_input = value_input.replace(/(<[^>]+) style=".*?"/ig, '$1');
	value_input = value_input.replace(/(<[^>]+) class=".*?"/ig, '$1');
	$('#'+input_rel1).val(value_input);
	$("h1,h2,h3,h4,h5,h6").replaceWith(function () {
	  return "<div>" + $(this).text() + "</div>";
	});
	return true;
});
 

	$.fn.afterPaste = function(options) {
		
		var settings = {
			delay: 300,
			callback: function() {}
		};
		options = $.extend(settings, options);
		return this.each(function() {
			
			var $element = $(this);
			$element.on('paste', function() {
				setTimeout(options.callback, options.delay);
			});
		
		});
	};

$('.text_area').afterPaste({
		delay: 2,
		callback: function() {
			var value_input = $.trim(object1.html());
			value_input = value_input.replace(/(<[^>]+) style=".*?"/ig, '$1');
			value_input = value_input.replace(/(<[^>]+) class=".*?"/ig, '$1');
			$('#'+input_rel1).val(value_input);
			object1.html(value_input);
			/* $("span").replaceWith(function () {
			  return $(this).text();
			}); */
			$("svg").remove();
			$("a").wrap('<span contentEditable="false"></span>');
			$("h1,h2,h3,h4,h5,h6").replaceWith(function () {
			  return "<div>" + $(this).text() + "</div>";
			});
			
		}
	});
	
	$('.dropdown-menu').on('mouseenter', function(event){
		const ps_scrollbar_header = document.querySelector('#ps_scrollbar_header');
		const psn = new PerfectScrollbar(ps_scrollbar_header);
		
		
	});
	$('.dropdown-menu').on('click', function(event){
				// The event won't be propagated up to the document NODE and 
				// therefore delegated events won't be fired
				
				event.stopPropagation();
			});
// Initialize the plugin
if($("#ps_scrollbar_header").length > 0) {
	const ps_scrollbar_header = document.querySelector('#ps_scrollbar_header');
	const psn = new PerfectScrollbar(ps_scrollbar_header);
}

if($("#ps_scrollbar_friends").length > 0) {
	const ps_scrollbar_friends = document.querySelector('#ps_scrollbar_friends');
	const psf = new PerfectScrollbar(ps_scrollbar_friends);
}

// Initialize the plugin
if($("#ps_scrollbar").length > 0) {
	const ps_scrollbar = document.querySelector('#ps_scrollbar');
	const ps = new PerfectScrollbar(ps_scrollbar);
}
if($("#ps_scrollbar_description").length > 0) {
	const ps_scrollbar_description = document.querySelector('#ps_scrollbar_description');
	const ps2 = new PerfectScrollbar(ps_scrollbar_description);
}



if($("#table_wishlist").length > 0){
	const wishlist_wrapper = document.querySelector('#table_wishlist');
	const ps3 = new PerfectScrollbar(wishlist_wrapper);
}


/* 
// Handle size change
document.querySelector('#resize').addEventListener('click', () => {

  // Get updated values
  width = document.querySelector('#width').value;
  height = document.querySelector('#height').value;
  
  // Set demo sizes
  demo.style.width = `${width}px`;
  demo.style.height = `${height}px`;
  
  // Update Perfect Scrollbar
  ps.update();
}); */
