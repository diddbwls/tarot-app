import urllib.request
import urllib.parse
import json
import os
import ssl
import time

ssl._create_default_https_context = ssl._create_unverified_context

files = [
    "RWS_Tarot_00_Fool.jpg",
    "RWS_Tarot_01_Magician.jpg",
    "RWS_Tarot_02_High_Priestess.jpg",
    "RWS_Tarot_03_Empress.jpg",
    "RWS_Tarot_04_Emperor.jpg",
    "RWS_Tarot_05_Hierophant.jpg",
    "RWS_Tarot_06_Lovers.jpg",
    "RWS_Tarot_07_Chariot.jpg",
    "RWS_Tarot_08_Strength.jpg",
    "RWS_Tarot_09_Hermit.jpg",
    "RWS_Tarot_10_Wheel_of_Fortune.jpg",
    "RWS_Tarot_11_Justice.jpg",
    "RWS_Tarot_12_Hanged_Man.jpg",
    "RWS_Tarot_13_Death.jpg",
    "RWS_Tarot_14_Temperance.jpg",
    "RWS_Tarot_15_Devil.jpg",
    "RWS_Tarot_16_Tower.jpg",
    "RWS_Tarot_17_Star.jpg",
    "RWS_Tarot_18_Moon.jpg",
    "RWS_Tarot_19_Sun.jpg",
    "RWS_Tarot_20_Judgment.jpg",
    "RWS_Tarot_21_World.jpg"
]

out_dir = "/Users/yujin/Desktop/tarot/assets/cards"
os.makedirs(out_dir, exist_ok=True)

base_api = "https://en.wikipedia.org/w/api.php?action=query&titles={}&prop=imageinfo&iiprop=url&format=json"

missing = []

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}

for i, filename in enumerate(files):
    out_path = os.path.join(out_dir, f"{i:02d}.jpg")
    if os.path.exists(out_path):
        print(f"Skipping {filename}, already downloaded.")
        continue

    title = f"File:{filename}"
    url = base_api.format(urllib.parse.quote(title))
    try:
        req = urllib.request.Request(url, headers=headers)
        res_data = urllib.request.urlopen(req).read()
        res = json.loads(res_data.decode())
        pages = res['query']['pages']
        page = list(pages.values())[0]
        if 'imageinfo' in page:
            img_url = page['imageinfo'][0]['url']
            
            # Fetch the actual image with headers as well
            img_req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(img_req) as response, open(out_path, 'wb') as out_file:
                out_file.write(response.read())
                
            print(f"Downloaded {filename} to {out_path}")
            time.sleep(2) # Add delay
        else:
            print(f"Could not find imageinfo for {filename}")
            missing.append(filename)
    except Exception as e:
        print(f"Error fetching {filename}: {e}")
        missing.append(filename)
        time.sleep(3) # longer delay on error

if missing:
    print("Some files were not found:", missing)
else:
    print("All 22 Major Arcana downloaded successfully.")
