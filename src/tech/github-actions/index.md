# Github Actions

## Working example for static site deployment with Astro

```
name: Build and Deploy

on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Main Branch
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies and build
        run: yarn install

      - name: Build website
        run: yarn run build

      - name: Install SSH Key
        uses: shimataro/ssh-key-action@v2
        with:
          key: ${{ secrets.DEPLOY_KEY }}
          known_hosts: "unecessary"

      - name: Adding Known Hosts
        run: ssh-keyscan -H ${{ secrets.HOST }} >> ~/.ssh/known_hosts

      - name: Deploy with rsync
        run: rsync -avz --delete ./dist/ ${{ secrets.USERNAME }}@${{ secrets.HOST }}:${{ secrets.TARGET_DIRECTORY }}
```
