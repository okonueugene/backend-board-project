import "./App.css";
import DailyLineEfficiency from "./components/DailyLineEfficiency";
import DailyPacketWastage from "./components/DailyPacketWastge";
import DailyActionPoints from "./components/DailyActionPoints";
import BestEmployee from "./components/BestEmployee";
import MonthlyActionPoints from "./components/MonthlyActionPoints";
import DownTimeReasons from "./components/DownTimeReasons";
import MonthlyCapacityUtilization from "./components/MonthlyCapacityUtilization";
import MonthlyProductionTime from "./components/MonthlyProductionTime";
import MonthlyLineEfficiency from "./components/MonthlyLineEfficiency";


function App() {
  return (
    <div className="grid-container">
    <div className="grid-item"><DailyLineEfficiency /></div>
    <div className="grid-item"><DailyPacketWastage /></div>
    <div className="grid-item"><DailyActionPoints /></div>
    <div className="grid-item"><MonthlyLineEfficiency /></div>
    <div className="grid-item"><MonthlyProductionTime /></div>
    <div className="grid-item"><MonthlyCapacityUtilization /></div>
    <div className="grid-item"><DownTimeReasons /></div>
    <div className="grid-item"><MonthlyActionPoints /></div>
    <div className="grid-item"><BestEmployee /></div>
  </div>
  );
}

export default App;
