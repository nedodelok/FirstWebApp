from django.contrib import admin
from .models import Comment
from modeltranslation.admin import TranslationAdmin
# Register your models here.


class CommentAdmin(TranslationAdmin):
    list_display = ('content_ru',
                    'content_en',
                    'pub_date',
                    'author')


admin.site.register(Comment, CommentAdmin)
