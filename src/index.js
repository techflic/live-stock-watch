import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { grey, green, red } from "@material-ui/core/colors";

const store = configureStore();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[500]
        },
        secondary: {
            main: green[500]
        },
        error: {
            main: red[500]
        }
    },
    typography: {
        useNextVariants: true
    },
    spacing: {
        unit: "10"
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
