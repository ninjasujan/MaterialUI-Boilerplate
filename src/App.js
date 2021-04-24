import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

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
                <Switch>
                    <Route exact path="/">
                        <Notes />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
