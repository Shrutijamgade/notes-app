import React, { useState } from "react";

const CreateArea =({onAddNote}) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    const handleChange =(event)=> {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const submitNote =(event)=> {
        onAddNote(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    placeholder="Add a note..."
                    rows="3"
                />
                <button onClick={submitNote}> Add </button>
            </form>
        </div>
    )
}

export default CreateArea;
