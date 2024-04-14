#!/bin/bash

# 現在のブランチ名を取得
current_branch=$(git symbolic-ref --short HEAD)

# デフォルトブランチ名を取得
default_branch=$(git remote show origin | awk '/HEAD branch/ {print $NF}')

protect_branches=(
  "$default_branch"
)

for branch in "${protect_branches[@]}"; do
  if [ "$current_branch" == "$branch" ]; then
    echo "エラー：ブランチ ($branch) ではgit操作が禁止されています"
    echo "git操作 を中止します。"
    exit 1
  fi
done