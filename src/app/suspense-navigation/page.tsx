import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Card } from '../Card'

export default function Page() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <h1 className="text-xl font-semibold">Suspense Navigation</h1>
      <Link href="/suspense-navigation/target">
        <Card
          title="next/link"
          code={`<Link href="/suspense-navigation/target">`}
        />
      </Link>
      <form
        action={async () => {
          'use server'
          redirect('/suspense-navigation/target')
        }}
      >
        <button type="submit" className="text-left w-full">
          <Card
            title="Server Action redirect()"
            code={`async () => {
  'use server'
  redirect('/suspense-navigation/target')
}}`}
          />
        </button>
      </form>
    </>
  )
}
