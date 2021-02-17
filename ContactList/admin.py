from django.contrib import admin

from .models import ContactListModel


class ContactListAdmin(admin.ModelAdmin):
    list_display = ('id', 'user_id', "name", "phone", "image",
                    "gender", "email", "address", "star")
    list_filter = ("name",)
    list_filter = ("name",)
    list_per_page = 300


admin.site.register(ContactListModel, ContactListAdmin)
