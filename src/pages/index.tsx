import React, { useEffect, useState } from 'react'

import Day from '@/components/Day/Day'
import NumbersPage from '@/components/NumbersPage/NumbersPage'
import Logo from '@/public/Images/Logo'
import Sidebar from '@/public/Images/Sidebar'
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
    <div>
      <select
        name="lotteries"
        id="lotteries"
        defaultValue={lottery}
        onChange={e => setLottery(e.target.value)}
      >
        <option value="2359">Mega-Sena</option>
        <option value="5534">Quina</option>
        <option value="2200">Lotofácil</option>
        <option value="2167">Lotomania</option>
        <option value="1622">Timemania</option>
        <option value="440">Dia de Sorte</option>
      </select>
      <span>
        <Logo /> {`${lotteryName(lottery)} `}
      </span>
      <Day lottery={lottery} />
      <Sidebar />
      <NumbersPage lottery={lottery} />
    </div>
  ) : (
    <p>A</p>
  )
}

export default Home
