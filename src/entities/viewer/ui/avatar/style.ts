import styled from 'styled-components';

export const Avatar = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 100%;
`;
