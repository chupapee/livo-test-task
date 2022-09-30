import { About } from '../sections/about';
import { Header } from '../sections/header';

export function App() {

  return (
    <>
      <div className='px-36 py-12'>
        <Header />
        <About />
      </div>
    </>
  );
}