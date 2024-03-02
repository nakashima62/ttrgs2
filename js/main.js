$(function () {

  let text = "来週もまた見てくださいね！";
  let changeText = ["じゃん", "けん", "ポン！"];
  let textLast = "ｳﾌﾌﾌﾌﾌﾌ・・・・";

  let words1 = document.getElementById("js-words1");
  let words2 = document.getElementById("js-words2");
  let words3 = document.getElementById("js-words3");
  let btn = document.getElementById("js-startBtn");
  let sazaeImg = document.getElementById("sazaeImg");
  let judgeBox = document.getElementById("judgeBox");
  let reset = document.getElementById("reset");
  let urlGu = "./img/pc_gu.jpeg";
  let urlChoki = "./img/pc_choki.jpeg";
  let urlPa = "./img/pc_pa.jpeg";

  // vanila.js
  btn.addEventListener('click', () => {
    btn.style.display = "none";
    words1.textContent = text;
    setTimeout(() => {
      sazaeImg.classList.add("js-rotate"); //サザエさん回転
      words2.textContent = changeText[0];
    }, 1000);
    setTimeout(() => {
      words2.textContent = changeText[1];
    }, 2000);
    // setTimeout(() => {
    //   words2.textContent = changeText[2];
    // }, 3000);


  });

  // jQuery
  //じゃんけん用のSCRIPTを書いてください
  $("#gu_btn").on("click", function () {
    sazaeImg.classList.remove("js-rotate");
    words2.textContent = changeText[2];
    let pc = Math.floor(Math.random() * 3);

    if (pc == 0) {
      setTimeout(() => {
        $("#pc_hands").text("ぐー");
        $("#judgment").text("あいこ");
        judgeBox.style.backgroundImage = 'url(./img/judge_aiko.jpeg)';
      }, 800);
      sazaeImg.src = urlGu;

    } else if (pc == 1) {
      setTimeout(() => {
        $("#pc_hands").text("ちょき");
        $("#judgment").text("かち");
        judgeBox.style.backgroundImage = 'url(./img/judge_win.png)';
      }, 800);
      sazaeImg.src = urlChoki;
      // location.reload()
    } else {
      setTimeout(() => {
        $("#pc_hands").text("ぱ");
        $("#judgment").text("まけ");
        judgeBox.style.backgroundImage = 'url(./img/judge_lose.png)';
      }, 800);
      sazaeImg.src = urlPa;
    }

    // 処理が終わったら
    // リロード
    // location.reload()
    // ボタンを表示
    
    // let resetBtn = "リセット";
    // reset.textContent = resetBtn;


    // reset.style.zIndex = 20;



    setTimeout(() => {
      words3.textContent = textLast;
    }, 1400);

  })

  $("#cho_btn").on("click", function () {
    sazaeImg.classList.remove("js-rotate");
    words2.textContent = changeText[2];
    let pc = Math.floor(Math.random() * 3);
    if (pc == 0) {
      setTimeout(() => {
        $("#pc_hands").text("ぐー");
        $("#judgment").text("まけ");
        judgeBox.style.backgroundImage = 'url(./img/judge_lose.png)';
      }, 800);
      sazaeImg.src = urlGu;
    } else if (pc == 1) {
      setTimeout(() => {
        $("#pc_hands").text("ちょき");
        $("#judgment").text("あいこ");
        judgeBox.style.backgroundImage = 'url(./img/judge_aiko.jpeg)';
      }, 800);
      sazaeImg.src = urlChoki;
    } else {
      setTimeout(() => {
        $("#pc_hands").text("ぱ");
        $("#judgment").text("かち");
        judgeBox.style.backgroundImage = 'url(./img/judge_win.png)';
      }, 800);
      sazaeImg.src = urlPa;
    }
    setTimeout(() => {
      words3.textContent = textLast;
    }, 1400);

  })

  $("#par_btn").on("click", function () {
    sazaeImg.classList.remove("js-rotate");
    words2.textContent = changeText[2];
    let pc = Math.floor(Math.random() * 3);
    if (pc == 0) {
      setTimeout(() => {
        $("#pc_hands").text("ぐー");
        $("#judgment").text("かち");
        judgeBox.style.backgroundImage = 'url(./img/judge_win.png)';
      }, 800);
      sazaeImg.src = urlGu;
    } else if (pc == 1) {
      setTimeout(() => {
        $("#pc_hands").text("ちょき");
        $("#judgment").text("まけ");
        judgeBox.style.backgroundImage = 'url(./img/judge_lose.png)';
      }, 800);
      sazaeImg.src = urlChoki;
    } else {
      setTimeout(() => {
        $("#pc_hands").text("ぱ");
        $("#judgment").text("あいこ");
        judgeBox.style.backgroundImage = 'url(./img/judge_aiko.jpeg)';
      }, 800);
      sazaeImg.src = urlPa;
    }
    setTimeout(() => {
      words3.textContent = textLast;
    }, 1400);

  })

});