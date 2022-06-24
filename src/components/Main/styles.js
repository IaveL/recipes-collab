import styled from "styled-components";
import MainBackground from "../../assets/Inicio.png"

export const MainContainer = styled.main`
    min-height: 100vh;
    position: relative;
    background-image: url(${MainBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const HeaderContainer = styled.header`
    height: 14vh;
    display: flex;
    width: 100%;
    padding: 0 25px 0 25px;
    justify-content: space-between;
    align-items: center;
`
export const HeaderNavBar = styled.ul`
    width: 35vw;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
`
export const NavItem = styled.li`
    width: 25%;
    text-align: center;
    text-transform: uppercase;
`
export const HighlightNavItem = styled.li`
    border: solid black;
    width: 30%;
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
`
export const MainTitle = styled.h1`
    font-size: 5em;
    position: absolute;
    top: 50%;
    left: 35%;
    letter-spacing: 7px
`