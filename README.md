# Develop Password Generator

## Producing a Random Password

It is no longer possible to use your cat's name as a password for every account. Security breaches are continually being reported, with data leaks as the result. Unscrupulous individuals obtain passwords and user ids from one data breach, and then try the login details on multiple sites. If someone reuses passwords, then it is very likely that their additional personal accounts could be accessed. One of the best security measures that a person can take is to use a unique and random password for each secure site. But it can be difficult to think of one when a prompt requires an immediate response.

To assist in this dilemma, I used JavaScript that provides a user a random password. The application begins by prompting the user to determine their desired password length, with any amount between 8 and 128 characters. It continues by confirming what types of characters they would like to include in their password. They can choose any and all combination of lowercase letters, uppercase letters, numbers and/or special characters. 

The specified criteria is returned via the prompts and confirmations and then used to generate a random password that matches the user requests.

The generate password function is initiated upon the click of the Generate Password button. After following the prompts, the user only has to take note of the random password as displayed in the textbox and retain it for future use.

### Site Screenshot
<img
  src="https://github.com/yveivy/Unique-Password-Generator/blob/main/Assets/Password-GeneratorScreenshot.png"
  alt="Deployed Password Generator Application"
  title="Password Generator site"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

#### Deployed Application URL
https://yveivy.github.io/Unique-Password-Generator/
