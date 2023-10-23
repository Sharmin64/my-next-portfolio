import {Sora} from "@next/font/google";

//*component
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variables: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({children}) => {
  return (
    <div>
      <TopLeftImg />
      <Nav />
      <Header />
    </div>
  );
};

export default Layout;
