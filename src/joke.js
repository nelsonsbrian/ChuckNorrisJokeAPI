export class Joke {
    getrandomJoke() {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let url = `https://api.chucknorris.io/jokes/random`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
      });
    }

    getCategoryJoke(type) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://api.chucknorris.io/jokes/random?category=${type}`;
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          };
          request.open("GET", url, true);
          request.send();
        });
      }

    getCategories() {
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            let url = `https://api.chucknorris.io/jokes/categories`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET", url, true);
            request.send();
        });
    }
}

export function makeUpper(word) {
    let result = "";
    for(let i=0;i<word.length;i++) {
        if (i === 0) {
            result += word[i].toUpperCase();
        } else {
            result += word[i];
        }
    }
    return result;
}