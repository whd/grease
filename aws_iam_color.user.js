// ==UserScript==
// @name        AWS IAM Color
// @description Color your AWS experience based on the IAM you are in.
// @include     https://console.aws.amazon.com/*/home*
// @include     https://*.console.aws.amazon.com/*/home*
// @include     https://*.console.aws.amazon.com/GetResource/Console.html*
// @exclude     https://console.aws.amazon.com/s3/home*
// @version     2018.02.02
// ==/UserScript==
var styles = {
    'cloudservices-aws-stage': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, blue 0px, #222 100%) repeat scroll 0% 0% transparent !important; }',
    'cloudservices-aws-data': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, green 0px, #222 100%) repeat scroll 0% 0% transparent !important; }',
    'cloudservices-aws-dev': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, orange 0px, #222 100%) repeat scroll 0% 0% transparent !important; }',
    'cloudservices-aws-prod': 'body #awsgnav #nav-menubar, body #awsgnav #nav-menubar .nav-menu { background: linear-gradient(to bottom, red 0px, #222 100%) repeat scroll 0% 0% transparent !important; }'
};
function setStyle() {
    var iam = document.querySelector('#nav-usernameMenu > div.nav-elt-label');
    console.log(iam);
    if (iam) {
        iam = iam.innerHTML.split(' @ ') [1];
        var style = styles[iam];
        if (style) {
            let head = document.getElementsByTagName('head')[0];
            if (head) {
                let style_element = document.createElement('style');
                style_element.setAttribute('type', 'text/css');
                style_element.textContent = style;
                head.appendChild(style_element);
            }
        }
    } else {
        setTimeout(setStyle, 300);
    }
}
setTimeout(setStyle, 300);
