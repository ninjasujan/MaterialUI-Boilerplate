import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
    makeStyles,
    Avatar,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, yellow } from "@material-ui/core/colors";

const useStyle = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === "work") return yellow[700];
            if (note.category === "todos") return blue[700];
            if (note.category === "money") return green[700];
        },
    },
});

const NoteCard = (props) => {
    const classes = useStyle(props.note);
    return (
        <div>
            <Card elevation={2} classes={classes.border}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {props.note.category[0].toUpperCase()}
                        </Avatar>
                    }
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
