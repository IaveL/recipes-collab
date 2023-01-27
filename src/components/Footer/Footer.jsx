import React from "react";
import {
  ContainerFooter,
  BigFooter,
  MiniFooter,
  ListFooter,
  FooterImg,
  ImageWrapper,
} from "./FooterStyle";
import Instagram from "../../assets/Instagram.png";
import Twitter from "../../assets/Twitter.png";
import Facebook from "../../assets/Facebook.png";
import Pinterest from "../../assets/Pinterest.png";

export default function Footer() {
  return (
    <ContainerFooter>
      <BigFooter>
        <ImageWrapper>
          <FooterImg src={Instagram} alt="Instagram" />
          <FooterImg src={Twitter} alt="Twitter" />
          <FooterImg src={Facebook} alt="Facebook" />
          <FooterImg src={Pinterest} alt="Pinterest" />
        </ImageWrapper>

        <ListFooter>
          <li>ABOUT</li>
          <li>RECIPES</li>
          <li>SUBSCRIBE</li>
        </ListFooter>
      </BigFooter>
      <MiniFooter>
        <p>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </p>
      </MiniFooter>
    </ContainerFooter>
  );
}
