import styled from "styled-components";
const RoleDice = ({ diceNumber, diceRoleHandler }) => {
  return (
    <RoleDiceContainer onClick={diceRoleHandler}>
      <img src={`/images/dice/dice_${diceNumber}.png`} alt="Dice" />
    </RoleDiceContainer>
  );
};

const RoleDiceContainer = styled.div`
  cursor: pointer;
  img {
    width: 100%;
  }
`;
export default RoleDice;
