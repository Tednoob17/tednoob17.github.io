---
title: "Hosting a Static Website on Nginx in Linux"
date: 2022-03-03T13:01:59+05:30
tags: ["nginx", "hosting"]
posttype: "Linux"
hidden: true
---
## Prerequisites

- Nginx installed with a sample site up; follow [Running NGINX sample website on Oracle Cloud Ubuntu Instance](/posts/running-nginx-website-on-oracle-cloud-ubuntu-instance/) for instructions (Skip Oracle Cloud setup part if you're not using it)
- Familiarity with connecting to a remote instance (like VM) using SSH, including SSH key setup.
- A static generated site - HTML, CSS files ...

## Steps

### 1\. Install nginx and copy static site to a remote dir

- Ssh to the remote machine.
- Verify if `nginx` is installed.
    - `sudo nginx -v`
- Ensure a sample site is up. Check [Running NGINX sample website on Oracle Cloud Ubuntu Instance](/posts/running-nginx-website-on-oracle-cloud-ubuntu-instance/) for reference.
- Copy / sync the static generated site to remote machine to location of your choice. for ex `/mnt/data/mnjm_site`
    - `rsync -r <static-generated-site-dir> <remote-username>@<remote-instance-ip>:/mnt/data/mnjm_site`
    - You may have to install `rsync` on both local and remote machines. And setup ssh keys

### 2\. Nginx Site Configuration

- Create nginx site config file in `/etc/nginx/sites-available`
    - `sites-available` generally houses all available site config files, even those that are not active.
    - `sudo vim /etc/nginx/sites-available/mnjm_site` for example
- Add the following lines to the file and make changes as per your needs:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name mnjm.fr.to;

    root /mnt/data/mnjm_site;
    charset utf-8;

    error_page 404 /404.html;
}
```

- (Soft) link the config file to `/etc/nginx/sites-enabled`
    - `sudo ln -s /etc/nginx/sites-available/mnjm_site /etc/nginx/sites-enabled/`
- Reload nginx if the nginx configuration is valid
    - `sudo nginx -t && sudo systemctl reload nginx`

{{< callout check >}}
Your site should be up my now.
{{< /callout >}}

### 3. Setting up HTTPs
- Give necessary permissions to allow (both input and output) connections to port `443` (SSL port)
	- If you're using an Oracle Cloud instance with Ubuntu image to host your site, then
		- Add an Ingress rule to Instance's VCN - For more info check [Running NGINX sample website on Oracle Cloud Ubuntu Instance](/posts/running-nginx-website-on-oracle-cloud-ubuntu-instance/#allow-connections-port-80-in-the-virtual-cloud-network-vcns-subnet-thingy)
		- Allow to-and-fro connections to port 443 in the instance firewall.
```bash
sudo iptables -I INPUT -p tcp --dport 443 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
sudo iptables -I OUTPUT -p tcp --sport 443 -m conntrack --ctstate ESTABLISHED -j ACCEPT
````
- Install Certbot
```bash
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```
- Generate certificate using certbot
	- `sudo certbot --nginx` and give the necessary details when asked.
		- Certbot will edit your Nginx configuration automatically to serve it with https
	- Verify that certificate can be renewed `sudo certbot renew --dry-run`
- Restart nginx service - `sudo nginx -t && sudo systemctl reload nginx`

{{< callout check >}}
Your site should be up with https certification, enjoy!
{{< /callout >}}

### 4. Final Step - Optional
- Enable HTTP/2 - HTTP/2 is a major improvement for the web. It can give you a large improvement in client performance. You will need to have enabled HTTS for HTTP/2.
	- Edit your site's config file and add http2 to `listen 443` line, as shown below
```nginx
listen [::]:443 ssl http2 ipv6only=on; # managed by Certbot

```
- Restart nginx - `sudo nginx -t && sudo systemctl reload nginx`. Thats it

{{< callout check >}}
Now you site should work with http2 enabled.
{{< /callout >}}

## References
- [Running NGINX sample website on Oracle Cloud Ubuntu Instance](/posts/running-nginx-website-on-oracle-cloud-ubuntu-instance/)
- https://www.ralfebert.com/tutorials/nginx-static-website-with-https/
- https://medium.com/@jasonrigden/how-to-host-a-static-website-with-nginx-8b2dd0c5b301
- https://gideonwolfe.com/posts/sysadmin/hugonginx/
- [Certbot](https://certbot.eff.org/) - HTTPS SSL Certification
