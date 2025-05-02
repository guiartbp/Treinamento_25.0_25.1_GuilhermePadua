import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
`;

export const DivImgAlta = styled.div`
    display: flex;
    width: 112px;
    height: 112px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 2px;
`;

export const ImgImgAlta = styled.img`
    width: 112px;
    height: 112px;
    flex-shrink: 0;
`;
export const DivTextAlta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const H1TextAlta = styled.h1`
    color: var(--Slate-12, #ecedee);

    /* Subtitle/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const PTextAlta = styled.p`
    color: var(--Slate-12, #ecedee);
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
    align-self: stretch;
`;
