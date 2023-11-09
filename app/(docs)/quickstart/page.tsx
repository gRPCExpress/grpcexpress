import React from 'react';
import { H1, H2, H3, P, InlineCode } from '@/app/components/Typography';
import styles from '@/app/styles';
import Codeblock from '@/app/components/Codeblock';

const codes = {
  installation: 'npm i @grpcexpress/grpcexpress',
  hookInstallation: 'npm i @grpcexpress/usegrpcexpress',
  basicUsage: `Import { grpcExpressClient } from '@grpcexpress/grpcexpress'
// obtain a client factory by passing in the Service Client from grpc stub
Const Client = grpcExpressClient(ServiceClient)
// instantiate a service client
const client = new Client('http://localhost:8080');
// Once integrated, you can utilize the client just as you would with the original client. 
// The caching mechanism is activated by default, optimizing your calls right out of the box.
// Responses are automatically cached
Const response = await client.myMethod(message)
`,
  hookUsage: `const { isLoading, isError, data, error } = useGrpcExpress(client.myMethod, message)`,
};

const QuickStart = () => {
  return (
    <main>
      <H1>Quick Start</H1>
      <section>
        <H2>Prerequisites</H2>
        <P>Your application should be using grpc-web.</P>
        <P>Ensure you have the Service Client stubs generated from protoc.</P>
      </section>
      <section>
        <H2>Installation</H2>
        <P>To install grpcExpress using npm</P>
        <Codeblock language="javascript" value={codes.installation} />
      </section>
      <section>
        <H2>Initial Configuration</H2>
        <P>
          No additional configuration is needed to start using the library. Once
          installed, you can start leveraging its caching capabilities.
        </P>
      </section>
      <section>
        <H2>Default Settings</H2>
        <P>The default expiration time is 10 minutes.</P>
        <P>The default in-memory cache is 100MB</P>
      </section>
      <section>
        <H2>Basic Usage</H2>
        <P>To cache unary method calls</P>
        <Codeblock language="javascript" value={codes.basicUsage} />
      </section>
      <section>
        <H3>Custom React Hook</H3>
        <P>To install the React hook for grpcExpress</P>
        <Codeblock language="javascript" value={codes.hookInstallation} />
        <P>Then use the hook like below</P>
        <Codeblock language="javascript" value={codes.hookUsage} />
      </section>
    </main>
  );
};

export default QuickStart;
