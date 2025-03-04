// 모바일 메뉴
const mbBtn = $(".mb-bt"),
  mbNav = $(".mb-nav"),
  mbMenuMask = $(".mb-menu-mask");
// 모바일 버튼이 클릭되면
// -1.모바일 버튼 x로 변환
mbBtn.click(function (e) {
  e.preventDefault();
  mbBtn.toggleClass("active");
  mbNav.toggleClass("active");
  mbMenuMask.toggleClass("active");
});
// -2. 모바일 서브메뉴 펼치기 (아코디언)기능
const mbMenuList = $(".mb-menu > li"),
  mbMainMenu = $(".mb-mainMenu"),
  mbSubMenu = $(".mb-subMenu");
// 모바일 메뉴(li>a(.mb-mainMenu))를 클릭했을 때
mbMainMenu.click(function (e) {
  let isSubMenu = $(this).siblings("ul").length;
  if (isSubMenu) {
    // 서브메뉴가 있을 때
    e.preventDefault();
    let isOpen = $(this).hasClass("open");
    if (isOpen) {
      // 서브메뉴 열린상태
      $(this).next().stop().slideUp(600);
      // a 의 다음 요소 mb-subMenu를 연다.
      $(this).removeClass("open");
    } else {
      //서브메뉴 닫힌상태
      $(this).next().stop().slideDown(600);
      $(this).addClass("open");
    }
  } else {
    // $(this).removeClass('open')
    mbMainMenu.removeClass("open");
    mbMainMenu.next().stop().slideUp(600);
  }
});
//mb-menu > li 부분에 적용된 overflow:hidden과 height 55px 삭제 =>.mb-subMEnu에는 display:none 적용(sb-menu갑푸고 클릭하면 보이게 생성)

//화면위로 이동

$(".gotop").click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 500);
});

// $(".gotop").click(function (e) {
//   e.preventDefault();
//   $("html,body").animate(
//     {
//       scrollTop: $(".quick-menu").height(),
//     },
//     500
//   );
// });
