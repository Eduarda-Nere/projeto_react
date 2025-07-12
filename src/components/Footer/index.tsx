import React from 'react';
import {
    FooterContainer,
    Logo,
    SocialIcons,
    SocialIcon,
    FooterText
} from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src="/imagens/logo.png" alt="Logo efood" />

            <SocialIcons>
                <SocialIcon src="/imagens/instagram.png" alt="Instagram" />
                <SocialIcon src="/imagens/facebook.png" alt="Facebook" />
                <SocialIcon src="/imagens/twitter.png" alt="Twitter" />
            </SocialIcons>

            <FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;