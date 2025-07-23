import { useState, useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoItem {
  videoSrc?: string;
  embed?: string;
  thumbnailSrc: string;
  title?: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
  title?: string;
}

const VideoGallery = ({ videos, title }: VideoGalleryProps) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [loadedThumbnails, setLoadedThumbnails] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleThumbnailLoad = (index: number) => {
    setLoadedThumbnails(prev => new Set(prev).add(index));
  };

  const handlePlay = (index: number) => {
    setPlayingVideo(index);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      const newScrollLeft = scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const getPlaceholderColor = (index: number) => {
    const colors = [
      'bg-gradient-to-br from-slate-300 to-slate-400',
      'bg-gradient-to-br from-stone-300 to-stone-400',
      'bg-gradient-to-br from-neutral-300 to-neutral-400',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative m-8">
      {title && (
        <h2 className="text-xl font-light tracking-wide mb-8 text-foreground">
          {title}
        </h2>
      )}

      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Video gallery container */}
      <div
        ref={scrollContainerRef}
        className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          lg:flex lg:gap-6 lg:overflow-x-auto lg:scrollbar-hide lg:scroll-smooth
          w-full pb-2
        "
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, index) => (
          <div key={index} className="relative group flex-shrink-0">
            <div className="
              w-full h-[12rem]
              sm:h-[15rem]
              md:h-[18rem]
              lg:w-[48rem] lg:h-[36rem]
              relative overflow-hidden rounded-sm
            ">
              {playingVideo === index ? (
                video.embed ? (
                  <iframe
                    src={video.embed}
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full rounded-sm"
                  />
                ) : (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <>
                  {/* Placeholder/blur background */}
                  <div
                    className={`absolute inset-0 ${getPlaceholderColor(index)} transition-opacity duration-500 ${
                      loadedThumbnails.has(index) ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnailSrc}
                    alt={`Video thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      loadedThumbnails.has(index) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleThumbnailLoad(index)}
                    loading="lazy"
                  />
                  {/* Play button overlay */}
                  <button
                    onClick={() => handlePlay(index)}
                    className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300"
                  >
                    <div className="bg-background/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-200">
                      <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </>
              )}
            </div>
            {video.title && (
              <p className="mt-3 text-sm font-light text-muted-foreground">
                {video.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
