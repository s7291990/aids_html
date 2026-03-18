var work = [
  /*기타*/
  { "cate":"m01", "dep01":"로그인", "dep02":"로그인", "url":"./login/login.html", "date":"2025-08-10" },

  { "cate":"m02", "dep01":"홈", "dep02":"홈", "url":"./home/index.html", "date":"2025-08-10" },

  { "cate":"m03", "dep01":"차량 관리", "dep02":"차량수정", "url":"./car/car-edit.html", "date":"2025-08-10" },
  { "cate":"m03", "dep01":"차량 관리", "dep02":"차량 관리", "url":"./car/car-list.html", "date":"2025-08-10" },
  { "cate":"m03", "dep01":"차량 관리", "dep02":"차량 등록", "url":"./car/car-register.html", "date":"2025-08-10" },
  { "cate":"m03", "dep01":"차량 관리", "dep02":"[팝업]차량 엑셀 등록", "url":"./car/popup-excel-register.html", "date":"2025-08-10" },

  { "cate":"m04", "dep01":"제휴콜 현황", "dep02":"제휴콜 현황", "url":"./partnership/partnership-list.html", "date":"2025-08-10" },
  { "cate":"m04", "dep01":"제휴콜 현황", "dep02":"제휴콜 요청취소", "url":"./partnership/partnership-register.html", "date":"2025-08-10" },

  { "cate":"m05", "dep01":"보험 계약서", "dep02":"제휴 관리", "url":"./contract/partnership-list.html", "date":"2025-08-10" },

  { "cate":"m06", "dep01":"보험 계약서", "dep02":"보험 계약서", "url":"./contract/contract-list.html", "date":"2025-08-10" },
  { "cate":"m06", "dep01":"보험 계약서", "dep02":"보험계약서 등록", "url":"./contract/contract-register.html", "date":"2025-08-10" },
  { "cate":"m06", "dep01":"보험 계약서", "dep02":"[팝업]업체 선택", "url":"./contract/popup-biz-select.html", "date":"2025-08-10" },
  { "cate":"m06", "dep01":"보험 계약서", "dep02":"[팝업]비대면계약서 작성요청", "url":"./contract/popup-contact-register.html", "date":"2025-08-10" },

  { "cate":"m07", "dep01":"캐시/포인트관리", "dep02":"캐시/포인트 내역", "url":"./cash/cash-point-list.html", "date":"2025-08-10" },
  { "cate":"m07", "dep01":"캐시/포인트관리", "dep02":"청구완료 상세", "url":"./cash/cash-point-register.html", "date":"2025-08-10" },
  { "cate":"m07", "dep01":"캐시/포인트관리", "dep02":"[팝업]캐치충전", "url":"./cash/popup-cash-charging.html", "date":"2025-08-10" },
  { "cate":"m07", "dep01":"캐시/포인트관리", "dep02":"[팝업]비대면계약서 작성요청", "url":"./cash/popup-contact-save.html", "date":"2025-08-10" },
  { "cate":"m07", "dep01":"캐시/포인트관리", "dep02":"[팝업]사진 보기", "url":"./cash/popup-photo-view.html", "date":"2025-08-10" },
  { "cate":"m07", "dep01":"캐시/포인트관리", "dep02":"[팝업]RIMS 조회", "url":"./cash/popup-rims-view.html", "date":"2025-08-10" },

  { "cate":"m08", "dep01":"직원 관리", "dep02":"직원 관리", "url":"./staff/staff-list.html", "date":"2025-08-10" },
  { "cate":"m08", "dep01":"직원 관리", "dep02":"직원 관리 등록", "url":"./staff/staff-register.html", "date":"2025-08-10" },
  { "cate":"m08", "dep01":"직원 관리", "dep02":"탈퇴직원 관리", "url":"./staff/withdrawal-list.html", "date":"2025-08-10" },
  { "cate":"m08", "dep01":"직원 관리", "dep02":"탈퇴직원 관리 등록", "url":"./staff/withdrawal-register.html", "date":"2025-08-10" },

  { "cate":"m09", "dep01":"공지/문의/알림", "dep02":"알림내역", "url":"./notice/alim-list.html", "date":"2025-08-10" },
  { "cate":"m09", "dep01":"공지/문의/알림", "dep02":"문의하기", "url":"./notice/contact-list.html", "date":"2025-08-10" },
  { "cate":"m09", "dep01":"공지/문의/알림", "dep02":"문의하기 등록", "url":"./notice/contact-register.html", "date":"2025-08-10" },
  { "cate":"m09", "dep01":"공지/문의/알림", "dep02":"문의관리 상세", "url":"./notice/contact-view.html", "date":"2025-08-10" },
  { "cate":"m09", "dep01":"공지/문의/알림", "dep02":"공지사항", "url":"./notice/notice-list.html", "date":"2025-08-10" },
  { "cate":"m09", "dep01":"공지/문의/알림", "dep02":"공지사항 상세", "url":"./notice/notice-view.html", "date":"2025-08-10" },

  { "cate":"m010", "dep01":"소개처 관리", "dep02":"소개처 관리", "url":"./referral/referral-list.html", "date":"2025-08-10" },
  { "cate":"m010", "dep01":"소개처 관리", "dep02":"소개처 등록", "url":"./referral/referral-register.html", "date":"2025-08-10" },

  { "cate":"m011", "dep01":"사업자 관리", "dep02":"사업자관리", "url":"./entrepreneur/entrepreneur-list.html", "date":"2025-08-10" },
  { "cate":"m011", "dep01":"사업자 관리", "dep02":"사업자 정보 관리", "url":"./entrepreneur/entrepreneur-register.html", "date":"2025-08-10" },

  { "cate":"m012", "dep01":"설정", "dep02":"설정", "url":"./setting/admin-register.html", "date":"2025-08-10" },




];

 
$(function(){   
	listTable(".siteNavi li", ".siteNavi li .num");
}); 
 
function listTable(cls, num){   
	var tr;
	for(i=0; i<work.length; i++){
		tr += "<tr class="+work[i].cate+">";
		tr += "<td>"+work[i].dep01+"</td>";
		tr += "<td>"+work[i].dep02+"</td>";
		tr += "<td><a href='./"+work[i].url+"' target='_blank'>"+work[i].url+"</a></td>";
		tr += "<td class='ac'>"+work[i].date+"</td>";
		tr += "</tr>"; 
	}  
	$("table tbody").append(tr);  
	
	$(num).each(function(z){
		if(z===0){
			$(num).eq(z).text("("+work.length+"p)");
		}else{
			$(num).eq(z).text("("+$('.m0'+z).length+"p)");
		} 
	}); 
	$("body").on("click",cls, function(){
		$(cls).removeClass("on"); 
		$(this).addClass("on");
		$("table tbody tr").hide();
		if($(this).index() === 0){
			$("table tbody tr").show();
		}else{
			$(".m0"+$(this).index()).show();
		} 
	});  
}  
