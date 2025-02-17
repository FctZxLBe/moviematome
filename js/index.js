"use strict";
const array = [
  {
    id: 1,
    url: "https://fctzxlbe.github.io/moviematome/articles/CaptainAmericaBNW.html",
    name: "キャプテン・アメリカ/ブレイブ・ニュー・ワールド",
    initial: "か",
    ruby: "キャプテンアメリカブレイブニューワールド",
  },
//   {
//     id: 2,
//     url: "articles/CaptainAmericaTFA.html",
//     name: "キャプテン・アメリカ/ザ・ファースト・アベンジャー",
//     initial: "か",
//     ruby: "キャプテンアメリカザファーストアベンジャー",
//   },
];

window.onload = function () {
  const latestDiv = document.getElementById("latest");
  if(latestDiv){
    if (array.length>8) {
        for (var i = array.length - 1; i >= array.length - 8; i--) {
          const newArticle = document.createElement("a");
          newArticle.innerText = array[i].name;
          newArticle.setAttribute("href", array[i].url);
          latestDiv.appendChild(newArticle);
        }
      } else {
        for (var i = array.length - 1; i >= 0; i--) {
            const newArticle = document.createElement("a");
            newArticle.innerText = array[i].name;
            newArticle.setAttribute("href", array[i].url);
            latestDiv.appendChild(newArticle);
          }
      }
  }


  const indexK = document.getElementById("K");
  const indexKArray = array.filter((movie) => (movie.initial = "か"));
  if(indexKArray.length!==1){
    indexKArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
    indexKArray.map((movie) => {
      const indexKList = document.createElement("a");
      indexKList.innerText = movie.name;
      indexKList.setAttribute("href", movie.url);
      indexK.appendChild(indexKList);
    });
  }else{
    const indexKList = document.createElement("a");
    indexKList.innerText = indexKArray[0].name
    indexKList.setAttribute("href", indexKArray[0].url);
    indexK.appendChild(indexKList);
  }

};
