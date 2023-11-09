import Image from "next/image";


const Overview = () => {
  return (
    <main>
      <h1>Overview</h1>
      <hr />

      <section>
        <p>
          Developers using grpc-web often find the need to implement their own caching mechanism. Common approaches include memory caching and service workers. The primary use case of gRPCExpress is to eliminate this overhead by providing an out-of-the-box caching solution.
        </p>
      </section>

        <h2>Features</h2>
        
      <section>

        <h3>Queue Management</h3>
        <p>
          Repeated method calls aren&rsquo;t made redundantly. If an initial call is pending a response, subsequent calls to the same method get queued. Once the response for the initial call is received, it&rsquo;s cached, and all queued calls receive this cached response, reducing unnecessary network traffic.
        </p>

        <h3>Invalidation</h3>
        <p>
          The library introduces a new invalidate method to remove specific items from the cache.
        </p>

        <h3>Persistent Cache with localStorage</h3>
        <p>
          Your cache isn&rsquo;t lost at the end of a session. With gRPCExpress, we make sure that your cache is preserved in localStorage when the session wraps up. Plus, when a new session begins, we restore the cache from localStorage, so you can enjoy uninterrupted service and faster response times right from the get-go.
        </p>

        <h3>Built with TypeScript</h3>
        <p>
        Type safety is paramount, and gRPCExpress ensures just that by being written in TypeScript. This not only ensures more reliable code but also aids developers with better autocompletion, enhanced readability, and robust type-checking.
        </p>

        <h3>Testing with ViTest</h3>
        <p>
        Quality and reliability matter. gRPCExpress has undergone extensive unit testing using ViTest, ensuring that the library is both robust and dependable for your caching needs.
        </p>

        <h3>Integration with React</h3>
        <p>
        Developers working with React can leverage the useGrpcExpress custom hook to integrate gRPCExpress seamlessly.
        </p>

        <h3>Limitations</h3>
        <p>
        Please note, gRPCExpress supports only unary calls using the promise syntax..
        </p>

        <h3>Example</h3>
        <p>How to try the example</p>
        <ol className="list-decimal">
          <li>
            Start envoy via docker
            <br></br>
            cd example/envoy
            <br></br>
            Docker compose up
          </li>
          <li>
            Start the server
            <br></br>
            Cd example/server
            <br></br>
            Npm run dev
          </li>
          <li>
            Start the front end
            <br></br>
            Cd example/frontend
            <br></br>
            Npm run dev
          </li>

        </ol>




      </section>

      {/* <section>
        <h3>Guides and Concepts</h3>

        <h2>Data Flow of a call</h2>
        <p>
        Overall structure of the library, how we intercepted calls and stored items in cache
        All grpc-web method calls are initiated as streams. At the heart of gRPCExpress is its ability to intercept grpc-web method calls. Every time an application issues a call, the library jumps in before it reaches any other interceptors. This interception is where the magic happens, deciding if a cached response should be used or if the call should proceed to the server.
        The library maintains an in-memory cache, wherein cached responses are stored as serialized buffers. When a call is intercepted, gRPCExpress checks this cache to see if a relevant buffer exists:
        </p>

        <ul>
          <li>If found, the buffer is deserialized using its associated deserialization function, transforming it back into a usable response format. This means that frequently accessed data can be rapidly fetched from memory without the need for redundant network calls or serialization overhead.</li>
        </ul>

        <p>Every cache hit not only retrieves data but also plays a role in cache management:</p>
        <ul>
          <li>The frequency associated with that specific cache item is updated. This helps the library track how often certain data is accessed.</li>
          <li>Simultaneously, the cost associated with the cache item is also recalculated. This cost, determined by both size and frequency, is integral to the library&rsquo;s cost-aware algorithm. In scenarios where the cache size needs to be trimmed, this algorithm prioritizes removing high-cost items first.</li>
        </ul>

        <p>
          Should the in-memory cache not contain a needed response, the library allows the grpc-web method call to proceed to the server:
        </p>

        <ul>
          <li>Once the server responds, the library takes a crucial step: it serializes the response into a buffer.</li>
          <li>This buffer is then stored in the in-memory cache for future use. Alongside, the deserialization function specific to this buffer is stored separately. This ensures that when the cached response is needed, it can be accurately and efficiently converted back to its original format.</li>
        </ul>
        
      </section> */}

      {/* <Image 
      src={'/grpc-web-interceptor.png'}
      alt="flow-chart"
      quality={100}
      /> */}
     
    </main>
  );
}


export default Overview