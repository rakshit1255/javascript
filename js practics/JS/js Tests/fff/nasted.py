class Car:
    def __init__(self):
        self.company = "Hyundai"
        self.carname = "Verna"
    def show(self):
        nn = Car().Carbody
        print("CARNAME: " , self.carname)
        print("neast: " ,nn)
    
    class Carbody:
        def __init__(self):
            self.color = "White"
            self.glass = "Black"
        def disp(self):
            print("CAR_COLOR: " , self.color )


a = Car()
# print(a.company)
# print(a.show())
# c=a.Carbody().color
# print("c",c)
# Neasted_class_Car = a.Carbody()
# print(Neasted_class_Car.disp)
print(a.show())
