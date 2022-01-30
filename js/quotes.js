const quotes = [
  {
    quote: "얼마만큼 깊이 고뇌할 수 있는가 인간의 지위를 결정짓는다.",
    author: "니체",
  },
  {
    quote:
      "모든 사람은 천재다. 하지만 물고기들을 나무타기 실력으로 평가한다면 물고기는 평생 자신이 형편없다고 믿으며 살아갈 것이다",
    author: "알버트 아인슈타인",
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해줄수 없다.",
    author: "캐롤 버넷",
  },
  {
    quote:
      "나는 나를 웃게하는 사람들을 사랑한다. 솔직히 내가 가장 좋아하는 것은 웃는 것이다. 웃음은 수많은 질병들을 치료해준다. 웃음은 아마도 사람에게 가장 중요한 것일 것이다.",
    author: "오드리 햅번",
  },
  {
    quote:
      "그대는 인생을 사랑하는가? 그렇다면 시간을 낭비하지 말라. 시간이야말로 인생을 형성하는 재료이기 때문이다.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "때론 기회를 놓치는 것이 기회일 수 있다",
    author: "영화: 벤자민 버튼의 시간은 거꾸로 간다",
  },
  {
    quote:
      "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    quote:
      "나 자신에게 더욱 집중하라. 언제나 나를 1순위에 두어라. 다른 이의 삶에 한 눈팔며 살기엔 내 인생이 너무 소중하다.",
    author: "",
  },
  {
    quote: "나는 신발이 없음을 한탄했는데, 거리에서 발이 없는 사람을 만났다.",
    author: "데일 카네기",
  },
  {
    quote: "당신이 되고 싶었던 어떤 존재가 되기에는 지금도 결코 늦지 않았다.",
    author: "조지 엘리엇",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = "-" + todaysQuote.author;
