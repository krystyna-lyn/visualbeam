import CallList from '@/components/CallList'

const Recording = () => {
    return (
        <section className='size-full flex flex-col gap-10 text-white'>
            <h1 className='text-3xl text-bold'>
                Recording
            </h1>
            <CallList type='recordings' />
        </section>
    )
}

export default Recording