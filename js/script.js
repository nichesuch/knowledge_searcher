//Knowledge Searcher Script

$(function(){
	var KNOWLEDGE_URL;
	var KNOWLEDGE_TOKEN;
	var KNOWLEDGE_LIMIT = 10;

	var KNOWLEDGE_BUTTON;
	var KNOWLEDGE_LIST;

	var BUTTON_STYLE = {
		top: '100px',
		left: '10px',
		height: '30px',
		width: '30px',
		'font-size': '30px',
		'background-color':'#3B5998'
	};
	var LIST_STYLE = {
		position: 'fixed',
		top: '170px',
		left: '50px',
		'z-index': 10000,
		padding: '10px',
		margin: '20px',
		'font-size': '20px',
		height: '80%',
		width:'80%'
	};
	var LISTITEM_STYLE = {
		position: 'relative',
		'list-style-type': 'none',/*ポチ消す*/
		padding: '0.5em 0.5em 0.5em 0.5em',
		'border': 'solid 1px #2d8fdd',
		'border-left': 'solid 6px #2d8fdd',
		'margin-bottom': '5px',
		'line-height': 1.5,
		background: '#ffffff',
		'vertical-align': 'middle',
		color: '#505050',
		'border-radius': '0px 15px 15px 0px' /*左側の角丸く*/
	};
	var BADGE_STYLE = {
		cursor: 'pointer',
		position: 'fixed',
		left: '15px',
		'z-index': 9999,
		padding: '10px',
		height: '20px',
		width: '20px',
		'font-size': '20px',
		'text-align': 'center',
		color: '#ffffff',
		'border-radius': '50%'
	};
	
	var TAGS_POSITION = {top:'170px'};
	var KEYWORD_POSITION = {top:'220px'};
	var CLOSE_POSITION = {top:'270px'};
	var TAGS_COLOR = {'background-color':'#987654'};
	var KEYWORD_COLOR = {'background-color':'#456789'};
	var CLOSE_COLOR = {'background-color':'#333333'};
	var LINK_STYLE = {'display':'block'};


	//イニシャライズ
	function init() {

		//検索結果一覧は非表示で追加
		KNOWLEDGE_LIST = $("<ul>").css(LIST_STYLE).hide();
		$(document.body).append(KNOWLEDGE_LIST);

		//Knowledgeボタンのアイコン
		svg = `
			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 width="30px" height="30px" viewBox="0 0 475.452 475.451" style="enable-background:new 0 0 475.452 475.451;"
				 xml:space="preserve">
			<g>
				<path fill="currentColor" d="M468.083,118.385c-3.99-5.33-9.61-9.419-16.854-12.275c0.387,6.665-0.086,12.09-1.42,16.281l-85.65,281.789
					c-1.526,4.948-4.859,8.897-9.992,11.848c-5.141,2.953-10.469,4.428-15.989,4.428H74.66c-22.84,0-36.542-6.652-41.112-19.985
					c-1.903-5.14-1.807-9.229,0.288-12.275c2.092-2.857,5.708-4.288,10.85-4.288h248.102c17.702,0,29.93-3.285,36.688-9.852
					c6.763-6.567,13.565-21.177,20.413-43.824l78.228-258.669c4.186-14.084,2.474-26.457-5.141-37.113s-18.462-15.987-32.548-15.987
					H173.163c-2.474,0-7.329,0.854-14.562,2.568l0.284-0.859c-5.33-1.14-9.851-1.662-13.562-1.571
					c-3.71,0.099-7.137,1.192-10.277,3.289c-3.14,2.094-5.664,4.328-7.566,6.706c-1.903,2.38-3.761,5.426-5.568,9.136
					c-1.805,3.715-3.33,7.142-4.567,10.282c-1.237,3.14-2.666,6.473-4.281,9.998c-1.62,3.521-3.186,6.423-4.71,8.706
					c-1.143,1.523-2.758,3.521-4.854,5.996c-2.091,2.474-3.805,4.664-5.137,6.567c-1.331,1.903-2.19,3.616-2.568,5.14
					c-0.378,1.711-0.19,4.233,0.571,7.566c0.76,3.328,1.047,5.753,0.854,7.277c-0.76,7.232-3.378,16.414-7.849,27.552
					c-4.471,11.136-8.52,19.18-12.135,24.126c-0.761,0.95-2.853,3.092-6.28,6.424c-3.427,3.33-5.52,6.23-6.279,8.704
					c-0.762,0.951-0.81,3.617-0.144,7.994c0.666,4.38,0.907,7.423,0.715,9.136c-0.765,6.473-3.14,15.037-7.139,25.697
					c-3.999,10.657-7.994,19.414-11.993,26.265c-0.569,1.141-2.185,3.328-4.853,6.567c-2.662,3.237-4.283,5.902-4.853,7.99
					c-0.38,1.523-0.33,4.188,0.144,7.994c0.473,3.806,0.426,6.66-0.144,8.562c-1.521,7.228-4.377,15.94-8.565,26.125
					c-4.187,10.178-8.47,18.896-12.851,26.121c-1.138,1.906-2.712,4.145-4.708,6.711c-1.999,2.566-3.568,4.805-4.711,6.707
					c-1.141,1.903-1.903,3.901-2.284,5.996c-0.19,1.143,0.098,2.998,0.859,5.571c0.76,2.566,1.047,4.612,0.854,6.14
					c-0.192,2.662-0.57,6.187-1.141,10.567c-0.572,4.373-0.859,6.939-0.859,7.699c-4.187,11.424-3.999,23.511,0.572,36.269
					c5.33,14.838,14.797,27.36,28.406,37.541c13.61,10.185,27.74,15.27,42.398,15.27h263.521c12.367,0,24.026-4.141,34.971-12.416
					c10.944-8.281,18.227-18.507,21.837-30.696l78.511-258.662C477.412,141.51,475.701,129.234,468.083,118.385z M164.31,118.956
					l5.997-18.274c0.76-2.474,2.329-4.615,4.709-6.423c2.38-1.805,4.808-2.712,7.282-2.712h173.589c2.663,0,4.565,0.903,5.708,2.712
					c1.14,1.809,1.335,3.949,0.575,6.423l-6.002,18.274c-0.764,2.475-2.327,4.611-4.713,6.424c-2.382,1.805-4.805,2.708-7.278,2.708
					H170.593c-2.666,0-4.568-0.9-5.711-2.708C163.74,123.567,163.55,121.431,164.31,118.956z M140.615,192.045l5.996-18.271
					c0.76-2.474,2.331-4.615,4.709-6.423c2.38-1.809,4.805-2.712,7.282-2.712h173.583c2.666,0,4.572,0.9,5.712,2.712
					c1.14,1.809,1.331,3.949,0.568,6.423l-5.996,18.271c-0.759,2.474-2.33,4.617-4.708,6.423c-2.383,1.809-4.805,2.712-7.283,2.712
					H146.895c-2.664,0-4.567-0.9-5.708-2.712C140.043,196.662,139.854,194.519,140.615,192.045z"/>
			</g>
			</svg>`;

		//Knowledgeボタンを追加
		KNOWLEDGE_BUTTON = $("<div>").html(svg).css(BADGE_STYLE).css(BUTTON_STYLE).click(function(){
			//クリックしたらKNOWLEDGE_URLに飛ぶ
			location.href = KNOWLEDGE_URL;
		}).hover(
			//マウスオーバーで検索結果を非表示
			function(){
				$(KNOWLEDGE_LIST).hide();
			},
			function(){}
		);
		$(document.body).append(KNOWLEDGE_BUTTON);

		close_button = $("<div>").html("&times;").css(BADGE_STYLE).css(CLOSE_POSITION).css(CLOSE_COLOR).click(function(){
				$(KNOWLEDGE_LIST).hide();
		}).hover(
			//マウスオーバーで検索結果を非表示
			function(){
				$(KNOWLEDGE_LIST).hide();
			},
			function(){}
		);
		$(document.body).append(close_button);

	}

	//リストの作成
	function createList(badge,data) {
		//バッジへのマウスオーバーで表示
		$(badge).hover(
			function () {
				//検索結果を一から詰め直して表示する。
				$(KNOWLEDGE_LIST).empty();
				$.each(data, function(index, value) {
					$(KNOWLEDGE_LIST).append(
						$("<li>").css(LISTITEM_STYLE).append(
							$("<a>").css(LINK_STYLE).attr("href", KNOWLEDGE_URL + "/open.knowledge/view/" + value.knowledgeId).html(value.title)
						)
					);
				});
				$(KNOWLEDGE_LIST).show();
			}
		);
	}

	//タグ検索
	function searchTags(query) {
		$.get(
			KNOWLEDGE_URL + "/api/knowledges",
			{
				"tags": query,
				"private_token": KNOWLEDGE_TOKEN,
				"limit": KNOWLEDGE_LIMIT
			},
			function(data){
				//タグは正式なタグ名でない場合、全件検索になってしまう。
				//1つ目のタグリストの中に検索したタグがなければ、タグ検索は失敗とみなす。
				//リミットまで検索された場合は'+'で追加情報を表す。
				size = data.length;
				if(size != 0 && data[0].tags.indexOf(query) == -1){
					size = 0;
				}else if(size >= KNOWLEDGE_LIMIT) {
					size = (KNOWLEDGE_LIMIT-1)+'+';
				}
				
				//検索結果をバッジで表す。
				//バッジでKnowledgeの検索結果に飛べる。
				knowledeBadge = $("<div>").html(size).css(BADGE_STYLE).css(TAGS_POSITION).css(TAGS_COLOR);
				link = $("<a>").attr('href', KNOWLEDGE_URL + "/open.knowledge/list?tagNames=" + query);
				$(link).append(knowledeBadge);
				$(document.body).append(link);
				
				if(size == 0) return;
				
				//リストの作成
				createList(link,data);
			}
		);
	}

	//キーワード検索
	function searchKeyword(query) {
		$.get(
			KNOWLEDGE_URL+"/api/knowledges",
			{
				"keyword": query,
				"private_token": KNOWLEDGE_TOKEN,
				"limit": KNOWLEDGE_LIMIT
			},
			function(data){
				size = data.length;
				
				//リミットまで検索された場合は'+'で追加情報を表す。
				if(size >= KNOWLEDGE_LIMIT) {
					size = (KNOWLEDGE_LIMIT-1)+'+';
				}
				
				//検索結果をバッジで表す。
				//バッジでKnowledgeの検索結果に飛べる。
				knowledeBadge = $("<div>").html(size).css(BADGE_STYLE).css(KEYWORD_POSITION).css(KEYWORD_COLOR);
				link = $("<a href='" + KNOWLEDGE_URL + "/open.knowledge/list?keyword="+query+"'>");
				$(link).append(knowledeBadge);
				$(document.body).append(link);
				
				if(size == 0) return;
				
				//リストの作成
				createList(link,data);
			}
		);
	}

	// 処理はここから

	//設定を取得する。
	chrome.storage.sync.get(["url","token","limit"], function(items) {

		if (!items.url || !items.token) {
			alert("Knowledge Searcher nead Options.");
			return;
		}
		KNOWLEDGE_URL = items.url;
		KNOWLEDGE_TOKEN = items.token;
		
		if (items.limit) {
			KNOWLEDGE_LIMIT = items.limit;
		}

		//イニシャライズ
		init();

		//Google検索のキーワードを取得
		query = $('input[name="q"]').val();

		//キーワードがあればKnowledgeを検索
		if(query) {
			searchTags(query);
			searchKeyword(query);
		}
	});

});

