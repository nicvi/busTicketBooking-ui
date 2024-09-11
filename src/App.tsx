
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {Home, TimeSelection} from "./components";
import {CityProvider} from "./context";

function App() {
    return (
        <Router>
            {/*<ScrollToTop />*/}
            <Routes>
                {/*<Route path="/login" element={<Login />} />*/}
                <Route
                    path="/"
                    element={
                        <CityProvider>
                            <Home />
                         </CityProvider>
                    }
                />
                <Route
                    path="/time-selection"
                    element={
                        <TimeSelection />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
