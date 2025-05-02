import React from 'react';

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
        <>
            <img src={imgAlta} alt={tituloAlta} />
            <h1>{tituloAlta}</h1>
            <p>{mensagemAlta}</p>
        </>
    );
};
