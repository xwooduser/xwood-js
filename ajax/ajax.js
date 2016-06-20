define(function(require,exports) { 
	exports.ajax = function(option){
		if(option.blockElement){
			require("../blockUI/jquery.blockUI.js")($);
			$(option.blockElement).block();
		}
		 var oldError = option.error;
		 option.error=function(xhr,status,err){
		   if(option.blockElement)$(option.blockElement).unblock();
		   if(oldError){
			   oldError(xhr,status,err);
		   }
		 };
       if(option.success){
	        var oldSuccess=option.success;
	        option.success=function(response,success,xhr){
	        	if(option.blockElement)$(option.blockElement).unblock();
	        	oldSuccess(response,success,xhr);
	        };
       }
       $.ajax(option);
	};
});