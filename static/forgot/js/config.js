/**
 * requirejs 配置文件
 * - 排序方式 文件夹的排序方式
 */
var alias = {
	/* Start A - I  ----------- */
	'calendar-heatmap'                  : 'libs/calender-heatmap/calendar-heatmap',
	'clipboard'                         : 'libs/clipboard/clipboard.min',
	'codemirror'                        : 'libs/codemirror/5.16.0/lib/codemirror',
	'codemirror.inline-attachment'      : 'libs/codemirror/inline-attachment/inline-attachment',
	'd3'                                : 'libs/d3/3.5.6/d3.min',
    'datatables'                        : 'libs/dataTables/js/jquery.dataTables',
	'echarts'                           : 'libs/echarts/3.3.1/echarts.min',
	'editormd'                          : 'libs/editormd/1.5.0/editormd.amd',
	'editormd.link-dialog'              : "libs/editormd/1.5.0/plugins/link-dialog/link-dialog",
	'editormd.reference-link-dialog'    : "libs/editormd/1.5.0/plugins/reference-link-dialog/reference-link-dialog",
	'editormd.image-dialog'             : "libs/editormd/1.5.0/plugins/image-dialog/image-dialog",
	'editormd.code-block-dialog'        : "libs/editormd/1.5.0/plugins/code-block-dialog/code-block-dialog",
	'editormd.table-dialog'             : "libs/editormd/1.5.0/plugins/table-dialog/table-dialog",
	'editormd.emoji-dialog'             : "libs/editormd/1.5.0/plugins/emoji-dialog/emoji-dialog",
	'editormd.goto-line-dialog'         : "libs/editormd/1.5.0/plugins/goto-line-dialog/goto-line-dialog",
	'editormd.help-dialog'              : "libs/editormd/1.5.0/plugins/help-dialog/help-dialog",
	'editormd.html-entities-dialog'     : "libs/editormd/1.5.0/plugins/html-entities-dialog/html-entities-dialog",
	'editormd.preformatted-text-dialog' : "libs/editormd/1.5.0/plugins/preformatted-text-dialog/preformatted-text-dialog",
	'flowchart'                         : 'libs/flowchart/flowchart.min',
	'full-avatar-editor'                : 'libs/full-avatar-editor/2.3/fullAvatarEditor',
	'handlebars'                        : 'libs/handlebars/1.1.2/handlebars',
	/* End A - I  ----------- */

	/* Start jQuery  ----------- */
	'jquery'                     : 'libs/jquery/1.12.0/jquery.min',
	'$3'                         : 'libs/jquery/3.1.0/jquery.min',
	'jquery.backstretch'         : 'libs/jquery.backstretch/2.0.4/jquery.backstretch.min',
	'jquery.bt3'                 : 'libs/jquery.bt3/3.3.6/bootstrap.min',
	'jquery.bt3.hover-dropdown'  : 'libs/jquery.bt3/hover-dropdown/hover-dropdown.min',
	'jquery.bt3.twbs-pagination' : 'libs/jquery.bt3/twbs-pagination/1.4.1/jquery.twbs-pagination',
	'jquery.datepicker'          : 'libs/jquery.datepicker/1.8.9/zebra-datepicker',
	'jquery.editable'            : 'libs/jquery.editable/1.7.1/jquery.editable',
	'jquery.flowchart'           : 'libs/jquery.flowchart/jquery.flowchart.min',
	'jquery.form'                : 'libs/jquery.form/3.51.0/jquery.form',
	'jquery.popr'                : 'libs/jquery.popr/1.0/popr.min',
	'jquery.layer'               : 'libs/jquery.layer/3.0.1/layer',
	'jquery.sumo-select'         : 'libs/jquery/sumo-select/3.0.0/jquery.sumoselect',
	'jquery.poshytip'            : 'libs/jquery.poshytip/jquery.poshytip.min',
	'jquery.jscroll'             : 'libs/jquery/jscroll/jquery.jscroll',
	'jquery.selectBoxIt'         : 'libs/jquery.selectBoxIt/jquery.selectBoxIt.min',
	'jquery.toastr'      : 'libs/jquery.toastr/toastr',
	'jquery.tools'       : 'libs/jquery.tools/1.2.7/jquery.tools',
	'jquery.ui'          : 'libs/jquery.ui/1.11.2.custom/jquery-ui.min',
	'jquery.uniform'     : 'libs/jquery.uniform/jquery.uniform.min',
	'jquery.uploadify'   : 'libs/jquery.uploadify/3.2.1/jquery.uploadify',
	'jquery.validate'    : 'libs/jquery.validate/1.13.0/jquery.validate',
	'jquery.webuploader' : 'libs/jquery.webuploader/0.1.5/webuploader.min',
	'jquery.wang-editor' : 'libs/jquery.wang-editor/2.1.23/wangEditor',

	/* End jQuery  ----------- */

	/* Start K - Z  ----------- */
	'js-cookie'         : 'libs/js-cookie/2.1.2/js-cookie',
	'json'              : 'libs/json/1.0.2/json2',
	'katex'             : 'libs/katex/0.1.1/katex.min',
	'ke'                : 'libs/kindeditor/4.1.11/kindeditor-all',
	'ke-zh_CN'          : 'libs/kindeditor/4.1.7/lang/zh_CN.js',
	'marked'            : 'libs/marked/0.3.3/marked',
	'md5'               : 'libs/md5/2.2/md5',
	'moment'            : 'libs/moment/2.22.2/moment',
	'pace'              : 'libs/pace/1.0.2/pace.min',
	'plupload'          : 'libs/plupload/2.1.9/plupload.full.min',
	'prettify'          : 'libs/prettify/prettify.min',
	'raphael'           : 'libs/raphael/2.2.1/raphael.min',
	'respond'           : 'libs/respond/1.4.2/respond.min',
	'sequence-diagram'  : 'libs/sequence-diagram/1.0.6/sequence-diagram.min',
	'simplemde'         : 'libs/simplemde/1.11.2/simplemde.min',
	'inline-attachment' : 'libs/inline-attachment/2.0.3/inline-attachment',
	'smooth-scroll'     : 'libs/smooth-scroll/9.1.4/smooth-scroll.min',
	'swfobject'         : 'libs/swfobject/2.3.0/swfobject',
	'underscore'        : 'libs/underscore/1.8.3/underscore-min',
	'vue'               : 'libs/vue/2.5.16/vue.min'
	/* End K - Z  ----------- */

};

