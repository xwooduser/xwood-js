/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by TerryLee (binlic2010@gmail.com). */
define(function(require) { return function($) {
	require('./jquery-ui-timepicker-addon.js')($);
	$.timepicker.regional['en'] = {
			closeText: 'Close',
			prevText: 'Prev',
			nextText: 'Next',
			currentText: 'Today',
			clearText : 'Clear',
			timeText : 'Time',
			monthNames: ['January','February','March','April','May','June',
			     		'July','August','September','October','November','December'],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			          		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
			weekHeader: 'Week',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: true,
			buttonImageOnly: true,
			showMonthAfterYear: true, 
			changeMonth:true,
			changeYear:true,
			showSecond: true, 
			dateFormat:'yy-mm-dd', 
			timeFormat: 'hh:mm:ss',
			defaultDate:0,
			showOtherMonths: true,
			readOnly : true ,
			yearRange: 'c-70:c+10',
			//yearSuffix: 'year',
			showButtonPanel:true
		};
	$.timepicker.setDefaults($.timepicker.regional['en']);
}});
