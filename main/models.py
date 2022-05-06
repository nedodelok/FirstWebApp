
# from django.contrib.postgres.fields import ArrayField
from django.db import models
# Create your models here.
from django.utils import timezone


# TODO: сделать модель постов
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField('Дата', default=timezone.now)

    def __str__(self):
        return self.title


class Comment(models.Model):
    # post_id = models.ForeignKey(Post, related_name='comments')
    # path = ArrayField(models.IntegerField)
    content = models.TextField('Комментарий', max_length=1000 )
    pub_date = models.DateTimeField('Дата', auto_now_add=True)
    author = models.CharField('Автор', max_length=200)

    def __str__(self):
        return self.content[0:200]

    # def get_offset(self):
    #     level = len(self.path) - 1
    #     if level > 5:
    #         level = 5
    #     return level
    #
    # def get_col(self):
    #     level = len(self.path) - 1
    #     if level > 5:
    #         level = 5
    #     return 12 - level
