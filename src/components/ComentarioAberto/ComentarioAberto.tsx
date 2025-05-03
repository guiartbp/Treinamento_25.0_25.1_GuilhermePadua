import React from 'react';
import * as S from './style';

interface Props {
    ComentNome: string;
    ComentMensagem: string;
}

export const ComentarioAberto: React.FC<Props> = ({
    ComentNome,
    ComentMensagem
}) => {
    return (
        <>
            <S.ProfileComent>
                <S.FotoComent>
                    <S.FotoImgComent src="assets/images/quadrado.png" />
                </S.FotoComent>
                <S.ProfileUser>
                    <S.UserName>{ComentNome}</S.UserName>
                    <S.UserMessage>{ComentMensagem}</S.UserMessage>
                </S.ProfileUser>
            </S.ProfileComent>
        </>
    );
};
