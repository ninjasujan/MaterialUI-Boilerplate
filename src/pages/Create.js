import React from "react";
import { ButtonGroup, Button, Typography, Container } from "@material-ui/core";

export default function Create() {
    return (
        <Container>
            <Typography variant="h6" color="textSecondary" align="left">
                Create a note..
            </Typography>
            <Button type="submit" color="primary" variant="contained">
                Submit
            </Button>
            {/*
            <ButtonGroup color="textSecondary" variant="outlined">
                <Button>send</Button>
                <Button>delete</Button>
                <Button>share</Button>
            </ButtonGroup> */}
        </Container>
    );
}
