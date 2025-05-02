import styled from 'styled-components';

export const StyleMain = styled.div`
    display: flex;
    width: 784px;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
`;

export const Separate = styled.hr`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: var(--Slate-8, #4c5155);
`;
