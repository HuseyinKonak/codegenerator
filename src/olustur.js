var olustur = function olustur(uzunluk, semboller = "aA0#") {
    var maske = '';
    if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
    if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (semboller.indexOf('0') > -1) maske += '0123456789';
    if (semboller.indexOf('#') > -1) maske += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var sonuc = '';
    for (var i = uzunluk; i > 0; --i) {
        sonuc += maske[Math.floor(Math.random() * maske.length)];
    };
    return sonuc;
};
module.exports = olustur;