# RedGreenRefactorDemo

This is a test run repo for [RedGreenRefactor](https://github.com/JuliusGruber/RedGreenRefactor).

![Git log](resources/img.png)

## Test Run: Calculator Demo

A test run was performed against a Node.js demo project (RedGreenRefactorDemo) with the prompt:

> *"Implement a Calculator class with add, subtract, multiply, and divide methods"*

### Configuration

| Setting | Value |
|---|---|
| **Model** | `claude-opus-4-5-20251101` |
| **Test framework** | Detected automatically (`npm test`) |
| **Max retries** | 3 |

### Results

The orchestrator completed 6 full TDD cycles before failing on cycle 7.

| Cycle | Test | RED | GREEN | REFACTOR |
|:---:|---|---|---|---|
| 1 | add: sum of two positive numbers | 1 retry (50 iter limit), then OK (19 iters) | OK (23 iters) | OK (12 iters) |
| 2 | add: sum when one number is negative | OK (11 iters) | OK (8 iters) | OK (8 iters) |
| 3 | add: sum when both numbers are negative | OK (14 iters) | OK (6 iters) | OK (10 iters) |
| 4 | add: correct result with zero | OK (9 iters) | OK (8 iters) | OK (17 iters) |
| 5 | subtract: difference of two positive numbers | OK (8 iters) | OK (9 iters) | OK (10 iters) |
| 6 | subtract: correct result when first number is smaller | OK (15 iters) | OK (8 iters) | OK (10 iters) |
| 7 | subtract: correct result with zero | Failed (all 3 retries hit 50 iter limit) | — | — |

### Known Issues

- **TestAgent iteration limit** — The TestAgent occasionally gets stuck in a loop and exhausts the 50-iteration cap. This happened 4 times total during the run. In earlier cycles the retry mechanism recovered, but cycle 7 failed all 3 attempts.
- **Prompt size growth** — By cycle 4, the conversation history grew to 218,276 tokens, exceeding the 200,000 token API limit. The retry mechanism handled it by resetting context, but this indicates the agent's conversation history accumulates without truncation.
