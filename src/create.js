var create = function create(length, characters) {
    var maske = '';
    if (characters.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
    if (characters.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (characters.indexOf('0') > -1) maske += '0123456789';
    if (characters.indexOf('#') > -1) maske += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var sonuc = '';
    for (var i = length; i > 0; --i) {
        sonuc += maske[Math.floor(Math.random() * maske.length)];
    };
    return sonuc;
};
module.exports = create;