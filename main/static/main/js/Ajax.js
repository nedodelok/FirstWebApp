
$(document).ready(function () {
    console.log('Бебра')
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
                      let info = document.createElement('p')
                      info.className = "info"
                      info.innerHTML = "Комментарий пользователя: " + response['author']
                           + "$Дата Публикации : " + response['pub_date']
                      let comment = document.createElement('div');
                       comment.innerHTML = response['content']
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