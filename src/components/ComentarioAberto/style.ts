import styled from 'styled-components';

export const ProfileComent = styled.section`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ecedee;
`;

export const FotoComent = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 2px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const FotoEspecificaComent = styled.div``;
export const FotoImgComent = styled.img`
    display: flex;
    width: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    flex: 1 0 0;
    align-self: stretch;
`;
export const ProfileUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    color: #ecedee;
`;
export const UserName = styled.h3`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* Body/Body Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const UserMessage = styled.p`
    color: #ecedee;
    text-align: center;

    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
