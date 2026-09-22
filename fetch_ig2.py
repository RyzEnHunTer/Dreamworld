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

for i, url in enumerate(urls):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        
        # We need the highest res image. Instagram puts them in a display_url or similar.
        match = re.search(r'"display_url":"([^"]+)"', html)
        if match:
            img_url = match.group(1).replace('\\u0026', '&').replace('\\', '')
            print("FOUND URL:", img_url)
            img_data = urllib.request.urlopen(urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'}), context=ctx).read()
            with open(f'public/ig_post_{i+1}.jpg', 'wb') as f:
                f.write(img_data)
        else:
            print("NOT FOUND FOR:", url)
    except Exception as e:
        print("ERROR:", str(e))
