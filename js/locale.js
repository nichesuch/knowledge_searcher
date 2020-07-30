// 多言語化スクリプト
// data-localeが設定されている要素はその内容をmessages.jsonの設定により、書き換える。

$(function(){
	$('[data-locale]').each(function(){
		$(this).html( chrome.i18n.getMessage( $(this).data('locale') ) );
	});
});
