import { StyledButton } from 'components/SimpleButton/styles';
import styled from 'styled-components';

export const StyleSideBar = styled.div`
    width: 23%;
    margin: 0;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    height: 100vh;
    color: white;
    display: flex;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    flex-shrink: 0;
`;

export const RightSide = styled(StyleSideBar)`
    border-left: 1px solid var(--Slate-8, #4c5155);
    border-right: none;
`;
