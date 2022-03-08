import { useEffect, useState } from 'react'

import { Numbers } from '@/types/Numbers'

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
    <>
      <span>{numbers.numeros.map(number => `${number} `)}</span>
      <footer>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </footer>
    </>
  ) : (
    <p>a</p>
  )
}

interface Props {
  lottery: string
}
