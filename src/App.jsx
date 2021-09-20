import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { UserProvider } from "./context/UserContext";

import AppRoutes from "./routes/App.routes";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <SearchInput />
        <AppRoutes />
        <ToastContainer autoClose={3000} />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
