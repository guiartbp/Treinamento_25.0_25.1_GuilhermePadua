import { Piu } from 'components/Piu';
import { PostPiu } from 'components/PostPiu';
import { BarraDigital } from 'components/BarraDigital';
import { Line } from 'components/Line';
import React, { useState } from 'react';
import { SideBar } from 'components/SideBar';
import { Logo } from 'components/Logo';
import { RightBar } from 'components/RightSide';
import * as S from './styles';

export const MainBar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isRightBarOpen, setIsRightBarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleRightBar = () => {
        setIsRightBarOpen(!isRightBarOpen);
    };

    return (
        <S.Container>
            <SideBar isOpen={isSidebarOpen} />
            <S.StyleMain isSidebarOpen={isSidebarOpen}>
                <S.ContainerHamburgerStyled isSidebarOpen={isSidebarOpen}>
                    <S.HamburgerButton
                        isSidebarOpen={isSidebarOpen}
                        onClick={toggleSidebar}
                    >
                        <span />
                        <span />
                        <span />
                    </S.HamburgerButton>
                    <Logo />
                    <RightBar isOpen={isRightBarOpen} />

                    <S.RightBarButton
                        isRightBarOpen={isRightBarOpen}
                        onClick={toggleRightBar}
                    >
                        <img
                            src="assets/icons/Frame.svg"
                            alt="Abrir RightSideBar"
                        />
                    </S.RightBarButton>
                </S.ContainerHamburgerStyled>

                <BarraDigital
                    text="Ouvir um piu..."
                    image="assets/icons/ci_search.svg"
                />
                <PostPiu />
                <Line />
                <Piu
                    fotoUrl="assets/images/quadrado.png"
                    nomeUsuario="Nome de usuário"
                    nickname="user"
                    mensagem="only love can hurt like this... 
 ᶜᵃᵈᵉ ᵒ ˡᵒˡᵒ only love can hurt like this  ᵐᵉ ᵈᵃ ᵒ ˡᵒˡᵒ
"
                    rts={23}
                    comentarios={8}
                    like={12}
                />
                <Piu
                    fotoUrl="assets/images/image8.jpg"
                    nomeUsuario="Pedro Souza"
                    nickname="pebaiano"
                    mensagem="NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos"
                    rts={23}
                    comentarios={8}
                    like={12}
                />
            </S.StyleMain>
        </S.Container>
    );
};
