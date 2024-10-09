// style.js
import styled from 'styled-components';
import { Button,Input } from 'antd';

export const SearchWrapper = styled.div`
    display: flex;
    margin: 0;
    border: 1.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
`;

export const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.5);
`;

export const StyledInput = styled(Input)`
    background-color: #fff;
    border: none;
    flex: 1;
    margin: 0;
    border-radius: 0;
`;

export const StyledButton = styled(Button)`
    border: none;
    background-color: #fff;
    color: #007bff;
    padding: 0px 15px;
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
   
`;

export const Divider = styled.span`
    width: 1px;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    margin: 0 1px;
    align-self: center;
    padding 0: 
    margin: 0;
`;
