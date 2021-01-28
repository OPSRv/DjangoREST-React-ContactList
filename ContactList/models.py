


from django.db import models

class ContactListModel(models.Model):
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    image = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    star = models.BooleanField(max_length=5)

    def __str__(self):
        return self.name




