import { HeaderContainer, HeaderTitle, HeaderLogo } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo src="imagens/logo.png" alt="Logo" />
            <HeaderTitle>Viva experiências gastronômicas no conforto da sua casa</HeaderTitle>
        </HeaderContainer>
    );
};

export default Header;