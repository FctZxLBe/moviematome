"use strict";
const array = [
  {
    id: 1,
    url: "https://fctzxlbe.github.io/moviematome/articles/CaptainAmericaBNW",
    name: "キャプテン・アメリカ:ブレイブ・ニュー・ワールド",
    initial: "か",
    ruby: "キャプテンアメリカブレイブニューワールド",
  },

  {
    id: 2,
    url: "https://fctzxlbe.github.io/moviematome/articles/PhantomMenace",
    name: "スター・ウォーズ エピソード1:ファントム・メナス",
    initial: "さ",
    ruby: "スターウォーズエピソードワンファントムメナス",
  },

  {
    id: 3,
    url: "https://fctzxlbe.github.io/moviematome/articles/FriendlyNeighborhoodSpiderman",
    name: "スパイダーマン:フレンドリー・ネイバーフッド",
    initial: "さ",
    ruby: "スパイダーマンフレンドリー・ネイバーフッド",
  },

  {
    id: 4,
    url: "https://fctzxlbe.github.io/moviematome/articles/TheSilenceOfTheLambs",
    name: "羊たちの沈黙",
    initial: "は",
    ruby: "ヒツジタチノチンモク",
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
  if (indexK) {
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
  if (indexS) {
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

    // ハ行
    const indexH = document.getElementById("H");
    const indexHArray = array.filter((movie) => movie.initial === "は");
    if(indexH){
      if (indexHArray.length !== 1) {
        indexHArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
        indexHArray.map((movie) => {
          const indexHList = document.createElement("a");
          indexHList.innerText = movie.name;
          indexHList.setAttribute("href", movie.url);
          indexH.appendChild(indexHList);
        });
      } else {
        const indexHList = document.createElement("a");
        indexHList.innerText = indexHArray[0].name;
        indexHList.setAttribute("href", indexHArray[0].url);
        indexH.appendChild(indexHList);
      }
    }


    // sp
    // カ行
    const indexSpK = document.getElementById("spK");
    const indexSpKArray = array.filter((movie) => movie.initial === "か");
    if (indexSpK) {
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
    if (indexSpS) {
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

    // ハ行
    const indexSpH = document.getElementById("spH");
    const indexSpHArray = array.filter((movie) => movie.initial === "は");
    if(indexSpH){
      if (indexSpHArray.length !== 1) {
        indexSpHArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
        indexSpHArray.map((movie) => {
          const indexSpHList = document.createElement("a");
          indexSpHList.innerText = movie.name;
          indexSpHList.setAttribute("href", movie.url);
          indexSpH.appendChild(indexSpHList);
        });
      } else {
        const indexSpHList = document.createElement("a");
        indexSpHList.innerText = indexSpHArray[0].name;
        indexSpHList.setAttribute("href", indexSpHArray[0].url);
        indexSpH.appendChild(indexSpHList);
      }
    }

  }
};
