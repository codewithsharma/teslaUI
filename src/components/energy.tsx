import styled from "styled-components";
import { energy, energyMenu } from "./data";
const Border = styled.div`
  width: 0.2px;
  height: auto;
  background-color: #c8c8c8;
`;
const SubMenu = styled.div`
  padding: 70px 0;
  justify-content: space-around;
  display: flex;
  gap: 20px;
  margin: auto;
  max-width: 1080px;
`;
const MenuProductCard = styled.div`
  text-align: center;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MenuProductCardImg = styled.img`
  cursor: pointer;
  width: 190px;
  object-fit: cover;
`;
const MenuProductCardLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100px;
  a {
    text-decoration: underline;
    color: #555555;
    font-size: 14px;
  }
`;
const Products = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const SubMenuMenus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  a {
    font-size: 15px;
    font-weight: 550;
    margin: 2px 0;
  }
`;

const Energy = () => {
  return (
    <SubMenu>
      <Products>
        {energy.map((data) => (
          <MenuProductCard>
            <MenuProductCardImg src={data.img} />
            <h3>{data.title}</h3>
            <MenuProductCardLinks>
              <a href={data.learn}>Learn</a>
              <a href={data.order}>Order</a>
            </MenuProductCardLinks>
          </MenuProductCard>
        ))}
      </Products>
      <Border></Border>

      <SubMenuMenus>
        {energyMenu.map((item) => (
          <a href={item.url}>{item.title}</a>
        ))}
      </SubMenuMenus>
    </SubMenu>
  );
};

export default Energy;
