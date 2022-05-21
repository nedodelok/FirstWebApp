
# from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.
from django.utils import timezone


class Comment(models.Model):
    # post_id = models.ForeignKey(Post, related_name='comments')
    # path = ArrayField(models.IntegerField)
    # TODO : сделать отображение поля комментарий с переводом
    content = models.TextField(_(u'Комментарий'), max_length=1000)
    pub_date = models.DateTimeField(_('Дата'), auto_now_add=True)
    author = models.CharField(_('Автор'), default='unknown', max_length=200)

    def __str__(self):
        return self.content[0:200]

