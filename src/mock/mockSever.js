/*
* 使用mockjs 提供 mock数据接口
* */

import Mock from 'mockjs'
import data from './data.json'  // data本身是json 数据，webpack 在打包时会自动解析成对应的js对象或数组

/*
* 如果只暴漏一个，那就是暴漏data整个数据
* 分别暴漏，按类型不同来暴漏，data中有不同类型的接口
* */

Mock.mock('/goods', {code: 0, data: data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})

