function check(e, value) {
    //Check Charater
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (value.indexOf(".") != -1) if (unicode == 46) return false;
    if (unicode != 8) if ((unicode < 48 || unicode > 57) && unicode != 46) return false;
}

function checkLength(id, leng) {
    var fieldLength = document.getElementById(id).value.length;
    //Suppose u want 4 number of character
    if (fieldLength <= leng) {
        return true;
    }
    else {
        var str = document.getElementById(id).value;
        str = str.substring(0, str.length - 1);
        document.getElementById(id).value = str;
    }
}

function dbp_change() {
    var preid = 'dbp';
    var leng = 2;
    checkLength(preid, leng);
}
function cc_change() {
    var preid = 'cc';
    var leng = 3;
    checkLength(preid, leng);
}
function ca_change() {
    var preid = 'ca';
    var leng = 3;
    checkLength(preid, leng);
}
function lf_change() {
    var preid = 'lf';
    var leng = 3;
    checkLength(preid, leng);
}
function bvm_change() {
    var preid = 'bvm';
    var leng = 3;
    checkLength(preid, leng);
}
function ila_change() {
    var preid = 'ila';
    var leng = 3;
    checkLength(preid, leng);
}
function utd_change() {
    var preid = 'utd';
    var leng = 4;
    checkLength(preid, leng);
}
function uti_change() {
    var preid = 'uti';
    var leng = 4;
    checkLength(preid, leng);
}
function utp_change() {
    var preid = 'utp';
    var leng = 4;
    checkLength(preid, leng);
}
function aumb_change() {
    var preid = 'aumb';
    var leng = 4;
    checkLength(preid, leng);
}
function acm_change() {
    var preid = 'acm';
    var leng = 4;
    checkLength(preid, leng);
}
function dvo_change() {
    var preid = 'dvo';
    var leng = 4;
    checkLength(preid, leng);
}
function prs_change() {
    var preid = 'prs';
    var leng = 1;
    checkLength(preid, leng);
}
function lcn_change() {
    var preid = 'lcn';
    var leng = 3;
    checkLength(preid, leng);
}
function saco_change() {
    var preid = 'saco-vitelino-mm';
    var leng = 2;
    checkLength(preid, leng);
}
function dbp_eco1_change() {
    var preid = 'eco1-dbp';
    var leng = 1;
    checkLength(preid, leng);
}
