import React from 'react';
import { H1, P } from '@/app/components/Typography';

const queueManagement = () => {
  return (
    <main>
      <H1>Queue Management</H1>
      <P>
        We implemented a queue management system to handle method invocations
        more efficiently. The goal is to prevent redundant network requests for
        the same method call while a request is already in flight.
      </P>
      <P>
        When a method is invoked, we first check if an identical request is
        already pending. If it is, we don&apos;t initiate a new request.
        Instead, we queue the subsequent invocations, awaiting the result of the
        initial call. Once the first request resolves and we receive the
        response, we cache it. Then, we resolve all queued invocations with the
        cached response. This cuts down on network traffic and also ensures
        consistency across method calls.
      </P>
    </main>
  );
};

export default queueManagement;

