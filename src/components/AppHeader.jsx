import logo from '../assets/logo.png';

function App() {
  return (
    <div className="flex flex-row justify-between w-full px-2 sm:px-10 pt-4">
      <div className="font-bold flex flex-row items-center cursor-pointer">
        <img src={logo} alt="logo" className=""/>
        <span className="ml-1 uppercase text-xs sm:text-base">My Dev Journal</span>
      </div>
      <div className="flex flex-row w-1/6 justify-evenly items-center font-semibold text-sm">
        <h1 className="font-semibold cursor-pointer hover:underline">link</h1>
        <h1 className="cursor-pointer hover:underline">link</h1>
      </div>
    </div>
  );
}

export default App;
