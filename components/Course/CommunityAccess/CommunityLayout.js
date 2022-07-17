import React from 'react'
import Community from "./Community";
import Button from '../common/Buttons/Button';

const CommunityLayout = () => {
  return (
    <>

        <Community />
        <div className="margin">

        <div className="flex justify-center items-center my-10">

        <Button
            ButtonText="Enroll for &#8377;5999"
            IconName="card"
            BgColor="buttonyellow"
            TextColor="black"
          />
        </div>
        </div>
    </>
  )
}

export default CommunityLayout