var shim = {
	// requrie js sysnc start
	'highlight'                    : {
		exports : 'hljs'
	},
    'moment'             : {
        exports : 'Moment'
    },
	'd3'                           : {
		exports : 'd3'
	},
	'cal-heatmap'                  : {
		exports : 'CalHeatMap',
		deps    : ['d3']
	},
	'clipboard'                    : {
		exports : 'Clipboard',
		deps    : ['d3']
	},
	'calendar-heatmap'             : {
		exports : 'calendarHeatmap',
		deps    : ['d3', 'moment']
	},
	'jquery'                       : {exports : 'jQuery'},
	'jquery.layer'                 : {
		exports : 'layer',
		deps    : ['jquery']
	},
	'$3'                           : {exports : 'jQuery'},
	'json'                         : {exports : 'JSON'},
	'emojify'                      : {exports : 'emojify'},
	'marked'                       : {exports : 'marked'},
	'ke'                           : {exports : 'KindEditor'},
	'handlebars'                   : {exports : 'Handlebars'},
	'sequence-diagram'             : {
		exports : 'Diagram',
		deps    : ['jquery', 'raphael', 'underscore']
	},
	'inline-attachment'            : {
		exports : 'inlineAttachment'
	},
	'codemirror.inline-attachment' : {
		exports : 'inlineAttachment'
	},
	'xcharts'                      : {
		exports : 'xChart',
		deps    : ['d3']
	},
	'plupload'                     : {
		exports : 'plupload'
	},
	'jquery.webuploader'           : {
		exports : 'WebUploader',
		deps    : ['jquery']
	},
	raphael                        : {exports : 'Raphael'},
	editormd                       : {exports : 'editormd'},
	'fullcalendar'                 : ['jquery'],
	'jquery.tagging-js'            : ['jquery'],
	'jquery.jscroll'               : ['jquery'],
	'jquery.editable'              : ['jquery'],
	'jquery.validate'              : ['jquery'],
	'jquery.inline-attachment'     : ['jquery'],
	'jquery.bgiframe'              : ['jquery'],
	'jquery.bg-pos'                : ['jquery'],
	'jquery.bg-stretcher'          : ['jquery'],
	'jquery.browser'               : ['jquery'],
	'jquery.bt3'                   : ['jquery'],
	'jquery.bt3.hover-dropdown'    : ['jquery', 'jquery.bt3'],
	'jquery.bt3.x-editable'        : ['jquery', 'jquery.bt3'],
	'jquery.bt3.twbs-pagination'   : ['jquery', 'jquery.bt3'],
	'jquery.uniform'               : ['jquery'],
	'jquery.counter-up'            : ['jquery'],
	'jquery.datepicker'            : ['jquery'],
	'jquery.datetimepicker'        : ['jquery'],
	'jquery.flowchart'             : ['jquery', 'flowchart'],
	'jquery.easing'                : ['jquery'],
	'jquery.fancybox'              : ['jquery'],
	'jquery.flexslider'            : ['jquery'],
	'jquery.gritter'               : ['jquery'],
	'jquery.history'               : ['jquery'],
	'jquery.j-diaporama'           : ['jquery'],
	'jquery.kinslideshow'          : ['jquery'],
	'jquery.lazyload'              : ['jquery'],
	'jquery.wang-editor'           : {
		exports : 'wangEditor',
		deps    : ['jquery']
	},
	'jquery.linkage-sel'           : {
		exports : 'LinkageSel',
		deps    : ['jquery']
	},
	'jquery.poshytip'              : ['jquery'],
	'jquery.popr'                  : ['jquery'],
	'jquery.marquee-slide'         : ['jquery'],
	'jquery.menu-aim'              : ['jquery'],
	'jquery.raty'                  : ['jquery'],
	'jquery.tools'                 : ['jquery'],
	'jquery.slide'                 : ['jquery', 'jquery.easing'],
	'jquery.slim-scroll'           : ['jquery'],
	'jquery.supersized'            : ['jquery'],
	'jquery.superslide'            : ['jquery'],
	'jquery.swiper'                : ['jquery'],
	'jquery.tree-select'           : ['jquery'],
	'jquery.tree-table'            : ['jquery'],
	'jquery.ztree'                 : ['jquery'],
	'jquery.icheck'                : ['jquery'],
	'jquery.migrate'               : ['jquery'],
	'jquery.sumo-select'           : ['jquery'],
	'jquery.backstretch'           : ['jquery'],
	'vue'                          : {
		exports : 'Vue'
	},
    'jquery.selectBoxIt'           : ['jquery'],
	// requrie js sysnc stop

};
//noinspection JSUnresolvedVariable
var browser = {
	versions : function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident : u.indexOf('Trident') > -1, //IE内核
			presto  : u.indexOf('Presto') > -1, //opera内核
			webKit  : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko   : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
			mobile  : !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios     : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android : u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			iPhone  : u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad    : u.indexOf('iPad') > -1, //是否iPad
			webApp  : u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin  : u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq      : u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language : (navigator.browserLanguage || navigator.language).toLowerCase()
}
if (browser.versions.mobile) {
	alias.jquery = alias.$3;
}

// appends for single project
if (typeof appends != 'undefined' && typeof appends == 'object') {
	for (var k in appends) {
		alias[k] = appends[k];
	}
}
requirejs.config({
	baseUrl : '/assets/js',
	paths   : alias,
	shim    : shim
});


