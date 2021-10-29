from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def hello(req):
    x = [{
        "name":"jirasak" ,
        "phone":"0626814488",
        "id":"yesss"
    },
    ]


    return HttpResponse(x)
