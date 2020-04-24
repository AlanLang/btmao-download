import { BtmaoWebset } from './webset.btmao';
import { DefaultWebset } from './webset.default';
import { AbstractWebset } from './webset.abstract';
class WebSetProvider {
    private websetDict: {
        [key: string]: AbstractWebset;
    } = {
        'www.tldm.net': new DefaultWebset(),
        'www.btmao.cc': new BtmaoWebset(),
        'www.xl720.com': new DefaultWebset(),
    }
    
    get(key: string) {
        return this.websetDict[key] || new DefaultWebset();
    }
}
export const webSetProvider = new WebSetProvider();
