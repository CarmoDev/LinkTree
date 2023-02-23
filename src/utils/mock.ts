import img from "./assets/images/Rvs.jpg";

import spotify from "./assets/icons/Spotify.svg";
import vynil from "./assets/icons/vynil.svg";

import headphone from "./assets/images/headphone.jpg";
import excepcional from "./assets/images/excepcional.png";
import prod from "./assets/images/prod.png";

export const Mocks ={
  image: img,
  Links: [
    {
      id: 1,
      type: "embed",
      URL: "https://www.youtube-nocookie.com/embed/",
      Text: null
    },
    {
      id: 2,
      type: "link",
      URL: "https://www.youtube.com/watch?v=G1elCyKTYXM&list=PL4V4xIQn_uDV0Qh1PUGFAr6AxSjnFZ6Mr",
      Text: "MÚSICAS | CLIPES",
      logo: excepcional,
    },
    {
      id: 4,
      type: "dropdown",
      Text: "SPOTIFY",
      Buttonlabel: "Ir para o spotify",
      URL: "https://open.spotify.com/embed/artist/4uRj5E1cCMl9B8FWLFkQF2?utm_source=generator&theme=0",
      logo: spotify,
    },
    {
      id: 3,
      type: "link",
      URL: "https://www.youtube.com/@prod.rvsakil",
      Text: "BEATS | ᴘʀᴏᴅ. ʀᴠꜱᴀᴋɪʟ",
      logo: prod,
    },
    {
      id: 5,
      type: "dropdown",
      Text: "SERVIÇOS",
      childs: [
        {
          id: 1,
          URL: "https://api.whatsapp.com/send?phone=5511978373216&text=",
          name: "CAPTAÇÃO DE AÚDIO",
          price: 50.00,
        },
        {
          id: 2,
          URL: "https://api.whatsapp.com/send?phone=5511978373216&text=",
          name: "MIX",
          price: 150.00,
        },
        {
          id: 3,
          URL: "https://api.whatsapp.com/send?phone=5511978373216&text=",
          name: "MASTER",
          price: 75.00,
        },
      ],
      logo: vynil,
    },
    {
      id: 6,
      type: "link",
      URL: "https://onerpm.link/487721550509",
      Text: "OUTROS STREAMINGS",
      logo: headphone,
    },
  ]
};
