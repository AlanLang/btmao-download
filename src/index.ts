import { webSetProvider } from './webset/webset';

window.onload = () => {
    const button = createButton();
    const textarea = createTextarea();
    let isOpen = false;
    button.addEventListener('click', (e:any) => {
        const urls = getDownloadUrls();
        textarea.value = urls.join('\n');
        textarea.style.display = isOpen ? 'none' : 'block';
        button.textContent = isOpen ? '生成' : '关闭';
        button.style.backgroundColor = 'white';
        isOpen = !isOpen;
        if (isOpen) {
            textarea.select();
        }
    });
};

function createButton() {
    const button = document.createElement('button');
    button.textContent = '生成';
    button.style.position = 'fixed';
    button.style.right = '5px';
    button.style.top = '5px';
    document.body.appendChild(button);
    
    return button;
}

function createTextarea() {
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.right = '10px';
    textarea.style.top = '30px';
    textarea.style.resize = 'none';
    textarea.style.outline = 'none';
    textarea.style.width = '500px';
    textarea.style.height = '300px';
    textarea.style.display = 'none';
    textarea.style.backgroundColor = 'white';
    textarea.wrap = 'off';
    document.body.appendChild(textarea);
    
    return textarea;
}

function getDownloadUrls() {
    return webSetProvider.get(location.host).getDownloads();
}

