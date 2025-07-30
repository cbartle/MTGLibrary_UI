#!/bin/bash
#
## Make sure you're in the cloned repo folder before running
#
echo "Downloading MTGLibraryApp.zip..."
curl -o MTGLibraryApp.zip https://chat.openai.com/sandbox/mnt/data/MTGLibraryApp.zip
#
echo "Unzipping project..."
unzip MTGLibraryApp.zip -d tmp
#
echo "Copying contents..."
cp -r tmp/* ./
rm -rf tmp MTGLibraryApp.zip
#
echo "Adding files to Git..."
git add .
git commit -m "Initial commit of MTG Library Android App"
git push origin master

echo "✅ Done! App is now on GitHub."
