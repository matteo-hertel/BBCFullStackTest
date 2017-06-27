# Task execution

This is an interesting challenge, it reflects a real worse case scenario (limited time and no PM around to answer questions) that any developer can run into, the whole process will be structured in 4 main parts:

1. Analysis and assumptions
2. Estimation
3. Execution
4. Follow up and next phase

## Analysis and assumptions

There are two main constraint that will dictate how the whole assignment  will go, time and no PM around to answer question and prioritise features, so a fair number of assumptions will be made.

The first and most important assumption is: **the customer is the number one priority** there for the application will be an MVP application that would offer a good experience to the customer even if not feature full, after that the app will be iterated over until the app is completed both from the customer and tech side

The following features are required:

- Recipe list
    - No recipe available
    - One recipe available
    - Multiple recipes available (no pagination)
    - Multiple pages of recipes

- Recipe page
    - Recipe doesn't exists
    - Recipe cooking time
    - Recipe image
    - Recipe ingredients

- Filter recipes
    - No results
    - Filter by name
    - Filter by ingredient
    - Filter by time

- Star recipes
    - Star a recipe
    - Unstar a recipe
    - No starred recipes
    - Show only starred recipes

The chosen tech stack will be:
- Backend: Node.JS express powered application 
- FrontEnd: The app should work on mobile devices I would personally choose between two front end stacks: React + react native or a Polymer PWA, there are advantages and disadvantages in both but for this assignment ad Polymer PWA will be chosen
- Ops: Both FE and BE will be housed in a docker container ready for the CD/CI pipeline, if I have the time I'll hook it up in my personal CD/CI pipeline ready to show in a follow up interview

## Estimation
At this point a discussion whit the PM should start to check what needs to be pulled into the MVP, what can be left out and what it the topmost priority

Not having the PM around and given the timeline and the constraint the MVP will look like this:

- Recipe list
    - No recipe available
    - Multiple recipes available (no pagination)

- Recipe page
    - Recipe doesn't exists
    - Recipe cooking time
    - Recipe image
    - Recipe ingredients

- Filter recipes (Nice to have in MVP but can be removed if needed)
    - No results
    - Filter by name

The basic features for a recipe app will be covered and an extra nice to have feature will be pulled in, in case the team has the bandwidth to deliver something more, the filter recipe will be removed form MVP if any problem will arise and it will compromise the delivery of the product

## Execution
there are 4 main component to keep track of (time taken):

- Analysis and Assessment: ~ 1 hour
- Backend
- Frontend
- Deployment