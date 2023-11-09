import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import Codeblock from './components/Codeblock';
import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-indigo-200 w-full">
        <h1 className="text-6xl text-gray-800 font-bold pt-12 mb-4">
          gRPCExpress
        </h1>
        <h2 className="text-2xl text-gray-600 pb-12">
          An open-source caching library for grpc-web
        </h2>
      </div>
      <div>
        <Link href="/quickstart">
          <Button className="my-8" size="lg">
            Get started
          </Button>
        </Link>
      </div>
      <VideoPlayer
        url="/basic_usage_web.mp4"
        height={480}
        width={840}
        className="my-4"
      />
    </main>
  );
}
