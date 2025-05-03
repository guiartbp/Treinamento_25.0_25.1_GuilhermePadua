import React from 'react';
import * as S from './style';

export const PostPiu: React.FC = () => {
    return (
        <S.Container>
            <S.Post>Quero dar um piu...</S.Post>
            <S.PostOptions>
                <S.PostAnexos>
                    <S.ImgOptions src="assets/icons/Image_02.svg" alt="anexo" />
                    <S.ImgOptions src="assets/icons/Video.svg" alt="video" />
                    <S.ImgOptions
                        src="assets/icons/Framecópia.svg"
                        alt="Sorrisinho"
                    />
                    <S.ImgOptions src="assets/icons/Tag.svg" alt="etiquetas" />
                    <S.ImgOptions src="assets/icons/Frame-1.svg" alt="gif" />
                </S.PostAnexos>
                <>
                    <S.ImgOptions
                        src="assets/icons/Paper_Plane.svg"
                        alt="Enviar"
                    />
                </>
            </S.PostOptions>
        </S.Container>
    );
};
