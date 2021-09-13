import {getFeaturedEvents} from '../dummyData';
import EventListComponent from '../components/events/eventList.component';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <di>
      <h1>Home Page</h1>
      <EventListComponent items={featuredEvents}/>
    </di>
  )
}
