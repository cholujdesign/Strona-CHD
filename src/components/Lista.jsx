import React from "react";
import Iframe from "react-iframe";

let baseURL =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/";
const Lista = [
   {
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294637633_5459258220797419_1771762644444398829_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=RAa-VyDsEi8AX-U97ke&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9vnNdz6XHEF1fzNlcxF_MTROJQTrHKrK2IyoaaODQJxA&oe=62DC3A0D", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294550007_5459259637463944_5492899516307500657_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q3Yo07u4hSsAX-W2LWd&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9S5552-B4zmLKxCfY9mmYk_W45BNAtBTqdchlw4QghXg&oe=62DBD85E",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294606072_5459258234130751_3712938801781668456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=gzp5LM8aVEsAX-3yy3f&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-DpNhvtSrRC6iaDLpkU3RimvYRHNZiCq0XRiR6Nhdxxw&oe=62DB3E2C",
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
    img1: "https://external.flcj1-1.fna.fbcdn.net/emg1/v/t13/13954578319453198672?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FndNZSfyNUcY%2Fhqdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p480x250_q75&ccb=13-1&oh=00_AT98ZxACbRIXxQWa-kDMceWVTgiABFA26IUZW3zPzttoLg&oe=62D88647&_nc_sid=c504da", 
    img2: "https://external.flcj1-1.fna.fbcdn.net/emg1/v/t13/13954578319453198672?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FndNZSfyNUcY%2Fhqdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p480x250_q75&ccb=13-1&oh=00_AT98ZxACbRIXxQWa-kDMceWVTgiABFA26IUZW3zPzttoLg&oe=62D88647&_nc_sid=c504da",
    img3: "https://external.flcj1-1.fna.fbcdn.net/emg1/v/t13/13954578319453198672?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FndNZSfyNUcY%2Fhqdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p480x250_q75&ccb=13-1&oh=00_AT98ZxACbRIXxQWa-kDMceWVTgiABFA26IUZW3zPzttoLg&oe=62D88647&_nc_sid=c504da",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294585133_5459386624117912_6987432424179995654_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=8ap1RPD94u4AX-fl4bd&_nc_ht=scontent.flcj1-1.fna&oh=00_AT91SCjuIuiT4vpGzSDkxKf3GI22cfYyMk5v7rMPam3L5Q&oe=62DC722C", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294605323_5459385817451326_4056682290576631135_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=uRUjeoToXV8AX9jaH8S&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-Pzo7T96IE6nnYLVrY0PJK-do8hQ3CBDCqA7VD7CT78w&oe=62DAD375",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294677830_5459386664117908_6468770226415657470_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=KtN8CuaR0VkAX-6nfaC&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-wozxP6B73lx-5ouO6TLIrweXi3hm0kG_DVJsGtzGsBA&oe=62DADA91",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294857727_5459831080740133_392543274326459178_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=VXnh2zbV9hQAX9UvElq&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8c6W0PGXORw25qUSWNK20PSOLJbXUz3YZ-KurBB6fiIg&oe=62DBF9A6", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294811409_5459831220740119_2849604516966265515_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=rn05zbZmubMAX8SoImZ&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_opKtIt4JFQSjhD75RqP1_Ja1IdSwiHCoXBd3fEwEu5Q&oe=62DC6283",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294540494_5459831334073441_2713102603376993310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=5OULXthq3MgAX9BDx8D&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9SAEmL063a4Z8ClRuYHOfDktEv-T24nHMil50hj75JAw&oe=62DC15F4",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294652500_5459802920742949_2003844211235350248_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=tamv7iWlF7UAX8XTMI_&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_URZe8BSDdbqFUwPg_PCXOmd00vVUEHBbq0R7HMyVgAg&oe=62DBAEDE", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294727867_5459796030743638_5421270123518175354_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=nG9Y0auo01QAX_ryAVu&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8EJQni4RzA2IxYNhhxoXcXpMe22tv1xo1rg4TE4d63SQ&oe=62DAE5DB",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294545825_5459802904076284_915908708253282124_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=JMTFROhOS_UAX9AtUq8&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9UXYSwnl7VktzCs7rAqnffmuEqk3YpoNQKWS8a7oeKnA&oe=62DBD342",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9APtuCQQCmdoulBsLmhz5_CzAsc9ehRV9TvYRtlgyEXA&oe=62DBB30A", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294864534_5459907090732532_1422648611873246676_n.jpg?stp=dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=fC8gf2dGmPkAX89NBG4&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_QZMc2mY5seWzdAmsxiiF15m7zMJGcOd_cahkvdqNjgQ&oe=62DBFE6C",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294620072_5459907380732503_13702742715975653_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=H0iuyaXgzHQAX-4K1q-&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9gnv69tm2hokAvuVKcTm5MgPVQNWRdnxbNQMNlK7mcZA&oe=62DB4FD2",
    plname: "Willa Złocień",
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
