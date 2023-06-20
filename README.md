## Jump_Next_Line (JNL)  🐒 


The objectif of this project is to make you code a function that 
**returns a line ending with a newline, read from a file descriptor.**
This project will not only allow you to add a very convenient function to 
your collection,but it will also allow you to learn a highly interesting new concept in C programming:


### Function 🐧
```c
int	jump_next_line(int fd, char **line);
```

## Compilation

**JNL Mandatory Part**

My program must compile with the flag -D **BUFFER_SIZE=xx**. which will be used
as the buffer size for the read calls in the jump_next_line.

Make sure that your function behaves well when it reads from a file and when it
reads from the standard input.

 :point_right: Locate in the **42-silicon-valley-libft** folder.

**JNL with files**
```bash
gcc tests/main.c -Wall -Wextra -Werror -D BUFFER_SIZE=32 get_next_line.c get_next_line_utils.c

./a.out tests/files/part1_test01_with_lines
```

**JNL with standard input (stdin)**
```bash
gcc tests/main_stdin.c -Wall -Wextra -Werror -D BUFFER_SIZE=32 get_next_line.c get_next_line_utils.c

./a.out
```
