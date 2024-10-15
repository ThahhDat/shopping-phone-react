// FooterComponent.js
import React from 'react';
import { FooterContainer, FooterSection, FooterText, FooterTitle, FooterLink, FooterSupport } from './style';

const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterTitle>Thông tin</FooterTitle>
        <FooterLink href="#">Tin Tức</FooterLink>
        <FooterLink href="#">Giới thiệu</FooterLink>
        <FooterLink href="#">Check IMEI</FooterLink>
        <FooterLink href="#">Phương thức thanh toán</FooterLink>
        <FooterLink href="#">Tuyển dụng</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Chính sách</FooterTitle>
        <FooterLink href="#">Đổi trả</FooterLink>
        <FooterLink href="#">Bảo hành</FooterLink>
        <FooterLink href="#">Dịch vụ</FooterLink>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Địa chỉ & Liên hệ</FooterTitle>
        <FooterText>Tổng đài hỗ trợ:</FooterText>
        <FooterText>Mua hàng: 1900.6626 (08:00 - 22:00)</FooterText>
        <FooterText>Bảo hành: 1900.8036 (08:00 - 22:00)</FooterText>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Liên hệ chúng tôi</FooterTitle>
        <FooterText>Email: lienhe@yourcompany.com</FooterText>
        <FooterText>Điện thoại: 1900.1234</FooterText>
        <FooterText>Địa chỉ: 123 Đường ABC, Thành phố XYZ</FooterText>
      </FooterSection>
      <FooterSupport>
        <FooterText>© 2024 Your Company Name. All rights reserved.</FooterText>
      </FooterSupport>
    </FooterContainer>
  );
};

export default FooterComponent;
