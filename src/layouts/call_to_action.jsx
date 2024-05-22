import { Button } from "@/components/ui/button";
import Bg from "@/assets/bg.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden mb-3">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[300px] text-white p-3">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
          Join Our University Today
        </h2>
        <p className="max-w-md mb-8 text-center">
          Explore endless possibilities, broaden your horizons, and embark on an
          exciting journey of learning and discovery.
        </p>
        <Button className="px-8 py-3 rounded-full bg-primary hover:bg-primary-dark transition duration-300">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
