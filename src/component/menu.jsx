import Img2 from '../img/img2.png';
import Img3 from '../img/img3.png';
import Img4 from '../img/img4.png';

export default function Menu() {
  const cardData = [
    { id: 1, name: 'Lorem Ipsum', img: Img2, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis!' },
    { id: 2, name: 'Lorem Ipsum', img: Img3, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis!' },
    { id: 3, name: 'Lorem Ipsum', img: Img4, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis!' },
  ];

  const cardItems = cardData.map((item) => (
    <div key={item.id} className="bg-primary rounded-lg shadow-lg lg:w-[17rem] md:w-[14rem] lg:pb-12 mobile:pb-6">
      <img src={item.img} alt={item.img} className="w-full rounded-lg mb-4" />
      <h1 className="lg:text-3xl md:text-xl font-semibold text-white mx-4">{item.name}</h1>
      <p className="text-white mt-2 mx-4 line-clamp-2">{item.desc}</p>
    </div>
  ));

  return (
    <div className="lg:px-32 md:px-16 mobile:px-10 py-24 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-tersier pb-8">LET&apos;S GO</h1>
      <p className="md:w-[40rem] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam eos saepe tempora explicabo ex architecto quos quod. Vero, quasi corporis!</p>
      <div className="grid md:grid-cols-3 mobile:grid-cols-1 lg:gap-20 mobile:gap-8 py-10">{cardItems}</div>
      <button className="px-8 py-3 font-bold bg-primary text-white rounded-full hover:bg-secondary hover:text-primary duration-200">
        <a href="" className="tracking-[.4rem]">
          SHOW MORE
        </a>
      </button>
    </div>
  );
}
