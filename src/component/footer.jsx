import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { MessageCircle } from 'react-feather';
import logo from '../img/Logo.png';

export default function Footer() {
  return (
    <div className="lg:px-32 md:px-20 mobile:px-10 py-14 bg-primary ">
      <footer className="grid lg:grid-cols-2 md:grid-cols-1 text-white gap-8">
        <div className="md:mb-14 flex lg:flex-col md:flex-row mobile:flex-col justify-evenly lg:items-start md:items-center ">
          <div>
            <img src={logo} alt="logo" className="w-24 bg-white rounded-full p-1" />
          </div>
          <p className="mt-7 mb-5 w-[20rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, libero!</p>
          <div className="flex gap-3">
            <Instagram className="rounded-full bg-white px-1 py-1 w-8 h-8 hover:bg-tersier" fill="#7F7770" />
            <Facebook className="rounded-full bg-white px-1 py-1 w-8 h-8 hover:bg-tersier" fill="#7F7770" />
            <Twitter className="rounded-full bg-white px-1 py-1 w-8 h-8 hover:bg-tersier" fill="#7F7770" />
            <MessageCircle className="rounded-full bg-white px-1 py-1 w-8 h-8 hover:bg-tersier" fill="#7F7770" />
          </div>
        </div>
        <div className="flex md:justify-evenly mobile:flex-wrap mobile:gap-10">
          <ul className="leading-8 ">
            <li className=" text-xl mb-4 hover:text-tersier">
              <a href="">About</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">History</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Our Team</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Branch Guidelines</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Terms & Condition</a>
            </li>
            <li className="hover:text-tersier">
              <a href=""> Privacy Policy</a>
            </li>
          </ul>

          <ul className="leading-8">
            <li className="hover:text-tersier text-xl mb-4">
              <a href="">Service</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">How to Order</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Our Product</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Order Status</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Promo</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Payment Method</a>
            </li>
          </ul>

          <ul className="leading-8">
            <li className="hover:text-tersier text-xl mb-4">
              <a href="">Other</a>
            </li>
            <li className=" hover:text-tersier">
              <a href="">Contact Us</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Help</a>
            </li>
            <li className="hover:text-tersier">
              <a href="">Privacy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
