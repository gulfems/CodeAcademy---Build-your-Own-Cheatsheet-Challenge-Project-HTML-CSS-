window.addEventListener("DOMContentLoaded", function () {
  // Menüdeki linkleri seç
  const menuLinks = document.querySelectorAll("#menu a");

  // Her linke tıklama olayını tanımla
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Sayfa yenilenmesin

      // Tüm içerikleri gizle
      const allSections = document.querySelectorAll("section");
      allSections.forEach(function (section) {
        section.style.display = "none";
      });

      // Hedef içerik ID'sini al
      const targetId = this.dataset.target;
      const targetSection = document.getElementById(targetId);

      // Eğer varsa, göster
      if (targetSection) {
        targetSection.style.display = "block";
      }

      // Başlangıç h2 ve arka planı gizle
      const mainHeader = document.getElementById("mainHeader");
      if (mainHeader) {
        mainHeader.style.display = "none";
      }
    });
  });

  // Butonlara erişim
  const startHtmlButton = document.getElementById("startHtml");
  const chooseTopicButton = document.getElementById("chooseTopic");
  const startCssButton = document.getElementById("startCss");
  const chooseTopicButton_2 = document.getElementById("chooseTopic_2");
  const menu = document.getElementById("menu");
  const mainHeader = document.getElementById("mainHeader");

  // "HTML öğrenmeye başla"
  startHtmlButton.addEventListener("click", function () {
    menu.style.display = "block";

    const allSections = document.querySelectorAll("section");
    allSections.forEach(function (section) {
      section.style.display = "none";
    });

    const intro = document.getElementById("html_1");
    if (intro) {
      intro.style.display = "block";
    }

    if (mainHeader) {
      mainHeader.style.display = "none";
    }
  });

  // "Konu seç" butonu
  chooseTopicButton.addEventListener("click", function () {
    menu.style.display = "block";

    const allSections = document.querySelectorAll("section");
    allSections.forEach(function (section) {
      section.style.display = "none";
    });

    if (mainHeader) {
      mainHeader.style.display = "none";
    }
  });

  // "CSS öğrenmeye başla" butonu
  startCssButton.addEventListener("click", function () {
    menu.style.display = "block";

    const allSections = document.querySelectorAll("section");
    allSections.forEach(function (section) {
      section.style.display = "none";
    });

    const intro_2 = document.getElementById("css_1");
    if (intro_2) {
      intro_2.style.display = "block";
    }

    if (mainHeader) {
      mainHeader.style.display = "none";
    }
  });

  // Diğer "konu seç" butonu
  chooseTopicButton_2.addEventListener("click", function () {
    menu.style.display = "block";

    const allSections = document.querySelectorAll("section");
    allSections.forEach(function (section) {
      section.style.display = "none";
    });

    if (mainHeader) {
      mainHeader.style.display = "none";
    }
  });
});
