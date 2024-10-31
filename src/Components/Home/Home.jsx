import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Home() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      {navigation.state === "loading" ? "Loading......": <Outlet />}

      <Footer />
    </div>
  );
}
