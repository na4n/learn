# Find Words with grep
#
# ssh tsp journalctl | grep ssh
#  - wasteful since transfers all over ssh then greps
#  - better way ssh tsp 'journalctl | grep ssh | grep "Disconnected from"' | less
#   - less is a pager 
#
# cat file > newfile.log
#  - outputs file to new file, redirects STDOUT to new file
# 
# in the above example, tsp is remote computer connected to
#
# SED, stream editor
# cat ssh.log | sed "s/.*Disconnected from//'
#  - replace anything before connected from
#  - ex: Jan 13 1646:56 thesquareplanet.com sshd[24201]: Disconnected from invalid user wp-user 62.162.65.145 port 45788 [preauth]
#  - becomes invalid user wp-user 62.162.65.145 port 45788 [preauth]
#
#  - regex: way to match text
#    - special chars:
#      - .: any character
#      - *: 0/more of any character

echo 'aba' | sed 's/[ab]//'
# ba, replaces once and done
echo 'abac' | sed 's/[ab]//g'
# c, removes all a's and b's
echo 'abcabaacb' | sed -E 's/(ab)*//g'
# replace 0/more of string 'ab' --> caacb
# -E -- modern regular expressiosn otherwise prefix parenth with \
echo 'abcababcbc' | sed -E 's/(ab|bc)*//g'
# produces cc --> removes all instances of 'ab' and 'bc'

echo 'Disconnected from invalid user Disconnected from 84.211' | sed 's/.*Disconnected from //'
# matches are greedy, second Disconnected From matches more with * regex 
# ? is 0/1, + is many
# anchoring: ^ (beginning of line), ? (end of line)  -- matches whole line
# cat ssh.log | sed -E 's/^.*Disconnected from (invalid |authentiating )?user (.*) [0-9.]+ port [0-9]+(\[preauth\]?%/\2/'
# - () are capture groups, replacement value \2 is capture group
# capture groups: remember specific value to remember later

# suffix * with ? for non-greedy match
#
#
#
# | sort, sorts lines
# | uniq, prints unqiue lines, uniq -c --> count duplicates and list count

# | sort | uniq -c | sort -nk1,1 (sorts first column, stops at first colu) | tail -n10


# awk is a column based stream processor
# ^... | awk '{print $2}' | paste -sd --> prints second column, paste outputs into single line (-s) separated by comma (-d)
# awk '$1 == 1 && $2 ~ /^c.*e%/ {print $0}' --> first as regular, second column starts with c ends with e

# bc -l , berkeley calculator -l is standard math


# xargs, lines of input --> args
#
