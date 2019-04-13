from rest_framework import viewsets


from .serializers import AccountSerializer
from accounts.models import Account

class AccountViewSet(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()


