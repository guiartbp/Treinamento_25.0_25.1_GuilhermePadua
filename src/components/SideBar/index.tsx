import { Logo } from 'components/Logo';
import { MenuButton } from 'components/MenuButton';
import { useState } from 'react';
import { PiusEmAlta } from 'components/PiusEmAlta';
import * as S from './styles';

export const SideBar: React.FC = () => {
    const [botaoAtivo, setBotaoAtivo] = useState('Página Inicial');

    return (
        <S.StyleSideBar>
            <S.DivSideCompleto>
                <S.DivLogo>
                    <Logo />
                </S.DivLogo>
                <S.DivButton>
                    <MenuButton
                        imageUrl="assets/icons/home.svg"
                        textMenu="Página Inicial"
                        onClick={() => setBotaoAtivo('Página Inicial')}
                        isActive={botaoAtivo === 'Página Inicial'}
                    />
                    <MenuButton
                        imageUrl="assets/icons/bell.svg"
                        textMenu="Notificações"
                        onClick={() => setBotaoAtivo('Notificações')}
                        isActive={botaoAtivo === 'Notificações'}
                    />
                    <MenuButton
                        imageUrl="assets/icons/message.svg"
                        textMenu="Mensagens"
                        onClick={() => setBotaoAtivo('Mensagens')}
                        isActive={botaoAtivo === 'Mensagens'}
                    />{' '}
                    <MenuButton
                        imageUrl="assets/icons/check.svg"
                        textMenu="Salvos"
                        onClick={() => setBotaoAtivo('Salvos')}
                        isActive={botaoAtivo === 'Salvos'}
                    />{' '}
                    <MenuButton
                        imageUrl="assets/icons/profile.svg"
                        textMenu="Perfil"
                        onClick={() => setBotaoAtivo('Perfil')}
                        isActive={botaoAtivo === 'Perfil'}
                    />{' '}
                    <MenuButton
                        imageUrl="assets/icons/config.svg"
                        textMenu="Configurações"
                        onClick={() => setBotaoAtivo('Configurações')}
                        isActive={botaoAtivo === 'Configurações'}
                    />
                </S.DivButton>
            </S.DivSideCompleto>
            <S.DivQuadrado>
                <S.ImgQuadrado
                    src="assets/images/quadrado.png"
                    alt="quadrado"
                />
                <S.ImgLogout src="assets/icons/Log_Out.svg" alt="" />
            </S.DivQuadrado>
        </S.StyleSideBar>
    );
};
