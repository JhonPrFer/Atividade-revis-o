import { useEffect, useState } from 'react'

import { Numbers } from '@/types/Numbers'

import * as S from './DayStyled'

export default function Day({ lottery }: Props) {
  const [data, setData] = useState<Numbers | null>(null)

  useEffect(() => {
    fetch(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${lottery}`
    )
      .then(res => res.json())
      .then((json: Numbers) => setData(json))
  }, [lottery])

  const date = new Date(data?.data)

  return data ? (
    <S.Date>
      <S.Concurso>CONCURSO</S.Concurso>
      <S.Info>{`${lottery} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</S.Info>
    </S.Date>
  ) : (
    <S.Date>
      <S.Concurso>CONCURSO</S.Concurso>
      <S.Info>0000 - 0/0/0000</S.Info>
    </S.Date>
  )
}

interface Props {
  lottery: string
}
