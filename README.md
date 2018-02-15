## How to build a Simple Node.js application using a cloud platform as a Service solution (PaaS)

In this exercise we are going to create a simple web application using a particular cloud solution called [Heroku (Saleforce)](https://www.heroku.com/) that is based on a platform as a services more commonly known as **PaaS**. 

### Prerequisites

To start the exercise you need to have installed/created the following components:

1.- Email account (for linking it with Heroku account)  
2.- Heroku account  
3.- If you are using Unix-like platform, a Package Manager and depending of the OS:  
3a.- macOS: Homebrew  
3b.- Linux (Debian/Ubuntu based systems): apt-get/aptitude  
4.- Heroku Command Line Interface (CLI)  
5.- Node.js and npm  
6.- Git / Git Bash (Microsoft Windows)  
7a.- Powershell or CMD (Microsoft Windows Command Prompt) if you are using a Microsoft Windows  
7b.- Terminal prompt if you are using a Unix-like platform (macOS or Linux)  
8.- Simple Text editor (for instance, Notepad, Notepad ++)  


## How to ^

1.- **Create an email account**:  
As a suggestion you can create an [Gmail](https://en.wikipedia.org/wiki/Gmail) account that has a free basic service [here](https://accounts.google.com/SignUp), but feel free to create an email account in your favorite email service
*If you already have an account that you could/would like link with the Heroku account, this steps is an alternative one and you do need to create a new one.

2.- **Create an Heroku account**:  
For creating an Heroku account you just need to have an email account and provide the necessary information as your name, country and the development language (in this case you have to chose node.js since the exercise is based on this particular technology) [here](https://signup.heroku.com). 

3.- **Install the Package Manager**:  
This step only apply if you are using a *macOS* system because in a Linux platform normally the package manager is already install by default.  
To Install Homebrew, open the Terminal Command Line and run:

```javascript
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
``` 

4.- **Install Heroku Command Line Interface**:  
Once you have the Heroku account created, you have to install the Heroku Command Line tool for creating and managing Heroku applications from the command line / shell.

- For **Windows** intallation, download and run the Windows installer [here](https://cli-assets.heroku.com/heroku-cli/channels/stable/heroku-cli-x64.exe) and setup it with the default options.
  
-  For **macOS** open a terminal command line and run:  

```javascript
brew install heroku/brew/heroku
```

- For **Debian/Ubuntu** run the following to add our apt repository and install the CLI:

```javascript
wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
```

- For **all platform** to check out the installation, open a command line terminal and type:   
 
```javascript
heroku version
```

5.- **Install Node.js and npm**:  
For the training purpose we are going to use **Node.js** as a program language and **npm** as the package manager that is used by **Node.js**.

- For **Microsoft Windows** platform get the proper installer from https://nodejs.org/en/download/ . Normally the Windows Installer (.msi) 64-bit version

- For **macOS** platform using Homebrew, open a terminal command line and run: 

```javascript
brew install node
```

*Also, as an alternative way you can get the proper installer as well from https://nodejs.org/en/download/ (macOS Installer (.pkg))

- For **Debian/Ubuntu** platform open a terminal command line and run:

```javascript
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- For **all platform** to check the installation run in your terminal command line:

```javascript
# Node.js version
node -v
# nmp version
npm -v
```

6.- **Install Git / Git Bash (Microsoft Windows)**

- For **Windows** download [Here](https://gitforwindows.org/) the latest installer. Once the file has been download successfully, you have to start the installation process configuring it with the default options.  
 
- For **macOS** using Homebrew, open a terminal command line and run:
  
```javascript
brew install git
```

*As an alternative installation option you can get the  installer from [here](https://sourceforge.net/projects/git-osx-installer/files/
)

- For **Debian/Ubuntu** using apt-get, open a terminal command line and run:

```javascript
sudo apt-get update
sudo apt-get install git
```

- For **all platform** to confirm the installation was successful by typing:

```javascript
git --version
```

If you would like to know more about how to use git [here you are a book's link](https://git-scm.com/book/en/v2) to understand everything about **git**. Enjoy it ;)!

7.- **Install Powershell or CMD (Microsoft Windows Command Prompt) if you are using a Microsoft Windows or Terminal command line if you are using a Unix-like platform (macOS or Linux)**  
In most cases, you do not need to install anything since by default these applications are already installed .

8.- **Install a simple text editor**  
By default Windows, macOS, and Linux systems have a default and basic text editor already installed, but most of them are not user friendly so as an alternative option (and because is one of the popular ones), you can install Sublime Text editor from  [here](https://www.sublimetext.com/3)

Other options are: [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/download) or Brackets (you only need to have *one* of those or any other one). 


