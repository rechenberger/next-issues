import Link from 'next/link'
import { Card } from '../Card'
import { ActionReplacer } from './ActionReplacer'

export default function Page() {
  return (
    <>
      <Link href="/">Back to all issues</Link>
      <h1 className="text-xl font-semibold">Server Action Components</h1>
      <CounterCard value={0} />
    </>
  )
}

const CounterCard = async ({
  value,
  comment,
}: {
  value: number
  comment?: string
}) => {
  console.log('CounterCard', value, comment)
  // if (Math.random() > 0.5) {
  //   return <Testomaniac />
  // }
  return (
    <>
      <div className="p-2 border rounded">
        <ActionReplacer
          comment={comment}
          action={async () => {
            'use server'
            const nextComment = Math.random().toString()
            console.log(`Triggering Card ${value} with comment ${comment}`)
            return (
              <CounterCard
                key={nextComment}
                value={value + 1}
                comment={nextComment}
              />
            )
          }}
        >
          <Card title={`Counter: ${value}`} description={comment} />
        </ActionReplacer>
      </div>
    </>
  )
}
