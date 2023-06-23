# Generated by Django 4.2.1 on 2023-06-15 11:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("disabled", "0005_alter_order_image"),
    ]

    operations = [
        migrations.AddField(
            model_name="order",
            name="shop_id",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="disabled.shopreg",
            ),
            preserve_default=False,
        ),
    ]
