# Booking example

An example of an app to book an appointment; far from being finished, needs more work.

## Getting Started

Run the dev server with:

```bash
npm run dev
```

## Project requirements

TODO

## Choices explanation

### Stack

The project has been bootstrapped with Next.js, then converted to typescript.\
Used commit-lint with husky for code quality, and eslint (for formatting too - usually prettier is my choice for that).\
Everything has been kept as close to the default settings as possible to avoid time consumption.\
Since the project's focus was not on UI, it seemed a good opportunity to explore Tailwind CSS without spending much time.

Next.js seemed a better choice over other frameworks because of its easy setup and routing out of the box.

### Architecture

#### "domain" folder

Contains the domain of the app, as the name suggests. Content here must be independent of the rest of the app.

_Example of improvement_: User's name and email should be value objects.

#### "repository" folder

Here go the repositories, everything that communicates with APIs, DBs, or anything external.

#### "context" folder

Folder used to group contexts.

BookingContext has not been used for time constraints.

### Notes about code

Many checks are missing, and there are no tests; the focus was on the project's overall structure.

Everything is sync, but in a real application there would be async functions, as the load of the user for example.

### How to proceed

From the current point, many improvements could take place.

First thing first: the available days and hours are hardcoded at the moment, they should be loaded from an API, and the data structure might need some review.\
The available hours should be selectable, and this could be done with checkboxes. The entire logic of booked hours could be managed via a reducer, and shared with the confirmation page with the BookingContext.
