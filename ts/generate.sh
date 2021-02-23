#!/usr/bin/env sh

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts_proto"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./wgpb"

# protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./simple.proto

protoc  \
  --plugin="${PROTOC_GEN_TS_PATH}" \
  --proto_path=../protos \
  --ts_proto_opt=unrecognizedEnum=false \
  --ts_proto_out="${OUT_DIR}" \
  ../protos/*.proto