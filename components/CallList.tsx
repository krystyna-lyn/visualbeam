'use client'
import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useState } from 'react';
import MeetingCard from './MeetingCard';


const CallList = ({ type }: { type: 'upcoming' | 'ended' | 'recordings' }) => {

    const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
    const [recordings, setRecordings] = useState<CallRecording[]>([]);

    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls;
            case 'recordings':
                return recordings;
            case 'upcoming':
                return upcomingCalls;
            default:
                return [];
        }
    }

    const getNoCallsMessage = () => {
        switch (type) {
            case 'ended':
                return 'No previous Calls';
            case 'recordings':
                return 'No srecordings';
            case 'upcoming':
                return 'No upcoming Calls';
            default:
                return [];
        }
    }

    const calls = getCalls();
    const noCallsMessage = getNoCallsMessage()

    return (
        <div className='grid grid-cols-1 gap-5 xl:grid-cols-2'>
            {calls && calls.length > 0 ? calls.map(
                (meeting: Call | CallRecording) => (
                    <MeetingCard />
                )) :
                (
                    <h1 className="text-2xl font-bold text-white">
                        {noCallsMessage}
                    </h1>
                )
            }
        </div>
    )
}

export default CallList