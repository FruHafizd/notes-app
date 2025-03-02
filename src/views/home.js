const baseUrl = "https://notes-api.dicoding.dev/v2";

export default function Home() {
    const noteListElement = document.querySelector("note-list");
    const noteFormElement = document.querySelector("note-form");

    // 🔹 Ambil semua catatan (GET)
    function fetchNotes() {
        showLoading(); 
    
        fetch(`${baseUrl}/notes`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.status === "success") {
                    noteListElement.notes = responseJson.data;
                } else {
                    showResponseMessage(responseJson.message);
                }
            })
            .catch(error => showResponseMessage(error))
            .finally(() => hideLoading()); 
    }
    
    // 🔹 Tambah catatan baru (POST)
    function addNote(note) {
        fetch(`${baseUrl}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: note.title, body: note.body })
        })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === "success") {
                fetchNotes();
            } else {
                showResponseMessage(responseJson.message);
            }
        })
        .catch(error => showResponseMessage(error));
    }

    // 🔹 Hapus catatan (DELETE)
    function deleteNote(noteId) {
        fetch(`${baseUrl}/notes/${noteId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === "success") {
                fetchNotes();
            } else {
                showResponseMessage(responseJson.message);
            }
        })
        .catch(error => showResponseMessage(error));
    }

    // 🔹 Event Listener untuk menangkap event dari NoteForm
    noteFormElement.addEventListener("add-note", (event) => {
        addNote(event.detail);
    });

    // 🔹 Event Listener untuk menangkap event hapus dari NoteList
    noteListElement.addEventListener("delete-note", (event) => {
        const confirmDelete = confirm("Apakah Anda yakin ingin menghapus catatan ini?");
        if (confirmDelete) {
            deleteNote(event.detail.noteId);
        }
    });

    function showResponseMessage(message = "Terjadi kesalahan") {
        alert(message);
    }

    function showLoading() {
        const loadingElement = document.getElementById("loading");
        if (loadingElement) {
            loadingElement.style.display = "block";
        }
    }

    function hideLoading() {
        const loadingElement = document.getElementById("loading");
        if (loadingElement) {
            loadingElement.style.display = "none";
        }
    }

    fetchNotes();
}
