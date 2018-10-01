#!/bin/bash
filename=$1
if [ $# -eq 0 ]
then filename='prototype.js'
fi

awk 'FNR==1{print ""}{print}' ./modules/*.js > $filename