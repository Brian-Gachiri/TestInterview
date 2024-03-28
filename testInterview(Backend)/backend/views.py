from django.db.models import Q
from rest_framework import viewsets
from .models import Device
from .serializers import DeviceSerializer


class DeviceViewSet(viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        if self.action == 'list' and self.request.query_params.get('search'):
            search = self.request.query_params.get('search')
            return Device.objects.filter(Q(name__icontains=search) |
                                         Q(ram__icontains=search) |
                                         Q(usb_ports__icontains=search) |
                                         Q(storage__icontains=search) |
                                         Q(cpu__icontains=search) |
                                         Q(weight__icontains=search) |
                                         Q(graphics_card__icontains=search) |
                                         Q(power_system__icontains=search))

        return Device.objects.all()
