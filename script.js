document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");
  const music = document.getElementById("birthdayMusic");
  const musicButton = document.getElementById("musicButton");
  const giftButton = document.getElementById("giftButton");
  const giftReveal = document.getElementById("giftReveal");

  /* ЗАГРУЗКА */
  setTimeout(() => {
  loader.classList.add("hidden");

  music.volume = 0.35;

  music.play().catch(() => {
    musicButton.textContent = "♫";
  });
}, 4000);


  /* МУЗЫКА */
  musicButton.addEventListener("click", () => {

    if (music.paused) {
      music.play();
      musicButton.textContent = "♫";
    } else {
      music.pause();
      musicButton.textContent = "❚❚";
    }

  });


  /* 10 ПРИЧИН */
  const reasons = document.querySelectorAll(".reason");

  reasons.forEach((reason) => {
    reason.addEventListener("click", () => {
      reason.classList.toggle("open");
    });
  });


  /* ПОДАРОК */
  giftButton.addEventListener("click", () => {
    giftReveal.classList.add("show");
    giftButton.style.display = "none";

    giftReveal.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });


  /* ПАДАЮЩИЕ ЛЕПЕСТКИ И СЕРДЕЧКИ */
  const petalsContainer = document.getElementById("petals");

  const symbols = ["♡", "✦", "♥", "✧"];

  function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");
    petal.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    petal.style.left = Math.random() * 100 + "vw";

    const size = 12 + Math.random() * 14;
    petal.style.fontSize = size + "px";

    const duration = 5 + Math.random() * 6;
    petal.style.animationDuration = duration + "s";

    petal.style.opacity = 0.35 + Math.random() * 0.5;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, duration * 1000);
  }

  setInterval(createPetal, 500);


  /* НЕСКОЛЬКО СРАЗУ ПРИ ЗАПУСКЕ */
  for (let i = 0; i < 8; i++) {
    setTimeout(createPetal, i * 250);
  }

});
