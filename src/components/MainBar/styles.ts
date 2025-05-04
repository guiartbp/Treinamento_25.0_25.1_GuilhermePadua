import styled from 'styled-components';

interface Props {
    isSidebarOpen: boolean;
}

export const ContainerHamburgerStyled = styled.div<Props>`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%; 
    height: 61px;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background: linear-gradient(270deg, #004c97 -0.02%, #33a8eb 99.98%);
    z-index: 10; 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
    @media (min-width: 768px) {
        display: none; /
    }
`;

export const HamburgerButton = styled.button<Props>`
    position: absolute;
    top: 50%;
    left: 16px;
    background: none;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1100;

    @media (min-width: 768px) {
        display: none;
    }

    span {
        display: block;
        width: 25px;
        height: 3px;
        background: white;
        margin: 5px 0;
    }
`;

export const StyleMain = styled.div<Props>`
    flex: 1;
    min-height: 100vh;
    padding: 32px 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 46px;
    background: var(--Slate-1, #151718);
    width: calc(100% - 656px);
    overflow-y: auto;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    filter: ${({ isSidebarOpen }) => (isSidebarOpen ? 'blur(2px)' : 'none')};

    margin-left: 320px;
    margin-right: 336px;

    @media (max-width: 768px) {
        width: 100%;
        transform: ${({ isSidebarOpen }) =>
            isSidebarOpen ? 'translateX(320px)' : 'translateX(0)'};
        margin: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
