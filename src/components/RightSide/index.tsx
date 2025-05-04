import React from 'react';
import { PiusEmAlta } from 'components/PiusEmAlta';
import { Line } from 'components/Line';
import * as S from './style';

interface Props {
    isOpen: boolean;
}

export const RightBar: React.FC<Props> = ({ isOpen }) => {
    return (
        <S.RightSide isOpen={isOpen}>
            <S.TitleRightSide>
                <S.ImgTitleRightSide src="assets/icons/Frame.svg" alt="fire" />
                <S.PTitleRightSide>Pius em alta</S.PTitleRightSide>
            </S.TitleRightSide>
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
            <Line />
            <PiusEmAlta
                imgAlta="assets/images/image8.jpg"
                tituloAlta="Eleições 2022"
                mensagemAlta="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
            />
        </S.RightSide>
    );
};
