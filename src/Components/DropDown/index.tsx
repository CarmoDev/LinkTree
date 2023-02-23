import { useState } from "react";
import Iframe from "../Iframes";
import { Link } from "../Link/styles";
import { Container } from "./styles";

interface DropdownProps {
  URL?: string,
  Text?: string | null,
  Label?: string | null,
  Childs?: {
    id: number ,
    URL: string,
    name: string,
    price: number,
  }[],
  logo?: string
}

export default function Dropdown({Childs, Text, URL, Label, logo}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <Container onClick={handleOpen}>
      {isOpen ? (
        <>
          { Childs && (
            <>
              {Childs.map((link) => (
                <>
                  <Link key={link.id} href={`${link.URL}Olá%20tenho%20interesse%20em%20${link.name},%20como%20está%20a%20agenda`} target="_blank">
                    <span>{link.name} -&nbsp;</span>
                    <span>R$ {link.price},00</span>
                  </Link>
                </>
              ))}
              <p>Maiores informações clique no serviço desejado</p>
            </>
          )}

          {URL && (
            <>
              <Iframe URL={URL} />
              <a href="https://open.spotify.com/artist/4uRj5E1cCMl9B8FWLFkQF2?si=6f3d55fa3b1e45c3" target="_blank" rel="noreferrer">
                <button>{Label}</button>
              </a>
            </>
          )}
        </>
      ) : (
        <>
          <img src={logo}/>
          <span>{Text}</span>
        </>
      )
      }
    </Container>
  );
}
