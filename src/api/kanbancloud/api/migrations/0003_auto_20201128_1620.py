# Generated by Django 3.1.3 on 2020-11-28 16:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201128_1617'),
    ]

    operations = [
        migrations.AddField(
            model_name='card',
            name='prj_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.project'),
            preserve_default=False,
        ),
        migrations.AlterModelTable(
            name='card',
            table=None,
        ),
        migrations.AlterModelTable(
            name='project',
            table=None,
        ),
    ]
