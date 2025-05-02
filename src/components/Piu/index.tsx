import React from 'react';
import * as S from './style';

interface Props {
    fotoUrl: string;
    nomeUsuario: string;
    nickname: string;
    mensagem: string;
    rts: number;
    comentarios: number;
    like: number;
}

export const Piu: React.FC<Props> = ({
    fotoUrl,
    nomeUsuario,
    nickname,
    mensagem,
    rts,
    comentarios,
    like
}) => {
    return (
        <S.Container>
            <>
                <>
                    <img src={fotoUrl} alt={nomeUsuario} />
                    <h3>{nomeUsuario}</h3>
                    <h4>{nickname}</h4>
                </>
                <>
                    <img src="assets/images/delete.svg" alt="delete" />
                </>
            </>
            <>
                <S.Oimeuchapa>{mensagem}</S.Oimeuchapa>
            </>
            <>
                <>
                    <img src="assets/images/rts.svg" alt="rts" />
                    <h5>{rts}</h5>
                </>
                <>
                    <img
                        src="assets/images/comentarios.svg"
                        alt="comentarios"
                    />
                    <h5>{comentarios}</h5>
                </>
                <>
                    <img src="assets/images/like.svg" alt="likes" />
                    <h5>{like}</h5>
                </>
            </>
        </S.Container>
    );
};
