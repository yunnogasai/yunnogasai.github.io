---
layout: "@layouts/BaseLayout.astro"
title: "gpg 使用"
pubDate: 2025-06-14
description: "gpg 常见命令"
author: "Yuno"
tags: ["gpg", "tool"]
---

### 生成密钥

`gpg --full-generate-key`

### list

`gpg --list-keys`

### 用自己的公钥加密

`gpg --encrypt --armor --recipient your-email.com message.txt`

### 解密

`gpg --decrypt message.txt.asc`
