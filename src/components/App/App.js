import './App.css';
import Header from '../Header/Header'
import SectionWidgets from '../SectionWidgets/SectionWidgets'
import SectionSelling from '../SectionSelling/SectionSelling'
import UpgradeDiscraption from '../UpgradeDiscraption/UpgradeDiscraption'
import SectionDiscraptions from '../SectionDiscraptions/SectionDiscraptions'
function App() {
  return (
    <div className="App">
      <Header />
      <SectionWidgets />
      <SectionSelling />
      <UpgradeDiscraption />
      <SectionDiscraptions />
    </div>
  );
}

export default App;
