import React from "react";
import {
    ButtonGroup,
    Button,
    Typography,
    Container,
    makeStyles,
} from "@material-ui/core";
import { Send, KeyboardArrowRight } from "@material-ui/icons";

const useStyle = makeStyles({
    btn: {
        fontSize: "1.1em",
        color: "#fff",
        "&:hover": {
            color: "#eee",
        },
    },
});

export default function Create() {
    const classes = useStyle();
    return (
        <Container>
            <Typography variant="h6" color="textSecondary" align="left">
                Create a note..
            </Typography>
            <Button
                className={classes.btn}
                type="submit"
                color="primary"
                variant="contained"
                startIcon={<Send />}
                endIcon={<KeyboardArrowRight />}
            >
                Submit
            </Button>
            <br />
            {/* <AcUnitOutlined color="primary" fontSize="large" />
            <AcUnitOutlined color="disabled" fontSize="small" />
            <AcUnitOutlined color="primary" fontSize="large" /> */}
            {/*
            <ButtonGroup color="textSecondary" variant="outlined">
                <Button>send</Button>
                <Button>delete</Button>
                <Button>share</Button>
            </ButtonGroup> */}
        </Container>
    );
}
