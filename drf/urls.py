from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

from .views import root_route
from .views import CurrentProfileView

urlpatterns = [
    path('', root_route),
    
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),

    path('admin/', admin.site.urls),

    path('users/', include('users.urls')), 

    path('api/', include('profiles.urls')),
    path('current-profile/', CurrentProfileView.as_view()),      

    path('', include('posts.urls')),

    path('', include('comments.urls')),

    path('', include('likes.urls')),
    
    path('', include('followers.urls')),
]