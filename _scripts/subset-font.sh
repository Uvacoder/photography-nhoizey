#!/bin/sh
glyphhanger https://nicolas-hoizey.photo/tools/subset-raw/ --subset=./assets/font/*.ttf --formats=woff2,woff
mv ./assets/font/*-subset.woff* ./src/ui/fonts/