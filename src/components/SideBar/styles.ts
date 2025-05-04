import styled from 'styled-components';

interface Props {
    isOpen: boolean;
}

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

export const StyleSideBar = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    padding: 32px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 240px;
    border-right: 1px solid var(--Slate-8, #4c5155);
    background: var(--Slate-2, #1a1d1e);
    z-index: 10;
    transition: transform 0.3s ease-in-out;

    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(-100%)'};

    @media (min-width: 1050px) {
        transform: translateX(0); /* Sempre visível em telas maiores */
    }
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
    cursor: pointer;
`;

export const ImgLogout = styled.img`
    cursor: pointer;
`;
