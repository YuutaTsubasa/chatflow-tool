const fs = require('fs');
const yaml = require('js-yaml');
const { main } = require('./appHelper');
const settings = yaml.load(fs.readFileSync("setting.yaml", 'utf-8'));
const settingFields = [
    "background", "font", 
    "font-size", "font-color", 
    "normal-author-font-color",  
    "manager-author-font-color",
    "member-author-font-color",
    "creator-author-font-color",
    "leftmost"];
const animatedTag = "animated";

main(() => {
    init();
    setInterval(addAnimationToMessages, 50);
})

const init = () => {
    for(let settingField of settingFields) {
        document.querySelector(":root").style.setProperty(`--${settingField}`, settings[settingField]);
    }

    if (settings["show-existed-message"] === 'false') addTagToExistedMessages();
}

const getAllMessageNodes = () => document.querySelectorAll(
        "yt-live-chat-text-message-renderer, " +
        "yt-live-chat-legacy-paid-message-renderer, " +
        "yt-live-chat-paid-message-renderer, " +
        "yt-live-chat-membership-item-renderer" +
        "yt-live-chat-paid-sticker-renderer");

const addTagToExistedMessages = () => {
    getAllMessageNodes().forEach(node => {
        node.className += ` ${animatedTag}`;
    })
}

const addAnimationToMessages = () => {
    getAllMessageNodes().forEach(node => {
            if (node.className.includes(animatedTag))
                return;
            
            node.style.animation = `FlowAnimation ${getRandom(parseInt(settings.minsecond), parseInt(settings.maxsecond))}s linear 0s 1`;
            node.style.top = `${getRandom(2, 92)}%`;
            node.className += ` ${animatedTag}`;
        })
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const getRandom = (min, max) => Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive