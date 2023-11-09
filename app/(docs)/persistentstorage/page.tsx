import React from 'react'
import { H1, P } from '@/app/components/Typography';

const persistentStorage = () => {
  return (
    <main>
      <H1>Persistent Caching</H1>
      <P>{`Your cache doesn't vanish after a session ends. gRPCExpress ensures that the cache is saved to localStorage once the session concludes. Moreover, when a new session starts, the cache is restored from localStorage, ensuring continuity and faster response times right from the start.`}</P>
    </main>
  )
}

export default persistentStorage