# Grading Notes
Overall nice work friends! I know this was a labor of love and the final product is so great. Hopefully you've learned the importance of planning during these projects -- I think a better plan would have helped in a few ways. It would have clarified the direction you were going and helped keep you all on the same page but more importantly it would have helped you break up the work. Its hard to mob on everything at this stage in the program. 

I took some points off for documentation -- I will happily add those back on if you take some time to update your READMEs. Also it would be good to update your backend to use a custom domain. 

## Front End
-   FYI your `.env` file with your API key is still in your repo -- you'll need to remove it using `git rm`
-   Ideally the API would have used a proxy route to avoid exposing the API key on the front end -- I know you added that in last minute though so no big deal
-   Remember to go through and remove all your console.logs and unecessary code
-   Error states on Auth would be helpful so that users know that they need to try again or if their signup failed
-   Try to follow the React naming conventions -- filenames are the same as the Component name and Components are capitalized
    -   `aboutUs` => `AboutUs`
    -   `Habitat-item` => `HabitatItem`
-   You have some reallly funky spacing happening :) There's lots of extra spaces and it makes it a little challenging to read -- I think you all could benefit from a front end linter
## Backend
-   Code looks good! This is a pretty complicated data structure and you handled it well!

## Database
-   No comments really -- data looks good! You did some complicated relations here -- great job!

## Other Notes
-   Remember to add a README on one of the apps with proper documentation -- this is outlined in the [documentation section](https://github.com/alchemycodelab/june-2021-foundations-ii/blob/main/project-guidelines.md#documentation) of the project guidelines
-   The API portion was worth 8 points (3 points for incorporating it, 2 points for storing info in the database, and 3 points for the proxy route) -- since we didn't step in early enough to stop you on the Twitter train, I only deducted the proxy route points

|                                                                                                         | Possible Points | Zoo-Lander |
| ------------------------------------------------------------------------------------------------------- | --------------- | ---------- |
| **Good & Proper Use of HTML / CSS**                                                                     | 5               | 5          |
| **Good and proper use of JavaScript and Reat Components**                                               |                 |            |
| Clear / readable code                                                                                   | 5               | 5          |
| Uses async JS properly                                                                                  | 5               | 5          |
| Uses react components to "compose" the UI and follows data-down/events-up                               | 5               | 5          |
| Contains no unnecessary or commented-out code                                                           | 5               | 3          |
| **React Router List / Detail pages**                                                                    | 10              | 10         |
| **Third Party API**                                                                                     |                 |            |
| Project incorporates API                                                                                | 3               | 3          |
| Project stores API info in database & associates with users                                             | 2               | 2          |
| **Server Side Code**                                                                                    |                 |            |
| Routes should follow standard REST conventions                                                          | 5               | 5          |
| /get list                                                                                               | 3               | 3          |
| /get detail                                                                                             | 3               | 3          |
| /post create single item                                                                                | 3               | 3          |
| /delete destroy single item                                                                             | 3               | 3          |
| Proxy route                                                                                             | 3               | 0          |
| **Database**                                                                                            |                 |            |
| PostgreSQL database provisioned on the Heroku instance                                                  | 1               | 1          |
| Logical schemas with appropriate data types                                                             | 1               | 1          |
| Data model that maps to the problem domain and uses relational connections, such as joins, as necessary | 2               | 2          |
| Ability to read, create, update resources and persist them in database                                  | 6               | 6          |
| **Testing**                                                                                             | 5               | 5          |
| **Documentation**                                                                                       | 5               | 2          |
| **General Functionality**                                                                               | 10              | 10         |
| Team Score (Out of 90)                                                                                  | 90              | 82         |