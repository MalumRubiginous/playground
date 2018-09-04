'use strict';

function requestApi(url){
    const ajax = (method, url, args) => {
        const promise = new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.open(method, url, true );
            const data = (args) ? args : null;
            if (method != "GET") {
                xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            }
            xhttp.send(data);
            xhttp.onload = () => {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    reject(this.statusText);
                }
            };
            xhttp.onerror = () => {
                reject(this.statusText);
            };
        });
        return promise;
    };

  // Adapter pattern
  return {
    'get': (args) => {
      return ajax('GET', url, args);
    },
    'post': (args) => {
      return ajax('POST', url, args);
    },
    'put': (args) => {
      return ajax('PUT', url, args);
    },
    'delete': (args) => {
      return ajax('DELETE', url, args);
    }
  };
};

/*
requestApi(URL)
    .get(params)
    .then(callback.success, callback.error);
*/

