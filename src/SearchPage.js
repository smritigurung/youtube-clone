import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import blackpink from './images/blackpink.jpg'
import howYouLikeThat from './images/howYouLikeThat.png'

import './SearchPage.css'

function SearchPage () {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={blackpink}
        channel='BLACKPINK'
        verified
        subs='56.7M'
        numOfVideos={336}
        description='BLACKPINK Official YouTube Channel 블랙핑크 공식 유튜브 채널입니다. JISOO, JENNIE, ROSÉ, LISA 지수, 제니, 로제, 리사' />
      <hr />
      <VideoRow
        views='754M'
        subs='56.7M'
        description="BLACKPINK - 'How You Like That'"
        timestamp='7 months ago'
        channel='BLACKPINK'
        title="BLACKPINK - 'How You Like That' M/V"
        image={howYouLikeThat} />
    </div>
  )
}

export default SearchPage
