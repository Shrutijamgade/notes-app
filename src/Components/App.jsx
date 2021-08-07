import React, { useState } from 'react';
import CreateArea from './CreateArea';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';


const App = () => {
    const [notes, setNotes] = useState([]);

    const onAddNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    const deleteNote = (id) => {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    return (
        <div>
            <Header />
            <CreateArea onAddNote={onAddNote} />
            {
                notes.map((noteItem, index) => {
                    return (
                        <Note 
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                        />
                        
                    )
                })
            }
           
            <Footer />
            
        </div>
    )
}

export default App;