import DashboardMain from "./dashboardMain";
import Navbar from "./navbar";

const Dashboard = () => {
    return (
        <section id="main-container">
            <Navbar />
            <DashboardMain />
        </section>
    );
}

export default Dashboard;