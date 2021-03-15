import styled from "styled-components";

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #777;
`;

const Footer = () => (
  <FooterStyle>
    <p>real trends challenge by ejbcode </p>
  </FooterStyle>
);

export default Footer;
