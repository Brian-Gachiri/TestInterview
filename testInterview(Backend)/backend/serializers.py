from rest_framework import serializers
from .models import Device

class DeviceSerializer(serializers.ModelSerializer):
    image_src = serializers.CharField()

    class Meta:
        model = Device
        fields = '__all__'
