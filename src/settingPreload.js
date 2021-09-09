const { main, settingFileName } = require("./appHelper");
const { fromEvent } = require('rxjs');
const { ipcRenderer } = require('electron');
const fs = require('fs');
const yaml = require('js-yaml');

const settingFields = {
    "url": "",
    "width": "960",
    "height": "540",
    "background": "rgb(255, 0, 255)",
    "font": "'思源宋體 Heavy', '微軟正黑體'",
    "font-color": "#ffffff",
    "normal-author-font-color": "#ffffff",
    "member-author-font-color": "#107516",
    "manager-author-font-color": "#5e84f1",
    "creator-author-font-color": "#ffd600",
    "font-size": "18px",
    "show-existed-message": false,
    "minsecond": 8,
    "maxsecond": 12,
    "leftmost": "-150%"
};
const injectCSSFieldName = "inject-css";
const defaultInjectCSS = "";
const getInjectCSSInputValue = () => document.getElementById(injectCSSFieldName).value;

const init = () => {
    let settings = {};
    if (fs.existsSync(settingFileName)) {
        settings = yaml.load(fs.readFileSync(settingFileName));
    }

    Object.keys(settingFields).forEach(settingField => {
        document.getElementById(settingField).value = settings[settingField] || settingFields[settingField];
    });


    document.getElementById(injectCSSFieldName).value = settings[injectCSSFieldName] || defaultInjectCSS;
}

const saveFields = () => {
    let settings = {};

    Object.keys(settingFields).forEach(settingField => {
        settings[settingField] = document.getElementById(settingField).value;
    })
    settings[injectCSSFieldName] = getInjectCSSInputValue();
    fs.writeFileSync(settingFileName, yaml.dump(settings));
}

main(() => {
    init();

    let openChatflowButton = document.getElementById("open_chatflow_button");
    fromEvent(openChatflowButton, "click")
        .subscribe(() => {
            saveFields();
            ipcRenderer.send("openChatflowWindow", {
                width: document.getElementById("width").value,
                height: document.getElementById("height").value,
                url: document.getElementById("url").value,
                injectCSS: getInjectCSSInputValue()
            })
        });
});


