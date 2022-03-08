import { useEffect, useState } from 'react'

import { Numbers } from '@/types/Numbers'

import * as S from './NumbersPageStyled'

export default function NumbersPage({ lottery }: Props) {
  const [numbers, setNumbers] = useState<Numbers | null>(null)
  useEffect(() => {
    fetch(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${lottery}`
    )
      .then(res => res.json())
      .then((json: Numbers) => setNumbers(json))
  }, [lottery])

  return numbers ? (
    <S.Wrapper>
      <S.Numbers>
        <S.Balls>
          {numbers.numeros.map(number => (
            <S.Ball>{number}</S.Ball>
          ))}
        </S.Balls>
      </S.Numbers>
      <S.Footer>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </S.Footer>
    </S.Wrapper>
  ) : (
    <p>a</p>
  )
}

interface Props {
  lottery: string
}
