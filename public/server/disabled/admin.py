from django.contrib import admin

# Register your models here.
from .models import Log,userreg,shopreg,workerreg,workshop,product,order,payment,feedback,notification,complaints,counciling,shop,order_price,cart
admin.site.register(Log)
admin.site.register(userreg)
admin.site.register(workerreg)
admin.site.register(shopreg)
admin.site.register(workshop)
admin.site.register(product)
admin.site.register(order)
admin.site.register(payment)
admin.site.register(feedback)
admin.site.register(notification)
admin.site.register(complaints)
admin.site.register(counciling)
admin.site.register(shop)
admin.site.register(order_price)
admin.site.register(cart)