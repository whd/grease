// ==UserScript==
// @name        AWS IAM Color
// @description Color your AWS experience based on the IAM you are in.
// @downloadURL https://people.mozilla.org/~wdawson/aws_iam_color.user.js
// @include     https://console.aws.amazon.com/*/home*
// @include     https://*.console.aws.amazon.com/*/home*
// @include     https://*.console.aws.amazon.com/GetResource/Console.html*
// @exclude     https://console.aws.amazon.com/s3/home*
// @version     2014.9.28
// @grant       GM_addStyle
// ==/UserScript==
// There is no "window.addEventListener('load', ...)" wrapper because chromium sucks.
var styles = {
    'moz-svc-dev': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, blue 0px, #222 100%) repeat scroll 0% 0% transparent !important; }',
    'mozilla': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, green 0px, #222 100%) repeat scroll 0% 0% transparent !important; }',
    'cloudservices-aws-dev': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, orange 0px, #222 100%) repeat scroll 0% 0% transparent !important; }',
    'moz-svc-prod': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, red 0px, #222 100%) repeat scroll 0% 0% transparent !important; }'
};
function setStyle() {
    var iam = document.querySelector('#nav-usernameMenu > div.nav-elt-label');
    console.log(iam);
    if (iam) {
        iam = iam.innerHTML.split(' @ ') [1];
        var style = styles[iam];
        if (style) {
            GM_addStyle(style);
        }
    } else {
        setTimeout(setStyle, 300);
    }
}
setTimeout(setStyle, 300);
