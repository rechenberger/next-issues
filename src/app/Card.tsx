import { ReactNode } from 'react'

export const Card = ({
  title,
  description,
}: {
  title?: ReactNode
  description?: ReactNode
}) => {
  return (
    <>
      <div className="border border-gray-500 p-4 rounded-lg">
        <div className="text-xl font-semibold">{title}</div>
        <div className="opacity-80">{description}</div>
      </div>
    </>
  )
}
