import React from "react";
import {
    ButtonGroup,
    Button,
    Typography,
    Container,
    makeStyles,
} from "@material-ui/core";
import { Send, KeyboardArrowRight } from "@material-ui/icons";

const useStyle = makeStyles({});

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
                endIcon={<KeyboardArrowRight />}
            >
                Submit
            </Button>
            <br />
        </Container>
    );
}
