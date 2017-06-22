This is a hacky project that I made to update my Twitter name with a random
anagram of my name.

I used [this anagram generator](https://people.sc.fsu.edu/~jburkardt/cpp_src/anagram/anagram.html)
to create a list of anagrams for my name. There is a wordlist on that page
but I realize that "google" is in "**geo**r**g**e h**o**te**l**ling" so
I added "google" to the word list. Then I used generated a list of anagrams, cleaned the output so that it was 1 anagram per line, and used
[GNU coreutils'](https://www.gnu.org/software/coreutils/coreutils.html)
`shuf` command to shuffle the anagrams.

Now that I have a randomized list of anagrams in `randomized_anagrams.txt`
I use a node script to set my Twitter name and a shell script. The last
piece was a shell script to call the node script with the last line of my
anagram file and then truncate the file.