import styled from 'styled-components';

export const WrapperSignInPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Đặt chiều cao toàn màn hình */
  width: 100vw; /* Đặt chiều rộng toàn màn hình */
  background-size: cover; /* Đảm bảo hình nền bao phủ toàn bộ khu vực */
  background-position: center; /* Đặt hình nền ở giữa */
  background-repeat: no-repeat; /* Không lặp lại hình nền */
  background-color: #1a1a1a; /* Màu nền tối khi không có hình nền */
`;

export const WrapperContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 45px 24px;
  background: rgba(0, 0, 0, 0.6); /* Nền tối mờ để làm nổi bật chữ */
  border-radius: 10px 0 0 10px;
  color: #fff; /* Màu chữ trắng để dễ đọc */
`;

export const WrapperContainerRight = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: rgba(0, 0, 0, 0.6); /* Nền tối mờ */
  border-radius: 0 10px 10px 0;
  color: #fff;
`;

export const WrapperTextLight = styled.span`
  color: #0d92ff; /* Màu xanh nhạt tạo sự nhấn mạnh */
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
