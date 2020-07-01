const orm = require("../config/orm");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {
            cb(res);
        });
    },
    updateOne: function(val, burgerId) {
        orm.updateOne("burgers", "devoured", val, `id = ${burgerId}`, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;