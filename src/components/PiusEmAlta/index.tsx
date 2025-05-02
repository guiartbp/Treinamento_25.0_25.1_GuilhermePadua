import React from 'react';
import * as S from './style';

interface Props {
    imgAlta: string;
    tituloAlta: string;
    mensagemAlta: string;
}

export const PiusEmAlta: React.FC<Props> = ({
    imgAlta,
    tituloAlta,
    mensagemAlta
}) => {
    return (
        <S.Container>
            <S.DivImgAlta>
                <S.ImgImgAlta src={imgAlta} alt={tituloAlta} />
            </S.DivImgAlta>
            <S.DivTextAlta>
                <S.H1TextAlta>{tituloAlta}</S.H1TextAlta>
                <S.PTextAlta>{mensagemAlta}</S.PTextAlta>
            </S.DivTextAlta>{' '}
        </S.Container>
    );
};
