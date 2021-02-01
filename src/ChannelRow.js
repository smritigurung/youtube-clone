import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

function ChannelRow ({image, channel, subs, numOfVideos, description, verified}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' alt={channel} src={image} />
      <div className='channelRow__text'>
        {/* If verified, then render out the VerfiedIcon */}
        <h4>{channel} {verified && <VerifiedIcon />}</h4>
        <p>
          {subs} subscribers ∙
          {" "}
          {numOfVideos} videos
        </p>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ChannelRow
