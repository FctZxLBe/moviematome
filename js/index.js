"use strict";
const array = [
  {
    id: 1,
    url: "https://fctzxlbe.github.io/moviematome/articles/CaptainAmericaBNW.html",
    name: "キャプテン・アメリカ/ブレイブ・ニュー・ワールド",
    initial: "か",
    ruby: "キャプテンアメリカブレイブニューワールド",
  },

  {
    id: 2,
    url: "https://fctzxlbe.github.io/moviematome/articles/PhantomMenace.html",
    name: "スター・ウォーズ エピソード1/ファントム・メナス",
    initial: "さ",
    ruby: "スターウォーズエピソードワンファントムメナス",
  },
];

console.log(array);
window.onload = function () {
  const latestDiv = document.getElementById("latest");
  if (latestDiv) {
    if (array.length > 8) {
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

  // pc
  // カ行
  const indexK = document.getElementById("K");
  const indexKArray = array.filter((movie) => movie.initial === "か");
  if(indexK){
    if (indexKArray.length !== 1) {
      indexKArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexKArray.map((movie) => {
        const indexKList = document.createElement("a");
        indexKList.innerText = movie.name;
        indexKList.setAttribute("href", movie.url);
        indexK.appendChild(indexKList);
      });
    } else {
      const indexKList = document.createElement("a");
      indexKList.innerText = indexKArray[0].name;
      indexKList.setAttribute("href", indexKArray[0].url);
      indexK.appendChild(indexKList);
    }
  }

  // サ行
  const indexS = document.getElementById("S");
  const indexSArray = array.filter((movie) => movie.initial === "さ");
  if(indexS){
    if (indexSArray.length !== 1) {
      indexSArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexSArray.map((movie) => {
        const indexSList = document.createElement("a");
        indexSList.innerText = movie.name;
        indexSList.setAttribute("href", movie.url);
        indexS.appendChild(indexSList);
      });
    } else {
      const indexSList = document.createElement("a");
      indexSList.innerText = indexSArray[0].name;
      indexSList.setAttribute("href", indexSArray[0].url);
      indexS.appendChild(indexSList);
  }

    // sp
    // カ行
    const indexSpK = document.getElementById("spK");
    const indexSpKArray = array.filter((movie) => movie.initial === "か");
    if(indexSpK){
      if (indexSpKArray.length !== 1) {
        indexSpKArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
        indexSpKArray.map((movie) => {
          const indexSpKList = document.createElement("a");
          indexSpKList.innerText = movie.name;
          indexSpKList.setAttribute("href", movie.url);
          indexSpK.appendChild(indexSpKList);
        });
      } else {
        const indexSpKList = document.createElement("a");
        indexSpKList.innerText = indexSpKArray[0].name;
        indexSpKList.setAttribute("href", indexSpKArray[0].url);
        indexSpK.appendChild(indexSpKList);
      }
    }

    // サ行
    const indexSpS = document.getElementById("spS");
    const indexSpSArray = array.filter((movie) => movie.initial === "さ");
    if(indexSpS){
      if (indexSpSArray.length !== 1) {
        indexSpSArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
        indexSpSArray.map((movie) => {
          const indexSpSList = document.createElement("a");
          indexSpSList.innerText = movie.name;
          indexSpSList.setAttribute("href", movie.url);
          indexSpS.appendChild(indexSpSList);
        });
      } else {
        const indexSpSList = document.createElement("a");
        indexSpSList.innerText = indexSpSArray[0].name;
        indexSpSList.setAttribute("href", indexSpSArray[0].url);
        indexSpS.appendChild(indexSpSList);
      }
    }

  }
};
