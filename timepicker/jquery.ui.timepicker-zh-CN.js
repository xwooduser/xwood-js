/* Japanese initialisation for the jQuery time picker plugin. */
/* Written by Bernd Plagge (bplagge@choicenet.ne.jp). */
define(function(require) { return function($) {
	require('./jquery.ui.timepicker.js')($);
    $.timepicker.regional['zh-CN'] = {
                hourText: '时',
                minuteText: '分',
                amPmText: ['上午', '下午'] }
    $.timepicker.setDefaults($.timepicker.regional['zh-CN']);
}});
