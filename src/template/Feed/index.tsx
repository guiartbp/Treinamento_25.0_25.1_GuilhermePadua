import React from 'react';
import { RightBar, SideBar } from 'components/SideBar';
import { MainBar } from 'components/MainBar';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Container>
            <SideBar />
            <MainBar />
            <RightBar />
        </S.Container>
    );
};
export default HomeTemplate;
