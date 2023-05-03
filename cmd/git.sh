#!/bin/sh

echo "Votre message de commit :"
read msg 

# GIT Commands
git add *;
git commit -m "$msg";
git push;