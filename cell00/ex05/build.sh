#!/bin/bash

if [ $# -eq 0 ]; then
	echo "no arguments supplied"
else
	for var in "$@"
	do
		mkdir "ex$var"
	done
fi
