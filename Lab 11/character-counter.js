const textArea = document.querySelector('#textInput');
const charCount = document.querySelector('#charCount');

function updateCharacterCount() {
    const count = textArea.value.length;
    charCount.innerText = count;
}

textArea.addEventListener('keyup', updateCharacterCount);
textArea.addEventListener('input', updateCharacterCount);  
  