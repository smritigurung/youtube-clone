import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import theK from './images/theK.jpg'
import ifOnly from './images/ifOnly.png'
import ColtSteele from './images/ColtSteele.jpg'
import beginner from './images/beginner.png'
import MYlimet from './images/MYlimet.jpg'
import garden from './images/garden.png'
import OstKPop from './images/OstKPop.png'
import Vromance from './images/Vromance.png'
import viu from './images/viu.jpg'
import ParkBoGum from './images/ParkBoGum.png'
import stone from './images/stone.jpg'
import beautiful from './images/beautiful.png'
import blackpink from './images/blackpink.jpg'
import last from './images/last.png'
import howYouLikeThat from './images/howYouLikeThat.png'

function RecommendedVideos () {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='[MV] SEJEONG(세정) (gugudan(구구단)) _ If Only(만에 하나) (The Legend of The Blue Sea(푸른 바다의 전설) OST Part.10)'
          views='6.1M Views'
          timestamp='4 years ago'
          channelImage={theK}
          channel='1theK'
          image={ifOnly} />
        <VideoCard
          title="Beginner's Guide to React w/ Hooks (2020) Free Course"
          views='72K Views'
          timestamp='8 months ago'
          channelImage={ColtSteele}
          channel='Colt Steele'
          image={beginner} />
        <VideoCard
          title="You're My Garden - Jung Eun Ji (Strong Woman Do Bong Soon OST) | Park Hyung Sik & Park Bo Young"
          views='247K Views'
          timestamp='2 years ago'
          channelImage={MYlimet}
          channel='MYlimet'
          image={garden} />
        <VideoCard
          title="[MV] VROMANCE - I'm in love (사랑에 빠진 걸까요 Feat 오브로젝트) (Strong Woman Do Bong Soon OST Part 6)"
          views='231K Views'
          timestamp='3 years ago'
          channelImage={OstKPop}
          channel='OSTKPOP'
          image={Vromance} />
        <VideoCard
          title="Park Bo Gum's beautiful vocals | Yu Hui Yeol's Sketchbook EP483 [ENG SUBS]"
          views='851K Views'
          timestamp='9 months ago'
          channelImage={viu}
          channel='Viu Singapore'
          image={ParkBoGum} />
        <VideoCard
          title='[도깨비 OST Part 4] 크러쉬 (Crush) - Beautiful MV (ENG Sub)'
          views='95M Views'
          timestamp='4 years ago'
          channelImage={stone}
          channel='Stone Music Entertainment'
          image={beautiful} />
        <VideoCard
          title="BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V"
          views='951M Views'
          timestamp='3 years ago'
          channelImage={blackpink}
          channel='BLACKPINK'
          image={last} />
        <VideoCard
          title="BLACKPINK - 'How You Like That' M/V"
          views='754M Views'
          timestamp='7 months ago'
          channelImage={blackpink}
          channel='BLACKPINK'
          image={howYouLikeThat} />
      </div>
    </div>
  )
}

export default RecommendedVideos
