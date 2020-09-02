function addTitle(name1, name2, name3, name4) {

    return 'Mr. ' + name1 + ', Mr. ' + name2 + ', Mr. ' + name3 + ', Mr. ' + name4 + '.';

}
console.log(changeSpacesWith("Kazuya Mishima", "-"));

function changeSpacesWith(str, to) {
    let ganti = "";

    for (i = 0; i <= str.length; i++) {
        if (str[i] == " ") {

            ganti += to;

        } else {
            ganti += str[i];
        }
        return ganti;

    }

    // return str.replace(" ", to);
}

function cutString(str) {
    // var str = "Kazuya Mishima";
    let hasil = "";
    for (i = 0; i < str.length; i++) {
        if (str.lenght >= 5) {
            break;
        }
        hasil = hasil + str[i];
    }
    return str.substr(0, 6);


}