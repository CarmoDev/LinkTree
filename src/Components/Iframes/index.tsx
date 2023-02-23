import { Container } from "./styles";

interface IframeProps {
  URL: string | undefined,
}

export default function Iframe( {URL}: IframeProps) {
  return (
    <Container src={`${URL}?&autoplay=1`} frameBorder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></Container>
  );
}
