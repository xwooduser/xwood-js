define(function(require) { return function($) {
	  require('./jquery.ztree.all.js')($);
	  var _setting = {
				data: {
					simpleData: {
						enable: true
					}
				}
	  };
	  var data = $.fn.zTree._z.data;
	  data.exSetting(_setting);
}});