
function addNotes(id) {
    var template = document.getElementsByTagName("template")[0];
    var div = template.querySelectorAll(".noteTemplate");

    var clon = template.content.cloneNode(true);
    clon.childNodes[1].className = "stickyNotes" + id

    var notes = document.getElementById("divNotes" + id);
    notes.appendChild(clon);
    notes.children[notes.children.length - 1].children[0].focus();
}


function deleteNote(a) {    
    if (confirm('Are you sure you want to delete?')) {
        a.parentNode.parentElement.remove();
    }
}

function likeNote(a) {    
    var likes = a.lastChild.innerText;
    a.lastChild.innerText = Number(likes) + 1;

}
