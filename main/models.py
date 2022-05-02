
# from django.contrib.postgres.fields import ArrayField
from django.db import models


# Create your models here.
from django.utils import timezone


class Comment(models.Model):
    # path = ArrayField(models.IntegerField)
    # article_id = models.ForeignKey()
    content = models.TextField('Комментарий')
    pub_date = models.DateTimeField('Дата', default=timezone.now)

    def __str__(self):
        return self.content[0:200]

    def get_offset(self):
        level = len(self.path) - 1
        if level > 5:
            level = 5
        return level

    def get_col(self):
        level = len(self.path) - 1
        if level > 5:
            level = 5
        return 12 - level
