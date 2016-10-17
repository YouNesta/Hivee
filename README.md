Hivee
=================
Installation
-----------------
## Features

### Configuration

- Ubuntu 14.04 
-Nvm

- Node 
- Git
- Npm
- Jspm 
- Mongo

### Express Package

- Nodemon
- Pm2 


## Get Started

* Download and Install [Vagrant][1]
* Download and Install [VirtualBox][2]
* Install Font for powerline [Powerline Font Repository][4]
* Clone the Hivee Box[GitHub Repository][3]
```bash
git clone https://github.com/YounesBoulkaddid/Hivee;
```
* Run Hivee Box

```bash
vagrant up;
```

* Ssh connection Hivee Box

```bash
vagrant ssh;
```

## Basic Vagrant Commands


### Start or resume your server
```bash
vagrant up
```

### Pause your server
```bash
vagrant suspend
```

### Delete your server
```bash
vagrant destroy
```

### SSH into your server
```bash
vagrant ssh
```




## Database Access

### MongoDB

- Hostname: 127.0.0.1
- Port: 27017


## SSH Access

- Hostname: 127.0.0.1:2222

## Updating the Box

Although not necessary, if you want to check for updates, just type:

```bash
vagrant box outdated
```

It will tell you if you are running the latest version or not, of the box. If it says you aren't, simply run:

```bash
vagrant box update
```


## Setting a Hostname

If you're like me, you prefer to develop at a domain name versus an IP address. If you want to get rid of the some-what ugly IP address, just add a record like the following example to your computer's host file.

```bash
192.168.33.10:3000 dev.hivee.com
```

Or if you want "www" to work as well, do:

```bash
192.168.33.10:3000 dev.hivee.com www.dev.hivee.com
```



 [1]: https://www.vagrantup.com/downloads.html
 [2]: https://www.virtualbox.org/wiki/Downloads
 [3]: https://github.com/YounesBoulkaddid/Hivee
 [4]: https://github.com/Lokaltog/powerline-fonts