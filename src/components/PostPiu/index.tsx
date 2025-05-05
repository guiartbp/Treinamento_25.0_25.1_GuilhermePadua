import React, { useState } from 'react';
import * as S from './style';
import { Piu } from '../MainBar';

interface PostPiuProps {
    onAddPiu: (novoPiu: Piu) => void;
}

export const PostPiu: React.FC<PostPiuProps> = ({ onAddPiu }) => {
    const [postContent, setPostContent] = useState<string>('');

    const userFoto = 'assets/images/quadrado.png';
    const username = 'user';
    const userNickname = 'Quadrado quadrado';

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostContent(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            handlePostSubmit();
        }
    };

    const handlePostSubmit = () => {
        if (postContent.trim()) {
            const novoPiu = {
                fotoUrl: userFoto,
                nomeUsuario: username,
                nickname: userNickname,
                mensagem: postContent,
                rts: 0,
                comentarios: 0,
                like: 0
            };
            onAddPiu(novoPiu);
            setPostContent('');
        }
    };

    return (
        <S.Container>
            <S.Post
                placeholder="Quero dar um piu..."
                value={postContent}
                onChange={handlePostChange}
                onKeyDown={handleKeyDown}
            />
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
                        onClick={handlePostSubmit}
                    />
                </>
            </S.PostOptions>
        </S.Container>
    );
};
