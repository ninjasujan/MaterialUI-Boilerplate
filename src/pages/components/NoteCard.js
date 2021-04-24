import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const NoteCard = (props) => {
    return (
        <div>
            <Card elevation={2}>
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
