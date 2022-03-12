# Bric-A-Vrac-Tech-Test

This app was built with one of the provided template (the one with the bottom tab bar). The current design is not responsive for light/dark screen modes in terms of text color of the user input field. The aimed screen size of this app is **412 x 732**.

# Goals

### Build an app with expo (ejected) including these features:

- The Home screen displaying centered logo with my name on the bottom of the screen.
- The Update screen taking user input into account, with a text field displaying the user input after pressing on a submit button.
- The Show screen fetching data from the Update screen and displays it.
- Everytime when we navigate between screens, we need to have the screen name displayed on console.

# What's been done

- The Home screen displaying centered logo with my name for the 412 x 732 devices. (not responsive)
- The Update screen taking user input into account and displaying it after submitting. The submit button redirects the page to the Show screen that shows the exact data.
- The Show screen includes a 'Go Back' button that redirects to the Update screen.
- The page name shows on console when we launch the app, but not as requested. Regarding the Update Screen, everytime when we make an action, it displays its name on console.

# Launching the app

To run the app, you need to install it locally.
In order to launch the app, you can run these commands:

- **Android**: expo run:android
- **iOS**: expo run:ios
