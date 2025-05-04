import React from 'react';
import { SideBar } from 'components/SideBar';
import { MainBar } from 'components/MainBar';
import { RightBar } from 'components/RightSide';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <SideBar isOpen={false} />
            <MainBar />
            <RightBar isOpen={false} />
        </S.Container>
    );
};
export default HomeTemplate;
