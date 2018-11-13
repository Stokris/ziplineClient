let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
    //this is the local host name of your api
    APIURL = 'http://localhost:3000';
    break;
    //this is the deployed react app
    case 'https://ziplineclient.herokuapp.com':
    //this is the full url of deployed api
    APIURL = 'https://ziplineserver.herokuapp.com'
};

export default APIURL;