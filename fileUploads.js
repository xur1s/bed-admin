const fileInput = document.getElementById('fileInput');
const csvDisplay = document.getElementById('fileContentDisplay');
const status= document.getElementById('statusBar');

// There's the need to check for selection, so the computer has to listen for these
// events.

fileInput.addEventListener('change', (event) =>{
    const filesList=event.target.files;

    // Read the file names
    if (filesList.length>0){
        const selectedFile=filesList[0]

        //Create a new Filereader instance essentially
        //Cause they apparently use instances or something.
        
        const reader= new FileReader();


        //When the file finishes:
        reader.onload = function(x){
            let contents=x.target.result;
            csvDisplay.textContent= contents; //load the contents...
        };
        
        //Reads the file as text, which is what is preffered right now for objects

        reader.readAsText(selectedFile);

    }
}


)


