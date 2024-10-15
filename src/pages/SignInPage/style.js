import styled from 'styled-components';

export const WrapperSignInPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.53);
    height: 100vh;
`;

export const WrapperSignInPageSmall = styled.div`
    width: 800px;
    height: 500px
    border-radius: 10px;
    display: flex;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0);
`;


export const WrapperContainerLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px 45px 24px;
    background: linear-gradient(to right, #f0f8ff, #dbeeff);
    border-radius: 10px 0 0 10px;
`;

export const WrapperContainerRight = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: linear-gradient(136deg, #f0f8ff -1%, #dbeeff 85%);
    border-radius: 0 10px 10px 0;
`;

export const WrapperTextLight = styled.span`
    color: rgb(13, 92, 182);
    font-size: 13px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
