import './App.css';
import Header from '../Header/Header'
import SectionWidgets from '../SectionWidgets/SectionWidgets'
import SectionSelling from '../SectionSelling/SectionSelling'
import UpgradeDiscraption from '../UpgradeDiscraption/UpgradeDiscraption'
function App() {
  return (
    <div className="App">
      <Header />
      <SectionWidgets />
      <SectionSelling />
      <UpgradeDiscraption />
    </div>
  );
}

export default App;
