import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalGalleryProps {
  images: string[];
  title?: string;
}

const HorizontalGallery = ({
  images,
  title
}: HorizontalGalleryProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Generate placeholder colors based on image index
  const getPlaceholderColor = (index: number) => {
    const colors = [
      'bg-gradient-to-br from-slate-200 to-slate-300',
      'bg-gradient-to-br from-stone-200 to-stone-300',
      'bg-gradient-to-br from-neutral-200 to-neutral-300',
      'bg-gradient-to-br from-gray-200 to-gray-300',
      'bg-gradient-to-br from-zinc-200 to-zinc-300'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative m-8">
      {title}

      {/* Scroll buttons (desktop only) */}
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

      {/* Gallery container */}
      <div
  ref={scrollContainerRef}
  style={{
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  }}
  className="
    grid grid-cols-1 gap-4
    sm:grid-cols-2
    lg:flex lg:items-center lg:gap-6 lg:overflow-x-auto lg:scrollbar-hide lg:scroll-smooth
    w-full pb-2
  "
>

        {images.map((image, index) => (
          <div key={index} className="relative group cursor-pointer flex-shrink-0">
            <div className="
  w-full max-w-[370px] sm:max-w-[410px] md:max-w-[450px]
  aspect-[3/4]
  flex-shrink-0
  relative overflow-hidden rounded-lg shadow-md mx-auto
">

              {/* Placeholder/blur background */}
              <div className={`absolute inset-0 ${getPlaceholderColor(index)} transition-opacity duration-500 ${loadedImages.has(index) ? 'opacity-0' : 'opacity-100'}`} />
              {/* Actual image */}
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;