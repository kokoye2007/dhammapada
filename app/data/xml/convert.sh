for i in {1..26}; do /tmp/xml2json/xml2json.py --strip_namespace  --strip_text --pretty $i.xml -o ../json/$i.json; done
