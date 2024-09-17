FILE='/home/nathan/repos/learn/missing_semester/exercises/.marco.polo'

function marco {
    pwd > $FILE
}

function polo {
    file_contents=$(cat $FILE)
    cd $file_contents
}
