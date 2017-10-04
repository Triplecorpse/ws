const timers = {
    manifest: {},
    person_update: {},
    persons_alive: {},
    key: ''
};

function addTimer(cbs) {
    timers.manifest[timers.key] = setInterval(cbs.manifest, 60000);
    timers.person_update[timers.key] = setInterval(cbs.person_update, 200);
    timers.persons_alive[timers.key] = setInterval(cbs.persons_alive, 200);
    timers.key = '';
}

function registerNewKey(key) {
    timers.key = key;
}

function clearTimer(key) {
    clearInterval(timers.manifest[key]);
    clearInterval(timers.person_update[key]);
    clearInterval(timers.persons_alive[key]);
}

module.exports = {
    addTimer, registerNewKey, clearTimer
};