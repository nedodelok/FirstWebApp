from django.contrib import admin
from .models import Comment
# Register your models here.


class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'pub_date', 'author')


admin.site.register(Comment, CommentAdmin)
