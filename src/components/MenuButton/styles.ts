import styled from 'styled-components';

interface ContainerProps {
    isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    background-color: ${({ isActive }) => (isActive ? '#333' : 'transparent')};
    cursor: pointer;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
`;

export const StyleMenuP = styled.p`
    font-family: 'Poppins', sans-serif;
    display: flex;
    width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--Slate-12, #ecedee);
    /* Subtitle/Bold */
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;