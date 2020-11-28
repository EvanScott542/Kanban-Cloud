from django.db import models

class Card(models.Model):
    state = models.CharField(max_length=20)
    label = models.CharField(max_length=200)
    prj_id = models.ForeignKey('Project', on_delete=models.CASCADE)


class Project(models.Model):
    name = models.CharField(max_length=40)