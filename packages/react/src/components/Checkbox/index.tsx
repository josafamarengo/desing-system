import { GiCheckMark as Check } from "react-icons/gi";
import { ComponentProps } from "react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check />
      </CheckboxIndicator>
    </CheckboxContainer>
  );
}

Checkbox.displayName = "Checkbox";
