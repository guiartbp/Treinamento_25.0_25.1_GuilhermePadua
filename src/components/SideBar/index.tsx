import { Logo } from 'components/Logo';
import { MenuButton } from 'components/MenuButton';
import { useState } from 'react';
import * as S from './styles';

export const SideBar: React.FC = () => {
    const [botaoAtivo, setBotaoAtivo] = useState('Página Inicial');

    return (
        <S.StyleSideBar>
            <Logo />
            <MenuButton
                imageUrl="assets/images/home.svg"
                textMenu="Página Inicial"
                onClick={() => setBotaoAtivo('Página Inicial')}
                isActive={botaoAtivo === 'Página Inicial'}
            />
            <MenuButton
                imageUrl="assets/images/bell.svg"
                textMenu="Notificações"
                onClick={() => setBotaoAtivo('Notificações')}
                isActive={botaoAtivo === 'Notificações'}
            />
            <MenuButton
                imageUrl="assets/images/message.svg"
                textMenu="Mensagens"
                onClick={() => setBotaoAtivo('Mensagens')}
                isActive={botaoAtivo === 'Mensagens'}
            />{' '}
            <MenuButton
                imageUrl="assets/images/check.svg"
                textMenu="Salvos"
                onClick={() => setBotaoAtivo('Salvos')}
                isActive={botaoAtivo === 'Salvos'}
            />{' '}
            <MenuButton
                imageUrl="assets/images/profile.svg"
                textMenu="Perfil"
                onClick={() => setBotaoAtivo('Perfil')}
                isActive={botaoAtivo === 'Perfil'}
            />{' '}
            <MenuButton
                imageUrl="assets/images/config.svg"
                textMenu="Configurações"
                onClick={() => setBotaoAtivo('Configurações')}
                isActive={botaoAtivo === 'Configurações'}
            />
        </S.StyleSideBar>
    );
};

export const RightBar: React.FC = () => {
    return <S.RightSide />;
};
