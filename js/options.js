$(function(){
	// ボタンクリック時

	// ストレージに保存する。
	$("#save").click(function () {
		// 保存
		chrome.storage.sync.set(
			{
				"url": $("#inputUrl").val(),
				"token": $("#inputToken").val(),
				"limit": $("#inputLimit").val(),
			},function(){
				if(chrome.runtime.lastError){
					$("#error").html( chrome.i18n.getMessage("optionsErrorSave") + chrome.runtime.lastError.message);
					$("#error").show();
				}else{
					$("#info").html(chrome.i18n.getMessage("optionsInfoSave"));
					$("#info").show();
				}
			}
		);
	});

	// ストレージを削除する。
	$("#clear").click(function () {
		// 削除
		chrome.storage.sync.clear(function() {
			if(chrome.runtime.lastError){
				$("#error").html(chrome.i18n.getMessage("optionsErrorClear") + chrome.runtime.lastError.message);
				$("#error").show();
			}else{
				$("#inputUrl").val("");
				$("#inputToken").val("");
				$("#inputLimit").val("");
				$("#info").html(chrome.i18n.getMessage("optionsInfoClear"));
				$("#info").show();
			}

		});
	});

	// 現在の設定値を表示する。
	chrome.storage.sync.get(["url","token","limit"], function(items) {
		if(chrome.runtime.lastError){
			$("#error").html(chrome.i18n.getMessage("optionsErrorGet") + chrome.runtime.lastError.message);
			$("#error").show();
		}else{
			$("#inputUrl").val(items.url);
			$("#inputToken").val(items.token);
			$("#inputLimit").val(items.limit);
		}
	});
});
