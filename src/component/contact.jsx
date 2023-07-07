export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-24 bg-secondary">
        <h1 className="text-5xl font-bold text-white ">Title Here</h1>
        <p className="text-lg py-8 md:w-[40rem] mobile:w-[20rem] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolores porro in similique fugiat nesciunt.</p>
        <div>
          <input type="text" className="md:w-[30rem] mobile:w-[15rem] px-8 py-2 rounded-l-full outline-none" />
          <button className="md:px-8 mobile:px-4 py-2 font-bold bg-primary text-white rounded-r-full hover:bg-slate-400 hover:text-white duration-200">SUBCRIBE</button>
        </div>
      </div>
    </>
  );
}
