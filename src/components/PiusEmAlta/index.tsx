import React from 'react';
import * as S from './style';

interface Props {
    imgAlta: string;
    tituloAlta: string;
    mensagemAlta: string;
}

export const PiusEmAlta: React.FC = ({ imgAlta, tituloAlta, mensagemAlta }) => {
    return (
        <>
            <img src={imgAlta} alt={tituloAlta} />
            <h1>{tituloAlta}</h1>
            <p>{mensagemAlta}</p>
        </>
    );
};
