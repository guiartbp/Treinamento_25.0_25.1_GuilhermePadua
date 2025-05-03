import React from 'react';
import * as S from './style';

interface Props {
    aoClicar: () => void;
}

export const Comentario: React.FC<Props> = ({ aoClicar }) => {
    return (
        <S.ComentarioOpen onClick={aoClicar}
            src="assets/icons/Chat_Circle.svg"
            alt="comentarios"
        />
    );
};
