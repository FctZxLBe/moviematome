"use strict";
const array = [
  {
    id: 1,
    url: "articles/CaptainAmericaBNW.html",
    name: "キャプテン・アメリカ/ブレイブ・ニュー・ワールド",
    initial: "か",
    ruby: "キャプテンアメリカブレイブニューワールド",
  },
  {
    id: 2,
    url: "articles/CaptainAmericaTFA.html",
    name: "キャプテン・アメリカ/ザ・ファースト・アベンジャー",
    initial: "か",
    ruby: "キャプテンアメリカザファーストアベンジャー",
  },
];

window.onload = function () {
  const indexK = document.getElementById("K");
  const indexKArray = array.filter((movie) => (movie.initial = "か"));
  indexKArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
  indexKArray.map((movie) => {
    const indexKList = document.createElement("a");
    indexKList.innerText = movie.name;
    indexKList.setAttribute("href", movie.url);
    indexK.appendChild(indexKList);
  });
};
