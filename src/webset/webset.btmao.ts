import { AbstractWebset } from './webset.abstract';
import { Base64 } from 'js-base64';

export class BtmaoWebset extends AbstractWebset {
    getDownloads() {
        return this.getThunderUrl().map(url => this.decodeUrl(url));
    }

    getThunderUrl(): string[] {
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
    
    decodeUrl(thunderUrl: string) {
        const url = Base64.decode(thunderUrl.replace('thunder://', ''));
        
        return url.substring(2, url.length - 2);
    }
}
