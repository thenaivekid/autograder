# Generated by Django 3.2.20 on 2023-12-01 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autograder', '0003_auto_20231201_1205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='deadline',
            field=models.DateTimeField(),
        ),
    ]