#!/usr/bin/env python3
#-*- coding:utf-8 -*-

from selenium import webdriver
import random,time
import os, sys
import threading
#url = "https://translate.google.cn/#auto/en";

b = webdriver.Chrome();
b.get("https://translate.google.cn/#auto/en"); 

rootdir = 'E:/phjs/work/source'  
tardir = 'E:/phjs/work/target'  

def translate():
	list = os.listdir(rootdir) #list all folder and files
	for i in range(0,len(list)):
		# path = os.path.join(rootdir,list[i])
		path =  rootdir + '/' + list[i]
		pathtar =  tardir + '/' + list[i]
		print('path' + path)
		print('pathtar' + pathtar)
		# print(list[i])
		print(path)
		print(pathtar)
		if os.path.isfile(path):
		  
			fo = open(path, "r+")
			text = ""
			text = fo.read() 
			fo.close()
			os.remove(path); #delete source files
			#text = "图片大家";
			b.find_element_by_id("source").clear() 
			time.sleep(random.uniform(0.1,0.3))
			b.find_element_by_id("source").send_keys(text)
			b.find_element_by_id("gt-submit").click()
			time.sleep(random.uniform(0.1,0.3))
			result = ""
			while result == "" :
				result = b.find_element_by_id("result_box").text
			print(result);
			fow = open(pathtar, "w",)
			fow.write( result); 
			fow.close()
			print("----------------------------");
			time.sleep(random.uniform(0.5,1.5)) 
			
def fun_timer(): 
	translate()
	global timer
	timer = threading.Timer(3, fun_timer) #call translate per 3 seconds
	timer.start()
	
timer = threading.Timer(1, fun_timer)
timer.start()	
# print(result);

#b.quit()

# with open("e:/phjs/work/f.txt","w",encoding="utf-8") as f:
	# f.write(result);
