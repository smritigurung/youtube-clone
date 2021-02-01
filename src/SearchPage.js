import React from 'react'
import ChannelRow from './ChannelRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import blackpink from './images/blackpink.jpg'
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
    </div>
  )
}

export default SearchPage
