from django.urls import path
from appguidance import views

urlpatterns = [
        path("user",views.UserRegisterSerializersAPIView.as_view(),name="user"),
        path("worker",views.WorkerRegisterSerializerAPIView.as_view(),name="worker"),
        path("shop",views.ShopRegisterSerializersAPIView.as_view(),name="shop"),
        path("work",views.WorkshopSerializerAPIView.as_view(),name="work"),
        path("product",views.productSerializersAPIView.as_view(),name="product"),
        # path("order",views.orderSerializersAPIView.as_view(),name="order"),
        path("payment",views.UserOrderPaymentAPIView.as_view(),name="payment"),
        path("feedback",views.feedbackSerializersAPIView.as_view(),name="feedback"),
        path("get_all_feedback",views.Get_feedbackAPIView.as_view(),name="get_all_feedback"), 

        path("notification",views.notificationSerializersAPIView.as_view(),name="notification"),
        path("complaints",views.complaintsSerializersAPIView.as_view(),name="complaints"),
        path("get_all_complaints",views.Get_complaintsAPIView.as_view(),name="get_all_complaints"), 
        path("singlecomplaint/<int:id>",views.SinglecomplaintsAPIView.as_view(),name="singlecomplaint"), 
        # path("counciling",views.councilingSerializersAPIView.as_view(),name="counciling"),
        path("shops",views.shopSerializersAPIView.as_view(),name="shops"),  
        path("login",views.LoginUserAPIView.as_view(),name="login"), 
        path("cart",views.cartSerializersAPIView.as_view(),name="cart"), 
        path("order",views.OrderAPIView.as_view(),name="order"), 
        path("all_price/<int:id>",views.AllPriceAPIView.as_view(),name="all_price"), 
        path("singleorder/<int:id>",views.SingleOrderAPIView.as_view(),name="singleorder"),
        path("replay/<int:id>",views.ReplayAPIView.as_view(),name="replay"),  
        path("singlereplay/<int:id>",views.SinglereplayAPIView.as_view(),name="singlereplay"), 
        

        path("get_all_product",views.Get_ProductAPIView.as_view(),name="get_all_product"),
        path("all_order",views.AllOrderAPIView.as_view(),name="all_order"), 
        path("get_single_product/<int:id>",views.SingleProductAPIView.as_view(),name="get_single_product"), 
        path("get_all_user",views.Get_UserRegisterAPIView.as_view(),name="get_all_user"),
        path("get_Single_user/<int:id>",views.SingleUserRegisterAPIView.as_view(),name="get_single_user"), 
        path("get_all_shop",views.Get_ShopRegisterAPIView.as_view(),name="get_all_shop"),
        path("get_Single_shop/<int:id>",views.SingleShopRegisterAPIView.as_view(),name="get_single_shop"), 
        path("get_all_notification",views.Get_notificationAPIView.as_view(),name="get_all_notification"),
        path("get_Single_notification/<int:id>",views.SinglenotificationAPIView.as_view(),name="get_single_notification"),
        path("get_all_complaints",views.Get_complaintsAPIView.as_view(),name="get_all_complaints"),
        path("get_all_shops",views.Get_shopAPIView.as_view(),name="get_all_shops"),
        path("get_all_payment",views.Get_all_priceAPIView.as_view(),name="get_all_payment"),
       

        path("get_Single_complaints/<int:id>",views.SinglecomplaintsAPIView.as_view(),name="get_single_complaints"), 
        path("get_single_cart/<int:id>",views.SingleCartAPIView.as_view(),name="get_single_cart"), 
        path("CartIncrementQuantity/<int:id>",views.CartIncrementQuantityAPIView.as_view(),name="CartIncrementQuantity"), 
        path("CartDecrementQuantity/<int:id>",views.CartDecrementQuantityAPIView.as_view(),name="CartDecrementQuantity"), 
        path("Cartdelete/<int:id>",views.DeleteCartAPIView.as_view(),name="Cartdelete"), 
        path("counciling",views.Get_councilingAPIView.as_view(),name="counciling"), 

]

