import Header from "@/components/Header";
import VideoGallery from "@/components/VideoGallery";

const Videos = () => {
  // Placeholder videos - you'll replace these with your actual video files and thumbnails
  const placeholderVideos = [
    {
      videoSrc: "/videos/video1.MOV",
      thumbnailSrc: "/videos/image1.png",
    },
    {
      videoSrc: "/videos/video2.MOV",
      thumbnailSrc: "/videos/image2.png",
    },
    {
      embed: "https://drive.google.com/file/d/1kJrdJkfAHhJF8XAYjVOg67YMCEpYUP2f/preview",
      thumbnailSrc: "/videos/image3.png",
    }
  ];

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-full">
          <VideoGallery 
            videos={placeholderVideos}
            title=""
          />
        </div>
      </main>
    </div>
  );
};

export default Videos;