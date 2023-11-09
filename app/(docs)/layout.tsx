import Sidebar from '../components/Sidebar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full md:w-10/12 lg:w-8/12 mx-auto">
      <div className="grid grid-cols-12 gap-2 mx-4">
        <div className="md:hidden col-span-12 mb-4">
          <Popover>
            <PopoverTrigger>
              <span className="text-lg font-medium border rounded-md px-6 py-2">
                Sidebar
              </span>
            </PopoverTrigger>
            <PopoverContent>
              <Sidebar />
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden md:block md:col-span-3">
          <Sidebar />
        </div>
        <div
          className="col-span-12 md:col-span-9 overflow-y-auto scrollbar-hide pb-1/3-screen"
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}
