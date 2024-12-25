# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop.  The issue arises from incorrectly managing dependencies, causing the effect to run continuously.

## Bug Description
The `MyComponent` function uses the `useEffect` hook to increment a state variable (`count`) on every render. However, the dependency array `[count]` causes the effect to re-run whenever `count` changes, leading to an infinite loop.

## Solution
The solution involves understanding how the `useEffect` hook and its dependencies work.  To fix this issue, we must modify the effect's logic or its dependency array so that it does not continuously re-run.