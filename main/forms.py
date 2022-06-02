from django import forms
from .models import Comment
from django.utils.translation import gettext_lazy


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['content']
        widgets = {
            'content': forms.Textarea(attrs={'cols': 30, 'rows': 5}),
        }
        labels = {
            'content': gettext_lazy('Ваш комментарий')
        }

