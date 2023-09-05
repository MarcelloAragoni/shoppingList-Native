import * as Styled from "./button.styled";

export function AppButton({ onPress, title }: any) {
  return (
    <Styled.ButtonContainer onPress={onPress}>
      <Styled.ButtonText>{title}</Styled.ButtonText>
    </Styled.ButtonContainer>
  );
}
