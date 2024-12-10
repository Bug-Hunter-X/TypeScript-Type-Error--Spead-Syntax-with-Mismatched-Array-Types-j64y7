# TypeScript Type Error: Spread Syntax with Mismatched Array Types

This example demonstrates a common type error in TypeScript that can occur when using the spread syntax (...) to combine arrays of different types.  The function `combine` is intended to merge two arrays of numbers, but if a string or other type is present in one of the arrays, the spread syntax will throw a type error during compilation. 

The solution shows how to use type guards or generic types to handle the situation gracefully. 

## How to reproduce:
1. Compile the TypeScript code in `bug.ts`.
2. Observe the type error reported by the compiler.

## Solution:
The `bugSolution.ts` file provides an improved version which addresses this type error, showing a flexible way to handle potentially mixed types and prevent unexpected errors.