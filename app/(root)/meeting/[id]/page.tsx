import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'


const MeetingPage = () => {

    return (
        <main className="h-screen w-full">
            <StreamCall>
                <StreamTheme>


                </StreamTheme>
            </StreamCall>
        </main>
    )
}

export default MeetingPage

function useGetCallById(id: any): { call: any; isCallLoading: any; } {
    throw new Error('Function not implemented.');
}
