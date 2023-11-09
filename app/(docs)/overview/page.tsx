import Image from "next/image";
import { H1, P } from '@/app/components/Typography';

const Overview = () => {
  return (
    <main>
      <H1>Overview</H1>
      <section>
        <P>Developers using grpc-web often find the need to implement their own caching mechanism. Common approaches include memory caching and service workers. The primary use case of gRPCExpress is to eliminate this overhead by providing an out-of-the-box caching solution.</P>
        <Image src='/gRPCExpress_workflow.jpg' alt='workflow 'width={1000} height={200}/>
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
}


export default Overview