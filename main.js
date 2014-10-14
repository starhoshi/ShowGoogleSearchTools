var lists = {
 	"ウェブ":"",
	"画像":"isch",
	"動画":"vid",
	"地図":"map",
	"ニュース":"nws",
	"ショッピング":"shop",
	"書籍":"bks",
	"アプリ":"app"
};

$(function(){
	openSearchTools();
});

function openSearchTools() {
	$("#hdtb_tls").addClass("hdtb-tl-sel");
	$("#hdtbMenus").attr("class","hdtb-td-o");
	$("#hdtbMenus").attr("aria-expanded","true");
	$("#hdtbMenus").css("width", "644px");
	$("#resultStats").css("right","16px");
	$("#appbar").removeClass("hdtb-ab-o");
}
