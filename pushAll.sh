cd GIT_FOLDER

git init
git add .
git commit -m "Init"

git remote add origin1 https://github.com/unq-ui/2022s1-Grupo01.git
git remote add origin2 https://github.com/unq-ui/2022s1-Grupo02.git
git remote add origin3 https://github.com/unq-ui/2022s1-Grupo03.git
git remote add origin4 https://github.com/unq-ui/2022s1-Grupo04.git
git remote add origin5 https://github.com/unq-ui/2022s1-Grupo05.git
git remote add origin6 https://github.com/unq-ui/2022s1-Grupo06.git
git remote add origin7 https://github.com/unq-ui/2022s1-Grupo07.git


git push origin1 main
git push origin2 main
git push origin3 main
git push origin4 main
git push origin5 main
git push origin6 main
git push origin7 main

rm -rf .git
cd ..