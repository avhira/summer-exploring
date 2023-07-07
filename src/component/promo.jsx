import Img3 from '../img/img3.png';
import Img5 from '../img/img5.png';

export default function Promo() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 bg-primary">
        <img src={Img3} alt={Img3} className="w-full h-full" />
        <div className="text-white py-20 flex flex-col justify-center md:px-20 mobile:px-10">
          <h1 className="text-5xl font-bold pb-8">Discount up to 50% All Excursions</h1>
          <p className="text-xl pb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quod, eum omnis non asperiores beatae magni quidem facilis vero soluta nihil, laudantium iste rerum quisquam cupiditate assumenda rem ullam tempora. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quo veniam beatae itaque quisquam nobis temporibus, dicta tenetur velit necessitatibus autem?
          </p>
          <button className="px-8 py-3 w-48 font-bold bg-tersier text-white rounded-full hover:bg-white hover:text-tersier duration-200">
            <a href="">READ MORE</a>
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 bg-secondary">
        <div className=" text-white py-20 flex flex-col justify-center md:px-20 mobile:px-10">
          <h1 className="text-5xl font-bold pb-8">January's Promo: Buy 1 Get 1 Free!</h1>
          <p className="text-xl pb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quod, eum omnis non asperiores beatae magni quidem facilis vero soluta nihil, laudantium iste rerum quisquam cupiditate assumenda rem ullam tempora. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quo veniam beatae itaque quisquam nobis temporibus, dicta tenetur velit necessitatibus autem?
          </p>
          <button className="px-8 py-3 w-48 font-bold bg-tersier text-white rounded-full hover:bg-white hover:text-tersier duration-200">
            <a href="">READ MORE</a>
          </button>
        </div>
        <img src={Img5} alt={Img5} className="w-full" />
      </div>
    </div>
  );
}
