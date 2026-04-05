<<<<<<< HEAD
import VideoCard from "./VideoCard"

export default function VideoFeed() {

  const videos = [
    { id: 1, title: "Funny Cat Video" },
    { id: 2, title: "Dance Challenge" },
    { id: 3, title: "Travel Vlog" },
  ]

  return (
    <div className="max-w-xl mx-auto">
      {videos.map(video => (
        <VideoCard key={video.id} title={video.title}/>
      ))}
    </div>
  )
}
=======
import VideoCard from "./VideoCard";

export default function VideoFeed() {
  return (
    <div className="max-w-xl mx-auto">
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}
>>>>>>> 6d5ee3a (Initial commit with Practical_1 and UNIT_2)
