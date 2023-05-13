import ProfileCard from '../components/ProfileCard'
import TimeCard from '../components/TimeCard'
import { Rubik } from 'next/font/google'

// const inter = Rubik()
const rubik = Rubik( {
  subsets: ['latin']
})
export default function Home() {
  return (
    <main className={` w-[100vw] h-[100vh]  overflow-hidden flex justify-center items-center`}>
       <div className={rubik.className}>

        {/* Profile */}
        <section>
          <ProfileCard />
        </section>
        {/* Personal time track */}
        <section className='w-[fit-content] h-[50vh] flex flex-col justify-center items-center'>
          <TimeCard />
          <TimeCard />
        </section>
       </div>
    </main>
  )
}
