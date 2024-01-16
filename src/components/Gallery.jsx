import Project from './Photo';
import latteArt from '../../latte-art.json';
import { useMemo, useState } from 'react';
import { shuffle } from '../util/latteArtUtils';
import ZoomPhoto from './ZoomPhoto';

let displayLatteArt = [];

export default function Gallery() {
  const latteArtClasses =
    'min-w-[250px] max-w-[350px] bg-[#17161b] rounded-2xl overflow-hidden text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)] flex-[1_1_calc(20%-1rem)]';

  const buttonHolderClasses =
    'flex justify-center min-m-100px w-[28%] max-w-[30%] m-4';

  const buttonClasses =
    'flex items-center justify-center capitalize text-2xl sm:text-3xl h-16 w-32 sm:w-36 sm:max-w-36 bg-[#688b96] border-solid border-2 border-[#688b96] text-[#0f0e18] rounded-xl cursor-pointer hover:bg-[#fba615] hover:border-[#fba615] active:bg-[#fba615] active:border-[#fba615]transition-colors ease duration-200';

  const buttonList = ['swan', 'heart', 'rosetta', 'tulip', 'video', 'creative'];

  const [latteArtFilter, setLatteArtFilter] = useState('');
  const [showZoomPhoto, setShowZoomPhoto] = useState({
    show: false,
    photoPath: '',
  });

  function handleShowZoomPhoto(photoPath) {
    setShowZoomPhoto({
      show: true,
      photoPath,
    });
  }

  function handleHideZoomPhoto() {
    setShowZoomPhoto({
      show: false,
      photoPath: '',
    });
  }

  useMemo(() => {
    if (latteArtFilter === '') {
      displayLatteArt = showAllPhotoLatteArt();
    } else {
      displayLatteArt = showSelectedLatteArtType(latteArtFilter);
    }
  }, [latteArtFilter]);

  function showAllPhotoLatteArt() {
    let displayLatteArt = latteArt.filter(
      (latteArt) => !latteArt.tags.includes('video')
    );
    displayLatteArt = shuffle(displayLatteArt);

    return displayLatteArt;
  }

  function showSelectedLatteArtType(type) {
    let displayLatteArt = latteArt.filter((latteArt) =>
      latteArt.tags.includes(latteArtFilter)
    );
    displayLatteArt = shuffle(displayLatteArt);

    return displayLatteArt;
  }

  // display selected latte art type
  function handleSelectLatteArtType(type) {
    setLatteArtFilter((prevState) => {
      if (prevState === '') {
        return type;
      } else if (prevState !== type) {
        return type;
      } else {
        return '';
      }
    });
  }

  return (
    <>
      <div className='flex flex-wrap justify-center w-[70%] max-w-[1200px] mx-auto'>
        {buttonList.map((button) => (
          <div key={button} className={buttonHolderClasses}>
            <button
              className={`${
                latteArtFilter === button ? 'border-[#fba615]' : ''
              } ${buttonClasses}`}
              onClick={() => handleSelectLatteArtType(button)}
            >
              <img
                className='h-[45%]'
                src={`/static/img/${button}.svg`}
                loading='lazy'
              ></img>
            </button>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-8 mx-auto pt-4 sm:pt-12 pb-12 px-0 sm:px-4 overflow-y-scroll w-[90%] max-w-[1600px]'>
        {displayLatteArt.map((latteArt) => (
          <Project
            key={latteArt.photo}
            latteArt={latteArt}
            classes={latteArtClasses}
            onShowPhoto={handleShowZoomPhoto}
          ></Project>
        ))}
        <div className={`h-0 ${latteArtClasses}`}></div>
        <div className={`h-0 ${latteArtClasses}`}></div>
        <div className={`h-0 ${latteArtClasses}`}></div>
      </div>
      {showZoomPhoto.show && (
        <ZoomPhoto
          photoPath={showZoomPhoto.photoPath}
          hidePhoto={handleHideZoomPhoto}
        ></ZoomPhoto>
      )}
    </>
  );
}
