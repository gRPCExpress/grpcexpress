import React from 'react';
import Image from 'next/image';
import { H1, H2, InlineCode, P } from '@/app/components/Typography';

const classExtension = () => {
  return (
    <main>
      <H1>Class Extension</H1>
      <P>
        Our goal for the library was to maintain end to end type safety, which
        is a challenge due to the dynamic nature of gRPC payloads that are
        strictly typed based on protocol buffer definitions and are generated by
        codegens like <InlineCode>protoc</InlineCode>.
      </P>
      <P>
        In typical RESTful services, payloads can be quite flexible, but gRPC
        enforces a rigid contract for message types. The complication arises
        because developers can generate any variety of service client stubs
        using code generators, and these stubs come with their own unique type
        definitions. Our library needed to interface seamlessly with these
        varied types without prior knowledge of them.
      </P>
      <P>
        We addressed this complexity by designing a constructor function that
        accepts any service client generated by the codegen. This function then
        extends the service client, preserving its type definitions. This
        approach has a significant advantage: developers can use our enhanced
        client as a drop-in replacement for the original client, with no changes
        to their existing codebase or the way they invoke methods.
      </P>
      <P>
        To integrate the caching functionality without altering the
        developer&apos;s interaction with the client, we implemented method call
        interception. By overriding the service client&apos;s original methods,
        we inject a caching layer transparently. This means that whenever a
        method is invoked, our library checks the cache first, and if a valid
        cached response is available, it returns that response instead of making
        a network call.
      </P>
      <H2>Type safety and autocompletion</H2>
      <P>Given the protobuf file below</P>
      <Image
        src="/example_proto_client.png"
        width={720}
        height={480}
        alt="example_proto_client"
      />

      <P>The library provides autocompletion</P>
      <Image
        src="/example_autocomplete.png"
        width={720}
        height={480}
        alt="example_autocomplete"
      />
      <P>And type safety</P>
      <Image
        src="/example_type_safety.png"
        width={720}
        height={480}
        alt="example_type_safety"
      />
    </main>
  );
};

export default classExtension;

