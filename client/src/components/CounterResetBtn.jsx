import { useState } from 'react'
import { UPDATE_COUNTER } from '../mutations/counterMutations'
import { GET_COUNTER } from '../queries/counterQueries'
import { useMutation } from '@apollo/client'

export default function CounterRestBtn({ id }) {
  const [count, setCount] = useState(0)

  const [updateCounter] = useMutation(UPDATE_COUNTER, {
    variables: { id: id, count },
    refetchQueries: [
      {
        query: GET_COUNTER,
        variables: { id: id },
      },
    ],
  })

  const handleReset = () => {
    setCount(0)
    updateCounter(count)
  }

  return (
    <>
      <button className="btn btn-reset fw-normal" onClick={handleReset}>
        Reset
      </button>
    </>
  )
}
