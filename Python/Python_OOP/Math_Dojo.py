class Mathdojo(object):
    def __init__(self):
        self.result = 0

    def add(self, *args):
        for number in args:
            if type(number) == list or type(number) == tuple:
                for number_again in number:
                    self.result += number_again 
            else:
                self.result += number
        return self

    def subtract(self, *args):
        for number in args:
            if type(number) == list or type(number) == tuple:
                for number_again in number:
                    self.result -= number_again 
            else:
                self.result -= number
        return self

md = Mathdojo()
print md.add(2).add(2,5).subtract(3,2).result
print md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result
print md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result