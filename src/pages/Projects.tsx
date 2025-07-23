import Header from "@/components/Header";
import HorizontalGallery from "@/components/HorizontalGallery";

const Projects = () => {
  const placeholderImages = [
    "/project/1.jpeg",
    "/project/2.jpeg",
    "/project/3.jpeg",
    "/project/4.jpeg",
    "/project/5.jpeg",
    "/project/6.jpeg",
    "/project/7.jpeg",
    "/project/8.jpeg",
    "/project/9.jpeg",
    "/project/10.jpeg",
    "/project/11.jpeg",
    "/project/12.jpeg",
    "/project/13.jpeg",
    "/project/14.jpeg"
  ];

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-full">
          <HorizontalGallery images={placeholderImages}/>
        </div>
      </main>
    </div>
  );
};

export default Projects;