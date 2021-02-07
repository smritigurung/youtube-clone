import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import blackpink from './images/blackpink.jpg'
import howYouLikeThat from './images/howYouLikeThat.png'
import solo from './images/solo.png'
import BPFire from './images/BPFire.png'
import BP2020 from './images/BP2020.png'
import BPddu from './images/BPddu.png'
import BPwhistle from './images/BPwhistle.png'

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
      <a href='https://www.youtube.com/watch?v=ioNng23DkIM'>
        <VideoRow
          views='754M'
          subs='56.8M'
          description="BLACKPINK - 'How You Like That'"
          timestamp='7 months ago'
          channel='BLACKPINK'
          title="BLACKPINK - 'How You Like That' M/V"
          image={howYouLikeThat} />
      </a>
      <a href='https://www.youtube.com/watch?v=b73BI9eUkjM'>
        <VideoRow
          views='611M'
          subs='56.8M'
          description='Download on Apple Music @ http://smarturl.it/SOLOJennie/applemusic'
          timestamp='2 years ago'
          channel='BLACKPINK'
          title="JENNIE - 'SOLO' M/V"
          image={solo} />
      </a>
      <a href='https://www.youtube.com/watch?v=9pdj4iJD08s'>
        <VideoRow
          views='613M'
          subs='56.8M'
          description='Available @ https://BLACKPINK.lnk.to/SQUARETWOID'
          timestamp='4 years ago'
          channel='BLACKPINK'
          title="BLACKPINK - '불장난 (PLAYING WITH FIRE)' M/V"
          image={BPFire} />
      </a>
      <a href='https://www.youtube.com/watch?v=JvCBLBOXBuI'>
        <VideoRow
          views='613M'
          subs='3.8M'
          description='#BLACKPINK​ #블랙핑크​ #JISOO​ #지수​ #JENNIE​ #제니​ #ROSÉ​ #로제​ #LISA​ #리사​'
          timestamp='11 months ago'
          channel='BLACKPINK'
          title="BLACKPINK - BLACKPINK'S 2020 WELCOMING COLLECTION PREVIEW"
          image={BP2020} />
      </a>
      <a href='https://www.youtube.com/watch?v=IHNzOHi8sJs'>
        <VideoRow
          views='1.4B'
          subs='3.8M'
          description='Download on iTunes @ http://smarturl.it/BP_SquareUp/itunes​'
          timestamp='2 years ago'
          channel='BLACKPINK'
          title='BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V'
          image={BPddu} />
      </a>
      <a href='https://www.youtube.com/watch?v=dISNgvVpWlo'>
        <VideoRow
          views='615M'
          subs='3.8M'
          description='Available @ https://BLACKPINK.lnk.to/SQUAREONEID​'
          timestamp='4 years ago'
          channel='BLACKPINK'
          title="BLACKPINK - '휘파람'(WHISTLE) M/V"
          image={BPwhistle} />
      </a>
    </div>
  )
}

export default SearchPage
