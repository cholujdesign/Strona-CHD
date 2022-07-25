import React from "react";
import Iframe from "react-iframe";

let baseURL =
  "https://raw.githubusercontent.com/cholujdesign/Strona-CHD/main/src/components/renders/";

const Lista = [
  {
    img1: baseURL+"gehanowska.webp",
    img2: baseURL+"gehanowska.webp",
    img3: baseURL+"gehanowska.webp",     plname: "Restauracja Pod Słońcem, Kawiarnia Gehanowska",
    pldescription:
      "Projekt, nadzór i realizacja Kawiarni Gehanowskiej oraz Restauracji Pod Sloncem w Rynku Glównym w Krakowie pow.ok 300m2 czas realizacji 1994r",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459333744123200/"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rakowickamieszkanie31.webp",
    img2: baseURL+"rakowickamieszkanie32.webp",
    img3: baseURL+"rakowickamieszkanie33.webp", 
        plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0RkDpfDNoLbjS4LWLHuqdhymxb7oXSsrqJRVK9qCKuX3XYC7WX6cLMhjppnPHyiqSl&id=321208277935798"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rakowickamieszkanie21.webp",
    img2: baseURL+"rakowickamieszkanie22.webp",
    img3: baseURL+"rakowickamieszkanie23.webp", 
        plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02CfeWEG65TCwC6Sgkyt9u2Fb8F9n4Cm8Z7AjDcsM5smS3agk4VKz2hGWDZR497cH1l&id=321208277935798"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rakowickamieszkanie31.webp",
    img2: baseURL+"rakowickamieszkanie32.webp",
    img3: baseURL+"rakowickamieszkanie33.webp", 
    plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "https://www.facebook.com/permalink.php?story_fbid=pfbid0eXecX8Gk38E33dAP7kUporwRFNM28fzpZncATnwVXBEBhVVxPxb5V5HiCcN5Vu65l&id=321208277935798",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href=""
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rynekapartament11.webp",
    img2: baseURL+"rynekapartament12.webp",
    img3: baseURL+"rynekapartament13.webp", 
    plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "https://www.facebook.com/permalink.php?story_fbid=pfbid0XxqL7f9iev1wZLaZb2D2vAjmttpSzmzVFiKfEBGk4JbugZQgP11qu1BFLT2FxBs6l&id=321208277935798",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href=""
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294727865_5459357207454187_189706887133000287_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=WX9oqCi7LgUAX90S-Qh&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8evtr55rqnyoUQWWrSSLjHIzqBXyvhbwpFPzCY_am2Xw&oe=62DBD5F8", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294575024_5459357240787517_4827493046268553489_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=Gl_Dqtw96jMAX_0hfbL&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9jMV-XosSyVZo_0C5J66-yneUvD9J2lMll__gV3aumKg&oe=62DACCCE",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294646047_5459357227454185_3132500524399036804_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=aAGkCfRBvlcAX8VDTku&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8JF2ODICZyf7IPN_APhmPbVDiRTDRS1KSoGQZ8Vf0qaA&oe=62DB6FC9",
    plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0bhwfhKvaQzvWvHHbY5tS8DfZondp1ZHVVUFXA26eUDyKHdRR1qaF2RSAgbN2pNZkl&id=321208277935798"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rynekapartament21.webp",
    img2: baseURL+"rynekapartament22.webp",
    img3: baseURL+"rynekapartament23.webp", 
        plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid035GZRikqQTRY1Xxp4pLFR6wAzxCX38Wpjrtyq82r22aAifVwWfw9bMPt7kRjJLMgEl&id=321208277935798"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rynekapartament31.webp",
    img2: baseURL+"rynekapartament32.webp",
    img3: baseURL+"rynekapartament33.webp",     plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0323vJWPzZsadtCDJwoEtWrwxE5v5p5AC8fSw317eNPZSHGBQNNKEcbXcn25dEqPjEl&id=321208277935798"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"rynekapartament41.webp",
    img2: baseURL+"rynekapartament42.webp",
    img3: baseURL+"rynekapartament43.webp",     plname: "Apartament na wynajem",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid027Gm4Vcmmfwdvqi1oYm4PWE8AXLTFBLSs9Z3Cf2PrA59qaSGgfTapzRgYoAF4j1Enl&id=321208277935798"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"kurkawodna.webp",
    img2: baseURL+"kurkawodna.webp",
    img3: baseURL+"kurkawodna.webp",     plname: "Restauracja ul. Kanonicza",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459315444125030/"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  {
    img1: baseURL+"szoberowksa.webp",
    img2: baseURL+"szoberowksa.webp",
    img3: baseURL+"szoberowksa.webp",     
    plname: "Restauracja Szoberowska",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459325054124069/"
        data-width="100%"
        data-show-text="true"
      >
        <blockquote
          cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
          className="fb-xfbml-parse-ignore"
        >
          Opublikowany przez{" "}
          <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
            Chołuj Design
          </a>
          &nbsp;
          <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
            Wtorek, 19 lipca 2022
          </a>
        </blockquote>
      </div>
    ),
  },
  // {
  //   img1: "", 
  //   img2: "",
  //   img3: "",
  //   plname: "Apartament na wynajem",
  //   pldescription:
  //     "Projekt, nadzór i realizacja",
  //   endescription: "",
  //   lokalizacja: "Kraków",
  //   rodzaj: "komercyjne",
  //   fb: (
  //     <div
  //       className="fb-post"
  //       data-href=""
  //       data-width="100%"
  //       data-show-text="true"
  //     >
  //       <blockquote
  //         cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
  //         className="fb-xfbml-parse-ignore"
  //       >
  //         Opublikowany przez{" "}
  //         <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
  //           Chołuj Design
  //         </a>
  //         &nbsp;
  //         <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
  //           Wtorek, 19 lipca 2022
  //         </a>
  //       </blockquote>
  //     </div>
  //   ),
  // },
  // {
  //   img1: "", 
  //   img2: "",
  //   img3: "",
  //   plname: "Apartament na wynajem",
  //   pldescription:
  //     "Projekt, nadzór i realizacja",
  //   endescription: "",
  //   lokalizacja: "Kraków",
  //   rodzaj: "komercyjne",
  //   fb: (
  //     <div
  //       className="fb-post"
  //       data-href=""
  //       data-width="100%"
  //       data-show-text="true"
  //     >
  //       <blockquote
  //         cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
  //         className="fb-xfbml-parse-ignore"
  //       >
  //         Opublikowany przez{" "}
  //         <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
  //           Chołuj Design
  //         </a>
  //         &nbsp;
  //         <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
  //           Wtorek, 19 lipca 2022
  //         </a>
  //       </blockquote>
  //     </div>
  //   ),
  // },
  // {
  //   img1: "", 
  //   img2: "",
  //   img3: "",
  //   plname: "Apartament na wynajem",
  //   pldescription:
  //     "Projekt, nadzór i realizacja",
  //   endescription: "",
  //   lokalizacja: "Kraków",
  //   rodzaj: "komercyjne",
  //   fb: (
  //     <div
  //       className="fb-post"
  //       data-href=""
  //       data-width="100%"
  //       data-show-text="true"
  //     >
  //       <blockquote
  //         cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
  //         className="fb-xfbml-parse-ignore"
  //       >
  //         Opublikowany przez{" "}
  //         <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
  //           Chołuj Design
  //         </a>
  //         &nbsp;
  //         <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
  //           Wtorek, 19 lipca 2022
  //         </a>
  //       </blockquote>
  //     </div>
  //   ),
  // },
  // {
  //   img1: "", 
  //   img2: "",
  //   img3: "",
  //   plname: "Apartament na wynajem",
  //   pldescription:
  //     "Projekt, nadzór i realizacja",
  //   endescription: "",
  //   lokalizacja: "Kraków",
  //   rodzaj: "komercyjne",
  //   fb: (
  //     <div
  //       className="fb-post"
  //       data-href=""
  //       data-width="100%"
  //       data-show-text="true"
  //     >
  //       <blockquote
  //         cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
  //         className="fb-xfbml-parse-ignore"
  //       >
  //         Opublikowany przez{" "}
  //         <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
  //           Chołuj Design
  //         </a>
  //         &nbsp;
  //         <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
  //           Wtorek, 19 lipca 2022
  //         </a>
  //       </blockquote>
  //     </div>
  //   ),
  // },
  // {
  //   img1: "", 
  //   img2: "",
  //   img3: "",
  //   plname: "Apartament na wynajem",
  //   pldescription:
  //     "Projekt, nadzór i realizacja",
  //   endescription: "",
  //   lokalizacja: "Kraków",
  //   rodzaj: "komercyjne",
  //   fb: (
  //     <div
  //       className="fb-post"
  //       data-href=""
  //       data-width="100%"
  //       data-show-text="true"
  //     >
  //       <blockquote
  //         cite="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3"
  //         className="fb-xfbml-parse-ignore"
  //       >
  //         Opublikowany przez{" "}
  //         <a href="https://www.facebook.com/Cho&#x142;uj-Design-321208277935798/">
  //           Chołuj Design
  //         </a>
  //         &nbsp;
  //         <a href="https://www.facebook.com/321208277935798/photos/a.468271873229437/5459386667451241/?type=3">
  //           Wtorek, 19 lipca 2022
  //         </a>
  //       </blockquote>
  //     </div>
  //   ),
  // },

  
];
export default Lista;
