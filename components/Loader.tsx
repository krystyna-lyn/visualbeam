import Image from 'next/image'

const Loader = () => {
    return (
        <div className='flex-center h-screen w-full '>
            <Image
                src='/icons/loading-circle.svg'
                width={100}
                height={100}
                alt='loading'
            />
        </div>


    )
}

export default Loader