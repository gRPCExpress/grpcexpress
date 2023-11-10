import React from 'react'
import { H1, P } from '@/app/components/Typography';

const persistentStorage = () => {
  return (
    <main>
      <H1>Persistent Caching</H1>
      <P>We wanted the cached responses from requested method calls to persist across sessions - storing the data in localStorage became an apparent choice. Data stored in localStorage will persist even as the user navigates away from the page or closes the browser.
        Loading the cached data from localStorage will allow for faster execution and a more seamless experience for the user making the requests.
      </P>
      <P>{`The user's cache does not vanish after a session wraps or browser closes. gRPCExpress library ensures that the cache is saved to localStorage once session concludes
      and restored the cache from localStorage when a new session starts.`}</P>
    </main>
  )
}

export default persistentStorage