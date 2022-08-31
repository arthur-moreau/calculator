import styled from 'styled-components';

export const Btn = styled.button`
  width: 70px;
  height: 50px;
  background-color: ${props => props.bgColorBtn || '#026e81'};
  color: #ffffff;
  border: none;

  &:hover {
    background-color: ${props => props.bgColorHover || '#cccccc'};
    transition: 0.5ms;
  }
`;
