find . -name '*.js' -not -path './min/*' -print0 | while IFS= read -r -d $'\0' path; do
    bname=${path##*/}
    name=${bname%.js}
    $(minify $path -o ./min/$name.min.js)
done