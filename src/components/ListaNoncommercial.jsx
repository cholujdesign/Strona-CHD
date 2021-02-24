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
  {
    img1: `${baseURL}` + "sakralne1.webp",
    img2: `${baseURL}` + "sakralne2.webp",
    img3: `${baseURL}` + "sakralne3.webp",
    plname: "Obiekty Sakralne",
    pldescription:
"    - Bazylika Mariacka w Krakowie, Rynek Główny. Projekt i nadzór nad pracami wykończeniowymi oraz meblarskimi w części administracyjno-biurowej. - Parafia Rzymskokatolicka Chrystusa odkupiciela Człowieka w Krakowie. Projekt i przebudowa części administracyjno-mieszkalnej. - Parafia rzymskokatolicka wniebowziecia NMP w Sułkowie. Rewitalizacja kościoła wraz z otoczeniem. - Kościół pod wezwaniem Podwyższenia Krzyża Świętego w Kobylanach. Przebudowa częsci administracyjno-mieszkalnej oraz chóru. -Sanktuarium bł. Anieli Salawy w Sieprawiu Przebudowa Kuchni i zaplecza. - Kościół Rzymskokatolicki pw. Niepokalanego Serca NMP w Strumianach Projekt rewitalizacji kościoła oraz przebudowy Ołtarza glownego.",    
    endescription: "",
    lokalizacja: "Kraków/2008",
    rodzaj: "niekomercyjne",
  },
  {
    img1: `${baseURL}` + "apartament11.webp",
    img2: `${baseURL}` + "apartament12.webp",
    img3: `${baseURL}` + "apartament13.webp",
    plname: "Apartament 1",
    pldescription:
      "Apartament dla prywatnego inwestora,  projekt koncepcyjny oraz wykonawczy, analizę kosztów.   Wykonano inwestycję 'pod klucz' pow ok.46m2",
    endescription: "",
    lokalizacja: "Kraków/2018",
    rodzaj: "niekomercyjne",
  },
  {
    img1: `${baseURL}` + "apartament21.webp",
    img2: `${baseURL}` + "apartament22.webp",
    img3: `${baseURL}` + "apartament23.webp",
    plname: "Apartament 2",
    pldescription:
      "Apartament dla prywatnego inwestora,  projekt koncepcyjny oraz wykonawczy, analizę kosztów.   Wykonano inwestycję 'pod klucz' pow ok.46m2",
    endescription: "",
    lokalizacja: "Kraków/2018",
    rodzaj: "niekomercyjne",
  },
  {
    img1: `${baseURL}` + "apartament31.webp",
    img2: `${baseURL}` + "apartament32.webp",
    img3: `${baseURL}` + "apartament33.webp",
    plname: "Apartament 3",
    pldescription:
      "Apartament dla prywatnego inwestora,  projekt koncepcyjny oraz wykonawczy, analizę kosztów.   Wykonano inwestycję 'pod klucz' pow ok.46m2",
    endescription: "",
    lokalizacja: "Kraków/2018",
    rodzaj: "niekomercyjne",
  },
  {
    img1: `${baseURL}` + "apartamentyrynek1.webp",
    img2: `${baseURL}` + "apartamentyrynek2.webp",
    img3: `${baseURL}` + "apartamentyrynek3.webp",
    plname: "Apartamenty Rynek",
    pldescription:
      "Apartamenty zaprojektowano tak, aby wytrzymały intensywne użytkowanie, były atrakcyjne dla turystów,  tanie w wykończeniu oraz utrzymaniu oraz stanowily polaczenie stylow. Powierzchnie apartamentow od 30-75 m2.",
    endescription: "",
    lokalizacja: "Kraków/2008-2018",
    rodzaj: "niekomercyjne",
  },
  {
    img1: `${baseURL}` + "willa1.webp",
    img2: `${baseURL}` + "willa2.webp",
    img3: `${baseURL}` + "willa3.webp",
    plname: "Willa przy ulicy Ksiecia Józefa",
    pldescription:
      "Projekt dwupoziomowej biblioteki wraz z zespolem fitnes z basenem w Willi polozonej na ul.Ksiecia Jozefa w Krakowie pow. 2 x 150m2.",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "niekomercyjne",
  },




];
export default Lista;
