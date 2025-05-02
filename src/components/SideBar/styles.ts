import { StyledButton } from 'components/SimpleButton/styles';
import styled from 'styled-components';

export const DivSideCompleto = styled.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;
export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const StyleSideBar = styled.div`
    display: flex;
    width: 320px;
    height: 1024px;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
`;

export const DivButton = styled.div`
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
`;

export const DivQuadrado = styled.div`
    display: flex;
    width: 64px;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
`;

export const ImgQuadrado = styled.img`
    border-radius: 100px;
    width: 64px;
    height: 64px;
`;

export const RightSide = styled(StyleSideBar)`
    border-left: 1px solid var(--Slate-8, #4c5155);
    border-right: none;
`;
