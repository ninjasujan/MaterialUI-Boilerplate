import React, { useState } from "react";
import {
    Button,
    Typography,
    Container,
    makeStyles,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    FormControl,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";

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
    const [category, setCategory] = useState("money");

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
                <FormControl className={classes.filed}>
                    <FormLabel>Choose your category...</FormLabel>
                    <RadioGroup
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <FormControlLabel
                            value="money"
                            control={<Radio />}
                            label="Money"
                        />
                        <FormControlLabel
                            value="todos"
                            control={<Radio />}
                            label="Todos"
                        />
                        <FormControlLabel
                            value="reminder"
                            control={<Radio />}
                            label="Reminder"
                        />
                        <FormControlLabel
                            value="work"
                            control={<Radio />}
                            label="Work"
                        />
                    </RadioGroup>
                </FormControl>
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
