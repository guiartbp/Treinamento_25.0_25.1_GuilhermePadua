import React, { useState } from 'react';
import { Piu } from 'components/Piu';
import { PostPiu } from 'components/PostPiu';
import { BarraDigital } from 'components/BarraDigital';
import { Line } from 'components/Line';
import { SideBar } from 'components/SideBar';
import { Logo } from 'components/Logo';
import { RightBar } from 'components/RightSide';
import * as S from './styles';

export interface Piu {
    fotoUrl: string;
    nomeUsuario: string;
    nickname: string;
    mensagem: string;
    rts: number;
    comentarios: number;
    like: number;
}

export const MainBar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isRightBarOpen, setIsRightBarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleRightBar = () => {
        setIsRightBarOpen(!isRightBarOpen);
    };

    const [pius, setPius] = useState<Piu[]>([]);

    const addPiu = (novoPiu: Piu) => {
        setPius([novoPiu, ...pius]);
    };

    const deletePiu = (index: number) => {
        setPius(pius.filter((_, i) => i !== index));
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
                <PostPiu onAddPiu={addPiu} />
                <Line />

                {pius.map((piu, index) => (
                    <Piu
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        fotoUrl={piu.fotoUrl}
                        nomeUsuario={piu.nomeUsuario}
                        nickname={piu.nickname}
                        mensagem={piu.mensagem}
                        rts={piu.rts}
                        comentarios={piu.comentarios}
                        like={piu.like}
                        onDelete={() => deletePiu(index)}
                    />
                ))}
            </S.StyleMain>
        </S.Container>
    );
};
export { Piu };
