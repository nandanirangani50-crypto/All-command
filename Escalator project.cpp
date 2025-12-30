#include <iostream>
using namespace std;

class Stack
{
private:
    int *arr;
    int capacity;
    int top;
    int size;

public:
    Stack(int capacity)
    {
        this->capacity = capacity;
        arr = new int[capacity];
        this->top = -1;
        this->size = 0;
    }

    void push(int element)
    {
        if (this->size == this->capacity)
        {
            cout << "Stack Overflow" << endl;
        }
        else
        {
            this->top++;
            this->arr[top] = element;
            this->size++;
        }
    }

    void display()
    {
        cout << "_______________________" << endl;
        for (int i = this->top; i >= 0; i--)
        {
            cout << arr[i] << endl;
        }
        cout << "_______________________" << endl;
    }

    void pop()
    {
        if(this->size == 0 || this->top == -1)
        {
            cout<<"Stack Underflow"<<endl;
        }
        else
        {
            this->top--;
            this->size--;
        }
    }

    void Thetop()
    {
       if(this->top == -1)
       {
         cout<<"Stack Underflow"<<endl;
       }
       else
       {
        cout<<"Peek = "<<this->arr[this->top]<<endl;
       }
    }


    void isEmpty()
    {
        if(this->top == -1 || this->size == 0)
        {
            cout<<"true"<<endl;
        }
        else
        {
             cout<<"false"<<endl;
        }
    }

    void isFull()
    {
        if(this->size == this->capacity)
        {
            cout<<"true"<<endl;
        }
        else
        {
             cout<<"false"<<endl;
        }
    }
};

int main()
{
    Stack stack(5);

    do
    {
        cout << "Press 1 for push operation" << endl;
        cout << "Press 2 for pop operation" << endl;
        cout << "Press 3 for top operation" << endl;
        cout << "Press 4 for isEmpty operation" << endl;
        cout << "Press 5 for isFull operation" << endl;

        int choice;
        cout << "enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            int element;
            cout << "Enter the value: ";
            cin >> element;
            stack.push(element);
            cout << "Element added successfully" << endl;
            break;

        case 2:
            stack.pop();
            cout << "Element removed successfully" << endl;
            break;

        case 3:
            stack.Thetop();
            break;

        case 4:
            stack.isEmpty();
            break;

        case 5:
            stack.isFull();
            break;

        default:
            cout << "Invalid Choice, Try Again";
            break;
        }
    } while (true);
}