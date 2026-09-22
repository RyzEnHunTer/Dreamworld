import urllib.request
import re
import ssl
import sys

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    'https://www.instagram.com/p/DGc7ubayF6L/',
    'https://www.instagram.com/p/DEeHCn4SVgo/',
    'https://www.instagram.com/p/DHzygNzSCee/'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        match = re.search(r'property="og:image" content="([^"]+)"', html)
        if match:
            print("FOUND:", match.group(1).replace('&amp;', '&'))
        else:
            print("NOT FOUND FOR:", url)
    except Exception as e:
        print("ERROR:", str(e))
