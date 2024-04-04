import { revalidateTag, unstable_cache } from 'next/cache'

export const get = async <T>(key: string, initialValue: T) => {
  return unstable_cache(
    async () => {
      return unstable_cache(
        async () => {
          console.log('DEEP GET')
          return initialValue
        },
        ['unstable-kv', key],
        {
          tags: [`unstable-kv-${key}`],
        }
      )()
    },
    ['get-unstable-kv', key],
    {
      tags: [`get-unstable-kv-${key}`],
    }
  )()
}

export const set = async <T>(key: string, value: T) => {
  unstable_cache(
    async () => {
      return value
    },
    ['unstable-kv', key],
    {
      tags: [`unstable-kv-${key}`],
    }
  )
  revalidateTag(`get-unstable-kv-${key}`)
}
