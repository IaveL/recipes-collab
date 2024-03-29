import React from 'react'
import logo from "../../assets/RC.png"
import { HeaderContainer, 
        HeaderNavBar, 
        NavItem, 
        HighlightNavItem,
        MainContainer,
        MainTitle,
        TitleWrapper
} from './styles'

export default function Main() {
  return (
    <MainContainer>
        <HeaderContainer>
        <img src={logo} alt="website logo" />
        <nav>
            <HeaderNavBar>
                <NavItem>About</NavItem>
                <NavItem>Recipes</NavItem>
                <HighlightNavItem>Subscribe</HighlightNavItem>
            </HeaderNavBar>     
        </nav>
        </HeaderContainer> 
        <TitleWrapper>
        <MainTitle>RECIPES</MainTitle>        
        </TitleWrapper>
    </MainContainer>
    
  )
}
