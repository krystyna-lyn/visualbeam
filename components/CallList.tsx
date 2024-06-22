//@ts-nocheck

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
                    <MeetingCard
                        key={(meeting as Call).id}
                        title={(meeting as Call).state.custom?.description.substring(0, 20)
                            || 'No description'
                        }
                        date={(meeting as Call).state?.startsAt?.toLocaleString() ||
                            (meeting as CallRecording).start_time?.toLocaleString()
                        }
                        icon={
                            type === 'ended'
                                ? '/icons/previous.svg'
                                : type === 'upcoming'
                                    ? '/icons/upcoming.svg'
                                    : '/icons/recording.svg'
                        }
                        isPreviousMeeting='{ }'
                        buttonIcon1='{ }'
                        buttonText='{ }'
                        handleClick='{ }'
                        link='{ }'
                    />
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