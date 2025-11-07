#include <iostream>
using namespace std;

class Time {
public:
    void HHMMSS(int totalSeconds) {
        int hours = totalSeconds / 3600;
        int minutes = (totalSeconds % 3600) / 60;
        int seconds = totalSeconds % 60;
        cout << "HH:MM:SS => "<< hours <<":" <<minutes <<":" <<seconds <<endl;
    }
    void Seconds(int hours, int minutes, int seconds) {
        int totalSeconds=(hours * 3600)+ (minutes * 60)+seconds;
        cout <<"Total seconds:"<< totalSeconds<< endl;
    }
};

int main() {
    Time t;
    int choice;
    cout << "1. From seconds to HH:MM:SS" << endl;
    cout << "2. From HH:MM:SS to seconds" << endl;
    cout << "Enter your choice: ";
    cin >> choice;

    if (choice == 1) {
        int totalSeconds;
        cout << "Enter total seconds: ";
        cin >> totalSeconds;
        t.HHMMSS(totalSeconds);
    } 
    else if (choice == 2) {
        int h, m, s;
        cout << "Enter hours: ";
        cin >> h;
        cout << "Enter minutes: ";
        cin >> m;
        cout << "Enter seconds: ";
        cin >> s;
        t.Seconds(h, m, s);
    } 
    else {
        cout<< " Your Choise Is Invalid choice!"<< endl;
    }

    return 0;
}

