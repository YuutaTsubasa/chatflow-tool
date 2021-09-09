const { fromEvent } = require("rxjs");

const main = (f) =>
    fromEvent(window, "load")
        .subscribe(f);

exports.main = main;
exports.settingFileName = "setting.yaml";