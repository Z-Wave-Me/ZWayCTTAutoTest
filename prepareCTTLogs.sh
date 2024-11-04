#!/bin/bash

LOG_FILE=CTTLogs.txt

rm -f ${LOG_FILE}
ls -1 $1/*/*txt | grep -vE '/dump.txt$' | grep -vE '[0-9A-F]{6}.txt$' | xargs -l cat >> ${LOG_FILE}
