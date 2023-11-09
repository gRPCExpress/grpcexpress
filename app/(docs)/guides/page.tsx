import React from "react";
import Link from "next/link";
import { H1, H2, H3, H4, P, InlineCode } from "@/app/components/Typography";
import Codeblock from "@/app/components/Codeblock";
import styles from "@/app/styles";

const codes = {
  overRideCache: "Const Client = grpcExpressClient(ServiceClient, 10000)",
  noCache: "client.myMethod(message, {cacheOptions:{cache: 'nocache'}}",
  duration: "client.myMethod(message, {cacheOptions: {duration: 10000}})",
  manuallyInvalidate: "client.invalidate('myMethod', message)'`}",
};

{
  /* {`Passing in option on the client instantiation The default expiration for caches is 10 minutes. You can override it by passing in a duration in milliseconds when you create the Client
        Const Client = grpcExpressClient(ServiceClient, 10000)
        Passing in no cache option
        To bypass caching for a method call, pass in a nocache option
        client.myMethod(message, {cacheOptions:{cache: 'nocache'}}
        Passing in duration on the method call
        To override the cache duration for a specific method call, pass in a duration
        client.myMethod(message, {cacheOptions: {duration: 10000}})

        To manually invalidate a cache
        client.invalidate('myMethod', message)'`} */
}

const Guides = () => {
  return (
    <main>
      <H1>Guides and Concepts</H1>
      <hr />

      <section>
        <H2>Advanced usages</H2>
        <P>
          Passing in option on the client instantiation The default expiration
          for caches is 10 minutes. You can override it by passing in a duration
          in milliseconds when you create the Client.
        </P>
        <Codeblock language="javascript" value={codes.overRideCache} />

        <H3>Passing in no cache option</H3>
        <P>To bypass caching for a method call, pass in a nocache option</P>
        <Codeblock language="javascript" value={codes.noCache} />

        <H3> Passing in duration on the method call</H3>
        <P>
          To override the cache duration for a specific method call, pass in a
          duration
        </P>
        <Codeblock language="javascript" value={codes.duration} />
        <H3>To manually invalidate a cache</H3>
        <Codeblock language="javascript" value={codes.manuallyInvalidate} />
      </section>

      <section>
        <H2>Guides and Concepts</H2>

        <H3>Data Flow of a call</H3>
        <P>
          Overall structure of the library, how we intercepted calls and stored
          items in cache All grpc-web method calls are initiated as streams. At
          the heart of gRPCExpress is its ability to intercept grpc-web method
          calls. Every time an application issues a call, the library jumps in
          before it reaches any other interceptors. This interception is where
          the magic happens, deciding if a cached response should be used or if
          the call should proceed to the server. The library maintains an
          in-memory cache, wherein cached responses are stored as serialized
          buffers.
        </P>

        <H4>
          When a call is intercepted, gRPCExpress checks this cache to see if a
          relevant buffer exists:
        </H4>

        <ol className={styles.ol}>
          <ul className={styles.ul}>
            <li>
              If found, the buffer is deserialized using its associated
              deserialization function, transforming it back into a usable
              response format. This means that frequently accessed data can be
              rapidly fetched from memory without the need for redundant network
              calls or serialization overhead.
            </li>
          </ul>
        </ol>

        <H4>
          Every cache hit not only retrieves data but also plays a role in cache
          management:
        </H4>
        <ol className={styles.ol}>
          <ul className={styles.ul}>
            <li>
              The frequency associated with that specific cache item is updated.
              This helps the library track how often certain data is accessed.
            </li>
            <li>
              Simultaneously, the cost associated with the cache item is also
              recalculated. This cost, determined by both size and frequency, is
              integral to the library&rsquo;s cost-aware algorithm. In scenarios
              where the cache size needs to be trimmed, this algorithm
              prioritizes removing high-cost items first.
            </li>
          </ul>
        </ol>

        <H4>
          Should the in-memory cache not contain a needed response, the library
          allows the grpc-web method call to proceed to the server:
        </H4>

        <ol className={styles.ol}>
          <ul className={styles.ul}>
            <li>
              Once the server responds, the library takes a crucial step: it
              serializes the response into a buffer.
            </li>
            <li>
              This buffer is then stored in the in-memory cache for future use.
              Alongside, the deserialization function specific to this buffer is
              stored separately. This ensures that when the cached response is
              needed, it can be accurately and efficiently converted back to its
              original format.
            </li>
          </ul>
        </ol>
      </section>

      <section>
        <H2>Invalidation</H2>
        <P>
          The library introduces a new invalidate method to remove specific
          items from the cache.
        </P>

        <H2>Persistent Cache with localStorage</H2>
        <P>
          Your cache isn&rsquo;t lost at the end of a session. With gRPCExpress,
          we make sure that your cache is preserved in localStorage when the
          session wraps up. Plus, when a new session begins, we restore the
          cache from localStorage, so you can enjoy uninterrupted service and
          faster response times right from the get-go.
        </P>
      </section>

      <br></br>

      {/* <section>
        <H2>Guides and Concepts</H2>

        <H3>Data Flow of a call</H3>
        <P>
          Overall structure of the library, how we intercepted calls and stored
          items in cache All grpc-web method calls are initiated as streams. At
          the heart of gRPCExpress is its ability to intercept grpc-web method
          calls. Every time an application issues a call, the library jumps in
          before it reaches any other interceptors. This interception is where
          the magic happens, deciding if a cached response should be used or if
          the call should proceed to the server. The library maintains an
          in-memory cache, wherein cached responses are stored as serialized
          buffers.
        </P>

        <H4>
          When a call is intercepted, gRPCExpress checks this cache to see if a
          relevant buffer exists:
        </H4>

        <ol className={styles.ol}>
          <ul className={styles.ul}>
            <li>
              If found, the buffer is deserialized using its associated
              deserialization function, transforming it back into a usable
              response format. This means that frequently accessed data can be
              rapidly fetched from memory without the need for redundant network
              calls or serialization overhead.
            </li>
          </ul>
        </ol>

        <H4>
          Every cache hit not only retrieves data but also plays a role in cache
          management:
        </H4>
        <ol className={styles.ol}>
          <ul className={styles.ul}>
            <li>
              The frequency associated with that specific cache item is updated.
              This helps the library track how often certain data is accessed.
            </li>
            <li>
              Simultaneously, the cost associated with the cache item is also
              recalculated. This cost, determined by both size and frequency, is
              integral to the library&rsquo;s cost-aware algorithm. In scenarios
              where the cache size needs to be trimmed, this algorithm
              prioritizes removing high-cost items first.
            </li>
          </ul>
        </ol>

        <H4>
          Should the in-memory cache not contain a needed response, the library
          allows the grpc-web method call to proceed to the server:
        </H4>

        <ol className={styles.ol}>
          <ul className={styles.ul}>
            <li>
              Once the server responds, the library takes a crucial step: it
              serializes the response into a buffer.
            </li>
            <li>
              This buffer is then stored in the in-memory cache for future use.
              Alongside, the deserialization function specific to this buffer is
              stored separately. This ensures that when the cached response is
              needed, it can be accurately and efficiently converted back to its
              original format.
            </li>
          </ul>
        </ol>
      </section> */}
    </main>
  );
};

export default Guides;
