import {
    makeStyles,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    AppBar,
} from "@material-ui/core";
import { AddOutlined, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240;

const useStyle = makeStyles({
    page: {
        background: "#f9f9f9",
        width: "100%",
        padding: 20,
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    root: {
        display: "flex",
    },
    layoutTitle: {
        textAlign: "center",
        padding: 10,
    },
    activeLink: {
        backgroundColor: "#f4f4f4",
    },
});

const Layout = (props) => {
    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: "My notes",
            icon: <SubjectOutlined color="secondary" />,
            path: "/",
        },
        {
            text: "Create note",
            icon: <AddOutlined color="secondary" />,
            path: "/create",
        },
    ];

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={classes.layoutTitle}>
                    <Typography variant="h5">Ninjs notes..</Typography>
                </div>
                <List>
                    {menuItems.map((menu) => (
                        <ListItem
                            button
                            key={menu.text}
                            onClick={() => history.push(menu.path)}
                            className={
                                location.pathname == menu.path
                                    ? classes.activeLink
                                    : null
                            }
                        >
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>{props.children}</div>
        </div>
    );
};

export default Layout;
