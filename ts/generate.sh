#!/usr/bin/env sh

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./wgpb"

protoc  \
  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
  --proto_path=../protos \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --ts_out="${OUT_DIR}" \
  ../protos/*.proto