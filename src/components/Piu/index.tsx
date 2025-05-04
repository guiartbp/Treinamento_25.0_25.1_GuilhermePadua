import React, { useState } from 'react';
import { ComentarioAberto } from 'components/ComentarioAberto/ComentarioAberto';
import { Line } from 'components/Line';
import { BarraDigital } from 'components/BarraDigital';
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
    const [rtAtivo, setRtAtivo] = useState(false);
    const [retweets, setRetweets] = useState(rts);
    const alternarRt = () => {
        if (rtAtivo) {
            setRetweets(retweets - 1);
        } else {
            setRetweets(retweets + 1);
        }
        setRtAtivo((prev) => !prev);
    };

    const [mostrarComent, setMostrarComent] = useState(false);
    const [comentarioAtivo, setComentarioAtivo] = useState(false);
    const [comentarioPlus, setComentarioPlus] = useState(comentarios);
    const nicknameUsuarioLogado = 'user';

    const abrirComent = () => {
        setMostrarComent((prev) => !prev);
    };
    const comentar = () => {
        if (comentarioAtivo) {
            setComentarioPlus(comentarioPlus - 1);
        } else {
            setComentarioPlus(comentarioPlus + 1);
        }
        setComentarioAtivo((prev) => !prev);
    };

    const [curtido, setCurtido] = useState(false);
    const [likes, setLikes] = useState(like);

    const alternarLike = () => {
        if (curtido) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setCurtido(!curtido);
    };

    return (
        <S.Container>
            <S.DivPius>
                <S.DivIndividualPiu>
                    <S.DivProfilePiu>
                        <S.DivProfileIndividual>
                            <S.DivProfileImg>
                                <S.DivProfileEspecificaImg>
                                    <S.ImgProfile
                                        src={fotoUrl}
                                        alt={nomeUsuario}
                                    />
                                </S.DivProfileEspecificaImg>
                            </S.DivProfileImg>
                            <S.DivNickname>
                                <S.NomeProfile>{nomeUsuario}</S.NomeProfile>
                                <S.NickNameProfile>
                                    @{nickname}
                                </S.NickNameProfile>
                            </S.DivNickname>
                        </S.DivProfileIndividual>
                    </S.DivProfilePiu>
                    {nickname === nicknameUsuarioLogado && (
                        <S.DeletePiu
                            src="assets/icons/Trash_Full.svg"
                            alt="delete"
                        />
                    )}
                </S.DivIndividualPiu>

                <>
                    <S.PiuMensagem>{mensagem}</S.PiuMensagem>
                </>
                <S.StatusPiu>
                    <S.StatusIndividualPiu onClick={alternarRt}>
                        <S.ImgStatusPiu
                            src={
                                rtAtivo
                                    ? 'assets/icons/Arrow_Reload_02.svg'
                                    : 'assets/icons/Arrow_Reload.svg'
                            }
                            alt="rts"
                        />
                        <S.StatusNumeros>{retweets}</S.StatusNumeros>{' '}
                    </S.StatusIndividualPiu>
                    <S.StatusIndividualPiu onClick={abrirComent}>
                        <S.ImgStatusPiu
                            src={
                                comentarioAtivo
                                    ? 'assets/icons/Chat_Circle_Blue.svg'
                                    : 'assets/icons/Chat_Circle.svg'
                            }
                            alt="comentários"
                        />
                        <S.StatusNumeros>{comentarioPlus}</S.StatusNumeros>
                    </S.StatusIndividualPiu>
                    <S.StatusIndividualPiu onClick={alternarLike}>
                        <S.ImgStatusPiu
                            src={
                                curtido
                                    ? 'assets/icons/Heart_02.svg'
                                    : 'assets/icons/Heart.svg'
                            }
                            alt="likes"
                        />
                        <S.StatusNumeros>{likes}</S.StatusNumeros>
                    </S.StatusIndividualPiu>
                </S.StatusPiu>
                {mostrarComent && (
                    <>
                        <Line />
                        <BarraDigital
                            text="Comentar..."
                            image="assets/icons/Paper_Plane.svg"
                            onClick={comentar}
                        />
                    </>
                )}
                {mostrarComent && (
                    <ComentarioAberto
                        ComentNome="Quadrado Tangente"
                        ComentMensagem="fkndl;ksaf dsmf; lasdmflk; fasdjlkfnsadjlk"
                    />
                )}
                {mostrarComent && (
                    <ComentarioAberto
                        ComentNome="Quadrado Circular"
                        ComentMensagem="fsdsf safd asdfkdasjfl;k."
                    />
                )}
                {mostrarComent && (
                    <ComentarioAberto
                        ComentNome="Quadrado Retangular"
                        ComentMensagem="Adsklfnmdlksnlsda."
                    />
                )}
            </S.DivPius>
        </S.Container>
    );
};
