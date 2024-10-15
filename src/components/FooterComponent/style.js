// style.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1d1d1d;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 150px;
`;

export const FooterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const FooterLink = styled.a`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 5px 0;
  &:hover {
    color: #ffffff;
  }
`;

export const FooterText = styled.p`
  margin: 5px 0;
  color: #ccc;
  font-size: 14px;
`;

export const FooterSupport = styled.div`
  text-align: center;
  margin-top: 20px;
`;
