import Image from 'next/image'
export default function TimeCard({timestamp}) {
    let imgToShow = `${timestamp.title.toLowerCase()}`
    const varyingColors = {
        'exercise': '#4CCF80',
        'study': "#FF5E7D",
        'play': "#56C2E6",
        'social': '#7235D1',
        'work': '#FF8B64',
        'self care': '#F1C75B',
    }
    console.log(`bg-[${varyingColors[imgToShow]}]`)
    return (
        <section className='w-[360px] h-[160px] overflow-hidden m-2 rounded-xl '>
            {/* Background image */}
            <div className={`bg-[${varyingColors[imgToShow]}] w-[inherit] h-[60px] relative`}>

                <div className={`opacity-40 w-[inherit] h-[inherit] bg-${imgToShow}-img bg-no-repeat bg-right`}></div>

            </div>
            {/* Time content */}
            <section className="bg-[#1D204B] w-[inherit] h-[110px] rounded-xl relative bottom-5">
                {/* Category and options */}
                <div className=" h-[20px] flex justify-between items-center pt-8 pb-4 px-4 ">
                    <b> {timestamp.title} </b>
                    <Image src={'/images/icon-ellipsis.svg'} alt='ellipsis menu' width={15} height={15} />
                </div>
                {/* Time - now and last week */}
                <div className="flex justify-between items-center px-4 ">
                    <p className='text-3xl font-thin'>{timestamp.timeframes.daily.current} hr</p>
                    <p className="text-[#8C8DC2]">Last week - {timestamp.timeframes.daily.previous} hours</p>
                </div>

            </section>
        </section>
    )
}