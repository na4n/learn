source ./2.func_fail_help.sh >> output.log 2>&1
output=$(echo $?)
while [ $output -ne 1 ]
do
    source ./2.func_fail_help.sh >> output.log 2>&1
    output=$(echo $?)
done

cat output.log
