var text = document.getElementById("myTextArea").value;

localStorage.setItem("Notes",text)

myFile.addEventListener("input", () => {
    var file = document.getElementById("myFile").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var textArea = document.getElementById("myTextArea");
        textArea.value = e.target.result;
    };
    reader.readAsText(file);
})


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
var title = document.getElementById("title")
    // Start file download.
document.getElementById("dwn-btn").addEventListener("click", function() {
    var text = document.getElementById("myTextArea").value;
    
    if (title.value == "") {
        var filename = "untitled.txt";
    } else {
        var filename = title.value + ".txt";

    }

    download(filename, text);
}, false);

cut.addEventListener("click", (e) => {
    e.ctrlKey + e.keyCode == 88
})

var localtext = localStorage.getItem("Notes")
if(document.getElementById("myTextArea").value.length == 0){
    document.getElementById("myTextArea").value = localtext
}

