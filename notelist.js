// File: frontend/src/components/NoteList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteList = ({ user }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from the backend using user data for authentication
    axios.get(`/api/notes?userId=${user.id}`)
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, [user]);

  return (
    <div>
      <h2>Your Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
