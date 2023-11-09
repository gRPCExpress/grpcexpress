import React from 'react'
import { H1, P } from '@/app/components/Typography';

const queueManagement = () => {
  return (
      <main>
        <H1>Queue Management</H1>
        <P>With our gRPCExpress solution, the same method calls will not be made repeatedly.
           As the initial call is pending a response, subsequent calls to the same method with the same parameters will be queued.
           Once the response is received from the inital call, it will then be cached, and all of the corresponding queued calls will receive this cached response, 
           reducing unnecessary network traffic.</P>
      </main>
  )
}

export default queueManagement