import { About } from '../sections/about';
import { Features } from '../sections/features';
import { Header } from '../sections/header';
import { Pricing } from '../sections/pricing';
import { Testimonials } from '../sections/testimonials';
import { Stats } from '../widgets/stats';

export function App() {

  return (
    <>
      <div className='max-w-[1440px] mx-auto my-0'>
        <div className='max-w-[1305px] px-[15px] py-[20px] md:pt-[50px] md:pb-[100px] mx-auto my-0'>
          <Header />
          <About />
          <Stats />
          <Features />
          <Pricing />
          <Testimonials />
        </div>
      </div>
    </>
  );
}