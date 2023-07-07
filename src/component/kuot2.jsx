import Img6 from '../img/img6.png';
export default function Kuot2() {
  const kuotData = [
    { id: 1, title: 'Lorem Ipsum', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium esse aliquam veniam incidunt cupiditate unde doloremque, sit repellat quo?' },
    { id: 2, title: 'Lorem Ipsum', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium esse aliquam veniam incidunt cupiditate unde doloremque, sit repellat quo?' },
    { id: 3, title: 'Lorem Ipsum', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium esse aliquam veniam incidunt cupiditate unde doloremque, sit repellat quo?' },
  ];

  const kuotItem = kuotData.map((item) => (
    <div key={item.id}>
      <h1 className="lg:text-3xl md:text-2xl text-tersier font-bold mb-5">{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  ));
  return (
    <>
      <div>
        <div className="bg-cover bg-center bg-no-repeat w-full h-screen" style={{ backgroundImage: `url(${Img6})` }}>
          <div className="flex flex-col items-end lg:justify-center md:justify-normal lg:pt-0 md:pt-[15rem] mobile:pt-[15rem] h-full lg:px-32 md:px-16 mobile:px-10">
            <i className="md:text-[5rem] mobile:text-5xl md:leading-[6rem] font-bold mb-4 text-secondary text-end drop-shadow-[10px_10px_5px_rgba(0,0,0,0.25)]">
              EXPLORE
              <br />
              <span className="text-primary"> THE WORLD</span>
            </i>
          </div>
        </div>
        <div className="flex py-24 lg:px-32 md:px-20 mobile:px-10 gap-12 md:flex-row mobile:flex-col">{kuotItem}</div>
        <div className="grid place-items-center">
          <div className="pb-24 pt-16 lg:w-[60rem] md:w-[40rem] mobile:w-[20rem] text-center">
            <i className="text-xl">&quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptas perferendis ex necessitatibus, magni ipsum soluta voluptatem quaerat sapiente dolorem amet quo commodi minus rerum.&quot;</i>
          </div>
        </div>
      </div>
    </>
  );
}
