import styled from 'styled-components';

export const PiuMensagem = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Container = styled.div`
    display: flex;
    width: 784px;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
`;

export const DivPius = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;

export const DivIndividualPiu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const DivProfilePiu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export const DivProfileIndividual = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const DivProfileImg = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;

export const DivProfileEspecificaImg = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #fff;
`;

export const ImgProfile = styled.img`
    flex: 1 0 0;
    align-self: stretch;
    background: lightgray 50% / contain no-repeat;
`;

export const DivNickname = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const NomeProfile = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    /* Subtitle/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const NickNameProfile = styled.p`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* Body/Body Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

export const DeletePiu = styled.img`
    width: 24px;
    height: 24px;
`;

export const StatusPiu = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const StatusIndividualPiu = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ImgStatusPiu = styled.img`
    width: 24px;
    height: 24px;
`;

export const StatusNumeros = styled.p`
    color: var(--Slate-12, #ecedee);

    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
