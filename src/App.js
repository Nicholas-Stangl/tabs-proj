// import logo from './logo.svg';
import './App.css'

import Tab from './components/Tab'

function App() {
  const tabItems = [
    {header:"Tab 1", content: "Fear is the mind-killer."},
    {header:"Tab 2", content: "The little-death that brings total obliteration."},
    {header:"Tab 3", content: "I will face my fear, and let it pass over me."},
  ];

  return (
    <div className="continer pt-5">
      <Tab items={tabItems}/>
    </div>
  );
}

export default App;
