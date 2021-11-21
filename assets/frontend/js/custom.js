var SITEURL = "https://skissr.com/";
setInterval(function() {
  $.ajax({
	url: SITEURL+"ajaxnotifications",
	method: 'GET',
	dataType: 'json',
	success: function (data) {
		//console.log(data);
		if(data.type == 'success'){
			//alert(data.type);
			$('.ajax_notification').html(data.viewnotification);
			$('.friend_reqajax').html(data.viewfrnd);
			$('.req_count').html(data.friendcount);
		}
	},
	error: function (err) {
		console.log(err);
	}
})
}, 1000 * 60 * 1);

$('.dropdown-menu').on('mouseenter', function(event){
	//alert($(this).attr('id'));
	if($("#ps_scrollbar_header").length > 0) {
		const ps_scrollbar_header = document.querySelector('#ps_scrollbar_header');
		const psn = new PerfectScrollbar(ps_scrollbar_header);
	}

	if($("#ps_scrollbar_friends").length > 0) {
		const ps_scrollbar_friends = document.querySelector('#ps_scrollbar_friends');
		const psf = new PerfectScrollbar(ps_scrollbar_friends);
	}

	if($("#ps_scrollbar_header_mob").length > 0) {
		const ps_scrollbar_header_mob = document.querySelector('#ps_scrollbar_header_mob');
		const psnm = new PerfectScrollbar(ps_scrollbar_header_mob);
	}

	if($("#ps_scrollbar_friends_mob").length > 0) {
		const ps_scrollbar_friends_mob = document.querySelector('#ps_scrollbar_friends_mob');
		const psfm = new PerfectScrollbar(ps_scrollbar_friends_mob);
	}
	
	if(!$(this).hasClass('friend_req') && $(this).hasClass('header_notification')) {
		
		$.ajax({
			url: SITEURL+"ajaxnotificationsread",
			method: 'GET',
			dataType: 'json',
			success: function (data) {
				$('#notification-area span').html('0');
			},
			error: function (err) {
				
			}
		});
		
	}
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

if($("#ps_scrollbar_header_mob").length > 0) {
	const ps_scrollbar_header_mob = document.querySelector('#ps_scrollbar_header_mob');
	const psnm = new PerfectScrollbar(ps_scrollbar_header_mob);
}

if($("#ps_scrollbar_friends_mob").length > 0) {
	const ps_scrollbar_friends_mob = document.querySelector('#ps_scrollbar_friends_mob');
	const psfm = new PerfectScrollbar(ps_scrollbar_friends_mob);
}
 
