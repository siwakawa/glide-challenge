# Glide Challenge

This project includes:

* Python 3
* Django 2.1.2
* Typescript + TSLint
* React
* Postgres
* Virtualenv
* Yarn
* Node.js
* Webpack 4

Note that you'll have to have the aforementioned technologies (except for React) installed already.

## Installation

* `git clone https://github.com/siwakawa/glide-challenge`
* Populate `glide/.env` with your database details

## Once you've set up your project...

Anyone can setup their local dev environment by:

1. Creating and activating the virtual environment using Python 3:
    - `virtualenv venv -p python3`
    - `source venv/bin/activate`
2. `pip3 install -r requirements.txt`
3. `pip3 install -r requirements-local.txt`

To launch the project,

1. Run the hot reloading development server
    - `node dev-server.js`
    - Visit [http://localhost:8000](http://localhost:8000).
2. `./manage.py runserver`

To lint files: `npm run lint`

Before deployment, remember to do: `./manage.py collectstatic`