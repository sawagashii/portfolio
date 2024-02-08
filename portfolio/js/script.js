$(function () {
  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
    return false;
  });

  //テキストを一文字ずつ立体的にフェードインさせる
  $(".portfolio-title")
    .children()
    .addBack()
    .contents()
    .each(function () {
      $(this).replaceWith(
        $(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>')
      );
    });
  setTimeout(function () {
    $(".portfolio-title").addClass("active");
  }, 100);


  $(".mv-container img:nth-child(2)").hide();
  setInterval(function () {
    // 1枚目の画像がフェードアウトする前に2枚目の画像の回転アニメーションを開始
    $(".mv-container img:last-child").css("animation-play-state", "running");

    $(".mv-container img:first-child").fadeOut(1200);
    $(".mv-container img:nth-child(2)").fadeIn(1200, function () {
      // 2枚目の画像がフェードイン完了後にアニメーションを停止
      $(".mv-container img:last-child").css("animation-play-state", "paused");
    });
  }, 2400);

  $(document).ready(function () {
    setTimeout(function () {
      // 3秒後に以下の処理が実行されます
      $(".portfolio-title").css("color", "#0b1d2a"); // 要素のセレクタとして適切なものを指定してください
    }, 2900); // 3秒は3000ミリ秒です
  });
  $(document).ready(function () {
    // 4秒後に文字を横向きに回転させる
    setTimeout(function () {
      $(".portfolio-title").addClass("rotate"); // 回転のためのクラスを追加
    }, 4000);
  });

  $(document).ready(function () {
    setTimeout(function () {
      $(".portfolio-title").css("transform", "rotateY(360deg)");
    }, 4000);
  });
  $(document).ready(function () {
    setTimeout(function () {
      $(".sub-title").addClass("fadein");
    }, 4600);
  });

  $(document).ready(function () {
    setTimeout(function () {
      $(".scroll-down-container").addClass("fadein");
    }, 4600);

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scroll-down-container").fadeOut();
      } else {
        $(".scroll-down-container").fadeIn();
      }
    });
  });
});
