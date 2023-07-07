import { useState, useEffect } from 'react';
import logo from '../img/Logo.png';
import { Search, Menu, X } from 'react-feather';

export default function Navbar() {
  const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 0;
      setIsNavbarAtTop(isAtTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleMenu = () => {
    setIsChecked(!isChecked);
    console.log('ok');
  };

  return (
    <div className={`lg:px-32 md:px-20 mobile:px-10 fixed w-full z-10 ${isNavbarAtTop ? '' : 'bg-black/40 text-white'}`}>
      <nav className="flex justify-between items-center py-4 ">
        <div>
          <img src={logo} alt="logo" className={`w-20 ${isNavbarAtTop ? '' : 'bg-white/60 rounded-full'}`} />
        </div>
        <div className="flex items-center md:gap-14 mobile:gap-4">
          <div className={`lg:block ${isChecked ? 'mobile:block' : 'mobile:hidden'}`}>
            <ul className="z-[2] font-semibold flex lg:flex-row lg:static lg:bg-inherit lg:pt-14 gap-14 mobile:flex-col mobile:absolute mobile:bg-gray-500/90 mobile:text-2xl mobile:right-0 mobile:left-0 mobile:top-0 mobile:pt-32 mobile:pb-16 mobile:items-center">
              <li>
                <a href="#" className="hover:text-tersier hover:border-b-4 hover:border-solid hover:border-tersier duration-200">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tersier hover:border-b-4 hover:border-solid hover:border-tersier duration-200">
                  MENU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tersier hover:border-b-4 hover:border-solid hover:border-tersier duration-200">
                  OUR STORY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tersier hover:border-b-4 hover:border-solid hover:border-tersier duration-200">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center z-[1]">
            <input type="text" className={`rounded-full lg:w-40 md:w-80 mobile:w-40 px-5 pr-11 py-2 outline-none text-white bg-slate-400 lg:block ${isSearch ? 'mobile:block' : 'mobile:hidden'}`} />
            <Search onClick={() => handleSearch()} className="absolute z-[1] right-0 rounded-full mobile:bg-slate-300 md:bg-slate-400 p-1 w-[2.5rem] h-[2.5rem]" />
          </div>
          <div className="lg:hidden mobile:block">
            <input type="checkbox" checked={isChecked} onChange={handleMenu} className="absolute w-12 h-12 opacity-0 z-10" />
            {isChecked ? <X className="w-12 h-12 relative z-[3] " /> : <Menu className="w-12 h-12 " />}
          </div>
        </div>
      </nav>
    </div>
  );
}
