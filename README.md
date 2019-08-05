# gitfacts
GitHub data visualisation product that allows to estimate amount of projects in the area requested. 

Whether you are a developer, a recruiter or a junior getting your feet wet in software, this tool will save you hours of research. After intuitive search using GitFacts you will get the answers to questions like: what language is mostly used by developers in the area specified, what types of projects are the most starred ones and how are they related to the number of commits or time spent on the project.

Let`s start with the default graph calculated off all of the GitHub repositories. In the first ring you will see the distribution of the primary languages, the second graph will show you the number of commits, the third one is the average number of contributors for the projects. All the data is updated via the github API, so you can parse in any text to the search window and see how the repositories matched with your search are distributed based on their language, rating, number of commits and any other information available.

But is it the only way to use GitFacts? Imagine you are deciding if you want to hire someone. Just type his/hers username in the search window and see the amount of contributions, languages and much more other data mined and sorted out for you. Also, another useful feature is the ability to compare your candidate statistics with the users average sttistics in the field specified. Similarly, if you are a starting developer you can also compare your own stats with stats of other users and hopefully find a motivation to code harder! When used this way, it can be even seen as the personalised productivity tool. 

GitFacts, therefore, is a flexible and versatile tool allowing you to navigate GitHub information and display it in format that is easily apprehended. Divide the data and conquer the world!


## adding an API key

to run this locally, you'll need a github api token. Go to your account settings, click developer options in the side pane, and generate an API key from there. Then make a secrets.js file in the /src directory with the line export const TOKEN = "YOUR_TOKEN_HERE" 