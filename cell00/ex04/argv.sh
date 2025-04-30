#!/bin/bash

if [ $# -eq 0 ]; then
    echo "no arguments supplied"
else
    [ -n "$1" ] && echo "$1"
    [ -n "$2" ] && echo "$2"
    [ -n "$3" ] && echo "$3"
fi
