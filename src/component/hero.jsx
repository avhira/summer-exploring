import Img1 from '../img/img1.png';

export default function Hero() {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-screen" style={{ backgroundImage: `url(${Img1})` }}>
      <div className="flex flex-col justify-center h-full lg:px-32 mobile:px-10 lg:w-full md:px-20 sm:px-10 bg-slate-300/50 ">
        <h1 className="mobile:text-6xl md:text-8xl font-bold mb-4 text-secondary drop-shadow-xl">
          IT&apos;S TIME <br />
          FOR HIKING
        </h1>
        <i className="text-2xl mb-4 tracking-[.5rem] font-bold text-primary">LOREM IPSUM DOLOR</i>
        <button className="px-4 py-3 mt-6 text-primary bg-white w-40 rounded-full font-bold hover:text-white hover:bg-primary duration-300">
          <a href="">READ MORE</a>
        </button>
        <i className="mt-4 md:w-[30rem] mobile:w-[20rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo rerum repudiandae eveniet ut illo eligendi inventore necessitatibus veniam reprehenderit officia.</i>
      </div>
    </div>
  );
}
