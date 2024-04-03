import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Link href="/suspense-navigation">Go Back</Link>
      <h1 className="text-xl font-semibold">
        This is the Target page with Suspended Content
      </h1>
      <SlowComponentSuspended />
    </>
  )
}

export const SlowComponentSuspended = ({ ms = 2000 }: { ms?: number }) => {
  return (
    <Suspense
      fallback={
        <div>Loading... Suspense Fallback for SlowComponent ({ms}ms)</div>
      }
    >
      <SlowComponent ms={ms} />
    </Suspense>
  )
}

export const SlowComponent = async ({ ms }: { ms: number }) => {
  await new Promise((resolve) => setTimeout(resolve, ms))
  return <div>SlowComponent ({ms}ms) done</div>
}
