import React, { useState } from "react";
import {
    ButtonGroup,
    Button,
    Typography,
    Container,
    makeStyles,
    TextField,
} from "@material-ui/core";
import { Send, KeyboardArrowRight } from "@material-ui/icons";
import { purple } from "@material-ui/core/colors";

const useStyle = makeStyles({
    filed: {
        marginTop: 20,
        marginBottom: 20,
        display: "block",
    },
});

export default function Create() {
    const classes = useStyle();

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <Container>
            <Typography variant="h6" color="textSecondary" align="left">
                Create a note..
            </Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.filed}
                    label="Note title..."
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={title ? false : true}
                />
                <TextField
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.filed}
                    label="Details.."
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={title ? false : true}
                />
                <Button
                    className={classes.btn}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRight />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
}
