# aira2
## 安装
```
npm i aira2.js
// yarn add aira2.js
```
## 使用
```
import { Aira2 } from 'aira2.js';
const option = {
    url: 'ws://localhost',
    token: ''
}
const aira = new Aira2(option);
```
## 接口
```
// 下载
download(url: string): Promise<any>;
// 获取下载任务
getList(): Promise<List>;
// 删除下载任务
remove(urlIds: string[]): Promise<any>;
```