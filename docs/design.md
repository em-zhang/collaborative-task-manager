# Lab 5: Responsive Task Manager App supporting multiple lists
**Group members:** Olina Wong, Emily Zhang, Christopher Chung
In Lab 5, we iterated on our working Task Manager app from the previous lab to support two new key functionalities.
- Support logging in via various accounts (Google/Github/Email).
- Support for sharing of lists between users.

The focus of this lab was implementing flows for authentication and authorization while supporting real-time collaboration, such that owners of lists can share with editors. The app continues to handle various tasks including creating, renaming, and marking items as well as showing uncompleted items and deleting completed items – all this data is stored in real-time through Firestore. The app is also still both accessible and responsive. For final screen images and flows for each task, see the bottom of this design doc.

Quick references:
github pages: em-zhang.github.io/cs124
firebase rules: firebase-rules.txt

### Design Process, Decisions, and Early Mock-Ups
Design ideas: Having multiple tabs to show different lists based on ownership, allow authentication through GitHub/Google/email and password, allow users to reset password, using a modal for sharing settings

Initial iterations of our app screens:


Final iterations:


### Key Design Decisions
- Creating a modal to access sharing: We used a modal popup to access sharing settings to separate it from the lists and have all of the sharing information and controls in one central place
- Splitting display between lists that the user owns/vs. lists they have been invited to edit
- Authentication: We based many of our authentication decisions based on research with our users and our own experience using apps where you need to sign in. The following are some of our decisions:
1. We created two Sign In/Sign Up tabs for our sign-in page for ease of navigation.
2. We enabled a sign in with user/password option for users that want an account directly linked to our app.
3. We enabled a sign in with Google option.
4. We enabled a sign in with Github option.
5. We made sure that one email can only have one account – e.g. if a user were to sign in with Github already with one email account, they cannot sign in through another method like User/Password or Google. This allows for the data for each email to be associated
6. We created a profile icon for users located on the upper profile bar to display further information like the user’s email and verification status. Depending on whether or not the user is verified, the icon will change (include a checkmark) or there will be a “Verify” button to verify email.
7. We added a logout button on the top right corner in the upper profile bar.

- Authorization: We based many of our authorization related decisions on universal standards for other document and file-sharing systems like Google Drive. In general, when coming up with our authorization decisions, we decided that the owner would have the ability to reverse decisions that the editors made
1. If user A shares a list with user B, user B can share that list with user C. This mimics real-time collaboration where groups are able to collaborate together and pass on sharing permissions.
2. If user A shares a list with user B, user B cannot delete that list. The owner should be the only one that has the ability to permanently remove their list.
3. If an owner shares a list with an editor, an editor can modify the name of the list. Renaming a list is a reversible change and is a common edit that collaborators might make.
4. If user A shares a list with user B, user B does not need to accept the sharing – the shared list will appear in their shared lists tab. We decided this would be a good standard since user B needs to have a verified account in order to see shared lists anyways.
5. The UI for shared lists is distinguishable from unshared lists. Lists that have an owner and one or more editors have an icon next to them suggesting that this is a “collaborative” list. Private lists do not have an icon. The lists are separated into two sections, and the share modal contains additional information about who the user/editors are.
6. If user A shares a list with user B, user B cannot see that list if they don't have an authenticated email address.

### Alternative Design Decisions
- Displaying all lists (owned and shared with me) together rather than in two separate tabs
- Using a sidebar to implement sign in/sign out
  Ultimately we chose to go with the decisions we made above because they followed more standardized design principles and were more consistent with the existing layout of our app.

We also considered alternative extra design ideas to support new functionality while we were making mock-ups for our app. In future iterations of the app we would like to do the following:
- Create a more elaborate UI where the user will see a pop-up message if a verification email has been sent or password reset email has been sent.
- We would also want to verify that emails for collaborators are valid.
- Allow for a list to have multiple owners
- Implement more sign-in and authentication methods

### User Testing
We tested our app with 5 users. 2 of these were users who had seen previous iterations of our app and 3 were new users who were seeing the app for the first time. We asked users to carry out different tasks and explore the functionalities of the app as if it were a real to-do app they downloaded and used on a daily basis. Users created new tasks, edited their tasks, using the buttons in the navigation bar to sort and delete complete tasks, and also modified the task priority.
- We asked test users to switch between the home page and list pages, encouraging them to talk out loud and articulate parts of the process that were unclear.
- We also had 2 users work together to collaborate in real time with us on a shared to-do list, so we could modify data and see it reflected in real time.
- We had users test all 3 of the sign-in methods: through signing up and with a custom username and password, signing in with Google, and signing in with Github.

Some key questions we asked were:
- What are you trying to do? (Determining intended purpose)
- Does this workflow make sense to you? (Asking for intuition)
- What do you think will happen if you click on this button? (Asking for intuition)
- Why did you choose to click this button? (Understanding user rationale)
- Is there anything you’re confused about? (Clarity of content)
- If you were to use this app, what would be the most common functionalities you would use?
  We had positive reception for the clean user interface and simplicity it took to navigate between the different screens and sign in or sign out. New users understood that you could click on the Share icon/button to access sharing settings.
  In addition, we asked one of these users to navigate through the app with a screen reader and also entirely from the keyboard to get their feedback on the accessibility of the app.
  A few general suggestions that we later incorporated:
- We modified the UI slightly such that the log out and share icons were slightly more intuitive.
- Implementing a “Retype password” input box where the user has to type their password twice when signing up for an account.
- Ensuring that proper error messages are displayed properly, such as for invalid emails, invalid passwords, etc. This allows for a smoother authentication process.
  In the later sections, we describe the challenges we ran into and parts we’re proud of while taking these suggestions into consideration and implementing these changes.
### Challenges
Some challenges we ran into:
- Separating owner versus editor functionalities – through building queries and filters, we separated lists that the user owns vs. lists they are an editor of, and split the list data into two tabs
- Building firestore rules and permissions
- Continuing to support clean, responsive UI
- Authentication, especially with an external google and github provider when the same email address was used
- Displaying error messages throughout the sign in and sign up process

### Parts We’re Proud of
- Successfully implementing sign in and sign up pages with multiple log-in methods and handling errors
- Further UI touches like adjusting list labels, adding a profile bar/logout button/icon, modifying the position of a loading icon
- Ensuring the design is responsive for different screen layouts
- Ensuring that users must be verified before participating in collaborative lists and that their permissions depending on their status (owner vs. editor)
- We made sure that our app is well-aligned (add boxes, buttons, tasks) in accordance with the guest design lecture

### Final Design
