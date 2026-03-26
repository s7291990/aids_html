$(function () {
  common.calendar();

  // 상단 햄버거 ( 좌측 사이드영역 숨김 처리 )
  $(".hamburger").on("click", function () {
    $(".sidebar").toggleClass("closed");
  });
  // 좌측 메뉴 토글
  $("body").on("click", ".nav-menu ul>li>.nav-item", function () {
    var ck = $(this).hasClass("active");
    if (ck) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
  // 탭메뉴 (홈화면)
  $("body").on("click", ".period-tab", function () {
    $(this)
      .parents(".period-tabs")
      .eq(0)
      .find(".period-tab")
      .removeClass("active");
    $(this).addClass("active");
  });
  // 탭메뉴 (기본)
  $("body").on("click", ".tab-btn", function () {
    $(this).parents(".tabs").eq(0).find(".tab-btn").removeClass("active");
    $(this).addClass("active");
  });
  // 탭메뉴 (날짜)
  $("body").on("click", ".btn-date", function () {
    $(this)
      .parents(".date-tab-container")
      .eq(0)
      .find(".btn-date")
      .removeClass("active");
    $(this).addClass("active");
  });
  // 라디오 선택 (직접입력 선택시)
  $("body").on("change", ".radio-group-wrap input[type='radio']", function () {
    var value = $(this).val();
    if (value === "custom") {
      $(this).parents(".radio-group-wrap").eq(0).addClass("custom");
    } else {
      $(this).parents(".radio-group-wrap").eq(0).removeClass("custom");
    }
  });
  // 셀렉트 선택 (직접입력 선택시)
  $("body").on("change", ".select", function () {
    var value = $(this).val();
    if (value === "custom") {
      $(this).parents(".select-custom").eq(0).addClass("custom");
    } else {
      $(this).parents(".select-custom").eq(0).removeClass("custom");
    }
  });
  // 차량 엑셀 등록 (파일선택)
  $("body").on("click", ".excel-register-file .file-btn", function () {
    $(".excel-register-file .file-input").trigger("click");
  });
  $("body").on("change", ".excel-register-file .file-input", function () {
    $(".file-name").val($(this).val());
  });

  // 셀렉트 박스 선택후 포커스 해제
  $("body").on("change mouseleave", "select", function () {
    var el = this;
    setTimeout(function () {
      if (el) {
        el.blur();
      }
    }, 100);
  });
});

// 년도 select 박스 option 텍스트에 "년"을 붙여주는 헬퍼
function decorateYearSelect(inst) {
  try {
    var $dpDiv = inst && inst.dpDiv ? inst.dpDiv : $(".ui-datepicker");
    var $yearSelect = $dpDiv.find(".ui-datepicker-year");
    $yearSelect.find("option").each(function () {
      var $opt = $(this);
      var text = $opt.text().replace("년", "");
      if (text) {
        $opt.text(text + "년");
      }
    });
  } catch (e) {
    // 안전하게 무시
  }
}

common = {
  calendar: function () {
    // 공통 옵션 (날짜 부분)
    var baseOptions = {
      changeMonth: true,
      changeYear: true,
      //minDate: "-100y",
      //maxDate: new Date(),
      nextText: "다음 달",
      prevText: "이전 달",
      autoclose: true,
      numberOfMonths: [1, 1],
      stepMonths: 3,
      yearRange: "c-100:c+10",
      showButtonPanel: true,
      currentText: "오늘 날짜",
      closeText: "닫기",
      dateFormat: "yy-mm-dd",
      showMonthAfterYear: true,
      dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
      monthNamesShort: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      beforeShow: function (input, inst) {
        setTimeout(function () {
          decorateYearSelect(inst);
        }, 0);
      },
      onChangeMonthYear: function (year, month, inst) {
        setTimeout(function () {
          decorateYearSelect(inst);
        }, 0);
      },
    };

    // datepicker (날짜 전용)
    $(".datepicker").datepicker(baseOptions);

    // datetimepicker (날짜 + 시간)
    if (typeof $.fn.datetimepicker === "function") {
      var dateTimeOptions = $.extend({}, baseOptions, {
        timeFormat: "HH:mm",
        controlType: "select",
        oneLine: true,
        hourMin: 0,
        hourMax: 23,
        minuteStep: 1,
        timeOnly: false,
      });
      $(".datetimepicker").datetimepicker(dateTimeOptions);
    }
  },
  popOpen: function (o) {
    $(o).addClass("active");
  },
  popClose: function (o) {
    $(o).removeClass("active");
  },
};

function estimateScrollYBeforeInit() {
  if (!tableWrap) {
    return "calc(100vh - 280px)";
  }
  var thead = document.querySelector("#tableGrid thead");
  var theadH = thead ? thead.offsetHeight : 0;
  var overhead = 130;
  var px = Math.max(120, tableWrap.clientHeight - theadH - overhead);
  return px + "px";
}

function fitScrollBodyHeight(api) {
  var wrap = document.querySelector(".table-container");
  if (!wrap) return;
  var dt = wrap.querySelector(".dt-container");
  var body = wrap.querySelector(".dt-scroll-body");
  if (!dt || !body) return;
  var head = wrap.querySelector(".dt-scroll-head");
  var headH = head ? head.offsetHeight : 0;
  var rows = dt.querySelectorAll(":scope > .dt-layout-row");
  var used = 0;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row.classList.contains("dt-layout-table")) {
      used += headH;
    } else {
      used += row.offsetHeight;
    }
  }
  var gap = 8;
  var h = Math.max(80, wrap.clientHeight - used - gap);
  body.style.height = h + "px";
  body.style.maxHeight = h + "px";
  if (api && api.columns) {
    api.columns.adjust();
  }
}

