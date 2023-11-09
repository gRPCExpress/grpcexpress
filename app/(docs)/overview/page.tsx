import Image from "next/image";
import { H1, H2, H3, H4, P, InlineCode } from "@/app/components/Typography";
import styles from "@/app/styles";

const Overview = () => {
  return (
    <main>
      <H1>Overview</H1>
      <section>
        <P>
          Developers using grpc-web often find the need to implement their own
          caching mechanism. Common approaches include memory caching and
          service workers. The primary use case of gRPCExpress is to eliminate
          this overhead by providing an out-of-the-box caching solution.
        </P>
        <Image
          src="/gRPCExpress_workflow.jpg"
          alt="workflow "
          width={1000}
          height={200}
        />
      </section>

      <br />
      
      <section>
        <H3>Data Flow of a call</H3>
        <hr />
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
    </main>
    // <div>
    //   <h1 className={styles.header}>Overview</h1>
    //   <hr />
    //   <div>
    //     <p>Developers using grpc-web often find the need to implement their own caching mechanism. Common approaches include memory caching and service workers. The primary use case of gRPCExpress is to eliminate this overhead by providing an out-of-the-box caching solution.</p>
    //   </div>
    //   <Image src='/gRPCExpress_workflow.jpg' alt='workflow 'width={1000} height={200}/>
    // </div>
  );
};

export default Overview;
