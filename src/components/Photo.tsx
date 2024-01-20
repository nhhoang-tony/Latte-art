export default function Photo({ latteArt, classes, onShowPhoto }) {
  const projectClasses =
    'cursor-pointer border-solid border-[3px] border-transparent hover:border-[#fba615] active:border-[#fba615] transition-colors ease duration-500' +
    ' ' +
    classes;

  return (
    <div className={projectClasses}>
      <article className='h-full flex flex-col justify-between'>
        <div className='h-[350px] overflow-hidden'>
          {latteArt.photo.includes('jpeg') && (
            <img
              className='w-full h-[350px] object-cover hover:scale-110 active:scale-110 transition-transform ease duration-500 brightness-110'
              src={`/static/img/${latteArt.photo}`}
              onClick={() => onShowPhoto(latteArt.photo)}
              loading='lazy'
            ></img>
          )}
          {latteArt.photo.includes('mp4') && (
            <video
              className='w-full h-[350px] object-cover brightness-110'
              src={`/static/img/${latteArt.photo}`}
              loop
              autoPlay
              muted
              onClick={() => onShowPhoto(latteArt.photo)}
            ></video>
          )}
        </div>
      </article>
    </div>
  );
}
