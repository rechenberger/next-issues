'use client'

import { ReactNode, useId, useState } from 'react'

export const ActionReplacer = ({
  action,
  children,
  comment,
}: {
  action: () => Promise<ReactNode>
  children: ReactNode
  comment?: string
}) => {
  const id = useId()
  console.log('ActionReplacer', id, comment)
  const [response, setResponse] = useState<ReactNode | null>(null)
  return (
    <>
      <div
        onClick={async () => {
          const response = await action()
          setResponse(response)
        }}
      >
        {/* {response ?? children} */}
        {children}
      </div>
      {response}
    </>
  )
}

// export const Testomaniac = () => {
//   const [response, setResponse] = useState<ReactNode | null>(null)
//   return (
//     <>
//       <div>Testomaniac has state: {!!response ? 'yes' : 'no'}</div>
//     </>
//   )
// }
