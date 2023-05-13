import Image from 'next/image'
export default function TimeCard() {

    return (
        <section className='w-[350px] h-[160px] overflow-hidden m-2 rounded-xl '>
            {/* Background image */}
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 w-[inherit] h-[60px] relative'>

                <div className=' opacity-40 w-[inherit] h-[inherit] bg-social-img bg-no-repeat bg-right '></div>

            </div>
            {/* Time content */}
            <section className="bg-[#1D204B] w-[inherit] h-[110px] rounded-xl relative bottom-5">
                {/* Category and options */}
                <div className=" h-[20px] flex justify-between items-center pt-8 pb-4 px-4 ">
                    <b>Work</b>
                    <Image src='/images/icon-ellipsis.svg' alt='ellipsis menu' width={15} height={15} />
                </div>
                {/* Time - now and last week */}
                <div className="flex justify-between items-center px-4 ">
                    <p className='text-3xl font-thin'>10 hrs</p>
                    <p className="text-[#8C8DC2]">Last week - 36 hours</p>
                </div>

            </section>
        </section>
    )
}