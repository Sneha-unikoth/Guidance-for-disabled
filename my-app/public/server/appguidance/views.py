from django.shortcuts import render
from django.conf import settings

from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from disabled.models import Log,userreg,shopreg,workshop,product,order,payment,feedback,notification,complaints,counciling,shop,cart
from.serializers import LoginUserSerializer, UserRegisterSerializer,ShopRegisterSerializer,WorkshopSerializer,productSerializer,paymentSerializer,feedbackSerializer,notificationSerializer,complaintsSerializer,councilingSerializer,shopSerializer,cartSerializer


# Create your views here.
class UserRegisterSerializersAPIView(GenericAPIView):
    serializer_class = UserRegisterSerializer
    serializer_class_login = LoginUserSerializer

    def post(self,request):

        login_id=''
        username=request.data.get('username')
        password=request.data.get('password')
        name=request.data.get('name')
        place=request.data.get('place')
        phone=request.data.get('phone')
        disability=request.data.get('disability')
        gender=request.data.get('gender')
  
        role='user'
        userstatus='0'

        if(Log.objects.filter(username=username)):
            return Response({'message': 'Duplicate User Found'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login =self.serializer_class_login(data={'username':username,'password':password,'role':role})
            if serializer_login.is_valid():
                log=serializer_login.save()
                login_id=log.id 
                print(login_id)
            serializer = self.serializer_class(data={'login_id':login_id,'username':username,'name':name,'place':place,'phone':phone,'disability':disability,'gender':gender,'password':password,'role':role,'userstatus':userstatus})
            print(serializer)
            if serializer.is_valid():
                print('hai')
                serializer.save()
                return Response({'data':serializer.data,'message':'User registered successfully','success':True},status=status.HTTP_201_CREATED)
            else:
                    return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 

class LoginUserAPIView(GenericAPIView):
    serializer_class=LoginUserSerializer
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=Log.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serializer=LoginUserSerializer(logreg, many=True)
            for i in read_serializer.data:
                id=i['id']
                print(id)
                role=i['role']
                regdata=userreg.objects.all().filter(login_id=id).values()
                print(regdata)
                for i in regdata:
                    u_id=i['id']
                    l_status=i['userstatus']
                    name=i['name']
                    print(u_id)
          


                regdata=shopreg.objects.all().filter(login_id=id).values()
                print(regdata)
                for i in regdata:
                    u_id=i['id']
                    l_status=i['shopstatus']
                    name=i['name']
                    print(u_id)
            return Response({'data':{'login_id':id,'username':username,'password':password,'role':role,'user_id':u_id,'l_status':l_status,'name':name},'success':True,'message':'logged in successfully'},status=status.HTTP_201_CREATED)
        else:
            return Response({'data':'username or password is invalid','success':False,},status=status.HTTP_400_BAD_REQUEST)   


class ShopRegisterSerializersAPIView(GenericAPIView):
    serializer_class = ShopRegisterSerializer
    serializer_class_login = LoginUserSerializer

    def post(self,request):

        login_id=''
        name=request.data.get('name')
        password=request.data.get('password')
        username=request.data.get('name')
        place=request.data.get('place')
        phone=request.data.get('phone')
        address=request.data.get('address')
        # login_id=request.data.get('login')
        role='shop'
        shopstatus='0'

        if(Log.objects.filter(username=name)):
            return Response({'message': 'Duplicate User Found'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login =self.serializer_class_login(data={'username':name,'password':password,'role':role})
            if serializer_login.is_valid():
                log=serializer_login.save()
                login_id=log.id 
                print(login_id)
            serializer = self.serializer_class(data={'login_id':login_id,'name':name,'place':place,'phone':phone,'address':address,'password':password,'role':role,'shopstatus':shopstatus})
            print(serializer)
            if serializer.is_valid():
                print('hai')
                serializer.save()
                return Response({'data':serializer.data,'message':'User registered successfully','success':True},status=status.HTTP_201_CREATED)
            return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 

class WorkshopSerializerAPIView(GenericAPIView):
    serializer_class = WorkshopSerializer
 

    def post(self,request):

   
      
        name=request.data.get('name')
        place=request.data.get('place')
        user_id=request.data.get('user_id')
        # role='user'
        workstatus='0'
        serializer = self.serializer_class(data={'user_id':user_id,'name':name,'place':place,'role':role,'workstatus':workstatus})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'User registered successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)                                  

class productSerializersAPIView(GenericAPIView):
    serializer_class = productSerializer
   

    def post(self,request):

      
        product_name=request.data.get('product_name')
        product_rate=request.data.get('product_rate')
        description=request.data.get('description')
        size=request.data.get('size')
        color=request.data.get('color')
        product_rate=request.data.get('product_rate')
        image=request.data.get('image')
       
        shop_id=request.data.get('shop_id')
        # role='user'
        product_status='0'
        serializer = self.serializer_class(data={'product_name':product_name,'product_rate':product_rate,'description':description,'size':size,'color':color,'image':image,'shop_id':shop_id,'status':product_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'add product successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 

# class orderSerializersAPIView(GenericAPIView):
#     serializer_class = orderSerializer
  

#     def post(self,request):

#         login_id=''
        
#         product_name=request.data.get('product_name')
#         quantity=request.data.get('quantity')
#         price=request.data.get('price')

#         total_price=request.data.get('total_price')
#         image=request.data.get('image')
#         user_id=request.data.get('user_id')
#         # role='user'
#         order_status='0'
#         serializer = self.serializer_class(data={'product_name':product_name,'quantity':quantity,'price':price'total_price':total_price,'image':image,'user_id':user_id,'role':role,'status':order_status})
#         print(serializer)
#         if serializer.is_valid():
#             print('hai')
#             serializer.save()
#             return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
#         return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 




class paymentSerializersAPIView(GenericAPIView):
    serializer_class = paymentSerializer
  

    def post(self,request):

   
        
        product_name=request.data.get('product_name')
        date=request.data.get('date')
        total_amount=request.data.get('total_amount')
        user_id=request.data.get('user_id')
        # role='user'
        payment_status='1'
        serializer = self.serializer_class(data={'product_name':product_name,'date':date,'total_amount':total_amount,'user_id':user_id,'role':role,'status':payment_status})
        print(serializer)
        if serializer.is_valid():
          
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)       


class feedbackSerializersAPIView(GenericAPIView):
    serializer_class = feedbackSerializer
  

    def post(self,request):

   
        
        name=request.data.get('name')
        feedback=request.data.get('feedback')
        date=request.data.get('date')
        user_id=request.data.get('user_id')
        # role='user'
        feedback_status='0'
        serializer = self.serializer_class(data={'name':name,'feedback':feedback,'date':date,'user_id':user_id,'status':feedback_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 

class notificationSerializersAPIView(GenericAPIView):
    serializer_class = notificationSerializer
  

    def post(self,request):

   
        notification=request.data.get('notification')
        date=request.data.get('date')
        shop_id=request.data.get('shop_id')
        # role='user'
        notification_status='0'
        serializer = self.serializer_class(data={'notification':notification,'date':date,'shop_id':shop_id,'status':notification_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':' successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)

   


class complaintsSerializersAPIView(GenericAPIView):
    serializer_class = complaintsSerializer
  

    def post(self,request):

        name=request.data.get('name')
        complaints=request.data.get('complaints')
        date=request.data.get('date')
        user_id=request.data.get('user_id')
        # role='user'
        complaints_status='0'
        serializer = self.serializer_class(data={'name':name,'complaints':complaints,'date':date,'user_id':user_id,'status':complaints_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 

class councilingSerializersAPIView(GenericAPIView):
    serializer_class = councilingSerializer
  

    def post(self,request):

   
        counciling=request.data.get('counciling')
        date=request.data.get('date')
        user_id=request.data.get('user_id')
        # role='user'
        status='0'
        serializer = self.serializer_class(data={'counciling':counciling,'date':date,'user_id':user_id,'role':role,'status':status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST) 


class shopSerializersAPIView(GenericAPIView):
    serializer_class = shopSerializer
  

    def post(self,request):

   
        name=request.data.get('name')
        date=request.data.get('date')
        user_id=request.data.get('user_id')
        user_contact=request.data.get('user_contact')
        worker_name=request.data.get('worker_name')
        # role='user'
        shop_status='0'
        serializer = self.serializer_class(data={'name':name,'date':date,'user_id':user_id,'user_contact':user_contact,'worker_name':worker_name,'role':role,'status':shop_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)





    
                   

class Get_ProductAPIView(GenericAPIView):
    serializer_class = productSerializer 
    def get(self,request):
        queryset = product.objects.all()
        if(queryset.count()>0):
            serializer = productSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'product all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST) 

class SingleProductAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = product.objects.get(pk=id)
        serializer = productSerializer(queryset)
        return Response({'data':serializer.data,'message':'single product data','success':True},status=status.HTTP_200_OK)

class Get_UserRegisterAPIView(GenericAPIView):
    serializer_class = UserRegisterSerializer 
    def get(self,request):
        queryset = userreg.objects.all()
        if(queryset.count()>0):
            serializer =UserRegisterSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'user all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)  

class SingleUserRegisterAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = userreg.objects.get(pk=id)
        serializer = UserRegisterSerializer(queryset)
        return Response({'data':serializer.data,'message':'single user data','success':True},status=status.HTTP_200_OK)



class Get_ShopRegisterAPIView(GenericAPIView):
    serializer_class = ShopRegisterSerializer
    def get(self,request):
        queryset = shopreg.objects.all()
        if(queryset.count()>0):
            serializer =ShopRegisterSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'shop all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)  

class SingleShopRegisterAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = shopreg.objects.get(pk=id)
        serializer = ShopRegisterSerializer(queryset)
        return Response({'data':serializer.data,'message':'single shop data','success':True},status=status.HTTP_200_OK)

class Get_notificationAPIView(GenericAPIView):
    serializer_class = notificationSerializer
    def get(self,request):
        queryset = notification.objects.all()
        if(queryset.count()>0):
            serializer =notificationSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'notification all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)  

class SinglenotificationAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = notification.objects.get(pk=id)
        serializer = notificationSerializer(queryset)
        return Response({'data':serializer.data,'message':'single notification data','success':True},status=status.HTTP_200_OK)

class Get_complaintsAPIView(GenericAPIView):
    serializer_class = complaintsSerializer
    def get(self,request):
        queryset = complaints.objects.all()
        if(queryset.count()>0):
            serializer =complaintsSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'notification all data','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)  

class SinglecomplaintsAPIView(GenericAPIView):
    def get(self,request,id):
        queryset = complaints.objects.get(pk=id)
        serializer = complaintsSerializer(queryset)
        return Response({'data':serializer.data,'message':'single notification data','success':True},status=status.HTTP_200_OK)

class Update_UserAPIView(GenericAPIView):
    serializer_class=UserRegisterSerializer
    def put(self,request,id):
        queryset=userreg.objects.get(pk=id)
        print(queryset)
        serializer=UserRegisterSerializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','success':False},status=status.HTTP_400_BAD_REQUEST)


class Update_ShopAPIView(GenericAPIView):
    serializer_class=ShopRegisterSerializer
    def put(self,request,id):
        queryset=shopreg.objects.get(pk=id)
        print(queryset)
        serializer=ShopRegisterSerializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','success':False},status=status.HTTP_400_BAD_REQUEST)   


class cartSerializersAPIView(GenericAPIView):
    serializer_class = cartSerializer
  

    def post(self,request):
        product_name=""
        image=""
        price=""
        quantity=""
        total_price=""
        cart_status=""

        usr=request.data.get('user')
        print("-----",usr)
        prdt=request.data.get('product')
        print(prdt)
        quty=request.data.get('quantity')
        quantity=int(quty)
        cart_status="0"
       
        
       
        carts=cart.objects.filter(user=usr,product=prdt)
        print("========",cart)
        if carts.exists():
            return Response({'message':'item is already in cart','success':False},status=status.HTTP_400_BAD_REQUEST)
        else:
            data=product.objects.all().filter(id=prdt).values()
            for i in data:
                print(i)
                price=i['product_rate']
                p_status=i['status']
                p_name=i['product_name']
                price=int(price)
                print(price)
                total_price=price*quantity
                print(total_price)
                tp=str(total_price)
            producto=product.objects.get(id=prdt)
            image=producto.image  
            print(image)  



        serializer = self.serializer_class(data={'product_name':p_name,'image':image,'user':usr,'quantity':quantity,'product':prdt,'total_price':tp,'cart_status':cart_status})
        print(serializer)
        if serializer.is_valid():
            print('hai')
            serializer.save()
            return Response({'data':serializer.data,'message':'successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':"Failed",'success':False},status=status.HTTP_400_BAD_REQUEST)

class SingleCartAPIView(GenericAPIView):
    def get(self,request,id):
        u_id=""
        qset=userreg.objects.all().filter(pk=id).values()
        for i in qset:
            u_id=i['id']
        data=cart.objects.filter(user=u_id).values()
        serialized_data=list(data)
        print(serialized_data)
        for obj in serialized_data:
            obj['image']=settings.MEDIA_URL+str(obj['image']) 
        return Response({'data':data,'message':'single product data','success':True},status=status.HTTP_200_OK)


class CartIncrementQuantityAPIView(GenericAPIView):
    def put(self,request,id):
        cart_item=cart.objects.get(pk=id)
        qny=cart_item .quantity 
        qant=int(qny)
        cart_item.quantity=qant+1
        q=cart_item.quantity
        qn=int(q)
        pr=cart_item.product.product_rate
        price=int(pr)
        tp=price*qn
        cart_item.total_price=tp
        serialized_data=cartSerializer(cart_item,context={'request':request}.data)
        serialized_data['image']=str(serialized_data['image']).split('http://localhost:8000')[1]
        return Response({'data':serialized_data,'message':'cart item quantity updated','success':True},status=status.HTTP_200_OK)



# class cartDecrementQuantityAPIView(GenericAPIView):
#     def put(self,request,id):
#         cart_item=cart.objects.get(pk=id)
#         qny=cart_item .quantity 
#         qant=int(qny)
#         if qant>1:
#             qnty=cart_item.quantity
#             qty=int(qnty)
#             cart_item.quantity=qty-1
#             q=cart_item.quantity
#             qn=int(q)
#             pr=cart_item.product.product_price
#             price=int(pr)
#             tp=price*qn
#             cart_item.total_price=tp
#             cart_item.save()
#             serialized_data=cartSerializer(cart_item,context={'request':request}.data)
#             serialized_data['image']=str(serialized_data['image']).split('http://localhost:8000')[1]
#             return Response({'data':serialized_data,'message':'cart item quantity updated','success':True},status=status.HTTP_200_OK)
#         else:
#             return Response({'message':'quantity cannot be less than 1','success':False},status=status.HTTP_400_BAD_REQUEST)

# class Delete_CartAPIView(GenericAPIView):
#     def delete(self,request,id):
#         delmember=cart.objects.get(pk=id)
#         delmember.delete()
#         return Response({'message':'cart successfully','success':True},status=status.HTTP_200_OK)


# class OrderAPIView(GenericAPIView):
#     serializer_class=orderSerializer
#     def post(self,request):
#         user=request.data.get('user')
#         carts=cart.objects.filter(user=user,cart_status=0)
#         if not carts.exists():
#             return Response({'message':'No item in cart to place order','success':False},status=status.HTTP_400_BAD_REQUEST)

#         tot=carts.aggregate(total=sum('total price'))['total']
#         total=str(tot)
#         print("=============total    ",total)
#         order_data=[]
#         for i in carts:
#             order_data.append({
#                 'user':user,
#                 'product_name':i.p_name,
#                 'quantity':i.quantity,
#                 'total_price':i.total_price,
#                 'image':image,
#                 'order_status':"0"
#                 'all_price':total
#             })
#              print("=============order_data    ",order_data)    
#              order_status="1"
#              i.save()
#         serializer=self.serializer_class(data=order_data,many=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'data':serialized.data,'message':'order placed successfully','success':True},status=status.HTTP_201_CREATED)
#         return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)
   

# class AllPriceAPIView(GenericAPIView):
#     def get(self,request,id):
#         carts=cart.objects.filter(user=id,cart_status=1)
#         print(carts)
#         tot=carts.aggregate(total=sum)
#         Total_prices=str(tot)
#         print(tot)
#         price_status="0"
#         return Response({'data':{'total_price':Total_prices},'message':'get order price successfully','success':True},status=status.HTTP_201_CREATED)

# class SingleOrderAPIView(GenericAPIView):
#     def get(self,request,id):
#         qset=usereg.objects.all().filter(pk=id).values()
#         for i in qset:
#             u_id=i['id']
#         data=order.objects.filter(user=u_id).values()
#         serialized_data=list(data)
#         print(serialized_data)
#         for obj in serialized_data:
#             obj['image']=settings.MEDIA_URL+str(obj['image'])
#         return Response({'data':data,'message':'single order data','success':True},status=status.HTTP_200_OK)    

     
# class Get_shopAPIView(GenericAPIView):
#     serializer_class = shopSerializer
#     def get(self,request):
#         queryset = shop.objects.all()
#         if(queryset.count()>0):
#             serializer =shopSerializer(queryset,many=True)
#             return Response({'data':serializer.data,'message':'shop all data','success':True},status=status.HTTP_200_OK)
#         else:
#             return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)

        
