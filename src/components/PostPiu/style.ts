import styled from 'styled-components';

export const Piupiu = styled.p`
    color: azure;
    font-size: larger;
`;

export const Container = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
`;

export const Post = styled.input`
    width: 100%;
    color: var(--Slate-12, #ecedee);
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: transparent;
    border: none;
    outline: none;

    ::placeholder {
        color: var(--Slate-11, #b1b5b7); // opcional
    }
`;

export const PostOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

export const PostAnexos = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgOptions = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;
