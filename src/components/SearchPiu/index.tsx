import React from "react";
import * as S from './style';
import { ImgOptions, Post } from "components/PostPiu/style";

export const SearchPiu: React.FC = () => {
    return (
        <S.Container>
            <S.OuvirPiu>Ouvir um piu...</S.OuvirPiu>
            <ImgOptions src="assets/icons/ci_search.svg" alt="" />
        </S.Container>
    );
};
