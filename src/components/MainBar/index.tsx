import { Piu } from 'components/Piu';
import { PostPiu } from 'components/PostPiu';
import { BarraDigital } from 'components/BarraDigital';
import { Line } from 'components/Line';
import * as S from './styles';

export const MainBar: React.FC = () => {
    return (
        <S.StyleMain>
            <BarraDigital
                text="Ouvir um piu..."
                image="assets/icons/ci_search.svg"
            />
            <PostPiu />
            <Line />
            <Piu
                fotoUrl="assets/images/quadrado.png"
                nomeUsuario="Neymar"
                nickname="neymarjr"
                mensagem="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                rts={23}
                comentarios={8}
                like={12}
            />
            <Piu
                fotoUrl="assets/images/image8.jpg"
                nomeUsuario="Neymar"
                nickname="neymarjr"
                mensagem="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                rts={23}
                comentarios={8}
                like={12}
            />
        </S.StyleMain>
    );
};
