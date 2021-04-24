import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./pages/components/Layout";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#eee",
        },
        secondary: purple,
    },
    typography: {
        fontFamily: "Quicksand",
        fontWeightLight: 400,
        fontWeightMedium: 500,
        fontWeightRegular: 600,
        fontWeightBold: 700,
    },
});

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Notes />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
