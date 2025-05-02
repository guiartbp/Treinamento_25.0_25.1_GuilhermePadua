import React, { useState } from 'react';
import * as S from './styles';


interface Props {
    imageUrl: string;
    textMenu: string;
    onClick: () => void;
    isActive: boolean;
}
export const MenuButton: React.FC<Props> = ({
    imageUrl,
    textMenu,
    onClick,
    isActive
}) => {

    return (
        <S.Container isActive={isActive} onClick={onClick}>
            <img src={imageUrl} alt="{textMenu}" />
            <S.StyleMenuP>{textMenu}</S.StyleMenuP>
        </S.Container>
    );
};
