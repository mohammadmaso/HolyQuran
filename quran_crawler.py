import requests

import json
from itertools import chain


def dict_union(*args):
    return dict(chain.from_iterable(d.items() for d in args))


links = [
    f"https://api.quran.com/api/v4/verses/by_chapter/{i+1}?language=en&words=false&fields=text_uthmani&translations=131%2C135&per_page=1000" for i in range(144)]
chapter_link = "https://api.quran.com/api/v4/chapters?language=en"
chapters = requests.get(chapter_link).json()['chapters']

# all_quran = []
with open('all_quran.json', 'a', encoding='utf-8') as f:
    for i, link in enumerate(links):
        result = requests.get(link).json()
        # all_quran.append(dict_union(chapters[i], result))
        # print(result)

        json.dump(dict_union(chapters[i], result),
                  f, ensure_ascii=False, indent=4)
        f.write(",")
