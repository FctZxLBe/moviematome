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

  {
    id: 5,
    url: "https://fctzxlbe.github.io/moviematome/articles/AttackOfTheClones",
    name: "スター・ウォーズ エピソード2:クローンの攻撃",
    initial: "さ",
    ruby: "スターウォーズエピソードツークローンノコウゲキ",
  },
  {
    id: 6,
    url: "https://fctzxlbe.github.io/moviematome/articles/DareDevilBornAgain",
    name: "デアデビル:ボーン・アゲイン",
    initial: "た",
    ruby: "デアデビルボーンアゲイン",
  },
  {
    id: 7,
    url: "https://fctzxlbe.github.io/moviematome/articles/Thunderbolts",
    name: "サンダーボルツ*",
    initial: "さ",
    ruby: "サンダーボルツ",
  },
  {
    id: 8,
    url: "https://fctzxlbe.github.io/moviematome/articles/WillysWonderland",
    name: "ウィリーズ・ワンダーランド",
    initial: "あ",
    ruby: "ウィリーズワンダーランド",
  },
  {
    id: 9,
    url: "https://fctzxlbe.github.io/moviematome/articles/Renfield",
    name: "レンフィールド",
    initial: "ら",
    ruby: "レンフィールド",
  },
  {
    id: 10,
    url: "https://fctzxlbe.github.io/moviematome/articles/Casper",
    name: "キャスパー",
    initial: "か",
    ruby: "キャスパー",
  },
  {
    id: 11,
    url: "https://fctzxlbe.github.io/moviematome/articles/CloneWars",
    name: "スター・ウォーズ:クローン・ウォーズ",
    initial: "さ",
    ruby: "スターウォーズクローンウォーズ",
  },
  {
    id: 12,
    url: "https://fctzxlbe.github.io/moviematome/articles/DeadReckoningPartOne",
    name: "ミッション:インポッシブル/デッドレコニング PART ONE",
    initial: "ま",
    ruby: "ミッションインポッシブルデッドレコニングパートワン",
  },
  {
    id: 13,
    url: "https://fctzxlbe.github.io/moviematome/articles/ItPartOne",
    name: "IT/イット “それ”が見えたら、終わり。",
    initial: "あ",
    ruby: "イットソレガミエタラオワリ",
  },
  {
    id: 14,
    url: "https://fctzxlbe.github.io/moviematome/articles/FinalReckoning",
    name: "ミッション:インポッシブル/ファイナル・レコニング",
    initial: "ま",
    ruby: "ミッションインポッシブルファイナルレコニング",
  },
  {
    id: 15,
    url: "https://fctzxlbe.github.io/moviematome/articles/Wonka",
    name: "ウォンカとチョコレート工場のはじまり",
    initial: "あ",
    ruby: "ウォンカトチョコレートコウジョウノハジマリ",
  },
  {
    id: 16,
    url: "https://fctzxlbe.github.io/moviematome/articles/Megan",
    name: "M3GAN ミーガン",
    initial: "ま",
    ruby: "ミーガン",
  },
  {
    id: 17,
    url: "https://fctzxlbe.github.io/moviematome/articles/Aristocats",
    name: "おしゃれキャット",
    initial: "あ",
    ruby: "オシャレキャット",
  },
  {
    id: 18,
    url: "https://fctzxlbe.github.io/moviematome/articles/Wish",
    name: "ウィッシュ",
    initial: "あ",
    ruby: "ウィッシュ",
  },
  {
    id: 19,
    url: "https://fctzxlbe.github.io/moviematome/articles/LiloAndStitch",
    name: "リロ＆スティッチ",
    initial: "ら",
    ruby: "リロアンドスティッチ",
  },
  {
    id: 20,
    url: "https://fctzxlbe.github.io/moviematome/articles/EverythingEverywhereAllAtOnce",
    name: "エブリシング・エブリウェア・オール・アット・ワンス",
    initial: "あ",
    ruby: "エブリシングエブリウェアオールアットワンス",
  },
  {
    id: 21,
    url: "https://fctzxlbe.github.io/moviematome/articles/NinjaBatman",
    name: "ニンジャバットマン",
    initial: "な",
    ruby: "ニンジャバットマン",
  },
  {
    id: 22,
    url: "https://fctzxlbe.github.io/moviematome/articles/LiloAndStitchLiveAction",
    name: "リロ＆スティッチ（実写）",
    initial: "ら",
    ruby: "リロアンドスティッチ",
  },
  {
    id: 23,
    url: "https://fctzxlbe.github.io/moviematome/articles/TuckerAndDaleVSEvil",
    name: "タッカーとデイル 史上最悪にツイてないヤツら",
    initial: "た",
    ruby: "タッカートデイルシジョウサイアクニツイテナイヤツラ",
  },
  {
    id: 24,
    url: "https://fctzxlbe.github.io/moviematome/articles/Companion",
    name: "コンパニオン",
    initial: "か",
    ruby: "コンパニオン",
  },
  {
    id: 25,
    url: "https://fctzxlbe.github.io/moviematome/articles/SnowWhiteLiveAction",
    name: "白雪姫（実写）",
    initial: "さ",
    ruby: "シラユキヒメ",
  },
  {
    id: 26,
    url: "https://fctzxlbe.github.io/moviematome/articles/X",
    name: "X エックス",
    initial: "あ",
    ruby: "エックス",
  },
  {
    id: 27,
    url: "https://fctzxlbe.github.io/moviematome/articles/ThePhantomOfTheOpera2004",
    name: "オペラ座の怪人（2004）",
    initial: "あ",
    ruby: "オペラザノカイジン",
  },
  {
    id: 28,
    url: "https://fctzxlbe.github.io/moviematome/articles/IronHeart",
    name: "アイアンハート",
    initial: "あ",
    ruby: "アイアンハート",
  },
  {
    id: 29,
    url: "https://fctzxlbe.github.io/moviematome/articles/TheMatrix",
    name: "マトリックス",
    initial: "ま",
    ruby: "マトリックス",
  },
  {
    id: 30,
    url: "https://fctzxlbe.github.io/moviematome/articles/SweeneyToddTheDemonBarberOfFleetStreet",
    name: "スウィーニー・トッド フリート街の悪魔の理髪師",
    initial: "さ",
    ruby: "スウィーニートッドフリートガイノアクマノリハツシ",
  },
  {
    id: 31,
    url: "https://fctzxlbe.github.io/moviematome/articles/TheSchoolForGoodAndEvil",
    name: "スクール・フォー・グッド・アンド・イービル",
    initial: "さ",
    ruby: "スクールフォーグッドアンドイービル",
  },
  {
    id: 32,
    url: "https://fctzxlbe.github.io/moviematome/articles/ANightmareOnElmStreet",
    name: "エルム街の悪夢",
    initial: "あ",
    ruby: "エルムガイノアクム",
  },
  {
    id: 33,
    url: "https://fctzxlbe.github.io/moviematome/articles/Pearl",
    name: "Pearl パール",
    initial: "は",
    ruby: "パール",
  },
  {
    id: 34,
    url: "https://fctzxlbe.github.io/moviematome/articles/Superman2025",
    name: "スーパーマン（2025）",
    initial: "さ",
    ruby: "スーパーマン",
  },
  {
    id: 35,
    url: "https://fctzxlbe.github.io/moviematome/articles/TheFantasticFourFirstSteps",
    name: "ファンタスティック4:ファースト・ステップ",
    initial: "は",
    ruby: "ファンタスティックフォーファーストステップ",
  },
  {
    id: 36,
    url: "https://fctzxlbe.github.io/moviematome/articles/EyesOfWakanda",
    name: "アイズ・オブ・ワカンダ",
    initial: "あ",
    ruby: "アイズオブワカンダ",
  },
  {
    id: 37,
    url: "https://fctzxlbe.github.io/moviematome/articles/BeetlejuiceBeetlejuice",
    name: "ビートルジュース ビートルジュース",
    initial: "は",
    ruby: "ビートルジュースビートルジュース",
  },
  {
    id: 38,
    url: "https://fctzxlbe.github.io/moviematome/articles/FellowshipOfTheRing",
    name: "ロード・オブ・ザ・リング",
    initial: "ら",
    ruby: "ロードオブザリング",
  },
  {
    id: 39,
    url: "https://fctzxlbe.github.io/moviematome/articles/TheTwoTowers",
    name: "ロード・オブ・ザ・リング/二つの塔",
    initial: "ら",
    ruby: "ロードオブザリングフタツノトウ",
  },
  {
    id: 40,
    url: "https://fctzxlbe.github.io/moviematome/articles/TheReturnOfTheKing",
    name: "ロード・オブ・ザ・リング/王の帰還",
    initial: "ら",
    ruby: "ロードオブザリングオウノキカン",
  },
  {
    id: 41,
    url: "https://fctzxlbe.github.io/moviematome/articles/LastNightInSoho",
    name: "ラストナイト・イン・ソーホー",
    initial: "ら",
    ruby: "ラストナイトインソーホー",
  },
  {
    id: 42,
    url: "https://fctzxlbe.github.io/moviematome/articles/JurassicWorldRebirth",
    name: "ジュラシック・ワールド/復活の大地",
    initial: "さ",
    ruby: "ジュラシックワールドフッカツノダイチ",
  },
  {
    id: 43,
    url: "https://fctzxlbe.github.io/moviematome/articles/Men",
    name: "MEN 同じ顔の男たち",
    initial: "ま",
    ruby: "メンオナジカオノオトコタチ",
  },
  {
    id: 44,
    url: "https://fctzxlbe.github.io/moviematome/articles/NinjaBatmanVSYakuzaLeague",
    name: "ニンジャバットマン対ヤクザリーグ",
    initial: "な",
    ruby: "ニンジャバットマンタイヤクザリーグ",
  },
  {
    id: 45,
    url: "https://fctzxlbe.github.io/moviematome/articles/Lamb",
    name: "LAMB/ラム",
    initial: "ら",
    ruby: "ラム",
  },
  {
    id: 46,
    url: "https://fctzxlbe.github.io/moviematome/articles/FiveNightsAtFreddys",
    name: "ファイブ・ナイツ・アット・フレディーズ",
    initial: "は",
    ruby: "ファイブナイツアットフレディーズ",
  },
  {
    id: 47,
    url: "https://fctzxlbe.github.io/moviematome/articles/LoveLiesBleeding",
    name: "愛はステロイド",
    initial: "あ",
    ruby: "アイハステロイド",
  },
  {
    id: 48,
    url: "https://fctzxlbe.github.io/moviematome/articles/Maxxxine",
    name: "MaXXXine マキシーン",
    initial: "ま",
    ruby: "マキシーン",
  },
  {
    id: 49,
    url: "https://fctzxlbe.github.io/moviematome/articles/TomAndJerry2021",
    name: "トムとジェリー（2021）",
    initial: "た",
    ruby: "トムトジェリー",
  },
  {
    id: 50,
    url: "https://fctzxlbe.github.io/moviematome/articles/JokerFolieADeux",
    name: "ジョーカー:フォリ・ア・ドゥ",
    initial: "さ",
    ruby: "ジョーカーフォリアドゥ",
  },
  {
    id: 51,
    url: "https://fctzxlbe.github.io/moviematome/articles/MarsAttacks",
    name: "マーズ・アタック!",
    initial: "ま",
    ruby: "マーズアタック",
  },
  {
    id: 52,
    url: "https://fctzxlbe.github.io/moviematome/articles/AtlantisTheLostEmpire",
    name: "アトランティス 失われた帝国",
    initial: "あ",
    ruby: "アトランティスウシナワレタテイコク",
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
  // ア行
  const indexA = document.getElementById("A");
  const indexAArray = array.filter((movie) => movie.initial === "あ");
  if (indexA) {
    if (indexAArray.length !== 1) {
      indexAArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexAArray.map((movie) => {
        const indexAList = document.createElement("a");
        indexAList.innerText = movie.name;
        indexAList.setAttribute("href", movie.url);
        indexA.appendChild(indexAList);
      });
    } else {
      const indexAList = document.createElement("a");
      indexAList.innerText = indexAArray[0].name;
      indexAList.setAttribute("href", indexAArray[0].url);
      indexA.appendChild(indexAList);
    }
  }

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
  }
  // タ行
  const indexT = document.getElementById("T");
  const indexTArray = array.filter((movie) => movie.initial === "た");
  if (indexT) {
    if (indexTArray.length !== 1) {
      indexTArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexTArray.map((movie) => {
        const indexTList = document.createElement("a");
        indexTList.innerText = movie.name;
        indexTList.setAttribute("href", movie.url);
        indexT.appendChild(indexTList);
      });
    } else {
      const indexTList = document.createElement("a");
      indexTList.innerText = indexTArray[0].name;
      indexTList.setAttribute("href", indexTArray[0].url);
      indexT.appendChild(indexTList);
    }
  }
  // ナ行
  const indexN = document.getElementById("N");
  const indexNArray = array.filter((movie) => movie.initial === "な");
  if (indexN) {
    if (indexNArray.length !== 1) {
      indexNArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexNArray.map((movie) => {
        const indexNList = document.createElement("a");
        indexNList.innerText = movie.name;
        indexNList.setAttribute("href", movie.url);
        indexN.appendChild(indexNList);
      });
    } else {
      const indexNList = document.createElement("a");
      indexNList.innerText = indexNArray[0].name;
      indexNList.setAttribute("href", indexNArray[0].url);
      indexN.appendChild(indexNList);
    }
  }
  // ハ行
  const indexH = document.getElementById("H");
  const indexHArray = array.filter((movie) => movie.initial === "は");
  if (indexH) {
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
  // マ行
  const indexM = document.getElementById("M");
  const indexMArray = array.filter((movie) => movie.initial === "ま");
  if (indexM) {
    if (indexMArray.length !== 1) {
      indexMArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexMArray.map((movie) => {
        const indexMList = document.createElement("a");
        indexMList.innerText = movie.name;
        indexMList.setAttribute("href", movie.url);
        indexM.appendChild(indexMList);
      });
    } else {
      const indexMList = document.createElement("a");
      indexMList.innerText = indexMArray[0].name;
      indexMList.setAttribute("href", indexMArray[0].url);
      indexM.appendChild(indexMList);
    }
  }
  // ラ行
  const indexR = document.getElementById("R");
  const indexRArray = array.filter((movie) => movie.initial === "ら");
  if (indexR) {
    if (indexRArray.length !== 1) {
      indexRArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexRArray.map((movie) => {
        const indexRList = document.createElement("a");
        indexRList.innerText = movie.name;
        indexRList.setAttribute("href", movie.url);
        indexR.appendChild(indexRList);
      });
    } else {
      const indexRList = document.createElement("a");
      indexRList.innerText = indexRArray[0].name;
      indexRList.setAttribute("href", indexRArray[0].url);
      indexR.appendChild(indexRList);
    }
  }
  // ワ行
  const indexW = document.getElementById("W");
  const indexWArray = array.filter((movie) => movie.initial === "わ");
  if (indexW) {
    if (indexWArray.length !== 1) {
      indexWArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexWArray.map((movie) => {
        const indexWList = document.createElement("a");
        indexWList.innerText = movie.name;
        indexWList.setAttribute("href", movie.url);
        indexW.appendChild(indexWList);
      });
    } else {
      const indexWList = document.createElement("a");
      indexWList.innerText = indexWArray[0].name;
      indexWList.setAttribute("href", indexWArray[0].url);
      indexW.appendChild(indexWList);
    }
  }

  // sp
  // ア行
  const indexSpA = document.getElementById("spA");
  const indexSpAArray = array.filter((movie) => movie.initial === "あ");
  if (indexSpA) {
    if (indexSpAArray.length !== 1) {
      indexSpAArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexSpAArray.map((movie) => {
        const indexSpAList = document.createElement("a");
        indexSpAList.innerText = movie.name;
        indexSpAList.setAttribute("href", movie.url);
        indexSpA.appendChild(indexSpAList);
      });
    } else {
      const indexSpAList = document.createElement("a");
      indexSpAList.innerText = indexSpAArray[0].name;
      indexSpAList.setAttribute("href", indexSpAArray[0].url);
      indexSpA.appendChild(indexSpAList);
    }
  }

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
  // タ行
  const indexSpT = document.getElementById("spT");
  const indexSpTArray = array.filter((movie) => movie.initial === "た");
  if (indexSpT) {
    if (indexSpTArray.length !== 1) {
      indexSpTArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexSpTArray.map((movie) => {
        const indexSpTList = document.createElement("a");
        indexSpTList.innerText = movie.name;
        indexSpTList.setAttribute("href", movie.url);
        indexSpT.appendChild(indexSpTList);
      });
    } else {
      const indexSpTList = document.createElement("a");
      indexSpTList.innerText = indexSpTArray[0].name;
      indexSpTList.setAttribute("href", indexSpTArray[0].url);
      indexSpT.appendChild(indexSpTList);
    }
  }
  // ナ行
  const indexSpN = document.getElementById("spN");
    const indexSpNArray = array.filter((movie) => movie.initial === "な");
    if (indexSpN) {
      if (indexSpNArray.length !== 1) {
        indexSpNArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
        indexSpNArray.map((movie) => {
          const indexSpNList = document.createElement("a");
          indexSpNList.innerText = movie.name;
          indexSpNList.setAttribute("href", movie.url);
          indexSpN.appendChild(indexSpNList);
        });
      } else {
        const indexSpNList = document.createElement("a");
        indexSpNList.innerText = indexSpNArray[0].name;
        indexSpNList.setAttribute("href", indexSpNArray[0].url);
        indexSpN.appendChild(indexSpNList);
      }
    }


  // ハ行
  const indexSpH = document.getElementById("spH");
  const indexSpHArray = array.filter((movie) => movie.initial === "は");
  if (indexSpH) {
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

  // マ行
  const indexSpM = document.getElementById("spM");
  const indexSpMArray = array.filter((movie) => movie.initial === "ま");
  if (indexSpM) {
    if (indexSpMArray.length !== 1) {
      indexSpMArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexSpMArray.map((movie) => {
        const indexSpMList = document.createElement("a");
        indexSpMList.innerText = movie.name;
        indexSpMList.setAttribute("href", movie.url);
        indexSpM.appendChild(indexSpMList);
      });
    } else {
      const indexSpMList = document.createElement("a");
      indexSpMList.innerText = indexSpMArray[0].name;
      indexSpMList.setAttribute("href", indexSpMArray[0].url);
      indexSpM.appendChild(indexSpMList);
    }
  }

  // ラ行
  const indexSpR = document.getElementById("spR");
  const indexSpRArray = array.filter((movie) => movie.initial === "ら");
  if (indexSpR) {
    if (indexSpRArray.length !== 1) {
      indexSpRArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexSpRArray.map((movie) => {
        const indexSpRList = document.createElement("a");
        indexSpRList.innerText = movie.name;
        indexSpRList.setAttribute("href", movie.url);
        indexSpR.appendChild(indexSpRList);
      });
    } else {
      const indexSpRList = document.createElement("a");
      indexSpRList.innerText = indexSpRArray[0].name;
      indexSpRList.setAttribute("href", indexSpRArray[0].url);
      indexSpR.appendChild(indexSpRList);
    }
  }
  // ワ行
  const indexSpW = document.getElementById("spW");
  const indexSpWArray = array.filter((movie) => movie.initial === "わ");
  if (indexSpW) {
    if (indexSpWArray.length !== 1) {
      indexSpWArray.sort((a, b) => a.ruby.localeCompare(b.ruby), "ja");
      indexSpWArray.map((movie) => {
        const indexSpWList = document.createElement("a");
        indexSpWList.innerText = movie.name;
        indexSpWList.setAttribute("href", movie.url);
        indexSpW.appendChild(indexSpWList);
      });
    } else {
      const indexSpWList = document.createElement("a");
      indexSpWList.innerText = indexSpWArray[0].name;
      indexSpWList.setAttribute("href", indexSpWArray[0].url);
      indexSpW.appendChild(indexSpWList);
    }
  }
};
