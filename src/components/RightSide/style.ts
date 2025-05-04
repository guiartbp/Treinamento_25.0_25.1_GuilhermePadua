import styled from 'styled-components';

interface Props {
    isOpen: boolean;
}

export const RightSide = styled.div<Props>`
    width: 336px;
    height: 100%;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-left: 1px solid var(--Slate-8, #4c5155);
    overflow-y: auto;
    background: var(--Slate-2, #1a1d1e);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 1050px) {
        transform: ${({ isOpen }) =>
            isOpen ? 'translateX(0)' : 'translateX(100%)'};
        position: fixed;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`;
export const TitleRightSide = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgTitleRightSide = styled.img`
    width: 32px;
    height: 32px;
`;
export const PTitleRightSide = styled.p`
    color: var(--Slate-12, #ecedee);

    /* Headline/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
