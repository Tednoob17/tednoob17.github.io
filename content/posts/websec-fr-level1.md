+++
title = 'Websec.fr Level 01'
date = 2025-12-10T00:00:00+01:00
draft = true
tags = ['websec']
+++

A Websec.fr level 1
`level01` - **1 point- 2564 solves**
![alt](/images/stc/websec-level1.png)

We have a source code of [level1](http://websec.fr/level01/source.php), i show only a php code because the 
vulnerability is only in php code.

```php
 <?php
session_start ();

ini_set('display_errors', 'on');
ini_set('error_reporting', E_ALL);

include 'anti_csrf.php';

init_token ();

class LevelOne {
    public function doQuery($injection) {
        $pdo = new SQLite3('database.db', SQLITE3_OPEN_READONLY);
        
        $query = 'SELECT id,username FROM users WHERE id=' . $injection . ' LIMIT 1';
        $getUsers = $pdo->query($query);
        $users = $getUsers->fetchArray(SQLITE3_ASSOC);

        if ($users) {
            return $users;
        }

        return false;
    }
}

if (isset ($_POST['submit']) && isset ($_POST['user_id'])) {
    check_and_refresh_token();

    $lo = new LevelOne ();
    $userDetails = $lo->doQuery ($_POST['user_id']);
}
?>

<!DOCTYPE html>
<html>
........
</html>

```
The problem here is this line `$query = 'SELECT id,username FROM users WHERE id=' . $injection . ' LIMIT 1';`
it's a **sqli** 