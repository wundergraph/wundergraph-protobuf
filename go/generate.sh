#!/usr/bin/env sh

protoc  \
  --proto_path=../protos \
  --go_out=./wgpb \
  ../protos/*.proto