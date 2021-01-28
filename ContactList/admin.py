from django.contrib import admin

from .models import ContactListModel


class ContactListAdmin(admin.ModelAdmin):
    list_display = ('id', "name", "surname", "role",
                    "avatar", "status", "email", "gender")
    list_filter = ("name",)
    list_filter = ("surname",)
    list_per_page = 300


admin.site.register(ContactListModel, ContactListAdmin)
