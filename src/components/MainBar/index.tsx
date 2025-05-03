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
                nomeUsuario="Nome de usuário"
                nickname="user"
                mensagem="only love can hurt like this... 
 ᶜᵃᵈᵉ ᵒ ˡᵒˡᵒ only love can hurt like this  ᵐᵉ ᵈᵃ ᵒ ˡᵒˡᵒ
"
                rts={23}
                comentarios={8}
                like={12}
            />
            <Piu
                fotoUrl="assets/images/image8.jpg"
                nomeUsuario="Pedro Souza"
                nickname="pebaiano"
                mensagem="NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos"
                rts={23}
                comentarios={8}
                like={12}
            />
        </S.StyleMain>
    );
};
