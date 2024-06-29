'use client'
import { useUser } from '@clerk/nextjs';


const Table = ({ title, description }: { title: string; description: string; }) => (
    <div>
        <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
            {title}
        </h1>
        <p className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
            {description}
        </p>
    </div>
)

const PersonalRoom = () => {

    const { user } = useUser();

    return (
        <section className='size-full flex flex-col gap-10 text-white'>
            <h1 className='text-3xl text-bold'>
                Personal Room
                <div className="flex flex-col w-full gap-10 text-white">
                    <Table title='topic' description={`${user?.username}'s Meeting Room`} />

                </div>
            </h1>
        </section>
    )
}

export default PersonalRoom