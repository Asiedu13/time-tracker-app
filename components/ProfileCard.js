import Image from 'next/image'
export default function ProfileCard() {
    return (
        <section className='bg-[#1D204B] w-[360px] h-[180px] overflow-hidden m-2 rounded-xl'>
            {/* User details */}
            <section className='flex items-center bg-[#5746EA] w-[inherit] h-[70%] p-4'>
                {/* User Image */}
                <div className='flex-2 w-[70px] h-[inherit] m-1'>
                    <Image src={'/images/image-jeremy.png'} width={70} height={70} alt={'user pic'} />
                </div>
                {/* User description */}
                <div className='flex-1 w-[20px] h-[inherit] px-3 '>
                    <p className='text-[#8C8DC2]'>Report for</p>
                    <h1 className='text-3xl'>Jeremy Robson</h1>
                </div>
            </section>

            {/* Navigation */}
            <section className='flex items-center h-[54px]'>
                <button className='flex-1 text-[#8C8DC2] h-[inherit]'>Daily</button>
                <button className='flex-1 text-[#8C8DC2] h-[inherit]'>Weekly</button>
                <button className='flex-1 text-[#8C8DC2] h-[inherit]'>Montly</button>
            </section>
        </section>
    )
}