# Validate the Goldbach Conjeture

This is an experiment to validate the Goldbash conjeture.

> Goldbach's conjecture is one of the oldest and best-known unsolved problems in number theory and all of mathematics. It states that every even natural number greater than 2 is the sum of two prime numbers. - [Wikipedia](https://en.wikipedia.org/wiki/Goldbach%27s_conjecture)

It is very easy to make a conjecture from a number, to find if two primes give their result, but the idea is that from a number we calculate all the pairs that are found until we reach that number and then for each even number, we obtain their prime numbers, and if by adding two of their primes we obtain even number, so we validate that the conjecture is true.

e.g.

From the number 10, we get all its pairs: [2,4,6,8,10] and from each of them we validate the conjecture, for example if 4 = 2+2.

## Our goal

Being able to find the breakout point to see if the conjecture is false... although at the moment I have tested only up to 100000 with all its possible pairs and the result has been validated.

## Next steps.

Because there is a large computational expense in using a maximum number to calculate the conjecture, I was thinking that maybe we could also use ranges between two numbers for example, if we already know that between 1 and 10000 there is no case in which the If the guess fails, we could then calculate between 10001 and 20000, thereby reducing the number of loops the application has to go through to calculate this.

## How to use this application

Before using the application make sure you have `BunJS` runner installed. [BunJs website](https://bun.sh/).

Install deps:

```bash
bun install
```

To run:

```bash
bun run start
```

This project was created using `bun init` in bun v0.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
