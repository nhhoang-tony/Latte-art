export default function ZoomPhoto({ photoPath, hidePhoto }) {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center animation'
      onClick={hidePhoto}
    >
      <div className='fixed w-full h-full bg-[#0f0e18] opacity-95 z-0'></div>
      {photoPath.includes('jpeg') && (
        <img
          src={`/static/img/${photoPath}`}
          className='max-w-[700px] max-h-[700px] w-[95%] rounded-3xl z-10 brightness-110'
          loading='lazy'
        ></img>
      )}
      {photoPath.includes('mp4') && (
        <video
          className='max-w-[700px] max-h-[700px] w-[95%] rounded-3xl z-10 brightness-110'
          src={`/static/img/${photoPath}`}
          type='video/mp4'
          loop
          autoPlay
          muted
        ></video>
      )}
    </div>
  );
}
