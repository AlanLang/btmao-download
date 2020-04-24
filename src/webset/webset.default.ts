import { AbstractWebset } from './webset.abstract';

export class DefaultWebset extends AbstractWebset {
    getDownloads() {
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
}
