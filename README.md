# Bcrypt-cli
A Node.js command-line interface (CLI) application that generates a bcrypt hash of a user-provided password.

## Installation
To use this CLI, you should have Node.js and NPM installed on your system.

To install the CLI, run the following command:

```sh
npm install -g @muath-ye/bcrypt-cli
```

This will install the bcrypt command globally on your system.

## Usage
To generate a bcrypt hash for a password, run the following command:

```sh
bcrypt <password>
```

The command will output the bcrypt hash of the password.

For example:

```sh
bcrypt mysecretpassword
$2b$10$AJfZp7pUjJqHk.7Vj6lJ4O5nEhZrM6zZhXfTMA2xXtDmG7t5iS4Qq
```

# Contributing

If you find any bugs or issues, please feel free to open an issue on the GitHub repository [↗](https://github.com/muath-ye/bcrypt-cli).

To contribute to the project, you can fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.