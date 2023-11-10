import React from 'react';
import { H1, H2, P } from '@/app/components/Typography';
import Codeblock from '@/app/components/Codeblock';

const Invalidation = () => {
  return (
    <main>
      <H1>Cache Storage and Invalidation</H1>
      <P>
        The browser has an inherent storage constraint so we designed our
        solution around efficiently managing cache storage.
      </P>
      <H2>Optimizing cache storage</H2>
      <P>
        We opted to serialize gRPC responses into array buffers prior to
        caching. This decision was driven by the need to conserve storage space,
        as array buffers are more space-efficient. The serialization process
        required us to also implement a corresponding deserialization mechanism.
        To maintain type safety and ensure accurate reconstruction of the
        original data structures, we associated each cache entry with a specific
        deserializer function reflective of its gRPC message type.
      </P>
      <H2>Cache invalidation strategy</H2>
      <P>There are two parts to the invalidation:</P>
      <P>
        <b>Expiration timer: </b>This allows for precise control over cache
        entries, enabling developers to set expiration times based on the
        expected update rate of the data. Developers can configure a shorter
        expiration time for data that changes frequently.
      </P>
      <P>
        <b>Cost-aware algorithm: </b>We introduced an algorithm that evaluates
        the &quot;cost&quot; of cache entries, which is a function of response
        size and access frequency. Large, infrequently accessed entries are
        prioritized for invalidation, optimizing the usage of the cache&apos;s
        limited space. To support our cost-aware algorithm, we needed to
        estimate the size of the responses in the cache. We designed a formula
        that calculates the expected byte size of an array buffer assuming a
        normal distribution of response sizes. And to enable quick retrieval and
        removal of the most costly cache entries, we implemented a max heap.
        This allows our algorithm to efficiently sort cache entries by their
        calculated cost.
      </P>
    </main>
  );
};

export default Invalidation;

