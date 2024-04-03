import Link from 'next/link'
import { Card } from './Card'

export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">Next Issues</h1>
        <div className="opacity-60">
          {
            "A collection of issues I've encountered while working with Next.js."
          }
        </div>
        <Link
          href="https://github.com/rechenberger/next-issues"
          className="text-xs underline"
        >
          github.com/rechenberger/next-issues
        </Link>
      </div>
      <Link href="/suspense-navigation">
        <Card
          title="Suspense Navigation"
          description="A simple example of navigation with suspense"
        />
      </Link>
    </>
  )
}
