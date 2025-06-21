import { Button, cn } from "@nextui-org/react";
import { Link } from "@remix-run/react";

interface BtnPrimaryProps {
  to: string;
  title: string;
  className?: string;
}

export default function BtnPrimary(props: BtnPrimaryProps) {
  const { to, title, className } = props;

  return (
    <Button
      as={Link}
      color="primary"
      size="lg"
      className={cn(
        "rounded-full bg-primary text-light-yellow font-medium text-base",
        className
      )}
      to={to}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </Button>
  );
}
