import TimeCard from '../components/TimeCard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' w-[100vw] h-[100vh]  overflow-hidden flex justify-center items-center'>
       <div>

        {/* Profile */}
        <section>

        </section>
        {/* Personal time track */}
        <section className='w-[50vw] h-[50vh] flex flex-col justify-center items-center border-200-white border-2 border-solid'>
          <TimeCard />
          <TimeCard />
        </section>
       </div>
    </main>
  )
}
