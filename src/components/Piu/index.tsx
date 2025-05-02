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
                    <S.DeletePiu
                        src="assets/icons/Trash_Full.svg"
                        alt="delete"
                    />
                </S.DivIndividualPiu>

                <>
                    <S.PiuMensagem>{mensagem}</S.PiuMensagem>
                </>
                <S.StatusPiu>
                    <S.StatusIndividualPiu>
                        <S.ImgStatusPiu src="assets/icons/Arrow_Reload_02.svg" alt="rts" />
                        <S.StatusNumeros>{rts}</S.StatusNumeros>
                    </S.StatusIndividualPiu>
                    <S.StatusIndividualPiu>
                        <S.ImgStatusPiu
                            src="assets/icons/Chat_Circle.svg"
                            alt="comentarios"
                        />
                        <S.StatusNumeros>{comentarios}</S.StatusNumeros>
                    </S.StatusIndividualPiu>
                    <S.StatusIndividualPiu>
                        <S.ImgStatusPiu src="assets/icons/Heart_02.svg" alt="likes" />
                        <S.StatusNumeros>{like}</S.StatusNumeros>
                    </S.StatusIndividualPiu>
                </S.StatusPiu>
            </S.DivPius>
        </S.Container>
    );
};
