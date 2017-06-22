#!/bin/bash

lastline=`tail -1 randomized_anagrams.txt`
# echo $lastline
node changename.js $lastline && truncate -s -"$(tail -n1 randomized_anagrams.txt | wc -c)" randomized_anagrams.txt