---
date: 2022-01-12T18:23:25+05:30
title: "Fly.io - Why is it awesome"
tags: ["hosting"]
posttype: "Misc"
hidden: true
---
## [Fly.io](https://fly.io) - Why is it awesome
Fly.io is a cloud hosting platform, similar to AWS, Google Cloud, and Oracle Cloud. What sets them apart, however, is they are completely built upon Docker. What does this mean for you? If you want to host something — be it a website, an app, or a personal project — all you need to do is Dockerize it and push it to Fly.io for hosting. It's that simple. Just select the VM specs, and Fly.io takes care of the rest.

Think of it as AWS on easy mode, especially if you have a basic understanding of Docker. Moreover, they operate entirely through a [command line tool](https://fly.io/docs/hands-on/install-flyctl/), enabling you to create projects, customize settings, stop, and manage projects effortlessly. This also means you can script it for automation.
*   Docs: [https://fly.io/docs/](https://fly.io/docs/) 
*   Get Started: [https://fly.io/docs/hands-on/](https://fly.io/docs/hands-on/)

One notable aspect is that, unlike other CI/CD providers, Fly.io doesn't restrict their 'Free Builders' based on a certain number of minutes. They are always available for free use!

Additionally, they offer a free tier to help you get started.

## Free Tier

{{< callout "bell" >}}
Edit: From 2024, Fly.io has locked the Free tier behind $5 per month Hobby Plan 😔
{{< /callout >}}

However, their free tier is somewhat limited compared to what Google and Oracle Cloud offer. Nonetheless, if you're considering a paid plan, they do provide [pricing](https://fly.io/docs/about/pricing/) that is similar to AWS. As of my last check, the following are the limits for their free offerings.

{{< callout >}}
Activating your account, even for the free tier, requires an International Credit Card, but rest assured, you will not be charged. More details can be found [here](https://fly.io/docs/about/credit-cards/)
{{< /callout >}}

*   Up to 3 shared-cpu-1x 256mb VMs
*   3GB persistent volume storage (total)
*   160GB outbound data transfer 

Also, please note that this falls under the hobby plan (Pay as you use), but you have to enable it to incur charges. Make sure to set up monitoring limits to ensure you won't get charged unexpectedly.

## Steps to host:

### Install Fly command line and signin

1.  Install flyctl command line tool on local machine
    *   [https://fly.io/docs/hands-on/install-flyctl/](https://fly.io/docs/hands-on/install-flyctl/)
2.  Signup - Not required if your machine is already linked to your account
    *  Run  `flyctl auth signin` or Go to [https://fly.io/docs/hands-on/sign-up/](https://fly.io/docs/hands-on/sign-up/)
3.  Login if you have account created through web portal
	- `flyctl auth login`
	-   [https://fly.io/docs/hands-on/sign-in/](https://fly.io/docs/hands-on/sign-in/)

### Launch the app
- Create a `Dockerfile` in your project root
	- [Fly.io guides on this](https://fly.io/docs/languages-and-frameworks/)
	- For python apps Check [here](https://www.docker.com/blog/how-to-dockerize-your-python-applications/)
	- For static websites, check [here](https://fly.io/docs/languages-and-frameworks/static/)
	- For nginx static website, check [here](https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/ )
-  Run flyctl launch but do not deploy if prompted.
-   To host non-web apps, remove certain lines from the `fly.toml` file (created by flyctl deploy).

```toml
[build]
[http_service]
   internal_port = 8080
   force_https = true
   auto_stop_machines = true
   auto_start_machines = true
   min_machines_running = 0
   processes = ["app"]
```

*   To deploy, run  `flyctl deploy`

{{< callout "check-square" >}}
Thats it! By now, your app should be hosted by Fly.io
{{< /callout >}}

### Monitoring Logs
- To view logs from your project root where fly.toml resides, use the following command.
	- `flyctl logs -a <appname>`
	- `<appname>` is the name you assigned to the app when launching.
- Alternatively, you can access logs through the web portal's monitoring tool.

## References
- [Fly.io Docs](https://fly.io/docs/hands-on/)
- [Fly.io guides to hosting various apps](https://fly.io/docs/languages-and-frameworks/)
- [Dockerizing python apps](https://www.docker.com/blog/how-to-dockerize-your-python-applications/)
- [Dockerizng nginx static sites](https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/)
