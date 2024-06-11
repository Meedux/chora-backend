from django.shortcuts import render, redirect
import requests
import base64
from .OAuth2 import OAuth2
from base64 import b64encode
import logging
from django.http import HttpResponse
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.http import JsonResponse
from django.core.mail import send_mail
from .models import CustomerAccount, Folder
import json
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
import base64

def get_access_token(authorization_code,
                     client_id, client_secret, redirect_uri, cert):
    # URL for the POST request
    url = "https://api.pge.com/datacustodian/oauth/v2/token"
    params = {
        "grant_type": "authorization_code",
        "code": authorization_code,
        "redirect_uri": redirect_uri,
    }
    client_credentials = f"{client_id}:{client_secret}"
    encoded_credentials = base64.b64encode(
            client_credentials.encode()).decode()
    headers = {
        "Authorization": "Basic "
        + bytes.decode(
            b64encode(("%s:%s" % (client_id, client_secret)).encode("latin1"))
            .strip()
        )
    }
    response = requests.post(url, params=params, headers=headers, cert=cert)
    if response.status_code == 200:
        return response.json()
    else:
        return {
            "error": f"""Request failed with status code {response}, \n
            {response.request}, {encoded_credentials}, {authorization_code},
            {response.url}"""
        }

def index(request):
    return render(request, "chora_app/index.html")

def auth(request):
    method = request.method
    query_params = request.GET
    s = ""
    for key, value in query_params.items():
        s += (f"{key}: {value}")
    path = request.path
    body = request.body.decode('utf-8')
    headers = request.headers
    logger = logging.getLogger(__name__)
    logger.warning("got a request here")
    request_string = f"""Method: {method},\n
                         Path: {path},\n
                         Body: {body},\n
                         Headers: {dict(headers)}"""
    client_id = "0oa1zmg05q3inuQjS0h8"
    redirect_url = "https://app.chora.network/auth/callback"
    sce = "https://test3.dms.sce.com/mysce/datasharing/authorizeavendor"
    cisrId = query_params.get('cisrId', '')
    scope = query_params.get('scope', '')
    link = f"""{sce}?client_id={client_id}&redirect_uri={redirect_url}&
                response_type=code&cisrId={cisrId}&
                scope={scope}"""
    return redirect(link)


class NotifView(APIView):
    def get(self, request, format=None):
        return Response("Hi Ali")

    def post(self, request, format=None):
        with open('/home/ec2-user/notif.log', 'a') as file:
            file.write("[got a POST request]")
            file.write(str(request))
            file.write(str(request.body))
            file.write('\n')
        return Response("Thanks for your Notification")


def auth_callback(request):
    authorization_code = request.GET.get("code")
    print(f"authorization_code: {authorization_code}")
    return redirect("http://localhost:3000/authorization?code=" + authorization_code)
    

# PG&E API
def pge_auth(request):
    method = request.method
    query_params = request.GET
    s = ""
    for key, value in query_params.items():
        s += (f"{key}: {value}")
    path = request.path
    body = request.body.decode('utf-8')
    headers = request.headers
    logger = logging.getLogger(__name__)
    logger.warning("got a request here")
    request_string = f"""Method: {method},\n
                         Path: {path},\n
                         Body: {body},\n
                         Headers: {dict(headers)}"""
    client_id = "c4eb4044861240838a5de4bba1c9eda1"
    redirect_url = "http://127.0.0.1:8000/auth/callback"
    link = f"https://sharemydata.pge.com/myAuthorization?client_id={client_id}&redirect_uri={redirect_url}&response_type=code"
    return JsonResponse({'link': link})

def send_email(subject, message, from_addr, to_addr, smtp_server, smtp_port, username, password):
    msg = MIMEText(message)
    msg['Subject'] = subject
    msg['From'] = from_addr
    msg['To'] = to_addr

    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(username, password)
    server.send_message(msg)
    server.quit()

def retrieve_emails(request):
    if request.method == "POST":
        data = request.body.decode('utf-8')
        # Assuming the data is in JSON format
        customer_accounts = json.loads(data)
        
        for account in customer_accounts:
            # Create a new CustomerAccount object
            folder = Folder.objects.filter(id=account["folder"]).first()
            customer_account = CustomerAccount.objects.create(
                email=account['email'],
                first_name=account['firstName'],
                last_name=account['lastName'],
                phone_number=account['phone'],
                folder=folder
            )
            customer_account.save()
            
            # Send email to the customer
            send_email(
                subject="Customer Utility Account Authorization",
                message=f"Hi, you have been added to the Chora Network. Please click on the link to authorize your account.\n\nhttp://localhost:3000/authorization?email={base64.b64encode(account['email'].encode()).decode()}",
                from_addr="chora@noreply.com",
                to_addr=account['email'],
                smtp_server="smtp.gmail.com",
                smtp_port=587,
                username="herrerojayemark@gmail.com",
                password="fsvn eoim sjwp fcqn"
            )
        
        return HttpResponse('Customer Accounts Retrieved Successfully and are sent with emails for authorization.')

