# Generated by Django 4.0.2 on 2022-05-18 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=1000, verbose_name='Комментарий')),
                ('content_ru', models.TextField(max_length=1000, null=True, verbose_name='Комментарий')),
                ('content_en', models.TextField(max_length=1000, null=True, verbose_name='Комментарий')),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='Дата')),
                ('author', models.CharField(default='unknown', max_length=200, verbose_name='Автор')),
            ],
        ),
    ]
