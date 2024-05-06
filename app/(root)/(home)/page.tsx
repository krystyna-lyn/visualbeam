import MeetingModal from '@/components/MeetingModal';
import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {

    const now = new Date();

    const time = now.toLocaleTimeString(
        'es-ES',
        { hour: '2-digit', minute: '2-digit' }
    );

    const date = now.toLocaleDateString(
        'en-US',
        { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    )

    return (
        <section className='size-full flex flex-col gap-10 text-white'>
            <div className='w-full h-[300px] rounded-[20px] bg-hero bg-cover'>
                <div className='flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11'>
                    <h2 className='glassmorphism max-w-[270px] rounded text-center text-base font-normal'>Upcoming Meeting at 12:00 PM</h2>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-4xl font-extrabold lg:text-7xl'>
                            {time}
                        </h2>
                        <p className='text-sky-1 text-lg font-medium lg:text-2xl'>
                            {date}
                        </p>
                    </div>
                </div>
            </div>
            <MeetingTypeList />
        </section>
    )
}

export default Home