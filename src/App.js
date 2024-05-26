import { Container } from "react-bootstrap";
import "./assets/css/bundle.min.css";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import TodayOverviewComponent from "./components/TodayOverviewComponent";

function App() {
  return (
      <Container fluid className="bg-light py-6">
        <NavbarComponent />
        <TodayOverviewComponent />
        <FooterComponent />
      </Container>
  );
}

export default App;