def get_queued_accounts(request):
    if request.method == 'GET':
        # Get all customer accounts that are not authorized
        customer_accounts = CustomerAccount.objects.filter(authorized=False)
        
        account_list = []
        
        for account in customer_accounts:
            account_list.append({
                'email': account.email,
                'firstName': account.first_name,
                'lastName': account.last_name,
                'phone': account.phone_number,
                'folder': account.folder.id,
            })
        
        return JsonResponse(account_list, safe=False)
    
def get_accounts(request):
    if request.method == 'GET':
        customer_accounts = CustomerAccount.objects.all()
        
        account_list = []
        
        for account in customer_accounts:
            account_list.append({
                'email': account.email,
                'firstName': account.first_name,
                'lastName': account.last_name,
                'phone': account.phone_number,
                'folder': account.folder.id,
                'isAuthorized': account.authorized,
            })
        
        return JsonResponse(account_list, safe=False)

def authorize(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        account = json.loads(data)
        
        # Update the CustomerAccount object to be authorized
        customer_account = CustomerAccount.objects.filter(email=account['email']).first()
        customer_account.authorized = True
        customer_account.auth_token = account['authToken']
        customer_account.save()
        
        return HttpResponse('Customer Account Authorized Successfully')

def create_folder(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        user_data = json.loads(data)

        # Create a new Folder object
        folder = Folder.objects.create(
            first_name=user_data['first_name'],
            last_name=user_data['last_name'],
            user_id=user_data['username'],
            last_modified=datetime.now(),
        )

        folder.save()

        return HttpResponse('Folder Created Successfully')
    else:
        return HttpResponse('Invalid Request Method')

def get_folders(request):
    if request.method == 'POST':
        data = request.body.decode('utf-8')
        user_name = json.loads(data)['username']

        # Get all folders for the user with the specified username
        folders = Folder.objects.filter(user_id=user_name)

        folder_list = []

        for folder in folders:
            folder_list.append({
                'id': folder.id,
                'name': folder.name,
                'lastModified': folder.last_modified.strftime('%Y-%m-%d'),
            })

        return JsonResponse(folder_list, safe=False)
    else:
        return HttpResponse('Invalid Request Method')

    
def get_data(access_token):
    url = "https://api.pge.com/datacustodian/data/1.0/customer/data"
    return
    
def get_energy_usage(access_token):

    return

# for testing use this auth code: 8192d790-265c-41c0-b371-785b3752f66e
def get_customer_data(request):
    if request.method == "GET":
        client_credential_hash = {
            "client_key": "c4eb4044861240838a5de4bba1c9eda1",
            "client_secret_key": "ffc522210711462280133a983a122b91",
        }

        cert_params_hash = {
            "crt": "chora_app/chora.crt.pem",
            "key": "chora_app/chora.key.pem",
        }

        oauth = OAuth2(client_credential_hash, cert_params_hash)

        url = "https://api.pge.com/datacustodian/oauth/v2/token"
        code = "8192d790-265c-41c0-b371-785b3752f66e"
        redirect_uri = "http://127.0.0.1:8000/auth/callback"

        # customers = CustomerAccount.objects.filter(authorized=True)
        # customer_data = []

        # for customer in customers:
        #     access_token = oauth.get_access_token(customer.auth_token, redirect_uri)
        #     customer_data.append(get_data(access_token, customer.email))

        # return JsonResponse(customer_data, safe=False)

        access_token = oauth.get_access_token(url, code, redirect_uri)
        result = get_data(access_token)
        return JsonResponse(result, safe=False)

def get_customer_energy_usage(request):
    if request.method == "GET":
        client_credential_hash = {
            "client_key": "c4eb4044861240838a5de4bba1c9eda1",
            "client_secret_key": "ffc522210711462280133a983a122b91",
        }

        cert_params_hash = {
            "crt": "chora_app/chora.crt.pem",
            "key": "chora_app/chora.key.pem",
        }

        oauth = OAuth2(client_credential_hash, cert_params_hash)

        url = "https://api.pge.com/datacustodian/oauth/v2/token"
        code = "8192d790-265c-41c0-b371-785b3752f66e"
        redirect_uri = "http://127.0.0.1:8000/auth/callback"

        customers = CustomerAccount.objects.filter(authorized=True)
        customer_data = []

        for customer in customers:
            access_token = oauth.get_access_token(customer.auth_token, redirect_uri)
            customer_data.append(get_energy_usage(access_token, customer.email))

        return JsonResponse(customer_data, safe=False)
