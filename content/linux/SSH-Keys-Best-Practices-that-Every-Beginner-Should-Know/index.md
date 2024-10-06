---
title: "SSH Keys - Best Practices that Every Beginner Should Know"
date: 2021-02-22T21:55:53+05:30
tags: ["ssh"]
posttype: "Misc"
hidden: true
---
Today, SSH is everywhere. It is the default way of remotely connecting to any \*nix machines, not to mention many network devices, and even some Windows machines. Also, many sites use it for authentication, like Github, Gitlab...

SSH allows two methods to authenticate a user: 1. Password 2. Private-public key pairs. The latter is the recommended one and is the default in many systems.

Before discussing my "best" practices to manage these keys, a small guide on how to generate new SSH keys and register them with a server.

## Generating and Registering SSH Keys
### Generating SSH Keys
On Linux-based machines, the `ssh-keygen` command is used to generate a new pair of SSH keys. They come in many flavors (types) like RSA, ECDSA, ED25519, and more. These are basically techniques to generate a key pair. The best one at the time of writing this is `ED25519`.
Here is a full command for generating a key pair,
```bash
ssh-keygen -t ed25519 -a 100 -C <comment> -f <keyfile>
```
- To generate default key pairs, remove the `-f <keyfile>` tag.
- `-a 100` specifies number of rounds of key derivations, more better.
### Registering SSH Keys
There is a prebuilt command `ssh-copy-id` to register a public key with an SSH server. Or you can manually copy the content of your `.pub` public key file and place it in `.ssh/authorized_keys`. The `ssh-copy-id` method is recommended.
Full command,
```bash
ssh-copy-id  -i <public key filepath> <user>@<hostname/ipaddress>
```
To register with some apps like Github, you have to manually copy contents of .pub and paste it in the appropriate wizard. Check their docs for a guide on how to.

Now my recommended practices.

## My recommended practices for SSH-based key authentication

{{< callout circle-info >}}
Assess your threat model carefully. For top-notch security, maintain separate SSH keys for each server, store them in diverse locations, and secure each key with a strong, unique passphrase.
{{< /callout >}}

### 1. Never copy your privates keys to other machines

Copying a private key is really not a good idea. Having same private key at multiple locations means
  1. If one machine sharing the key gets compromised, Increases the risk that you lost control in other locations too.
  2. You wont be able to disable access from just the compromised machines.

### 2. Maintain multiple SSH keys

I'll be honest; I have used a single key pair for about 2 years now for convenience. Lately, I came to the realization that it is not good to just have a single key pair for everything. If a key pair is compromised, it pretty much opens up any and all machines I have it registered in.

So here is my recommendation. Use separate keys one for each for any critical servers (like database servers, production machines...) and machines that you access on an untrusted network (like the internet). Therefore, separate keys for Github, Gitlab, any cloud servers, etc.

I know maintaining many keys is inconvenient; check the next section for an easy way of maintaining these.

### 3. Manage ssh keys using ssh config file.

As it turns out, SSH can have a config file. You can store all per-user/server-based details in that file, and SSH (and its derivative tools) will use this automatically. Create a file called `config` in your `$HOME/.ssh` directory. When you generate/register new key pairs, update this file with host details. SSH will auto-pick up these when you are using it.

**Config file format**

```
Host <host id>
  HostName <host name or ip>
  User <username at server>
  IdentityFile <its associated private key path>
  Port <Server's Port number>
Host <another host id>
  HostName <a new host name>
  .......
Host *
  PubkeyAuthentication <yes/no>
  IdentitiesOnly <yes/no>
```

- You can skip the HostName; in that case, `<host id>` will become the host name.
- `Host *` section is the default settings for hosts not mentioned in the config file.
- Also, I recommend having `IdentitiesOnly yes` for third-party app hosts like Github. For more details, check [here](https://github.com/FiloSottile/whoami.filippo.io)

**Example config file**
```
Host webserver
    HostName 192.168.0.1
    PubkeyAuthentication yes
    IdentityFile ~/.ssh/webserver
    IdentitiesOnly yes
Host github.com
    PubkeyAuthentication yes
    IdentityFile ~/.ssh/github
    IdentitiesOnly yes
Host *
    PubkeyAuthentication no
    IdentitiesOnly yes
```

### 4. Use strong type to generate ssh keys

As mentioned earlier, I suggest using `ED25519` keygen type since it is harder to brute force. Also, use `-a 100` for a tad bit 🤏 more security.

### 5. Don't shy away from using Passphrases

While SSH keys authenticate connections with the server, passphrases protect your private key from being used by an attacker. When provided, passphrases encrypt your private key, and this encrypted version gets saved locally. Thus, the saved key by itself is not useful to an attacker. Without a passphrase, anyone who gains access to your computer has the potential to copy your private key.

Whenever you initiate a connection to a server, you have to provide the passphrase interactively to decrypt the saved private key. Though inconvenient, this practice is recommended for SSHing to any critical machines.

{{< callout search >}}
You can look at `ssh-agent` for caching SSH passphrases (and passwords), eliminating the need to re-enter them every time. This is particularly useful for running ssh/scp/rsync without user intervention, especially in cronjobs.
{{< /callout >}}

### 6. Rotate key pairs frequently.

Rotate (remove the existing key and register with a new key) SSH keys in critical servers frequently.

Hope this helps :)
