import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className=" mx-auto text-center">
            <Header></Header>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;