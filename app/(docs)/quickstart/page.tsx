import React from 'react'

const QuickStart = () => {
  return (
    <div>
      <h1>Quick Start </h1>
      <hr />
      <div>
        <p><b>Prerequisites</b></p>
        <p>Your application should be using grpc-web.</p>
        <p>Ensure you have Service Client stubs generated from protoc.</p>
      </div>
      <div>
        <p><b>Installation</b></p>
        <p>Install grpcExpress using npm</p>
        <p>npm i @grpcexpress/grpcexpress</p>
      </div>
      <div>
        <p><b>Initial Configuration</b></p>
        <p>No additional configuration is needed to start using the library. Once installed, you can start leveraging its caching capabilities.</p>
      </div>
      <div>
        <p><b>Default Settings</b></p>
        <p>Each cache item has a default expiration time of 10 minutes.</p>
        <p>Basic usage</p>
        {`Import {grpcExpressClient} from '@grpcexpress/grpcexpress'
// obtain a client factory by passing in the Service Client from grpc stub
Const Client = grpcExpressClient(ServiceClient)
// instantiate a service client
const client = new Client('http://localhost:8080');
// Once integrated, you can utilize the client just as you would with the original client. The best part? The caching mechanism is activated by default, optimizing your calls right out of the box.based method. Responses are automatically cached
Const response = await client.myMethod(message)
`}
        <p>How to install the custom React hook <br></br>If you are also using React and wish to use the React hook <br></br> npm i @grpcexpress/usegrpcexpress</p>
      </div>
      <div>
        <p><b>Basic Usage</b></p>
        <p>A query can be used with any unary methods and is tied to a key comprised of the method and the message passed in.</p>
        {`Const {isLoading, isError, data, error } = useGrpcExpress(client.myMethod, message)`}
      </div>
    </div>
  )
}

export default QuickStart