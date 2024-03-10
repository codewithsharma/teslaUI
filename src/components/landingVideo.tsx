import styled from "styled-components";

const Container = styled.div`
  video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
`;

const LandingVideo = () => {
  return (
    <Container>
      <video
        src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Promo-Desktop.mp4"
        autoPlay
        muted
        loop
      ></video>
    </Container>
  );
};

export default LandingVideo;
