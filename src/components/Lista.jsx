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
    img1: `${baseURL}` + "grand1.webp",
    img2: `${baseURL}` + "grand1.webp",
    img3: `${baseURL}` + "grand1.webp",
    plname: "Projekt Oświetlenia Grand Hotelu",
    pldescription: "Projekt oświetlenia elewacji Grand Hotelu w Krakowie .",
    endescription: "",
    lokalizacja: "Kraków/2019",
    rodzaj: "komercyjne",
  }, {
    img1: `${baseURL}` + "bonarka1.webp",
    img2: `${baseURL}` + "bonarka2.webp",
    img3: `${baseURL}` + "bonarka3.webp",
    plname: "Bonarka",
    pldescription:
      "Współpraca w projekcie kocepcyjnym.",
    endescription: "",
    lokalizacja: "Kraków/2017",
    rodzaj: "niekomercyjne",
  },
 
];
export default Lista;
