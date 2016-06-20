define(function(require){return function($){
	require('./jquery.validate.js')($);
	require('./jquery.validator.messages_zh.js')($);
	$.extend($.validator.defaults, {
		errorElement : "em",
		success : function(label) {
			$(label).html("&nbsp;").addClass("success");
		},
		highlight : function(input) {
			$(input).addClass("ui-state-highlight");
		},
		unhighlight : function(input) {
			$(input).removeClass("ui-state-highlight");
		}
	});
	$.validator.addMethod("regex", function(value, element, param) {
		return param.test(value);
	}, '格式错误');
}});