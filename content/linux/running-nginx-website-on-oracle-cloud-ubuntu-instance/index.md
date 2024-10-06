---
title: "Running NGINX website on Oracle Cloud Ubuntu instance"
date: 2022-02-17T21:19:02+05:30
tags: ["nginx", "hosting"]
posttype: "Linux"
hidden: true
---
## Prerequisites

- Oracle Cloud account with an Ubuntu instance (Free Instance works)
- Familiarity with connecting to a remote instance (like VM) using SSH, including SSH key setup.

## Steps

### Setup a Ubuntu Instance in Oracle Cloud

1.  Create an Instance with Ubuntu or Debian image
2.  Update packages
```bash
sudo apt update
sudo apt upgrade
```

### Allow connections port 80 in the Oracle's VCN

By default, Oracle doesn't allow connections to port 80 in its Virtual Cloud Network (VCN), which connects your instance to the Internet. Add port 80 to its ingress list to allow connections.

- Click the subnet link from the instance page

![Oracle Cloud Ubuntu Instance a.jpg](Oracle%20Cloud%20Ubuntu%20Instance%20a.jpg)

- From there, click on the default security list

![Oracle Cloud Ubuntu Instance a.png](Oracle%20Cloud%20Ubuntu%20Instance%20a.png)

- Add a new Ingress Rule
    - with Source CIDR `0.0.0.0/0`
    - IP Protocol `TCP`
    - Destination Port Range `80`
    - And Description `HTTP`

![1_Oracle Cloud Ubuntu Instance a.png](1_Oracle%20Cloud%20Ubuntu%20Instance%20a.png)

### Install and Setup Nginx

- Install Nginx
    - `sudo apt install nginx`
- Verify installation
    - `sudo nginx -v`
- Check the nginx service status
    - `systemctl status nginx`
    - if not active, start nginx
    - `sudo systemctl start nginx.service`
- Check with Curl inside the instance
    - `curl localhost`
    - This should return/print a sample webpage.
- Add Iptable entries to allow incoming and outgoing connections to port 80
```bash
sudo iptables -I INPUT -p tcp --dport 80 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
sudo iptables -I OUTPUT -p tcp --sport 80 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```
- Check with Curl on another machine
    - `curl <instance-ip-address>`

{{< callout check >}}
Done! Sample site should be up
{{< /callout >}}

## Reference

- [How to run NGINX on Ubuntu](https://vmleon.medium.com/how-to-run-nginx-on-ubuntu-in-the-cloud-for-free-1b34d7269418)
