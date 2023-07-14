#!/bin/bash


touch $1.md

echo "Titre : "
read titre

echo "Description : "
read desc

ligne1="---"
ligne2="title: $titre"
ligne3="description: $desc"
ligne4="---"

echo $ligne1 >> $1.md
echo $ligne2 >> $1.md
echo $ligne3 >> $1.md
echo $ligne4 >> $1.md



