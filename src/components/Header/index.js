import React from "react";
import {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    IconButton
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const styles = theme => ({
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        textAlign: "center",
        justifyContent: "space-between"
    }
});

const Header = props => {
    const { classes } = props;
    
    return (
        <AppBar position="static" color="primary">
            <Toolbar className={classes.toolbar}>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Open drawer"
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h4"
                    color="inherit"
                    className={classes.grow}
                    noWrap
                >
                    Watch Stocks Live
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

const MuiHeader = withStyles(styles)(Header);
export default MuiHeader;
