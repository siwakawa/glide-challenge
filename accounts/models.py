from django.db import models

class Account(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(blank=True, unique=True)
    
    def __self__(self):
        return "Instance of my class"
        