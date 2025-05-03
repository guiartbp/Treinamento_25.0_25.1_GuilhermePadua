import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
`;

export const OuvirPiu = styled.input`
    color: var(--Slate-12, #ecedee);
    text-align: left;
    font-feature-settings: 'liga' off, 'clig' off;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;

    background: transparent;
    border: none;
    outline: none;

    ::placeholder {
        color: var(--Slate-11, #b1b5b7); /* Cor para o placeholder */
    }
`;
