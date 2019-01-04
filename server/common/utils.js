//  用作外部请求微信小程序接口  获取小程序openid

const request = require("request");
class Ut {

    /**
     * promise化request
     * @param {object} opts 
     * @return {Promise<[]>}
     */
    static promiseReq(opts = {}) {
        return new Promise((resolve, reject) => {
            request(opts, (e, r, d) => {
                if (e) {
                    return reject(e);
                }
                if (r.statusCode != 200) {
                    return reject(`back statusCode：${r.statusCode}`);
                }
                return resolve(d);
            });
        })
    };

};

module.exports = Ut;