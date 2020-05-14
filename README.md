<b>Clone this repo by running:</b>

git clone https://github.com/anton4uk1/ABCMouse.git

<b>Get all the packages up to date:</b>

npm i

<b>How to run all tests:</b>

./node_modules/.bin/wdio wdio.conf.js 

<b> Run single test:</b>
1. Mark your test with .only like this:
2. it.only(.......)
3. ./node_modules/.bin/wdio local.wdio.conf.js --spec specs/(path) 

   <b>Example:</b>
   
   ./node_modules/.bin/wdio wdio.conf.js --spec specs/login/login-spec.js
