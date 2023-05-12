import TimeCard from '../components/TimeCard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center items-center'>
       <div>

        {/* Profile */}
        <section>

        </section>
        {/* Personal time track */}
        <section className='w-[300px] h-[100px] border-200-white border-2 border-solid'>
          <TimeCard />
        </section>
       </div>
    </main>
  )
}
