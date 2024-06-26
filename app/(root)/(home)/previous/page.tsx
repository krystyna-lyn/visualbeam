import CallList from '@/components/CallList'

const Previous = () => {
    return (
        <section className='size-full flex flex-col gap-10 text-white'>
            <h1 className='text-3xl text-bold'>
                Previous
            </h1>
            <CallList type='ended' />
        </section>
    )
}

export default Previous