import * as React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  children: React.ReactNode;
};

export default function BasicComponent({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}
