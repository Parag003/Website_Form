from django.db import models

# Create your models here.


class details(models.Model):
    t_name = models.CharField(max_length=120,null=True,blank=True)
    t_no = models.IntegerField(max_length=10,null=True,blank=True)
    l_name = models.CharField(max_length=120,null=True,blank=True)
    l_mail = models.CharField(max_length=120,null=True,blank=True)
    l_phone = models.IntegerField(max_length=10,null=True,blank=True)
    name2 = models.CharField(max_length=120,null=True,blank=True)
    mail2 = models.CharField(max_length=120,null=True,blank=True)
    name3 = models.CharField(max_length=120,null=True,blank=True)
    mail3 = models.CharField(max_length=120,null=True,blank=True)
    name4 = models.CharField(max_length=120,null=True,blank=True)
    mail4 = models.CharField(max_length=120,null=True,blank=True)
    password = models.CharField(max_length=120)

    # def __str__(self) -> None:
    #     return self.t_name
