from django import forms
from comment.models import Comment


class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ['content']

    parent_comment = forms.IntegerField(
        widget=forms.HiddenInput,
        required=False
    )

    comment_area = forms.CharField(
        label='',
        widget=forms.Textarea
    )
