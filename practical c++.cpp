// #include <iostream>
// using namespace std;

// class Laptop {
// private:
//     string name;
//     float price;
//     string processor;

// public:
//     Laptop(string n, float p, string pr) {
//         name = n;
//         price = p;
//         processor = pr;
//     }

//     void display() {
//         cout << "Laptop Name: " << name << endl;
//         cout << "Price: $" << price << endl;
//         cout << "Processor: " << processor << endl;
//         cout << "-----------" << endl;
//     }
// };

// int main() {
//     Laptop l1("Dell Inspiron", 550.75, "Intel i5");
//     Laptop l2("HP Pavilion", 620.50, "Intel i7");
//     Laptop l3("Lenovo ThinkPad", 750.00, "AMD Ryzen 5");

//     l1.display();
//     l2.display();
//     l3.display();

//     return 0;
// }


//2nd

// #include <iostream>
// using namespace std;

// class BankAccount {
// private:
//     int accountNumber;
//     double balance;
//     string ownerName;

// public:

//     void setData(int acc, double bal, string name) {
//         accountNumber = acc;
//         balance = bal;
//         ownerName = name;
//     }

//     void credit(double amount) {
//         balance += amount;
//         cout << "Credited: " << amount << endl;
//     }

//     void debit(double amount) {
//         if (amount <= balance) {
//             balance -= amount;
//             cout << "Debited: " << amount << endl;
//         } else {
//             cout << "Insufficient balance!" << endl;
//         }
//     }

//     void display() {
//         cout << "\nOwner Name: " << ownerName << endl;
//         cout << "Account Number: " << accountNumber << endl;
//         cout << "Balance: " << balance << endl;
//     }
// };

// int main() {
//     BankAccount b;

//     b.setData(42673, 10000, "MNO");

//     b.display();

//     b.credit(1000);
//     b.debit(2000);

//     b.display();

//     return 0;
// }



//3rd


// #include <iostream>
// using namespace std;

// class Shape {
// private:
//     string color;
//     double area;

// public:
//     void setColor(string c)
//     { 
//         color = c;
//     }
//     string getColor() 
//     { 
//         return color; 
        
//     }

//     void setArea(double a) 
//     { 
//         area = a; 
        
//     }
//     double getArea() 
//     { 
//         return area; 
        
//     }
// };


// class Circle : public Shape {
// public:
//     void calculateArea(double radius) 
//     {
//         double a = 3.14 * radius * radius;
//         setArea(a);
//     }
// };

// class Rectangle : public Shape 
// {
// public:
//     void calculateArea(double length, double width) 
//     {
//         double a = length * width;
//         setArea(a);
//     }
// };

// int main() 
// {
//     Circle c;
//     c.setColor("Red");
//     c.calculateArea(8);
//     cout << "Circle Area: " << c.getArea() << endl;

//     Rectangle r;
//     r.setColor("Blue");
//     r.calculateArea(8, 8);
//     cout << "Rectangle Area: " << r.getArea() << endl;

//     return 0;
// }


// 4th


// #include <iostream>
// using namespace std;

// class Shape {
// public:
//     virtual void displayDetails() {
//         cout << "This is a Shape." << endl;
//     }
// };

// class Circle : public Shape {
// public:
//     void displayDetails() override {
//         cout << "This is a Circle." << endl;
//     }
// };

// class Rectangle : public Shape {
// public:
//     void displayDetails() override {
//         cout << "This is a Rectangle." << endl;
//     }
// };

// int main() {
//     Circle c;
//     Rectangle r;


//     Shape* shapes[2] = { &c, &r };

//     for (int i = 0; i < 2; i++) {
//         shapes[i]->displayDetails();
//     }

//     return 0;
// }




//5th



#include <iostream>
using namespace std;

class Vehicle {
public:
    virtual void startEngine() = 0;
    virtual void drive() = 0;
};

class Car : public Vehicle {
public:
    void startEngine() override {
        cout << "Car engine started." << endl;
    }
    void drive() override {
        cout << "Car is driving." << endl;
    }
};

class Bike : public Vehicle {
public:
    void startEngine() override {
        cout << "Bike engine started." << endl;
    }
    void drive() override {
        cout << "Bike is driving." << endl;
    }
};

int main() {
    Car c;
    Bike b;

    Vehicle* v[2] = { &c, &b };

    for (int i = 0; i < 2; i++) {
        v[i]->startEngine();
        v[i]->drive();
    }

    return 0;
}







