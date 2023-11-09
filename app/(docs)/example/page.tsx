import React from 'react'

const Example = () => {
  return (
    <div>
      <h3 className='font-bold text-md'>Example</h3>
      <p>Try out the example!</p>
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
    </div>
  )
}

export default Example