document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file) {
        document.getElementById("result").innerText = "Analyzing the file, please wait...";
        // Simulate deep fake detection result
        setTimeout(() => {
            document.getElementById("result").innerText = "The uploaded file appears to be authentic!";
        }, 3000);
    } else {
        document.getElementById("result").innerText = "Please upload a file!";
    }
});
