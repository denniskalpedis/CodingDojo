import uuid
import time

class Call(object):
    def __init__(self, caller_name, caller_phone, reason, time=time.strftime("%H:%M:%S", time.localtime())):
        self.id = uuid.uuid4()
        self.caller_name = caller_name
        self.caller_phone = caller_phone
        self.time = time
        self.reason = reason

    def display(self):
        print self.id
        print self.time
        print self.caller_name
        print self.caller_phone
        print self.reason



class Call_Center(object):
    def __init__(self):
        self.calls = []
        self.queue_size = 0
    
    def add_call(self, name, number, reason, time=time.strftime("%H:%M:%S", time.localtime())):
        new_call = Call(name, number, reason, time)
        self.calls.append(new_call)
        self.queue_size = len(self.calls)
        return self

    def remove_call(self):
        self.calls.pop(0)
        self.queue_size = len(self.calls)
        return self

    def info(self):
        for call in self.calls:
            call.display()
        print "{} total calls.".format(self.queue_size)
        return self

    def remove_by_number(self, number):
        new_calls = [x for x in self.calls if number not in x.caller_phone]
        self.calls = new_calls
        self.queue_size = len(self.calls)
        return self

    def sort_by_time(self):
        self.calls.sort(key = lambda x: x.time) #sort using the key, use lambda function passing in the call to 'x' and checking by 'x.time'
        return self

callcenter = Call_Center()
callcenter.add_call("tom", "9999999999", "worse", "20:15:39").add_call("john", "6666666666", "worse", "19:15:39").add_call("tim", "8888888888", "badder").add_call("joe", "7777777777", "bad").info().remove_by_number("7777777777").info()
print "\n"
callcenter.sort_by_time().info()