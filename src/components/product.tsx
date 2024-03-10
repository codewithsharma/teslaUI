import styled from "styled-components";

const Container = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const ProductDetail = styled.div`
  text-align: center;
  padding: 130px 0 80px;

  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 45px;
  }
  h3 {
    margin: 3px 0 5px;
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-size: 13px;
    letter-spacing: 0.8px;
    font-weight: 500;
  }
`;
const DefaultButton = styled.button`
  padding: 6px;
  width: 270px;
  cursor: pointer;
  border: none;
  outline: none;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 550;
  background-color: white;
`;
const GreyButton = styled.button`
  padding: 6px;
  background-color: #555555;
  color: white;
  width: 300px;
  cursor: pointer;
  border: none;
  outline: none;
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 550;
`;
interface ProductProps {
  img: string;
  price?: string;
  model?: string;
  fedral?: string;
  button1: string;
  button2: string;
  desc: string;
  textEyebrow?:string
}
const Product = ({
    textEyebrow,
  button1,
  button2,
  desc,
  img,
  fedral,
  model,
  price,
}: ProductProps) => {
  return (
    <Container>
      <img src={img} alt="" />
      <ProductDetail>
        <Top>
            <h4>{textEyebrow}</h4>
          <h1>{model}</h1>
          <h3>{price}</h3>
          <p>{fedral}</p>
        </Top>
        <Bottom>
          <Buttons>
            <DefaultButton>{button1}</DefaultButton>
            <GreyButton>{button2}</GreyButton>
          </Buttons>
          <p>{desc}</p>
        </Bottom>
      </ProductDetail>
    </Container>
  );
};
export default Product;
