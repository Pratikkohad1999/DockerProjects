#!/usr/bin/python3

import cgi
import subprocess
import time

print("content-type: text/html")
print()

print("HEY !!! ❤️💛💙")

f=cgi.FieldStorage()
cmd=f.getvalue("x")
o=subprocess.getoutput("sudo "+ cmd)
print(o)


