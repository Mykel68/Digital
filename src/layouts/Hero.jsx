import Image from "next/image";

const Hero = ({ title, description, image, children }) => {
  return (
    <section className=" ">
      <div className="relative z-10 flex w-full max-w-screen-xl  min-h-screen flex-col gap-8 py-32 lg:flex-row">
        <div className="flex flex-col justify-evenly lg:w-4/6">
          <div className="mb-8 flex  flex-col items-center lg:mb-0 lg:items-start ">
            <h1 className="text-center lg:text-left text-5xl font-bold text-purple-800">
              {title}
            </h1>
            <p className="max-w-3xl mt-4 mb-5 text-center text-base !leading-normal text-muted-foreground md:text-lg lg:text-left lg:text-2xl">
              {description}
            </p>
            <div>{children}</div>
          </div>
          <div className="flex justify-center gap-8 lg:justify-start">
            <div className="bg-slate-400 p-3 rounded">
              <h2 className="text-center  font-bold text-5xl text-purple-800">
                4k+
              </h2>
              <p className="text-center text-gray-200 font-bold ">somethings</p>
            </div>
            <div className="bg-slate-400 p-3 rounded">
              <h2 className="text-center lg:text-left text-5xl font-bold text-purple-800">
                1k+
              </h2>
              <p className="text-center text-gray-200 font-bold lg:text-left">
                other things
              </p>
            </div>
          </div>
        </div>
        {image ? (
          <div className="h-[550px] hidden md:block shrink-0 w-2/6">
            <Image
              src={image}
              className="h-full w-full rounded-md object-cover"
              alt={title}
              // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ) : null}
      </div>

      <svg
        className="blob absolute -left-32 top-10 w-[500px] xl:left-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="blob "
          d="M56.1,-30C69.5,-9.1,75.1,18.7,64.4,37.6C53.8,56.5,26.9,66.4,-0.2,66.5C-27.3,66.6,-54.5,56.9,-61.9,39.9C-69.4,22.9,-57,-1.4,-43.3,-22.4C-29.7,-43.4,-14.9,-61,3.2,-62.9C21.3,-64.7,42.6,-50.8,56.1,-30Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>
  );
};

export default Hero;
