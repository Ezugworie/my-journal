// import logo from './assets/logo.svg';
import './App.css';
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

function App() {
  return (
    <div className="App text-gray-500 h-screen flex flex-col justify-between">
      <AppHeader />
      <div className="">
        <div className="text-5xl mb-5">Comming Soon</div>
        <div className="text-xl">Get ready to be blown away 😉</div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
