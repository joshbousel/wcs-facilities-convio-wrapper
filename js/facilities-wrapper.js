Y.use("jquery-noconflict", function(Y) {

	jQuery(function(){
		// Prevent ticket event date links from going anywhere
		jQuery('.lo-CalendarDateValue a').click(function(e){
			e.preventDefault();
		});
		
		// Change colspan when there's no tax-deductible info
		if(jQuery('body').hasClass('wcs-event--no-tax-deductible')) {
			jQuery('#lo-ticket_class_list_user .lo-Event_lc_Cell_border_top').first().attr('colspan',2);	
		}
	});
});