from django.shortcuts import render,redirect
from . import models
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib import messages
from urllib.request import Request 
from . models import userreg,shopreg,product,feedback,complaints,notification,counciling

# Create your views here.

def admin_login(request):
    return render(request,'login.html')
def admin_dashboard(request):
    return render(request,'dashboard.html')
def admin_approveshop(request):
    return render(request,'approveshop.html') 
def admin_complaints(request):
    return render(request,'complaints.html') 
def admin_feedback(request):
    return render(request,'feedback.html')
def admin_add_counciling(request):
    return render(request,'managecounciling.html')    
def admin_manageshop(request):
    return render(request,'manageshop.html')    

def admin_notification(request):
    return render(request,'notification.html')  
def admin_product(request):
    return render(request,'product.html')    
   

# def notification(request):
#     if request.method=='POST':
#       notification=request.POST.get('notification')
#       date=request.POST.get('date')  
#       data=notification(Name=notification,date=date)
#       data.save()          
#       return redirect('dashboard')

def admin_manageusers(request):
    data=userreg.objects.all() 
    return render(request,'manageusers.html',{'data':data})

def admin_viewuser(request):
    data=userreg.objects.all() 
    return render(request,'viewuser.html',{'data':data})

def admin_viewcounciling(request):
    data=counciling.objects.all() 
    return render(request,'viewcounciling.html',{'data':data})

def admin_approve_users(request,id):
    data=userreg.objects.get(id=id) 
    data.userstatus=1
    data.save()
    return redirect('admin_viewuser')  

def admin_delete_user(request,id):
    data=userreg.objects.get(id=id) 
    print(data)
    data.delete()
    return redirect('admin_viewuser')  


def admin_manageshop(request):
    data=shopreg.objects.all() 
    return render(request,'manageshop.html',{'data':data})    

def admin_approveshop(request):
    data=shopreg.objects.all() 
    return render(request,'approveshop.html',{'data':data})    

def admin_approve_shop(request,id):
    data=shopreg.objects.get(id=id) 
    data.shopstatus=1
    data.save()
    return redirect('admin_approveshop')  
def admin_delete_shop(request,id):
    data=shopreg.objects.get(id=id) 
    print(data)
    data.delete()
    return redirect('admin_approveshop')   

def admin_view_product(request):
    data=product.objects.all() 
    return render(request,'product.html',{'data':data})  

def admin_view_feedback(request):
    data=feedback.objects.all() 
    return render(request,'feedback.html',{'data':data}) 

def admin_view_complaints(request):
    data=complaints.objects.all() 
    return render(request,'complaints.html',{'data':data}) 

def admin_view_notification(request):
    data=notification.objects.all() 
    return render(request,'notification.html',{'data':data}) 







def add_counciling(request):
    if request.method == 'POST':
        counciling_type = request.POST.get('counciling_type')
        date = request.POST.get('date')
        description = request.POST.get('description')
        status = "0"

        if counciling_type:  # Check if counciling_type is not empty
            userDetails = models.counciling(
                counciling_type=counciling_type,
                description=description,
                date=date,
                status=status
            )
            userDetails.save()
            return redirect('admin_viewcounciling')
        else:
            # Handle case when counciling_type is not provided
            return render(request, 'managecounciling.html', {'error': 'Counciling type is required.'})
    else:
        return render(request, 'managecounciling.html')



    

def admin_viewcounciling(request):
    data=counciling.objects.all()
    return render(request,'viewcounciling.html',{'data':data})

def admin_deletecounciling(request,id):
    item=counciling.objects.get(id=id)
    item.delete()
    messages.info(request,'delete successfully')
    return redirect('admin_viewcounciling')

def admin_editcounciling(request,id):
    data=counciling.objects.get(id=id)
    return render(request,'editcounciling.html',{'data':data})



def admin_updatecounciling(request,id):
    if request.method=='POST':
        data=counciling.objects.get(id=id)
        data.counciling_type=request.POST["counciling_type"]
        data.date=request.POST["date"]
        data.description=request.POST["description"]
       
        data.save()
        return redirect("admin_viewcounciling")


def admin_login(request):
    if request.method=='POST':
        username=request.POST.get('username')
        password=request.POST.get('password')
        user=authenticate(username=username,password=password)

        if user is not None:
            auth_login(request,user)
            return render(request,'dashboard.html')

        else:
            messages.info(request,'Invalid credentials')
            return redirect('admin_login')

    else:
        return render(request,'login.html')  
       

    
