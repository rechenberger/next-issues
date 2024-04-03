import Link from 'next/link'
import { Card } from '../Card'

export default function Page() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <h1 className="text-xl font-semibold">Suspense Navigation</h1>
      <Link href="/suspense-navigation/target">
        <Card
          title="next/link"
          description={`Using <Link href="/suspense-navigation/target">`}
        />
      </Link>
    </>
  )
}
