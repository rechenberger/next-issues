import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache'
import Link from 'next/link'
import { Card } from '../Card'
import { LocalDateTime } from './LocalDateTime'

export default function Page() {
  return (
    <>
      <Link href="/">Back to all issues</Link>
      <h1 className="text-xl font-semibold">Revalidate</h1>
      <Thing id="1" />
      <Thing id="2" />
      <Thing id="3" />
      <form
        action={async () => {
          'use server'
          revalidatePath(`/revalidate`)
        }}
      >
        <button type="submit" className="text-left w-full">
          <Card
            title={'Revalidate Page'}
            code={`revalidatePath('/revalidate')`}
            comments={[
              '✅ Triggers all for this page. Show new data in client.',
            ]}
          />
        </button>
      </form>
    </>
  )
}

// const loadThing = unstable_cache(async ({ id }: { id: string }) => {
//   console.log('loadThing', id)
//   const title = `Thing ${id}`
//   const createdAt = new Date().toISOString()
//   return { id, title, createdAt }
// })
const loadThing = async ({ id }: { id: string }) => {
  return unstable_cache(
    async () => {
      console.log('loadThing', id)
      const title = `Thing ${id}`
      const createdAt = new Date().toISOString()
      return { id, title, createdAt }
    },
    ['loadThing', id],
    {
      tags: [`thing-${id}`],
    }
  )()
}

const Thing = async ({ id }: { id: string }) => {
  const thing = await loadThing({ id })
  return (
    <form
      action={async () => {
        'use server'
        revalidateTag(`thing-${id}`)
      }}
    >
      <button type="submit" className="text-left w-full">
        <Card
          title={thing.title}
          description={<LocalDateTime datetime={thing.createdAt} />}
          code={`revalidateTag('thing-${id}')`}
          comments={[
            '✅ Only triggers loadThing for this thing. Show new data in client.',
          ]}
        />
      </button>
    </form>
  )
}
