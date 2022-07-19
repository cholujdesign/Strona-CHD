import React from "react";
import Iframe from "react-iframe";

let baseURL =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/";
const Lista = [
  {
    img1:  "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294566281_5459333730789868_7717108332365000321_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=PX8CjkGDgI8AX9a7ty3&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8O7CR6klsZunZNnHd04Xgon7hEpPb5Q6n7DiaZXwGaEQ&oe=62DAEA20",
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294566281_5459333730789868_7717108332365000321_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=PX8CjkGDgI8AX9a7ty3&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8O7CR6klsZunZNnHd04Xgon7hEpPb5Q6n7DiaZXwGaEQ&oe=62DAEA20",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294566281_5459333730789868_7717108332365000321_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=PX8CjkGDgI8AX9a7ty3&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8O7CR6klsZunZNnHd04Xgon7hEpPb5Q6n7DiaZXwGaEQ&oe=62DAEA20",
    plname: "Restauracja Pod Słońcem, Kawiarnia Gehanowska",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294639811_5459345190788722_5927667336144799376_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ALjv3L_Wzj4AX_lR50j&_nc_ht=scontent.flcj1-1.fna&oh=00_AT90TOIiYsILcuH5s_JZivWguJ8EXyVtWYkncOG8TvWRrQ&oe=62DBB840", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294502390_5459344680788773_8801093857956179143_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=J6GzR4gA8-UAX-Wpg6h&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HNGQxuSGVJOQCfL-_HshPUruRvP7Fuv9bxIDZ6-hCg&oe=62DC80D1",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294610970_5459345167455391_7309609277264073278_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=MBUglOQAE4UAX8HAkxX&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-Lk8W7HwRblynSkxD590CZt3zFShCm3TNzo9cVW3qchg&oe=62DB409D",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294657351_5459347600788481_6407934965184931662_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=w0lFAwg5V6MAX_MdDnf&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-lliCnSfqQM-JsX6hVjnfbcTGDAiCHziIdAyr55YHByg&oe=62DB7961", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294821165_5459347617455146_7788888652052236026_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=jyKdzGXxWP8AX9QZFe6&_nc_oc=AQlN3EvWSk7j8HAJWl4_AxG0QysXkzVzlBu3MYbXVwrlYfDtLo5_REeet6MgOgkuAn4&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8k3iRljG2p7Cc6RBjkytakpduLZVpdfe8GT0z8Et6T_g&oe=62DBA250",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294620652_5459347624121812_6815755033450738232_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=bQ2GcPjzG-0AX9crqmt&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_9_sdcLzViUcb1TQI0IbemxsxcVnDc_i75drqs3Inoeg&oe=62DBD639",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294641347_5459349260788315_1887007953773178371_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ7WdDGIcNUAX-SydAO&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-Y0d4F-24pk5IM--nGmufIPs0CjU0h8yLEPEzR8PeYmQ&oe=62DB6A89", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294580895_5459349277454980_7489487358793378712_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7iE4j4-EG-EAX_f3XBE&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_XOgALMreCwzolBluOhbaQHtlAtRF_1Xmnt4AVe0kQtQ&oe=62DB6D3A",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294501506_5459349270788314_4487083802203228205_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=pxYqjnz1jqwAX_hJ1On&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8UOqzm6slnTgD0BoxqeyXatR0GfzzY6r15-uBsC_G0rw&oe=62DB1FCA",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294849381_5459352950787946_5763242396441239763_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=OHS_golGXDgAX8WcMji&_nc_ht=scontent.flcj1-1.fna&oh=00_AT95xVHCXf4KwNoz6njV2hxclzsYK1FQftJZD3xPidiV6g&oe=62DB5A5B", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294643278_5459352970787944_7631255931786171849_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=_uxBg2Sqdy8AX8hbpFQ&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-h-buTYqyErOXKdjFtjDMJARgaKFCPJH4H3Dw9A1i0BQ&oe=62DBED79",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294550007_5459352940787947_4058220204807437310_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=rxS9l66kFZkAX9ZshGm&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8OiqFrcIbe2aUoomA3ObacdUYUpBY_4xNyUlee1btYxg&oe=62DC7865",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294602156_5459359047454003_1936335882180417279_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=bJMZlxlSrmIAX_ISeO9&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_RJDmyw5JAs7p8-zKDuItnozN3CN3xlJA5hoqtQ-XIkA&oe=62DC1CA8", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294641457_5459359094120665_619825005820754924_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=6Ah0uQEnFR8AX9IZ0bs&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8JnxV5SMMbzozCs4Pbb2Jp20e2DBLRHQa1PzFR1kJyzw&oe=62DBEB4F",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294895115_5459359124120662_1880867441823686260_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=1DvCVwfDHsYAX_r-VKL&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_X-y9YPPefn9mU2SuSu8-yM2L1WkrUWoPiCcXn7bFBEQ&oe=62DB8CD7",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294564844_5459361100787131_933767230967111225_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=2kEFSzpNG_cAX--8DFC&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-n9vIyhbd5ykIRYRZeUcYFN9DF51rbS062One7L3JkyA&oe=62DB3E59", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294573650_5459361054120469_5953520647872814102_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=5gdmcVP1XCMAX_2FOBl&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8RbUO5dSdFB77pJGu1sGd-o1Q2Sb7FOz_EKeOx7jcCdw&oe=62DBF3B9",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294523093_5459361057453802_6739628388891525776_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=LgARziwncfMAX8M3bw9&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9MP4Nd31X9R9uqmTdNANGhTePSbnZsFFlf9pEApLtZLQ&oe=62DB8132",
    plname: "Apartament na wynajem",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294586029_5459363674120207_812774086369197653_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=wkNGhR2BLXoAX-Z-WC1&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8fyF-Q0TJit2y2jdyuaT2U3QXQnDVlYink0RaH7qNZAw&oe=62DC0A06", 
    img2: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294549481_5459363740786867_980353449088123052_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=EFjcMQidR7UAX9bSx5O&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9K3Lz0dwMHEZXguCxDYUuX66xI1GA_pVPvavXsovQSEg&oe=62DB4A70",
    img3: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294676973_5459363757453532_5042724346773945148_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Y_j9M87ZkwoAX82igkq&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-Q8gXd8G8P6gvgNl7vs1MzT60zsVLuGcTsOe8nTW-7PQ&oe=62DC2C15",
    plname: "Apartament na wynajem",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294577203_5459315434125031_7290459420850800235_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=5DSu7NTrhzcAX-FmpQO&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-r6VhhHtKiXhEQiUGodzRyVLkBCrwjAhmagW4nwZhoug&oe=62DB4BDA", 
    img2: "",
    img3: "",
    plname: "Restauracja ul. Kanonicza",
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
    img1: "https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294569309_5459325034124071_8458763497818631675_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=k12spKD43WQAX8T1dza&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_WugOcrjy6Ux2HpS4vqXkCuxtzma-qbDRG-dFhLwE-VQ&oe=62DAACA2", 
    img2: "",
    img3: "",
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
