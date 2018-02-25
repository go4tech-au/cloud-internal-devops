## How to build a Simple Node.js application using a cloud platform as a Service solution (PaaS)

In this exercise we are going to create a simple web application using a particular cloud solution called [Heroku (Saleforce)](https://www.heroku.com/) that is based on a platform as a services more commonly known as **PaaS**. 

### Prerequisites

To start the exercise you need to have installed/created the following components:

0.- Admin access for installing software in your computer
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


## 1.- How to ^

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

## 2.- Deploying a Node.js Apps on a cloud Platform as a Service in this particular case on Heroku

1.- Configure your email account to associate and use the control version application along with Heroku before deploy the example application. 

```javascript
git config --global user.name "FirstName SecondName"
git config --global user.email youremailaccount@youremailservice.com
```

- To confirm the configuration type: 
 
```javascript
git config -l
```
2.- Login into Heroku using your credential:

```javascript
heroku login
```

- You will see something like this:

```javascript
C:>heroku login
Enter your Heroku credentials:
Email: youremailaccount@youremailservice.com
Password: ************
Logged in as youremailaccount@youremailservice.com
```

3.- Setup your application

In this step you are going to setup the sample application. For doing it the first thing you have to do is clone it using *git*:

- To clone the sample repository type the following command:

```javascript
git clone https://github.com/go4tech-au/cloud-internal-devops.git
```

- The output seems like this:

```javascript
Cloning into 'cloud-internal-devops'...
remote: Counting objects: 29, done.
remote: Compressing objects: 100% (22/22), done.
remote: Total 29 (delta 10), reused 22 (delta 6), pack-reused 0
Unpacking objects: 100% (29/29), done.
```

- Enter to the directory application from the command line:

```javascript
cd cloud-internal-devops
```

At this point you have the git repository that contains a simple application that includes for instance, a package.json file, which is used by NodeJS dependency manager.

- Now you are able to create the application. In this case you are going to provide the name that you like based in the your **youremailaccount** name:

```javascript
heroku create youremailaccount
```

- Output:

```javascript
Creating  youremailaccount... done
https://youremailaccount.herokuapp.com/ | https://git.heroku.com/youremailaccount.git
```

As you can see in the output information it creates a git remote (called heroku) that is also associated with your local git repository. To confirm this type:

```javascript
git remote -v
```

4- Deploy the application

In this moment, you are able to deploy the code :).  In the command line run the following command:

```javascript
git push heroku master
```

- If everything goes well, the output should look like this:

```javascript
Counting objects: 29, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (28/28), done.
Writing objects: 100% (29/29), 15.50 KiB | 3.10 MiB/s, done.
Total 29 (delta 10), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=true
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  8.9.1
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 8.9.1...
remote:        Downloading and installing node 8.9.1...
remote:        Using default npm version: 5.5.1
remote:
remote: -----> Restoring cache
remote:        Skipping cache restore (not-found)
remote:
remote: -----> Building dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        added 61 packages in 1.792s
remote:
remote: -----> Caching build
remote:        Clearing previous node cache
remote:        Saving 2 cacheDirectories (default):
remote:        - node_modules
remote:        - bower_components (nothing to cache)
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 17.8M
remote: -----> Launching...
remote:        Released v3
remote:        https://youremailaccount.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/youremailaccount.git
 * [new branch]      master -> master
```

- And finally you are able to check out your application living in the cloud!

```javascript
https://youremailaccount.herokuapp.com/index.html
```



## 3.- Check logs 

Create, build and deploy an application is only the begining of its life's cycle, since you have to be sure it is working as expected. In order to achieve this, one of the most important tasks is get and analyze the logging information because it provides you feedback about the activity and performance of the application as well as information about any problems that the application is having. 

- To check the logs of your application run the following command:

```javascript
heroku logs --tail
```

- Now open again your application to see logging information

```javascript
https://youremailaccount.herokuapp.com/index.html
```

- Change the endpoint of the url:

```javascript
https://youremailaccount.herokuapp.com/about.html
```

1.- Create a new application release:

Once the public AWS S3 bucket has been created, change in the *index.html* file unsing your text editor application, the code-lines that reference the images configuration that need to be loaded on the web page:


- In the line number 7 of the file *index.html*:

From this:

```javascript
href="https://github.com/verofa/SimpleSample_HTML-NodeJs/blob/master/images/cloud_logo.png?raw=true"
```

- To this:

```javascript
href="https://s3.ap-southeast-2.amazonaws.com/g4t-begginer-ws-01/cloud_logo.png"
```

- In the line number 19 of the file *index.html*:

From this:

```javascript
href="https://openclipart.org/download/238921/1453940593.svg"
```

- To this:

```javascript
href="https://s3.ap-southeast-2.amazonaws.com/g4t-begginer-ws-01/Thumbs-Up.svg"
```

- In the line number 20 of the file *index.html*:

From this:

```javascript
href="https://github.com/verofa/SimpleSample_HTML-NodeJs/blob/master/images/DevOpsCarsalesLogo.png?raw=true"
```

- To this:

```javascript
href="https://s3.ap-southeast-2.amazonaws.com/g4t-begginer-ws-01/DevOpsCarsalesLogo.png"
```

After that, you need to apply and deploy the new changes of your application using the version control program in this case Github typing the following commands:

- To check out what file or files are changed:

```javascript
git status
```

- To add the new changes to the repository:

```javascript
git add index.html
```

- To add a comment about the new changes to the repository:

```javascript
git commit -m "changing images endpoint to a public S3 bucket"
```

- And finally, push the changes to the heroku repository, that is going to deploy the application as well:

```javascript
git commit -m "changing images endpoint to a public S3 bucket"
```

- Open your application with the new changes:

```javascript
heroku open
```

- And check again what is happening in the application analising the log information:

```javascript
heroku logs --tail
```

- Can you see the images with the new endpoint configuration? (if the answer is yes, well done and congratulation! and if the answer in no, it does not matter because "We learn from our mistakes" :))

## 4.- Manage / configure resources 

Heroku works with dyno that is a lightweight container (a tiny virtual machine) that runs the command specified in a configuration file (in this case the Procfile)

By default, your app is deployed on a free dyno. Free dynos will sleep after a half hour of inactivity (if they don’t receive any traffic). This causes a delay of a few seconds for the first request upon waking. 

- To check how many dynos are running type the following command line:

```javascript
heroku ps
```

Scaling an application on Heroku is equivalent to changing the number of dynos that are running. Scale the number of web dynos to zero:

```javascript
heroku ps:scale web=0
```

Access the app again by hitting refresh on the web tab, or heroku open to open it in a web tab. What do you think that is happening? (Do you remember how to check the log information)

Scale it up again:

```javascript
heroku ps:scale web=0
```

Access the app again by hitting refresh on the web tab, or heroku open to open it in a web tab.

If everithing goes good you have learnt the basic step about how to start the DevOps journey building an application based on a Platform as a Service cloud solution!! congratulations!!!