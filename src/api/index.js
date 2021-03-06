/*
* 包含n个接口请求函数的模块
* 函数的返回值是promise对象
* */
import ajax from './ajax'
const BASE = '/api'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (latitude,longitude) => ajax(BASE+`/position/${latitude},${longitude}`)

//[2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE+'/index_category')

//[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({latitude,longitude}) => ajax(BASE+'/shops',{latitude,longitude})

// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

//手机号验证码登陆
export const reqLoginSms = (phone,code) => ajax(BASE+ '/login_sms', {phone,code}, 'POST')

// 用户名密码登陆
export const reqLoginPwd = ({name,pwd,captcha}) => ajax(BASE+ '/login_pwd', {name,pwd,captcha}, 'POST')

// 根据会话获取用户信息
export const  reqUserInfo = () => ajax(BASE+ '/userinfo')

//退出登录
export const reqLogout = () => ajax(BASE+ '/logout')

//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
//获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
