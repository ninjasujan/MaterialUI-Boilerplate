import React, { useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import Note from "../pages/components/NoteCard";

export default function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/notes")
            .then((resposne) => resposne.json())
            .then((data) => setNotes([...data]));
    }, []);

    const noteDeleteHandler = async (id) => {
        await fetch("http://localhost:8000/notes/" + id, {
            method: "delete",
        });
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes([...newNotes]);
    };

    return (
        <Container>
            <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid item key={note.id} xs={12} sm={6} md={6}>
                        <Note
                            note={note}
                            noteDeleteHandler={noteDeleteHandler}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
