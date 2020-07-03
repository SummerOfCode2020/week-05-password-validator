# Password Validator

In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. 

## Setup and Pull Request Instructions

- Fork this repo.
- Clone your copy of the repo.
- Create a branch named `answer`
- Exectute any of these commands to intall required modules and run tests. These are all equivelent. Which do you prefer?
- `npm install` to perform the install 
- followed by command `npm test` to then run tests
- `npm install test` to run the install immediately follwed by running tests
- `npm it` the shortcut
- Write code to meet each password rule

As you complete code to pass each individual rule:

- Perform all git commands to push your progress to github
- Open a PR after your first push
- Add JR and all TAs to the PR

## Coding Challenge Instructions

Your task is to create a `validatePassword` function which will return `true` when the password meets all requirements.

* minimum of 8 characters

Must contain at least one
- lower case letter
- upper case letter
- numeric value
- special character

## Example of a Valid Password

aB3$5678

## Notes

Mocha is being executed with the `-w` option which is `watch mode` meaning that your tests should rerun every time you save a change.

If you would like to disable that for any reason, you can update the package.json script.


