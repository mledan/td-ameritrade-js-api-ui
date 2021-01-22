# td-ameritrade-js-api-ui

Implementation of the getting started for streaming data through the tda-api using javascript
https://developer.tdameritrade.com/content/streaming-data#_Toc504640603

# Prequisites:
1. TD Ameritrade Developer Account

# Usage:
1. Open index.html
2. Get User Principals  from https://developer.tdameritrade.com/user-principal/apis/get/userprincipals-0 and paste response in the designated area to validate principal json on keyup
3. Click Login
4. Click SUBS to /ES with fields 1,2,3,4
5. When done: Click UNSUBS from /ES
6. Click Logout to close the socket

# Planned Updates:
1. Add request types
2. Parameterize Requests and request types
3. Replace User principals with local authentication  https://developer.tdameritrade.com/content/authentication-faq

# Contribute: 
Feel free to use this as a starting base to save you some time in getting started and understanding the API.
If you're looking for python implementation head over to https://github.com/areed1192/td-ameritrade-python-api/

# Demo:
https://mledan.github.io/td-api-demo/
