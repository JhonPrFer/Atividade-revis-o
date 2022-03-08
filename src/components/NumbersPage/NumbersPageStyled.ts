import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Numbers = styled.main`
  display: flex;
  flex-direction: column;

  padding: 90px 120px;
  flex-grow: 1;
  justify-content: center;
`

export const Balls = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 35px;
`

export const Ball = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 80px;
  font-size: 2.7rem;
  font-weight: 700;
  width: 110px;
  height: 110px;
`
export const Footer = styled.footer`
  padding: 0 0 97px 0;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 400;
`
