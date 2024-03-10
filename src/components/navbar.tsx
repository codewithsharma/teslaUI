import LogoImg from "../../public/tesla-motors-car-tesla-model-s-tesla-model-3-decal-841a85080ce9f397a24c1f906ae76ef8.png";
import { FunctionComponent } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { MdHelpOutline } from "react-icons/md";
import styled from "styled-components";

import Vehcile from "./vechiel";
import Charging from "./charging";
import Shop from "./shop";
import Energy from "./energy";
import Discover from "./discover";

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  z-index: 100;
`;
const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;
const Logo = styled.img`
  width: 150px;
  height: 50px;
  object-fit: cover;
`;
const ChargingMenu = styled.div`
display: none;
`;
const ShopMenu = styled.div`
display: none;
`;
const VehcilesMenu = styled.div`
display: none;
`;
const DiscoverMenu = styled.div`
display: none;
  
`
const EnergyMenu = styled.div`
display: none;
`;
const Menubar = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
 
`;
const Menu = styled.div`
  padding: 6px 19px;
  border-radius: 4px;
  font-size: 15px;
  color: black;
  &:hover{
    background-color: #d9d9d9;
    ${VehcilesMenu}{
     background-color: red;
    }
  }

`;
const IconBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.a`
  color: black;
  font-size: 20px;
`;

const iconsList = [
  { icon: <MdHelpOutline />, url: "/" },
  { icon: <IoIosGlobe />, url: "/" },
  { icon: <FaRegUserCircle />, url: "/" },
];


const Navbar: FunctionComponent = () => {
  const menuItem = [
    { title: "Vehciles", url: "" },
    { title: "Energy", url: "" },
    { title: "Charging", url: "" },
    { title: "Discover", url: "" },
    { title: "Shop", url: "" },
  ];

  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImg}></Logo>
        <Menubar>
          {menuItem.map((menu) => (
            <Menu>{menu.title}</Menu>
          ))}
        </Menubar>
        <IconBar>
          {iconsList.map((item) => (
            <Icon href={item.url}>{item.icon}</Icon>
          ))}
        </IconBar>
      </Container>
      <VehcilesMenu>
        <Vehcile />
      </VehcilesMenu>
      <ChargingMenu>
        <Charging />
      </ChargingMenu>
      
      <ShopMenu>
        <Shop />
      </ShopMenu>
      <EnergyMenu>
        <Energy />
      </EnergyMenu>
      <DiscoverMenu>
        <Discover/>
      </DiscoverMenu>
    </Wrapper>
  );
};

export default Navbar;
