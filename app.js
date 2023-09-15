const markupInitialString =
    `
1. Wake up
   - Check the time first
   - If it's past 7 then wake up 
2. Clean up 
   - This includes brushing
   - Taking a shower
3. Eat
   - Have cereals for breakfast
`

document.addEventListener('DOMContentLoaded', () => {

    const showOutput = (e) => {
        const markdownText = document.getElementById("markdown-content").innerText;
        document.getElementById('html-output').innerHTML =
            marked.parse(markdownText);
    }

    const initPage = () => {
        document.querySelector('.CodeMirror').CodeMirror.setValue(markupInitialString)
        showOutput();
    }

    const markdownContent = document.getElementById('markdown-content');

    ['input', 'change', 'paste', 'cut', 'delete', 'blur', 'keydown', 'mouseleave'].forEach((e) => {
        markdownContent.addEventListener(e, showOutput);
    });


    CodeMirror(document.getElementById('markdown-content'), { mode: 'markdown', }).setSize("100%", 610);
    initPage();
});