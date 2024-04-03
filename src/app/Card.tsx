import { ReactNode } from 'react'

export const Card = ({
  title,
  description,
  code,
}: {
  title?: ReactNode
  description?: ReactNode
  code?: ReactNode
}) => {
  return (
    <>
      <div className="border border-gray-500 hover:bg-gray-500/10 p-4 rounded-lg flex flex-col gap-1">
        {!!title && <div className="text-xl font-semibold">{title}</div>}
        {!!description && <div className="opacity-80">{description}</div>}
        {!!code && <pre className="opacity-80 font-mono text-sm">{code}</pre>}
      </div>
    </>
  )
}
