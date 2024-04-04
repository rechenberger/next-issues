import Link from 'next/link'
import { Card } from '../Card'
import { get, set } from './kv'

export default async function Page() {
  const value = await get<number>('counter', 1)
  return (
    <>
      <Link href="/">Back to all issues</Link>
      <h1 className="text-xl font-semibold">Unstable KV</h1>
      <form
        action={async () => {
          'use server'
          await set('counter', value + 1)
        }}
      >
        <button type="submit" className="text-left w-full">
          <Card title="Counter" description={value} />
        </button>
      </form>
    </>
  )
}
