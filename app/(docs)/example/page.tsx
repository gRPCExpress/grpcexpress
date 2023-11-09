import React from 'react'
import { H1, P} from '@/app/components/Typography';
import Codeblock from '@/app/components/Codeblock';

const Example = () => {
  return (
      <main>
        <H1>Example</H1>
        <P>
          <ol className='list-decimal'>
            <li>Start envoy via docker</li>
            <Codeblock language='javascript' value={'cd example/envoy'+'\n'+'docker compose up'}/>
            <li>Start the server</li>
            <Codeblock language='javascript' value={'cd example/server'+'\n'+'npm run dev'}/>
            <li>Start the front end</li>
            <Codeblock language='javascript' value={'cd example/frontend'+'\n'+'npm run dev'}/>
          </ol>
        </P>
      </main>
  )
}

export default Example