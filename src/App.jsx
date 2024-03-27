import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FriendPage from "./pages/FriendPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/friend/:friendName" element={<FriendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
