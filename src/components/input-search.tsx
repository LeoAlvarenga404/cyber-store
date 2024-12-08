import { IoSearch } from 'react-icons/io5'

export function InputSearch() {
  return (
    <div className='relative w-full'>
      <input type="text" placeholder="Search..." className='py-4 px-12 bg-zinc-100 rounded-xl outline-none w-full'/>
      <IoSearch size={24} className='text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2'/>
    </div>
  )
}