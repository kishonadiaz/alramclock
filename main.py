import eel, random,os
eel.init('web')
#https://github.com/python-eel/Eel/issues/233


@eel.expose
def pythoncode(text):
    print(text)
@eel.expose
def py_random():
    return random.random()
#pythoncode("there")



dir_path = os.path.dirname(os.path.realpath(__file__))
dir_list = os.listdir(dir_path+"\\web\\assets\\")

print(dir_list)
eel.start('main.html', mode='chrome',block=False, cmdline_args=['--start-fullscreen'])
eel.my_javascript_function("hshere")


eel.testing()
while True:
    eel.sleep(1.0)
    
    #n = eel.js_random()()
    #print('Got this from Javascript:', n)
    #eel.my_javascript_function("hshere")()