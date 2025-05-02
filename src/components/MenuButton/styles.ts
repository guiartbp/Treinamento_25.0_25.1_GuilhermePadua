import styled from 'styled-components';

interface ContainerProps {
    isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;

    ${({ isActive }) =>
        isActive &&
        `
      width: 304px;
      border-radius: 0px 80px 80px 0px;
      background: var(--Indigo-9, #3E63DD);
    `}
`;

export const StyleMenuP = styled.p`
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: 'Poppins', sans-serif;
    gap

`;
