
/**
 * 测试信息
 */
var mongoose = require('../db.js'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({
    // username : { type: String },                    //用户账号
    // userpwd: {type: String},                        //密码
    // userage: {type: Number},                        //年龄
    // logindate : { type: Date}                       ,//最近登录时间

    classify: { type: String },
    title: { type: String },
    href: { type: String },
    desc: { type: String },
    time: { type: String },
    creat_time: { type: Date},
    source_name : {type: String},
    source_url : {type: String},
});

module.exports = mongoose.model('test',TestSchema);
