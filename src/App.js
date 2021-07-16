import Header from './components/Header'
import WifiCard from './components/WifiCard'

function App() {
  document.title = 'WiFi nè.'
  return (
    <div className="md:container md:mx-auto md:max-w-screen-md pt-5">
      <Header />
      <WifiCard />
    </div>
  );
}

export default App;
