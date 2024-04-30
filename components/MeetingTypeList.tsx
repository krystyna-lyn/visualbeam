import React from 'react'
import HomeCard from './HomeCard'

const MeetingTypeList = () => {



  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
      />

    </section>
  )
}

export default MeetingTypeList