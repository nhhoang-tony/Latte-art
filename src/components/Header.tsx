import logoImg from '../assets/coffee-machine.png';
import coffeeLover from '../assets/coffee-lover.svg';

export default function Header() {
  return (
    <header className='flex flex-col items-center pt-12 mb-0 sm:mb-8 md:mb-16'>
      <img
        className='w-20 h-20 sm:w-24 sm:h-24 mb-8 object-contain drop-shadow-[0_0_8px_rgba(0, 0, 0, 0.4)]'
        src={logoImg}
        loading='lazy'
      />
      <img
        className='w-[36rem] h-[6rem] max-w-[80%] mb-8 object-contain drop-shadow-[0_0_8px_rgba(0, 0, 0, 0.4)]'
        src={coffeeLover}
        loading='lazy'
      />
    </header>
  );
}
