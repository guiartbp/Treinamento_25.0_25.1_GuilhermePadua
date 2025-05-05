import React from 'react';
import { ImgOptions } from 'components/PostPiu/style';
import * as S from './style';

interface Props {
    text: string;
    image: string;
}

export const BarraDigital: React.FC<Props> = ({ text, image }) => {
    return (
        <S.Container>
            <S.OuvirPiu placeholder={text} />
            <ImgOptions src={image} alt={text} />
        </S.Container>
    );
};

<BarraDigital text="Ouvir um piu..." image="assets/icons/ci_search.svg" />;
