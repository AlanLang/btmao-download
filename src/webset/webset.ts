import { BtmaoWebset } from './webset.btmao';
import { DefaultWebset } from './webset.default';
import { AbstractWebset } from './webset.abstract';
import { BtBuluoWebset } from './webset.btbuluo';
class WebSetProvider {
    private websetDict: {
        [key: string]: AbstractWebset;
    } = {
        'www.tldm.net': new DefaultWebset(),
        'www.btmao.cc': new BtmaoWebset(),
        'www.xl720.com': new DefaultWebset(),
        'www.btbuluo.com': new BtBuluoWebset(),
    }
    
    get(key: string) {
        return this.websetDict[key] || new DefaultWebset();
    }
}
export const webSetProvider = new WebSetProvider();
