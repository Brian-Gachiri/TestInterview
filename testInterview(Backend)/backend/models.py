import re
import unicodedata

from django.db import models
from django.utils.safestring import mark_safe


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
    image = models.FileField(null=True, blank=True)
    slug = models.SlugField(null=True, blank=True)

    @property
    def image_src(self):
        return self.image

    def make_slug(self):
        value = unicodedata.normalize('NFKD', self.name).encode('ascii', 'ignore').decode('ascii')
        value = re.sub('[^\w\s-]', '', value).strip().lower()
        return mark_safe(re.sub('[-\s]+', '-', value))

    def save(
        self, force_insert=False, force_update=False, using=None, update_fields=None
    ):
        if not self.slug:
            self.slug = self.make_slug()
        super().save()

    class Meta:
        ordering = ["date_added"]



