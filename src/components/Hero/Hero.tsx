import bgImg from "@/assets/vector3.png";
import Food1 from "@/assets/biryani2.png";
import Food2 from "@/assets/biryani3.png";
import Food3 from "@/assets/biryani5.png";
import React from "react";

const ImageList = [
  {
    id: 1,
    img: Food1,
  },
  {
    id: 2,
    img: Food2,
  },
  {
    id: 3,
    img: Food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeate: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [welcomeImage, setWelcomeImage] = React.useState(Food1);

  return (
    <div
      style={bgImage}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left 
           oarder-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                FoodCore
              </span>
            </h1>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aperiam suscipit incidunt, distinctio quae vero,
              laborum beatae, dolorum aliquam deserunt dolorem aspernatur eum
              necessitatibus asperiores quibusdam nisi obcaecati fuga harum.
            </p>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200">
                Order Now
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
            {/* main image section */}
            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
                src={welcomeImage}
                alt="welcome image"
                className="w-[300px] sm:w-[450px] mx-auto spin"
              />
            </div>
            {/* image list section */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {ImageList.map((item) => (
                <img
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                  onClick={() => {
                    setWelcomeImage(
                      item.id === 1 ? Food1 : item.id === 2 ? Food2 : Food3
                    );
                  }}
                  key={item.id}
                  src={item.img}
                  alt={item.img}
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
