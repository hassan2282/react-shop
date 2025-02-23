import './App.css';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/feather'
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='flex flex-col items-center bg-[#F5EFE7] h-screen w-full'>
      <div className='basis-1/12 relative'>
        <Header />
      </div>

      <div className='flex flex-row w-full' style={{fontFamily:'Vazir'}}>
        <Sidebar />
        <Content />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
