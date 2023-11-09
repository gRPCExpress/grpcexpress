import Sidebar from '../components/Sidebar'


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div className='grid grid-cols-5'>
        <div className='col-span-1'><Sidebar /></div>
        <div className='col-span-4 p-3'>{children}</div>
        </div>
    </>
  )
}
