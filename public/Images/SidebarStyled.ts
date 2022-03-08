import styled from 'styled-components'

export const Sidebar = styled.svg`
  position: absolute;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 90px;

  @media (max-width: 2500px) {
    left: 260px;
  }
  @media (max-width: 1600px) {
    left: 4px;
  }

  @media (max-width: 1400px) {
    left: -50px;
  }
`
