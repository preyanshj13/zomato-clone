import React from 'react'
import Collection from '../common/Collection/Collection';
import Filters from '../common/Filters/Filters'
import ExploreSection from '../common/ExploreSection/ExploreSection'
import { nightLife } from '../../data/nightLife'
import './NightLife.css'

const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
    title: "Pro Offers",
  },
  {
    id: 3,
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Distance",
  },
  {
    id: 5,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  }
];

const collectionList = [
  {
    id: '1',
    title: "Trending this week",
    cover: "https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
    places: "12 places",
  },
  {
    id: '2',
    title: "Live Sports Screening",
    cover: "https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg",
    places: "10 places",
  },
  {
    id: '3',
    title: "Newly Opened",
    cover: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg",
    places: "23 places",
  },
  {
    id: '4',
    title: "Veggie Friendly",
    cover: "https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg",
    places: "9 places",
  },
  {
    id: '5',
    title: "Best of Delhi",
    cover: "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
    places: "35 places",
  },
  // {
  //   id: '6',
  //   title: "Trending this week",
  //   cover: "https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
  //   places: "12 places",
  // },
  // {
  //   id: '7',
  //   title: "Trending this week",
  //   cover: "https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
  //   places: "12 places",
  // },
]

const nightList = nightLife
function NightLife() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Delhi" />
    </div>
  )
}

export default NightLife