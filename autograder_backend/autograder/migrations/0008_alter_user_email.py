# Generated by Django 4.1.1 on 2023-12-01 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("autograder", "0007_user_subject"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
