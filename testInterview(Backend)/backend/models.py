from django.db import models

# Create your models here.

class Device(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    ram = models.CharField(max_length=255, null=False, blank=False)
    usb_ports = models.CharField(max_length=255, null=False, blank=False)
    storage = models.CharField(max_length=255, null=False, blank=False)
    cpu = models.CharField(max_length=255, null=False, blank=False)
    graphics_card = models.CharField(max_length=255, null=False, blank=False)
    weight = models.CharField(max_length=255, null=False, blank=False)
    power_system = models.CharField(max_length=255, null=False, blank=False)
    price = models.IntegerField(null=False, blank=False, default=500)
    date_added = models.DateTimeField(auto_now_add=True)
    date_last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["date_added"]



