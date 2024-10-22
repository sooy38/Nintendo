document.addEventListener("DOMContentLoaded", function () {
  const tabItems = document.querySelectorAll(".hardware .tab li");
  const tabContents = document.querySelectorAll(".hardware .tab-contents div");

  const nextButton = document.querySelector(".hardware .next-button");
  const prevButton = document.querySelector(".hardware .prev-button");

  let currentIndex = 0;

  function changeTab() {
    const currentItem = tabItems[currentIndex];

    document.querySelector(".i1").classList.remove("active");

    // 해당 탭의 콘텐츠 활성화
    const tabResult = currentItem.getAttribute("data-alt");
    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    document.getElementById(tabResult).classList.add("active");
  }

  tabItems.forEach(function (tabItem, index) {
    tabItem.addEventListener("click", function () {
      currentIndex = index;

      // 현재 활성화된 상태 해제
      document.querySelector(".i1").classList.remove("active");

      // 해당 탭의 콘텐츠 활성화
      const tabResult = tabItem.getAttribute("data-alt");
      tabContents.forEach(function (content) {
        content.classList.remove("active");
      });

      document.getElementById(tabResult).classList.add("active");
    });
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex >= tabItems.length) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }

    changeTab();
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex <= 0) {
      currentIndex = tabItems.length;
    } else {
      currentIndex -= 1;
    }

    changeTab();
  });
});
