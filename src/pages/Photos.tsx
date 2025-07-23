import Header from "@/components/Header";
import HorizontalGallery from "@/components/HorizontalGallery";

const Photos = () => {
  const placeholderImages = [
    "/photos/1.jpg",
    "/photos/1a.jpeg",
    "/photos/2.jpeg",
    "/photos/1aa.jpeg",
    "/photos/3.jpeg",
    "/photos/4.jpeg",
    "/photos/5.jpeg",
    "/photos/5a.jpeg",
    "/photos/5b.jpeg",
    "/photos/6.jpeg",
    "/photos/7.jpeg",
    "/photos/8.jpeg",
    "/photos/9.jpeg",
    "/photos/10.jpeg",
    "/photos/11.jpeg",
    "/photos/11a.jpeg",
    "/photos/12.jpeg",
    "/photos/13.jpeg",
    "/photos/14.jpeg",
    "/photos/15.jpeg",
    "/photos/15a.jpeg",
    "/photos/15b.jpeg",
    "/photos/16.jpeg",
    "/photos/17.jpeg",
    "/photos/18.jpeg",
    "/photos/19.jpg",
    "/photos/20.jpeg",
    "/photos/20a.jpeg",
    "/photos/21.jpeg",
    "/photos/22.jpeg",
    "/photos/23.jpeg",
    "/photos/24.jpeg",
    "/photos/25.jpeg",
    "/photos/26.jpeg",
    "/photos/27.jpeg",
    "/photos/28.jpeg",
    "/photos/29.jpeg",
    "/photos/30.jpeg",
    "/photos/31.jpeg",
    "/photos/32.jpeg",
    "/photos/33.jpeg",
    "/photos/34.jpeg",
    "/photos/35.jpeg",
    "/photos/36.jpeg",
    "/photos/38.jpeg",
    "/photos/38a.jpeg",
    "/photos/39.jpeg",
    "/photos/40.jpeg",    
    "/photos/41.jpeg",
    "/photos/42.jpeg"
  ];

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-full">
          <HorizontalGallery 
            images={placeholderImages}
          />
        </div>
      </main>
    </div>
  );
};

export default Photos;