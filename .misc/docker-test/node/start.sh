#!/usr/bin/env bash

function run {
  echo "############ $1 ############" | tr '_' ' '
  shift
  eval $@
  quit_when_fail
}

function quit_when_fail {
  if [[ $? -ne 0 ]]; then
    echo "> Task failed!"
    exit 1
  fi
}

run Install_node-modules_from_NPM yarn install
run ESLint yarn lint
