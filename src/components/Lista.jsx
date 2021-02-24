import React from "react";
import { Table } from "react-materialize";
import Divider from "react-materialize/lib/Divider";

let baseURL = "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/";
const Lista = [
  // {
  //   id: 1,
  //   imgglowny: "test",
  //   img1: "",
  //   img2: "",
  //   img3: "",
  //   plname: "",
  //   enname: "",
  //   pldescription: "  ",
  //   endescription: " ",
  //   videoid: " ",
  //   plopakowania: " ",
  //   enopakowania: " ",
  //   plprodukty: " ",
  //   enprodukty: "  ",
  //   rodzaj: "",
  // },
  {
    img1: `${baseURL}` + "rakowicka151.webp",
    img2: `${baseURL}` + "rakowicka152.webp",
    img3: `${baseURL}` + "rakowicka153.webp",
    plname: "Rakowicka 15",
    pldescription:
      "Współpraca w projekcie, nadzorze oraz prowadzeniu budowy budynku. Współpraca rozpoczęła się jeszcze przed wylaniem fundamentów.",
    endescription: "",
    lokalizacja: "Kraków/2018",
    rodzaj: "komercyjne",
  },
  {
    img1: `${baseURL}` + "rynekelewacja1.webp",
    img2: `${baseURL}` + "rynekelewacja2.webp",
    img3: `${baseURL}` + "rynekelewacja1.webp",
    plname: "Elewacja Rynek Główny 43",
    pldescription:
      "Projekt elewacji budynku położonego przy Rynku Głównym 43 w Krakowie wraz z pełną specyfikacja oraz projektem oświetlenia. Dodatkowo przygotowano dokumentacje dla Wojewódzkiego Konserwatora oraz funduszy, które pomogły w sfinansowaniu przedsięwzięcia.",
    endescription: "",
    lokalizacja: "Kraków/2008",
    rodzaj: "komercyjne",
  },
  {
    img1: `${baseURL}` + "szoberowska1.webp",
    img2: `${baseURL}` + "szoberowska2.webp",
    img3: `${baseURL}` + "szoberowska3.webp",
    plname: "Restauracja Szoberowska",
    pldescription:
      "Projekt oraz realizacja Restauracji Szoberowskiej w Krakowie pow.ok. 350m2",
    endescription: "",
    lokalizacja: "Kraków/2007",
    rodzaj: "komercyjne",
  },

  {
    img1: `${baseURL}` + "inne1.webp",
    img2: `${baseURL}` + "inne1.webp",
    img3: `${baseURL}` + "inne1.webp",
    plname: "Inne",
    pldescription:
      "​Obiekty użyteczności publicznej: - Muzeum Przyrodnicze PAN ul. Św. Sebastiana , Kraków - Wnętrza siedziby Polskiego Związku Głuchych ul.św. Jana   Obiekty handlowe i usługowe:      - Siemens iii Center , Kraków  - Zwoleń pawilon handlowy  - Sklep MUSTANG Kraków - Antykwariat A-B  Rynek Główny Kraków  - Pawilon handlowy,Kraków  - Sklepy Kalwaria Zebrzydowska - Kraków ksiegarnia wydawnictwa ZNAK ul Sławkowska - Galeria Mi, Kraków - Salon Choluj Design ul.Bratysławska Kraków  Gastronomia​: - Restauracja Szoberowska ,Kraków Mały Rynek - FREE Pub , Kraków ul.Sławkowska - U Krzysztofa ,Kraków ul.Batorego",
    endescription: "",
    lokalizacja: "",
    rodzaj: "komercyjne",
  },
  {
    img1: `${baseURL}` + "kanonicza151.webp",
    img2: `${baseURL}` + "kanonicza152.webp",
    img3: `${baseURL}` + "kanonicza153.webp",
    plname: "Restauracja  Kanonicza 15",
    pldescription:
      "Projekt wraz z nadzorem Restauracji Kurka Wodna w Krakowie u.Kanonicza 15. W obiekcie projektowano oswietlenie oraz meble pow.ok. 250m2",
    endescription: "",
    lokalizacja: "Kraków/2015",
    rodzaj: "komercyjne",
  },
  {
    img1: `${baseURL}` + "ingo1.webp",
    img2: `${baseURL}` + "ingo2.webp",
    img3: `${baseURL}` + "ingo3.webp",
    plname: "Ingo Aparthotel",
    pldescription:
      "Projekt wraz z nadzorem Aparthotelu, Bistro oraz ogródka w kamienicy przy ulicy Mikołajskiej w Krakowie. Zaprojektowano  również  meble oraz oświetlenie.",
    endescription: "",
    lokalizacja: "Kraków/2015",
    rodzaj: "komercyjne",
  },
  {
    img1: `${baseURL}` + "grand1.webp",
    img2: `${baseURL}` + "grand1.webp",
    img3: `${baseURL}` + "grand1.webp",
    plname: "Projekt Oświetlenia Grand Hotelu",
    pldescription: "Projekt oświetlenia elewacji Grand Hotelu w Krakowie .",
    endescription: "",
    lokalizacja: "Kraków/2019",
    rodzaj: "komercyjne",
  },
  {
    img1: `${baseURL}` + "podsloncem1.webp",
    img2: `${baseURL}` + "podsloncem2.webp",
    img3: `${baseURL}` + "podsloncem3.webp",
    plname: "Restauracja Pod Słońcem Kawiarnia  Gehanowska",
    pldescription: "Projekt, nadzór i realizacja Kawiarni Gehanowskiej oraz Restauracji Pod Sloncem w Rynku Glównym w Krakowie pow.ok 300m2 czas realizacji 1994r",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
  },
];
export default Lista;
