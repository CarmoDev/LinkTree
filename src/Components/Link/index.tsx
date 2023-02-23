import { Link } from "./styles";

interface LinkProps {
  URL?: string,
  text?: string | null,
  logo?: string
}

export default function Redirect({URL, text, logo}: LinkProps) {
  return (
    <Link href={URL} target="_blank">
      <img src={logo} />
      <span>{text}</span>
    </Link>
  );
}
