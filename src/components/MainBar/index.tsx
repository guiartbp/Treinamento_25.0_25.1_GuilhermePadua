import { Piu } from 'components/Piu';
import { PostPiu } from 'components/PostPiu';
import { SearchPiu } from 'components/SearchPiu';
import * as S from './styles';

export const MainBar: React.FC = () => {
    return (
        <S.StyleMain>
            <SearchPiu />
            <PostPiu />
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
