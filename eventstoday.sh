#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title eventsToday
# @raycast.mode silent

# Optional parameters:
# @raycast.icon 🤖

icalBuddy -b "- [ ] " -ea -nc -iep datetime,title -eed -po datetime,title -ps "| |" -ic "tony@alka.app,tonyx.ca@gmail.com,💕 Tony & Anya" eventsToday | pbcopy
icalBuddy -b "- [ ] " -ea -nc -iep datetime,title -eed -po datetime,title -ps "| |" -ic "tony@alka.app,tonyx.ca@gmail.com,💕 Tony & Anya" eventsToday
