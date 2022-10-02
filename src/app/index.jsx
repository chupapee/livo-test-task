import { About } from '../sections/about';
import { Customers } from '../sections/customers';
import { Features } from '../sections/features';
import { Footer } from '../sections/footer';
import { Header } from '../sections/header';
import { Pricing } from '../sections/pricing';
import { Testimonials } from '../sections/testimonials';
import { Stats } from '../widgets/stats';
import { SubscribeUs } from '../widgets/subscribeUs';

export function App() {
  return (
    <>
      <div className='max-w-[1140px] mx-auto h-[100px] absolute top-0 left-0 right-0 animate-smoothly'>
        <Header />
      </div>
      <div className='max-w-[1155px] px-[15px] pt-0 mx-auto my-0 z-10 relative animate-smoothly'>
        <About />
        <Stats />
        <Features />
        <Pricing />
        <Testimonials />
        <Customers />
        <SubscribeUs />
      </div>
        <Footer />
    </>
  );
}