import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #efefef;
`

export const Home = styled.main`
  display: flex;
  flex-grow: 1;
  z-index: 1;

  .aside2359 {
    background-color: #6befa3;
    color: #6befa3;
  }

  .aside5534 {
    background-color: #8666ef;
    color: #8666ef;
  }

  .aside2200 {
    background-color: #dd7ac6;
    color: #dd7ac6;
  }

  .aside2167 {
    background-color: #ffab64;
    color: #ffab64;
  }

  .aside1622 {
    background-color: #5aad7d;
    color: #5aad7d;
  }

  .aside440 {
    background-color: #bfaf83;
    color: #bfaf83;
  }
`

export const Aside = styled.aside`
  width: 40%;
  padding: 92px 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Select = styled.select`
  box-sizing: border-box;
  width: 215px;
  height: 45px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px 22px;
  background-color: #fff;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05));
`

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 25px;
`

export const Name = styled.p`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
`

export const Option = styled.option`
  font-size: 1.5rem;
  font-weight: 700;
`
