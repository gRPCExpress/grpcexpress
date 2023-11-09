import React from 'react';
import { H1, P } from '@/app/components/Typography';
import Codeblock from '@/app/components/Codeblock';

const Invalidation = () => {
  return (
    <main>
        <H1>Manual Cache Invalidation</H1>
        <P>Developers have the option to manually invalidate a cached response to a method call.</P>
        <P>The invalidate method will take two parameters, first parameter will have TypeScript auto-completion for the method name, the second taking in a user name</P>
        <Codeblock language='javascript' value={'client.invalidate(method, user)'} />
    </main>
  )
}

export default Invalidation