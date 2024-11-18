import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(/bg.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <div className="flex flex-row h-screen w-screen overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};
export default Home;
