var work = [
  /*지식베이스정보 관리 (FKB)*/
  //{ "cate":"m01", "dep01":"로그인", "dep02":"로그인", "url":"./login/login.html", "date":"2025-08-10" },

  /*상황인지 추론 결과 관리(CBSI)*/
  { "cate":"m02", "dep01":"상황인지 결과", "dep02":"추론 결과 상세정보", "url":"./html/cbsi/cbsi-detail.html", "date":"2026-08-25" },

  /*위협대상 정보 관리 (SIM)*/
  { "cate":"m03", "dep01":"영상정보", "dep02":"목록", "url":"./html/sim/sim-image-list.html", "date":"2026-08-25" },
  { "cate":"m03", "dep01":"영상정보", "dep02":"상세 정보", "url":"./html/sim/sim-image-detail.html", "date":"2026-08-25" },
  { "cate":"m03", "dep01":"영상정보", "dep02":"추가", "url":"./html/sim/sim-image-add.html", "date":"2026-08-25" },
  //{ "cate":"m03", "dep01":"영상정보", "dep02":"수정", "url":"./html/sim/sim-image-modify.html", "date":"2026-08-25" },
  //{ "cate":"m03", "dep01":"영상정보", "dep02":"삭제", "url":"./html/sim/sim-image-delete.html", "date":"2026-08-25" },

  { "cate":"m03", "dep01":"전문정보", "dep02":"상세 정보", "url":"./html/sim/sim-text-detail.html", "date":"2026-08-25" },

  { "cate":"m03", "dep01":"음성정보", "dep02":"목록", "url":"./html/sim/sim-audio-list.html", "date":"2026-08-25" },
  { "cate":"m03", "dep01":"음성정보", "dep02":"상세정보", "url":"./html/sim/sim-audio-detail.html", "date":"2026-08-25" },

  { "cate":"m03", "dep01":"자산정보", "dep02":"목록", "url":"./html/sim/sim-friendly-asset-list.html", "date":"2026-08-25" },
  { "cate":"m03", "dep01":"자산정보", "dep02":"상세정보", "url":"./html/sim/sim-friendly-asset-detail.html", "date":"2026-08-25" },

  { "cate":"m03", "dep01":"부대정보", "dep02":"목록", "url":"./html/sim/sim-friendly-army-list.html", "date":"2026-08-25" },
  { "cate":"m03", "dep01":"부대정보", "dep02":"상세정보", "url":"./html/sim/sim-friendly-army-detail.html", "date":"2026-08-25" },

  { "cate":"m03", "dep01":"아/적 화기효과", "dep02":"목록", "url":"./html/sim/sim-friendly-enemy-list.html", "date":"2026-08-25" },

  { "cate":"m03", "dep01":"자산정보", "dep02":"목록", "url":"./html/sim/sim-enemy-asset-list.html", "date":"2026-08-25" },
  { "cate":"m03", "dep01":"자산정보", "dep02":"상세정보", "url":"./html/sim/sim-enemy-asset-detail.html", "date":"2026-08-25" },



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
