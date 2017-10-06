const timers = {
    manifest: {},
    person: {},
    key: ''
};

function addTimer(cbs) {
    timers.manifest[timers.key] = setInterval(cbs.manifest, 60000);
    timers.person[timers.key] = setInterval(cbs.person, 200);
    timers.key = '';
}

function registerNewKey(key) {
    timers.key = key;
}

function clearTimer(key) {
    clearInterval(timers.manifest[key]);
    clearInterval(timers.person[key]);
}

module.exports = {
    addTimer, registerNewKey, clearTimer
};