import React, { useEffect, useState } from 'react'

import Day from '@/components/Day/Day'
import NumbersPage from '@/components/NumbersPage/NumbersPage'
import Logo from '@/public/Images/Logo'
import Sidebar from '@/public/Images/Sidebar'
import * as S from '@/styles/HomeStyled'
import { Contests } from '@/types/Contests'

function Home() {
  const [contests, setContests] = useState<Contests[] | null>(null)
  const [lottery, setLottery] = useState('2359')

  useEffect(() => {
    fetch(`https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos`)
      .then(res => res.json())
      .then((json: Contests[]) => setContests(json))
      .catch(err => console.log(err))
  }, [])

  const lotteryName = (loterry: string) => {
    switch (loterry) {
      case '2359':
        return 'Mega-Sena'
      case '5534':
        return 'Quina'
      case '2200':
        return 'Lotofácil'
      case '2167':
        return 'Lotomania'
      case '1622':
        return 'Timemania'
      case '440':
        return 'Dia de Sorte'
      default:
        return 'Mega-Sena'
    }
  }

  return contests ? (
    <S.Wrapper>
      <S.Home>
        <S.Aside className={`aside${lottery}`}>
          <S.Select
            name="lotteries"
            id="lotteries"
            defaultValue={lottery}
            onChange={e => setLottery(e.target.value)}
          >
            <S.Option value="2359">Mega-Sena</S.Option>
            <S.Option value="5534">Quina</S.Option>
            <S.Option value="2200">Lotofácil</S.Option>
            <S.Option value="2167">Lotomania</S.Option>
            <S.Option value="1622">Timemania</S.Option>
            <S.Option value="440">Dia de Sorte</S.Option>
          </S.Select>
          <S.Logo>
            <Logo />
            <S.Name>{`${lotteryName(lottery)} `}</S.Name>
          </S.Logo>
          <Day lottery={lottery} />
          <Sidebar />
        </S.Aside>
        <NumbersPage lottery={lottery} />
      </S.Home>
    </S.Wrapper>
  ) : (
    <p>A</p>
  )
}

export default Home
