import { Piu } from 'components/Piu';
import { PostPiu } from 'components/PostPiu';
import * as S from './styles';
import { SearchPiu } from 'components/SearchPiu';

export const MainBar: React.FC = () => {
    return (
        <S.StyleMain>
            <SearchPiu/>
            <PostPiu />
            <Piu />
        </S.StyleMain>
    );
};
