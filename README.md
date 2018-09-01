# FIBOS快速交易
`fibos_client.js`来自 [https://github.com/adshao/fibos-scripts](https://github.com/adshao/fibos-scripts), 运行本项目命令需要先安装好fibos, 安装方法请看以上仓库说明， nodejs和npm安装请自行google

## 配置
1. 在项目目录打开终端， 运行`npm install`安装项目依赖  
2. 打开`client.js`输入你的帐号信息

## 功能
以下命令需要在当前项目目录打开一个终端输入

### 查询价格
每秒输出当前实时价格
```bash
fibos price
```
### 查询帐户余额
```bash
fibos balance
```
### EOS主链转帐到FIBOS侧链
数值必填
```bash
fibos eosin 1.0000
```
### FIBOS转帐到EOS主链
数值必填
```bash
fibos eosout 1.0000
```
### EOS换FO
参数定义： 
1. all: 换全部EOS 
2. half：换一半EOS
3. quarter: 换1/4EOS
4. 具体数值

```bash
fibos eos2fo all
fibos eos2fo half
fibos eos2fo quarter
fibos eos2fo 999.0000
```

### FO换EOS
参数定义： 
1. all: 换全部FO 
2. half：换一半FO
3. quarter: 换1/4FO
4. 具体数值

```bash
fibos fo2eos all
fibos fo2eos half
fibos fo2eos quarter
fibos fo2eos 999.0000
```
### 查询内存价格
每秒输出一次当前内存价格
```bash
fibos ramprice
```
### 查询帐户内存
```bash
fibos ram
```