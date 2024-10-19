// script.js

import { db } from './firebase.js'; //importing db function from firebase file 
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Function to save a comment to Firestore
async function saveComment(name, comment) {
    try {
        const docRef = await addDoc(collection(db, "comments"), {
            name: name,
            comment: comment,
            timestamp: Date.now()
        });
        console.log("Document written with ID: ", docRef.id);
        fetchComments(); // Fetch comments after saving
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Function to fetch comments from Firestore
async function fetchComments() {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = ''; // Clear existing comments

    const querySnapshot = await getDocs(collection(db, "comments"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<strong>${data.name}</strong>: ${data.comment}`;
        commentsList.appendChild(commentDiv);
    });
}

// Handle form submission
document.getElementById('commentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    saveComment(name, comment);
    document.getElementById('commentForm').reset(); // Clear the form
});

// Fetch comments when the page loads
window.onload = fetchComments;