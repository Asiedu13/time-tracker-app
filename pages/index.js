import {useState, useEffect} from 'react'
import ProfileCard from '../components/ProfileCard'
import TimeCard from '../components/TimeCard'
import { Rubik } from 'next/font/google'
import jsonData from '../data.json' assert {type: 'json'}

console.log(jsonData)
const rubik = Rubik( {
  subsets: ['latin']
})
export default function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(()=> {
    setUserData(jsonData)
  }, [jsonData])

  return (
    <main className={` w-[100vw] h-[100vh] flex justify-center items-center`}>
       <div className={rubik.className}>

        {/* Profile */}
        <section>
          <ProfileCard />
        </section>
        {/* Personal time track */}
        <section className='w-[fit-content] h-[50vh] flex flex-col justify-center items-center relative '>
          <div className='w-[fit-content] h-[50vh] overflow-x-auto'>

          {userData.map(dat => <TimeCard timestamp={dat} key={Math.random()} />
          )}
          </div>
        </section>
       </div>
    </main>
  )
}
