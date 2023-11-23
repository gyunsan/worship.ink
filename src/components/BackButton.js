'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BackButton() {
  const router = useRouter()

  return (
    <button className='text-zinc-500' onClick={() => router.back()}>
    <ArrowLeftIcon height={50}/>
    </button>
  )
}
