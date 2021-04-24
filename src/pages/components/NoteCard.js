import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyle = makeStyles({
    test: {
        border: (note) => {
            if (note.category == "work") return "1px solid red";
        },
    },
});

const NoteCard = (props) => {
    const classes = useStyle(props.note);
    return (
        <div>
            <Card elevation={2} classes={classes.border}>
                <CardHeader
                    action={
                        <IconButton
                            onClick={() =>
                                props.noteDeleteHandler(props.note.id)
                            }
                        >
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={props.note.title}
                    subheader={props.note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {props.note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;
