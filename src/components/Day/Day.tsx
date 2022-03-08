import { useEffect, useState } from 'react'

import { Numbers } from '@/types/Numbers'

export default function Day({ lottery }: Props) {
  const [data, setData] = useState<Numbers | null>(null)

  useEffect(() => {
    fetch(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${lottery}`
    )
      .then(res => res.json())
      .then((json: Numbers) => setData(json))
  }, [])

  const date = new Date(data?.data)

  return data ? (
    <p>{`${date.getDate()}/${date.getMonth()}${date.getFullYear()}`}</p>
  ) : (
    <>
      <p>a</p>
      <p>a</p>
    </>
  )
}

interface Props {
  lottery: string
}
