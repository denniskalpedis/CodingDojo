class Product(object):
    def __init__ (self, price, item_name, weight, brand, status="for sale"):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = status
    
    def sell(self):
        self.status = "sold"
        return self

    def tax(self, tax_percent):
        return self.price * (1 + tax_percent)

    def return_item(self, reason):
        if "defective" in reason:
            self.status = "defective"
            self.price = 0
        elif "like new" in reason:
            self.status = "for sale"
        elif "opened" in reason:
            self.status = "used"
            self.price = self.price * .80
        return self
    def display_info(self):
        print "Item name: {}\nPrice: {}\nWeight: {}\nBrand: {}\nStatus: {}".format(self.item_name, self.price, self.weight, self.brand, self.status)
        return self
shoes = Product(400, "Jordans", "1Lbs", "Nike")
print shoes.tax(.10)
shoes.sell().display_info().return_item("like new").display_info().sell()

