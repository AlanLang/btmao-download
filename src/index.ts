import { Base64 } from 'js-base64';

window.onload = () => {
    const button = createButton();
    const textarea = createTextarea();
    let isOpen = false;
    button.addEventListener('click', (e:any) => {
        const urls = getDownloadUrls();
        textarea.value = urls.join('\n');
        textarea.style.display = isOpen ? 'none' : 'block';
        button.textContent = isOpen ? '生成' : '关闭';
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
    textarea.wrap = 'off';
    document.body.appendChild(textarea);
    
    return textarea;
}

function getDownloadUrls() {
    const url = location.href;
    if (url.match('www.tldm.net')) {
        return getTianLeDongManUrls();
    }
    
    return getThunderUrl().map(url => decodeUrl(url));
}

function getTianLeDongManUrls() {
    const hrefArr = document.getElementsByTagName('a'); // 获取这个页面的所有A标签
    const urls = [];
    for (let i = 0; i < hrefArr.length; i++) {
        const hrefURL = hrefArr[i].href;
        if (hrefURL.match('magnet')) {
            urls.push(hrefURL);
        }
    }
    
    return urls;
}

function getThunderUrl(): string[] {
    const length = document.getElementsByClassName('thunder_url').length;
    const urls = [];
    if (length) {
        for (let index = 0; index < length; index++) {
            urls.push((document.getElementsByClassName('thunder_url')[index] as any).value);
        }
    } else {
        alert('无法获取下载链接');
    }
    
    return urls;
}

function decodeUrl(thunderUrl: string) {
    const url = Base64.decode(thunderUrl.replace('thunder://', ''));
    
    return url.substring(2, url.length - 2);
}
