import styled from 'styled-components';

interface SideBarProps {
    isSidebarOpen?: boolean;
}
interface RightBarProps {
    isRightBarOpen?: boolean;
}

type CombinedProps = SideBarProps & RightBarProps;

export const ContainerHamburgerStyled = styled.div<SideBarProps>`
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
    @media (min-width: 1050px) {
        display: none; /
    }
`;

export const HamburgerButton = styled.button<SideBarProps>`
    position: absolute;
    top: 50%;
    left: 16px;
    background: none;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1100;

    @media (min-width: 1050px) {
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

export const StyleMain = styled.div<CombinedProps>`
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
    margin-left: 320px;
    margin-right: 336px;

    @media (max-width: 1050px) {
        padding: 92px 32px 32px;
        width: 100%;
        margin: 0;

        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

        transform: ${({ isSidebarOpen, isRightBarOpen }) => {
            const leftOffset = isSidebarOpen ? 320 : 0;
            const rightOffset = isRightBarOpen ? -336 : 0;
            const totalOffset = leftOffset + rightOffset;
            return `translateX(${totalOffset}px)`;
        }};

        filter: ${({ isSidebarOpen }) =>
            isSidebarOpen ? 'blur(2px)' : 'none'};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const RightBarButton = styled.button<RightBarProps>`
    position: absolute;
    top: 50%;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1100;

    img {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 1050px) {
        display: none;
    }
`;
