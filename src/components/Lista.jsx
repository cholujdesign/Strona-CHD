import React from "react";
import Iframe from "react-iframe";

let baseURL =
  "https://raw.githubusercontent.com/cholujdesign/Strona-CHD/main/src/components/renders/";
const Lista = [
  {
    img1: baseURL+"rakowicka1.webp",
    img2: baseURL+"rakowicka2.webp",
    img3: baseURL+"rakowicka3.webp",
    plname: "Rokowicka 15 ",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid033nW6546zu9KpC7fYTfXdGfrMPWXwSdoR5VFoLowEVJnNSGe4tSnP3bVYM7StYVZZl&id=321208277935798"
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
    img1: baseURL+"wieliczka.webp",
    img2: baseURL+"wieliczka.webp",
    img3: baseURL+"wieliczka.webp", 
    plname: "Domy pod Wieliczka",
    pldescription: <a className="white-text" href="https://www.youtube.com/watch?v=ndNZSfyNUcY">Projekt, nadzór i realizacja, https://www.youtube.com/watch?v=ndNZSfyNUcY</a>
    ,
    endescription: "https://www.facebook.com/permalink.php?story_fbid=pfbid0R2iqCCaSZNzEuL1sp4gMSc9faChoUZXFVNCqV3ZsPufjHJP9U5MsS9unyZ7hdMEnl&id=321208277935798",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=5459294704127104&id=321208277935798"
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
    img1: baseURL+"koncepcje1.webp",
    img2: baseURL+"koncepcje2.webp",
    img3: baseURL+"koncepcje3.webp",     
    plname: "Koncepcje",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0R2iqCCaSZNzEuL1sp4gMSc9faChoUZXFVNCqV3ZsPufjHJP9U5MsS9unyZ7hdMEnl&id=321208277935798"
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
    img1: baseURL+"houseq1.webp",
    img2: baseURL+"houseq2.webp",
    img3: baseURL+"houseq3.webp", 
        plname: "Domy prefabrykowane dla Hosue Q",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "https://www.facebook.com/CHDarchitekci/posts/pfbid02MpJLiFz6En4AvWNT7wEj4x3b4bA68uYPyZ68uv44FTDjxnhbn8BepWe2wZeHirxRl",
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
    img1: baseURL+"turaszowka1.webp",
    img2: baseURL+"turaszowka2.webp",
    img3: baseURL+"turaszowka3.webp", 
        plname: "",
    pldescription:
      "Projekt, nadzór i realizacja dla Hosue Q",
    endescription: "",
    lokalizacja: "Kraków",
    rodzaj: "komercyjne",
    fb: (
      <div
        className="fb-post"
        data-href="https://www.facebook.com/CHDarchitekci/posts/pfbid0q1WhDB8KLzJXNhsGBSQxxyr1rqYSeYasrJYJPVnvuewtCwLhshmLgxJ4Tg25GdJGl"
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
    img1: baseURL+"zlocien1.webp",
    img2: baseURL+"zlocien2.webp",
    img3: baseURL+"zlocien3.webp",     plname: "Willa Złocień",
    pldescription:
      "Projekt, nadzór i realizacja",
    endescription: "",
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
  // {
  //   img1: "", 
  //   img2: "",
  //   img3: "",
  //   plname: "",
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
