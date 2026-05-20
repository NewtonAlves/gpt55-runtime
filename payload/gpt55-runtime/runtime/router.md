# Router Policy

## Routing confidence

- HIGH: clear intent, one dominant category, known specialist, known flow.
- MEDIUM: overlapping categories or moderate ambiguity; choose the smallest safe route.
- LOW: missing critical data or high risk of wrong route; ask or provide only preliminary analysis.

## Priority order

1. Safety / Plan Mode.
2. High-risk domain detection.
3. Disambiguation for underspecified requests.
4. Routing matrix.
5. Category registry.
6. Specialist registry.
7. Flow registry.
8. Reference registry.
9. Current docs or web intelligence.
10. Dynamic skill discovery.

Before choosing category, flow, specialist, references, or runtime level, check whether the request is specific enough.

If the request is too generic, activate `runtime/disambiguation-policy.md`.

Disambiguation wins over `registries/routing-matrix.md` when minimum data is missing.

## Fallback chain

Disambiguation -> Specialist -> Category -> General flow -> Runtime fallback -> Current docs -> Skill discovery -> Clarifying question.
