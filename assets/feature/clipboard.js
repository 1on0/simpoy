document.querySelectorAll('pre > code').forEach((codeblock) => {
  const container = codeblock.parentNode.parentNode;

  const copybutton = document.createElement('button');
  const svgCopy = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 256 256"><path fill="#5C5C5C" d="M222 40v144a6 6 0 0 1-12 0V46H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6Zm-32 32v144a6 6 0 0 1-6 6H40a6 6 0 0 1-6-6V72a6 6 0 0 1 6-6h144a6 6 0 0 1 6 6Zm-12 6H46v132h132Z"/></svg>'
  const svgCheck =
    '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';
  copybutton.classList.add('copy-code');
  copybutton.type = 'button';
  copybutton.innerHTML = svgCopy;

  function copyingDone() {
    copybutton.innerHTML = svgCheck;
    setTimeout(() => {
      copybutton.innerHTML = svgCopy;
    }, 2000);
  }
  copybutton.addEventListener('click', (cb) => {
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(codeblock.textContent);
      copyingDone();
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(codeblock);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      copyingDone();
    } catch (e) {};
    selection.removeRange(range);
  });
  
  if (container.classList.contains("highlight")) {
    container.appendChild(copybutton);
  } else if (container.parentNode.firstChild == container) {
    // td containing LineNos
  } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
    // table containing LineNos and code
    codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(copybutton);
  } else {
    // code blocks not having highlight as parent class
    codeblock.parentNode.appendChild(copybutton);
  }
});