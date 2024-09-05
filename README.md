# Tomarket Bot

## Description

Blum Bot for Auto playing game

# Table of Contents

- [Example Query Id](#ex-data)
- [Multiple Account](#multi)

# Warning

All Risks are borne by the user!

## Features

- **Auto Play and Claim Game Points**: Play games and claim game points automatically.
- **Supprot multipel account**

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   https://github.com/Bangkithari18/blum-bot-auto.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd blum-bot-auto
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Configuration

1. **Open folder obj `param.json` file**.

2. **Add your `query_id` to the `param.json` file**. Example format:

   ```param.json
   [{
    "query_id":"YOUR QUERY ID"
   }]
   ```

   - To find your `query id`, follow these steps:

     1. Open [Web Telegram](https://web.telegram.org) in your browser.
     2. Open the [Blum Bot](https://t.me/BlumCryptoBot/app?startapp=ref_5IbwQZSbUE).
     3. Open DevTools (right-click on the page and select "Inspect" or press `F12`).
     4. Go to the "Application" tab, then "Local Storage", and choose `https://telegram.blum.codes`.
     5. Find `QUERY_ID`, copy its value.

## Example Query Id

```
query_id=user=%7ajgshagsfirst_namfdfdss%%2last_name%22%3A%aknah%22username%22%3A%22Bafaefagfa%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=59302567161adfsad54463795&chat_type=sender&start_param=frens&auth_date=17253223029059&hash=3116344429fc5e299d0dfdfd4eekhsodksndjs96857sdsdsds
```

### Multiple Account

1. Edit your `param.json`

```
[
   {
    "query_id":"YOUR QUERY ID 1"
   },
   {
    "query_id":"YOUR QUERY ID 2"
   }
]
```

### Running the Bot

To start the bot, run:

```bash
node index.js
```
