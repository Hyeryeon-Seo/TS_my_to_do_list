import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

@font-face {
	font-family: "Pretendard-Light";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
		format("woff");
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Regular";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
		format("woff");
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Bold";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
		format("woff");
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Black";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
		format("woff");
	font-weight: 900;
	font-style: normal;
}

  html { // body혹은html이라고 써줌으로써 전체에 적용
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin: 0 auto 0;
  min-width: 800px;
  max-width: 1200px;
  min-height: 1000px;
  font-family: "Pretendard-Regular"; /*전체태그적용위해 필요*/
  background-color: rgb(250, 243, 231);
    }

  * {
      font-family: "Pretendard-Regular"; // 이걸 적용해야 form의 input,btn 등에도 폰트적용
  }
 
  header {
  width: 1110px;
  display: flex;
  justify-content: space-between; 
  margin-top: 30px;
  margin-bottom: 10px; 
    } 

  main {
  margin: 10px;
  width: 1110px;
  }

  input {
    height: 30px;
    font-size: 15px;
    margin-top: 15px;
    border-radius: 5px;
    border: 0px;
  }

  form {
	width: 100%;
	background-color: rgb(245, 203, 169);
	height: 70px;
	display: flex;
	justify-content: space-around; 
	padding: 10px;
	border-radius: 15px;
  }

  button {
  font-size: medium;
	border-radius: 10px;
  }

  hr {
  height: 1px;
  background: rgb(229, 178, 253);
  border: 0;
  }
`;

export default GlobalStyle;
