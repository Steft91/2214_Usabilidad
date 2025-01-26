function redirectToLibrosPage() {
    window.top.location.href = "./libros.html";
}

function redirectToContactosPage(){
    window.top.location.href = "./contacto.html";
}

function transferState() {
    const state = document.getElementById("modoOscuro").checked;

    const iframe = document.getElementById("screen");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    const iframeCheckbox = iframeDocument.getElementById("modoOscuro");
    if (iframeCheckbox) {
        iframeCheckbox.checked = state;
    }
}