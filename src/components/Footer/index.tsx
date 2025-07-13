import * as S from './styles';

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.Logo src="/imagens/logo.png" alt="Logo efood" />

            <S.SocialIcons>
                <S.SocialIcon 
                    as="img"
                    src="/imagens/instagram.png" 
                    alt="Instagram"
                    title="Ir para o Instagram"
                />
                <S.SocialIcon 
                    as="img"
                    src="/imagens/facebook.png" 
                    alt="Facebook"
                    title="Ir para o Facebook"
                />
                <S.SocialIcon 
                    as="img"
                    src="/imagens/twitter.png" 
                    alt="Twitter"
                    title="Ir para o Twitter"
                />
            </S.SocialIcons>

            <S.FooterText>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
            </S.FooterText>
        </S.FooterContainer>
    );
};

export default Footer;