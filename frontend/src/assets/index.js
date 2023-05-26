import covid from "./covid.jpg";
import finance from "./finance.jpg";
import harvest from "./bunner.png";
import office from "./office.jpg";
import roads from "./roads.jpg";
import sports from "./sports.jpg";
import line from "./line.png";
import bunnerText from "./bunnerText.png";
import coarms from "./coarms.png";
import mp from "./mp.jpg";
import constr from "./constr.jpg";
import whiteline from "./whiteline.png";
import harvest2 from "./harvest.jpg";

const deps = [
  {
    educationDep: {
      image: office,
      name: "Education, Ict and Public communication",
    },
  },
  { financeDep: { image: finance, name: "Finance and economic planning" } },
  { infrDep: { image: roads, name: "Infrastructure" } },
];

const news = [
  {
    news1: {
      image: constr,
      title: "Inaugural education stakeholder's conference",
      location:
        "Salvation Army Hall - The salvation army officers training college",
      date: "4th November 2022",
    },
  },
  {
    news2: {
      image: covid,
      title: "Launch of the Inaugural Lugari contitiency NG-CDF and Bursaries",
      location: "The Mataru primary school",
      date: "12th February 2023",
    },
  },
];

export {
  covid,
  finance,
  harvest,
  roads,
  line,
  bunnerText,
  coarms,
  mp,
  whiteline,
  deps,
  news,
  harvest2,
};
