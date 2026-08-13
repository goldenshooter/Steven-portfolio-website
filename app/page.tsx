import { CityView } from './components/CityView'
import { aucklandBackground, hotspots } from './data/hotspots'

export default function Home() {
  return <CityView background={aucklandBackground} hotspots={hotspots} />
}
