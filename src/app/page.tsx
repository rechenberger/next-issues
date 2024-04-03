import Link from 'next/link'
import { Card } from './Card'

export default function Page() {
  return (
    <>
      <h1 className="text-xl font-semibold">Next Issues</h1>
      <Link href="/suspense-navigation">
        <Card
          title="Suspense Navigation"
          description="A simple example of navigation with suspense"
        />
      </Link>
    </>
  )
}
