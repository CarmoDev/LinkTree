import { useState, useEffect } from "react";

import { Container, Header, Title, Image, Links, Social, LinkTree } from "./styles";

import { Mocks } from "../utils/mock";

import {ReactComponent as Twitter} from "../assets/icons/twitter.svg";
import {ReactComponent as Instagram} from "../assets/icons/instagram.svg";
import {ReactComponent as Tiktok} from "../assets/icons/tiktok.svg";
import {ReactComponent as Twitch} from "../assets/icons/twitch.svg";
import Iframe from "../Components/Iframes";
import Dropdown from "../Components/DropDown";
import Redirect from "../Components/Link";

export default function App() {
  const [lastVideo, setLastVideo] = useState("");

  useEffect(() => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_API_KEY}&channelId=${import.meta.env.VITE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`)
      .then((Response) => Response.json())
      .then((data) => setLastVideo(data.items[0].id.videoId))
      .catch(() => setLastVideo("G1elCyKTYXM"));
  }, []);

  console.log(lastVideo);

  return (
    <Container>

      <Header>
        <Title>
          RVSAKIL
        </Title>

        <Image src={Mocks.image} />

        <a>@rvsakil</a>
      </Header>

      <Links>
        <Social>
          <a href="https://twitter.com/rvsakil" target="_blank" rel="noreferrer">
            <Twitter />
          </a>

          <a href="https://www.instagram.com/rvsakil/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>

          <a href="https://www.tiktok.com/@rvsakil" target="_blank" rel="noreferrer">
            <Tiktok />
          </a>

          <a href="https://www.twitch.tv/rvsakil" target="_blank" rel="noreferrer">
            <Twitch />
          </a>
        </Social>
      </Links>

      <LinkTree>
        <>
          {Mocks.Links.map((link) => {
            if (link.type === "embed") {
              return <Iframe key={link.id} URL={`${link.URL}${lastVideo}`} />;
            }

            if (link.type === "dropdown") {
              return( <Dropdown
                key={link.id}
                Childs={link.childs}
                URL={link.URL}
                Label={link.Buttonlabel}
                Text={link.Text}
                logo={link.logo}
              />
              );
            }

            return <Redirect key={link.id} URL={link.URL} text={link.Text} logo={link.logo} />;
          })}
        </>
      </LinkTree>
    </Container>
  );
}
