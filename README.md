# Password Validator

In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. 

## Setup and Pull Request Instructions

- Fork this repo.
- Clone your copy of the repo.
- Create a branch named `answer`

## Install dependencies from package.json and Test the Code

Execute any of these commands to install required modules and run tests. These are all equivalent. Which do you prefer?

- `npm install` to perform the install
- followed by command `npm test` to then run tests

OR

- `npm install test` to run the install immediately followed by running tests

OR

- `npm it` the shortcut


## Write code to meet each password rule

Make a test pass by updating code in `index.js`. Then push to github as each test passes.

As you complete code to pass each individual rule:

- Perform all git commands to push your progress to github
- Open a PR after your first push
- Add JR and all TAs to the PR
  - Rob Perron's GitHub username: orbitalbitmap

## Coding Challenge Instructions

Your task is to create a `validatePassword` function which will return `true` when the password meets all requirements.

- minimum of 8 characters

Must contain at least one

- lower case letter
- upper case letter
- numeric value
- special character

## Example of a Valid Password

aB3$5678

## Something new for git

This is not required but something to consider to enhance your git knowledge.

When you clone your personal copy, you will have the default `origin` remote

Add another remote to point to the SummerOfCode2020 version.

Run this command:

`git remote add upstream https://github.com/SummerOfCode2020/week-05-password-validator`

Then run this command to see that you now have two remote:

`git remote -v`

Note that you are *always* still pusing to your origin. With this extra remote, you can now pull from the `SummerOfCode2020` repo in case it is ever updated and you want to pull that update. Epic. Or as X would say "Word" 😎

## Notes

Mocha is being executed with the `-w` option which is `watch mode` meaning that your tests should rerun every time you save a change.

If you would like to disable that for any reason, you can update the package.json script.

You can add more tests if you like. But there is not need to update any existing test. The work is all in `index.js` that you will focused on.

Use the "Debug" link that shows in Vs Code in package.json along with breakpoints if you want to use the debugger.

Use `console.log` in your code or in your test file to help you see what the computer sees.

Take plenty of breaks.  

Schedule time with others and with TAs as needed after the holiday weekend.

Have a great 4th of July!
