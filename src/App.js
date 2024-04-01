import "./App.css";
import "bulma/css/bulma.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faRightToBracket,
  faLock,
  faHouse,
  faReceipt,
  faFileInvoiceDollar,
  faListOl,
  faHeadset,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Order from "./components/order/Order";

library.add(
  faEnvelope,
  faRightToBracket,
  faLock,
  faHouse,
  faReceipt,
  faFileInvoiceDollar,
  faListOl,
  faHeadset,
  faCircleXmark
);

function App() {
  return (
    <Router basename="/jds-kiosk-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
