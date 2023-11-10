//import {Sora} from "@next/font";

//*font setting
//const sora = Sora({
//  subsets: ["latin"],
//  variables: "--font-sora",
//  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//});

//*component
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({children}) => {
  return (
    <div
      className="bg-site page text-white bg-cover bg-no-repeat relative font-sora"
      //className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variables} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
