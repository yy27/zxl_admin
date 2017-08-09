$(function () {
    var reg = new RegExp('(^|&)utm_source=([^&]*)(&|$)', 'i'),
		r = location.search.substr(1).match(reg),
		utm_source = r != null ? $.trim(unescape(r[2])) : null;
	
	switch(utm_source) {
		case 'Baidu_Search': 
		case 'baiduwangmeng':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			break;
		case 'Baidu_Search_njuu':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍗椾含淇℃柟杈惧晢璐告湁闄愬叕鍙�</p>');
			break;
		case 'Baidu_Search_njtt':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍗椾含鑺变害棣欒锤鏄撴湁闄愬叕鍙�</p>');
			break;
		case 'sogou_gzco8':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傚崕鏌斿晢璐告湁闄愬叕鍙�</p>');
			break;
		case 'Baidu_Search_hf_net88':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細婊佸窞涓滃窛宸ヨ锤鏈夐檺鍏徃</p>');
			break;
		case 'Baidu_Search_hf_cn888':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細婊佸窞涓滃窛宸ヨ锤鏈夐檺鍏徃</p>');
			break;
		case 'sogou_gzyap':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞鐓屽晢鍟嗚锤鏈夐檺鍏徃</p>');
			break;
		case 'sogou_jfss_gzco8':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傚崕鏌斿晢璐告湁闄愬叕鍙�</p>');
			break;
		case 'sogou_gzszw':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞鍗庢椂杞╁晢璐告湁闄愬叕鍙�</p>');
			break;
		case 'HaoSo_yapan':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含楣忓潳瀹忚揪鍟嗚锤鏈夐檺鍏徃</p>');
			break;
		case 'HaoSo_szwgledcn':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含涓囬『寮樼ぜ鍟嗚锤鏈夐檺鍏徃</p>');
			break;		
		case 'shenma_dawogua01':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');
			break;	
		case 'shenma_dawogua02':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');
			break;	
		case 'shenma_sousuo':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞缁胯胺淇濆仴鍝佹湁闄愬叕鍙�</p>');
			break;	
		case 'shenma_sousuo_jc2':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞缁胯胺淇濆仴鍝佹湁闄愬叕鍙�</p>');
			break;
		case 'HaoSo_JF_szwgledcn':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含涓囬『寮樼ぜ鍟嗚锤鏈夐檺鍏徃</p>');
			break;
		case 'Baidu_Search_czb55':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Baidu_Search_czb888':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Baidu_Seearch_JF_cz05':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Baidu_Search_cz07':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Baidu_Search_czb888':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Sogou_Search_JFHSB_DELVE1':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傚悕鑸滆锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Sogou_Search_JFHSB_DELVE2':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傞┌娲捐锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'Sogou_Search_JFHSB_deliskin':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傚悍娌佹禒璐告槗鏈夐檺鍏徃</p>');
			break;	
		case 'Baidu_Search_JFHSB_SYJDDCOM':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細娌堥槼灞卞悎鍟嗚锤鏈夐檺鍏徃</p>');
			break;	
		case 'Baidu_Search_JFHSB_SYZZCN':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細娌堥槼灞卞悎鍟嗚锤鏈夐檺鍏徃</p>');
			break;	
		case 'shenma_sft28':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');
			break;
		case 'uc_esm01':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');
			break;		
		case 'uc_esm02':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');
			break;		
		case 'uc_esm03':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞灏婂崕鐢熺墿绉戞妧鏈夐檺鍏徃</p>');
			break;				
		case 'xiaomi01':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞濂ヨ摀鏂寲濡嗗搧鏈夐檺鍏徃 绮CP澶�15081742鍙� kefu@deliskin.cn</p>');
			break;					
		case 'Baidu_Search_JFHSB_SYMMNET':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細娌堥槼灞卞悎鍟嗚锤鏈夐檺鍏徃</p>');
			break;
		case 'Baidu_Search_QBHSB_hfcn888':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細婊佸窞涓滃窛宸ヨ锤鏈夐檺鍏徃</p>');
			break;
		case 'Baidu_Search_QBHSB_hfnet88':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細婊佸窞涓滃窛宸ヨ锤鏈夐檺鍏徃</p>');
			break;
		case 'SoGou_Search_JFHSB_gzdelve':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞夸笢浼犲鍖昏嵂绉戞妧鏈夐檺鍏徃</p>');
			break;	
		case 'Baidu_Search_wzcn':
		case 'Baidu_Search_wzcom':
		case 'Baidu_Search_mwznet':
		case 'Baidu_Search_mwzmcn':
		case 'Baidu_Search_wz_dainet':
		case 'Baidu_Search_wzmnet':
		case 'Baidu_Search_JFHSB_wzcom':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細娓╁窞缂旂編绾圭唬褰㈣薄璁捐鏈夐檺鍏徃</p>');
			break;	
		case 'sogou_delve3':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯備赴鐩婅锤鏄撴湁闄愬叕鍙�</p>');
			break;	
		case 'sogou_cogiskin':
			$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞鏍艰开濂囪锤鏄撴湁闄愬叕鍙�</p>');
			break;				
		default:
			if(location.href.indexOf('szwgled.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍗椾含淇℃柟杈惧晢璐告湁闄愬叕鍙�</p>');
			else if(location.href.indexOf('article.yapanskin.com') > -1 || location.href.indexOf('dawl.yapanskin.net') >-1 )
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細娓╁窞缂旂編绾圭唬褰㈣薄璁捐鏈夐檺鍏徃</p>');
			else if(location.href.indexOf('hfff.cogiskin.com') > -1 )
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			else if(location.href.indexOf('hfff.yapanskin.net') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			else if(location.href.indexOf('dfew.cogiskin.cn') > -1 )
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			else if(location.href.indexOf('article.deliskin.cn') > -1 )
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');			
			else if(location.href.indexOf('haoso.ybl2008.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傞挏杞╄锤鏄撴湁闄愬叕鍙�</p>');
       		<!--else if(location.href.indexOf('bd.delvel.net') > -1) -->	
				<!--$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含涓婁赴鍢夌鍟嗚锤鏈夐檺鍏徃</p>');	-->		
			else if(location.href.indexOf('haoso.shxxjj.com.cn') > -1 )
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含濂ュ崥鍏寸繑鍟嗚锤鏈夐檺鍏徃</p>');
			else if(location.href.indexOf('haoso.eyzrzx.cn') > -1 )
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含涓滃崌鍢変笟鍟嗚锤鏈夐檺鍏徃</p>');
			else if(location.search.indexOf('Baidu_Search') > -1 || location.href.indexOf('efes.cogiskin.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細杩炰簯娓崳鍩旇锤鏄撴湁闄愬叕鍙�</p>');
			<!--else if(location.href.indexOf('bd.delvel.cn') > -1)  -->
			<!--	$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞夸笢浼犲鍖婚櫌绉戞妧鏈夐檺鍏徃</p>');		-->
			else if(location.href.indexOf('m.joinus28.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');		
			else if(location.href.indexOf('sm.friend-v.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');		
			else if(location.href.indexOf('sm.application-r.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.application-s.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');		
			else if(location.href.indexOf('sm.application-x.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.application-y.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.application-z.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍟嗗瘜閫�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('bd.liyongqiang.net') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細瀹佹尝娴锋洐杩垱鍟嗚锤鏈夐檺鍏徃</p>');					
			else if(location.href.indexOf('uca.deliskin.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');	
			else if(location.href.indexOf('ucb.delvel.net') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞澶х獫鐡滅數瀛愬晢鍔℃湁闄愬叕鍙�</p>');	
			else if(location.href.indexOf('jf.game-yy.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含钃濆煙鎬濆垱缃戠粶绉戞妧鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('jf.game-uu.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含钃濆煙鎬濆垱缃戠粶绉戞妧鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('ucc.deliskin.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞娆т附鑾卞寲濡嗗搧鏈夐檺鍏徃</p>');			
			else if(location.href.indexOf('wpk.bgrcml.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細闈掑矝閾朵匠姹囬€氬晢鍝佺粡钀ユ湁闄愬叕鍙�</p>');	
			else if(location.href.indexOf('wpk.fhrtre.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細闈掑矝閾朵匠姹囬€氬晢鍝佺粡钀ユ湁闄愬叕鍙�</p>');	
			else if(location.href.indexOf('article.weipankong.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞甯傜畝鏂圭綉缁滅鎶€鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('www.chinafreak.cn') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞鍙彲鎶曡祫鍜ㄨ鏈夐檺鍏徃</p>');					
			else if(location.href.indexOf('bd.ziling10.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細鍖椾含绱繋绉戞妧鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.join376.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細铻嶅晢杈�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.join382.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細铻嶅晢杈�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.join378.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細铻嶅晢杈�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.bgepx.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細铻嶅晢杈�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('sm.gtezs.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細铻嶅晢杈�(澶╂触)鍟嗚锤鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('bdwap.ilifeb.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細骞垮窞涔愯姍淇℃伅绉戞妧鏈夐檺鍏徃</p>');	
			else if(location.href.indexOf('newh.reinezx.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細涓滆帪鍗楀煄鐟炶姍鑷ｅ尰鐤楃編瀹归棬璇婇儴鏈夐檺鍏徃</p>');
			else if(location.href.indexOf('newb.reinezx.com') > -1)
				$('body').after('<p id="sh-copy-right" style="margin: 10px 0; font-size: 16px; color: #333; text-align: center;">鐗堟潈鎵€鏈夛細涓滆帪鍗楀煄鐟炶姍鑷ｅ尰鐤楃編瀹归棬璇婇儴鏈夐檺鍏徃</p>');	
			break;
	}
});	



//sm.join376.com



