var content = document.querySelector('.timer');

setTimeout(function () {
    content.innerText = 10;
    setTimeout(function () {
        content.innerText = 9;
      setTimeout(function () {
        content.innerText = 8;
        setTimeout(function () {
            content.innerText = 7;
          setTimeout(function () {
            content.innerText = 6;
            setTimeout(function () {
                content.innerText = 5;
              setTimeout(function () {
                content.innerText = 4;
                setTimeout(function () {
                    content.innerText = 3;
                  setTimeout(function () {
                    content.innerText = 2;
                    setTimeout(function () {
                        content.innerText = 1;
                      setTimeout(function () {
                        content.innerText = "Happy Independence Day!";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);                                     
               