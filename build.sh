NAME=$1
rm ./$NAME.zip
rm ./dist/$NAME.js ./dist/demo.html
zip -X -r $NAME.zip ./dist
rm -rf ./dist
echo "\n\n\nBuild $NAME done!\n\n\n"