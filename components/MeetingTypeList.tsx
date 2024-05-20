"use client"

import React, { useState } from 'react'
import HomeCard from './HomeCard'
import MeetingModal from './MeetingModal'
import router from 'next/router'
import { useUser } from '@clerk/nextjs'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import { error } from 'console'

const MeetingTypeList = () => {

  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);

  const user = useUser()
  const client = useStreamVideoClient()

  const createMeeting = async () => {
    if (!user || !client) return

    try {
      const id = crypto.randomUUID()
      const call = client.call('default', id)

      if (!call) throw new Error('Call failed')

    } catch (error) {
      console.log(error)
    };



  }


  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Recordings"
        description="Meeting Recordings"
        className="bg-purple-1"
        handleClick={() => router.push('/recordings')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-yellow-1"
        handleClick={() => setMeetingState('isScheduleMeeting')}

      />

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />

    </section>
  )
}

export default MeetingTypeList