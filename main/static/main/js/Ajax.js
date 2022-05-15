
$(document).ready(function () {
          // отслеживаем событие отправки формы
          $('#CommentForm').submit(function () {
              // создаем AJAX-вызов
              $.ajax({
                  data: $(this).serialize(), // получаем данные формы
                  type: $(this).attr('method'), // GET или POST
                  url: "images_page.html",
                  // если успешно, то
                  success: function (response) {
                      console.log(response)
                      let pub_date = new Date(response['pub_date'])
                      let info = document.createElement('p')
                      info.className = "info"
                      info.innerHTML = "Комментарий пользователя: " + response['author'] + '<br>'
                       + "Дата Публикации : " + pub_date.toLocaleDateString() + " " + pub_date.toLocaleTimeString()
                       //   + "Дата Публикации : " + pub_date
                      let comment = document.createElement('div');
                      let p = document.createElement('p')
                       p.innerHTML = response['content']
                      comment.append(p)
                      comment.prepend(info)
                      comment.className = "comment";
                      commentsid.append(comment)
                  },
                  // если ошибка, то
                  error: function (response) {
                      // предупредим об ошибке
                      alert(response.responseJSON.errors);
                      console.log(response.responseJSON.errors)
                  }
              });
              return false;
          });
      })