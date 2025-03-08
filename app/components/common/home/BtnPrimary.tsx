import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";

interface BtnPrimaryProps {
  to: string;
  title: string;
}

export default function BtnPrimary(props: BtnPrimaryProps) {
  return (
    <Button
      as={Link}
      color="primary"
      size="lg"
      className="rounded-full bg-primary text-light-yellow font-medium text-base"
      to={props.to}
      target="_blank"
      rel="noreferrer"
    >
      {props.title}
    </Button>
  );
}
