'use client';

import { useUser } from "@clerk/nextjs"
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import MeetingSetup from "@/components/MeetingSetup";
import MeetingRoom from "@/components/MeetingRoom";
import { useState } from "react";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useParams } from "next/navigation";



const Meeting = ({ params }: { params: { id: string } }) => {

    const { id } = useParams();
    const { isLoaded, user } = useUser();
    const [isSetupComplete, setIsSetupComplete] = useState(false)
    const { call, isCallLoading } = useGetCallById(id);



    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>

                    {!isSetupComplete ? (
                        <MeetingSetup />
                    ) : (
                        <MeetingRoom />
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    )
}

export default Meeting