function _dtApiFrom(any) {
  if (!any) return null;
  if (any.table && typeof any.table === "function") return any; // API instance
  if (any.settings && typeof any.settings === "function") {
    var s = any.settings();
    return s && s[0] ? new DataTable.Api(s[0]) : null;
  }
  return null;
}

function _dtWrapFrom(apiOrTable) {
  var api = _dtApiFrom(apiOrTable);
  if (!api) return null;
  var node = api.table && api.table().node ? api.table().node() : null;
  return node && node.closest ? node.closest(".table-container") : null;
}

// 래퍼 높이에서 "테이블 위 영역(위협도 등)" + "DT 컨트롤/헤더"를 제외한 나머지를 tbody 스크롤 높이로 맞춤
function fitScrollBodyHeight(apiOrTable) {
  var api = _dtApiFrom(apiOrTable) || apiOrTable;
  var wrap = _dtWrapFrom(apiOrTable);
  if (!wrap) return;

  var dt = wrap.querySelector(".dt-container");
  var body = wrap.querySelector(".dt-scroll-body");
  if (!dt || !body) return;

  // dt-container 위쪽(테이블 외 UI) 높이 합
  var reservedTop = 0;
  for (var el = dt.previousElementSibling; el; el = el.previousElementSibling) {
    reservedTop += el.offsetHeight;
  }

  // DT 컨트롤(상단/하단) + 스크롤 헤더 높이 합
  var head = wrap.querySelector(".dt-scroll-head");
  var headH = head ? head.offsetHeight : 0;

  var rows = dt.querySelectorAll(":scope > .dt-layout-row");
  var used = 0;
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row.classList.contains("dt-layout-table")) {
      used += headH;
    } else {
      used += row.offsetHeight;
    }
  }

  var gap = 8;
  var h = Math.max(80, wrap.clientHeight - reservedTop - used - gap);
  body.style.height = h + "px";
  body.style.maxHeight = h + "px";

  if (api && api.columns) {
    api.columns.adjust();
  }
}

function estimateScrollYBeforeInit(tableSelector) {
  var tableEl = document.querySelector(tableSelector);
  var wrap =
    tableEl && tableEl.closest ? tableEl.closest(".table-container") : null;
  if (!wrap) return "200px";

  var thead = tableEl.querySelector("thead");
  var theadH = thead ? thead.offsetHeight : 0;

  // 초기화 전에는 dt 컨트롤 높이를 모르므로 대략값 사용
  var overhead = 130;

  // 테이블 위쪽(위협도/타이틀 등) 높이 합
  var reservedTop = 0;
  for (
    var el = tableEl.previousElementSibling;
    el;
    el = el.previousElementSibling
  ) {
    reservedTop += el.offsetHeight;
  }

  var px = Math.max(120, wrap.clientHeight - reservedTop - theadH - overhead);
  return px + "px";
}
