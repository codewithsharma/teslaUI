import styled from "styled-components";
import { discoverCompany, discoverLocation, discoverResources } from "./data";

const SubMenu = styled.div`

  padding: 70px 0;
display: flex;
justify-content: space-around;
  max-width: 1000px;
  margin: auto;

`;

const SubMenuMenus = styled.div`
h3{
  color: #999999;
}
  display: flex;
  flex-direction: column;
  gap: 12px;
  a {
    font-size: 15px;
    font-weight: 550;
    margin: 2px 0;
  }
`;

const Discover = () => {
  return (
    <SubMenu>
      <SubMenuMenus>
        <h3>Resources</h3>
        {discoverResources.map((item) => (
          <a href={item.url}>{item.title}</a>
        ))}
      </SubMenuMenus>
      <SubMenuMenus>
        <h3>Location</h3>
        {discoverLocation.map((item) => (
          <a href={item.url}>{item.title}</a>
        ))}
      </SubMenuMenus>
      <SubMenuMenus>
        <h3>Company</h3>
        {discoverCompany.map((item) => (
          <a href={item.url}>{item.title}</a>
        ))}
      </SubMenuMenus>
    </SubMenu>
  );
};

export default Discover;
