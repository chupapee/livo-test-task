import { About } from '../sections/about';
import { Features } from '../sections/features';
import { Header } from '../sections/header';
import { Stats } from '../widgets/stats';

export function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto my-0'>
        <div className='max-w-[1305px] px-[15px] pt-[50px] pb-[100px] mx-auto my-0'>
          <Header />
          <About />
          <Stats />
          <Features />
        </div>
      </div>
    </>
  );
}