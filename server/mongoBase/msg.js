exports.pass = function (res,msg, dat,code) {
    msg = msg||"OK";
    dat =dat|| {};
    code = code||200
   res.status(code).send({code:code,msg: msg, data: dat})
};

exports.fail = function (res,reason, code) {
    code = code||500
    reason = reason||''
    res.status(code).send({code:code,msg: reason})
};
