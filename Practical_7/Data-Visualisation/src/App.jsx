import MonthlySalesChart from "./components/MonthlySalesChart";
import ProductCategoryChart from "./components/ProductCategoryChart";
import CustomerAcquisitionChart from "./components/CustomerAcquisitionChart";
import WeeklyVisitorsChart from "./components/WeeklyVisitorsChart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Analytics Dashboard</h1>

      <MonthlySalesChart />

      <ProductCategoryChart />

      <CustomerAcquisitionChart />

      <WeeklyVisitorsChart />
    </div>
  );
}

export default App;
