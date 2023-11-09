import React from 'react';
import { H1, P } from '@/app/components/Typography';

const resourceManagement = () => {
  return (
    <main>
      <H1>Cache Size Management</H1>
      <P>{`The library keeps the cache size in check through a cost-aware algorithm housed in a Heap data structure, taking into consideration the frequency of the method calls, space and time requirements, to ensure the optimal and 
      efficient use of available cache storage. Users can rely on the library's intelligent mechanism without needing additional configurations.`}</P>
    </main>
  )
}

export default resourceManagement