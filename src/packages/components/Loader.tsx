
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Loader = () => {

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(container.current){
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../assets/icons/loader.json'),
      });
    }
  }, [container]);

  return(
    <>
      <div className="container" ref={container}></div>
    </>
  );
};

export default Loader;