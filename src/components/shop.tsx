import styled from "styled-components";
import { shop } from "./data";

const SubMenu = styled.div`
  padding: 70px 0;
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

const Products = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`;

const Shop = () => {
  return (
    <SubMenu>
      <Products>
        {shop.map((data) => (
          <MenuProductCard>
            <MenuProductCardImg src={data.img} />
            <h3>{data.title}</h3>
          </MenuProductCard>
        ))}
      </Products>
    </SubMenu>
  );
};

export default Shop;
