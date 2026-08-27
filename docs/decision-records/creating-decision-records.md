# Creating project and architecture decision records

An Architecture Decision Record (ADR) is a short, numbered Markdown record of
a single decision that shapes a project or its architecture. Keep ADRs with the
code so contributors can understand the constraints that still apply.

## What is a decision record?

An ADR captures the context, decision, status, and consequences of a durable
choice. It is not a design proposal, task plan, or complete feature history.
Create one when a choice affects how the project is structured, integrated,
operated, or evolved and future contributors may reasonably ask why it was
made.

Examples include choosing a shared architectural pattern, defining a package
boundary, adopting a cross-cutting dependency, or deciding how a service stores
or exchanges data. Routine implementation details and decisions that can be
understood directly from a small, local change generally do not need a record.

## Why create one?

Decision records make the rationale available without requiring contributors to
search pull requests, chat messages, or the memories of the original authors.
They help people and coding agents avoid reopening settled questions, identify
constraints before proposing changes, and make the trade-offs behind the
current architecture visible during review.

ADRs are historical records, not living specifications. After acceptance, do
not rewrite one to reflect a later change: create a new ADR that supersedes it
and link the two records. This preserves the decision trail.

## Who is involved?

The person proposing or implementing the decision normally drafts the record.
The maintainers and technical owners responsible for the affected area review
its accuracy, alternatives, and consequences. Include other stakeholders when
the decision crosses package, team, security, accessibility, operational, or
consumer boundaries.

The approving owner is accountable for the decision. The author is accountable
for describing it clearly before acceptance and incorporating review feedback.

## How to create a record

1. Confirm that the choice is durable and has architectural or project-wide
   consequences.
2. Check existing records and choose the next sequential number. Create a
   clearly named file, for example `0001-use-a-monorepo-architecture.md`.
3. Start with a status and date. Use `Proposed` while seeking agreement;
   `Accepted` after approval; and `Superseded by ADR <number>` when a later
   decision replaces it.
4. Describe the context: the problem, constraints, and forces that make a
   decision necessary. Record facts and trade-offs, not a long solution design.
5. State the decision directly, including its scope, boundaries, and
   exceptions. An ADR should make one decision, not collect a set of unrelated
   choices.
6. Record the meaningful alternatives considered and why they were not chosen.
7. List the positive, negative, and follow-up consequences so implementers know
   what becomes required, easier, harder, or out of scope.
8. Ask the affected maintainers to review the record with the implementation.
   Change the status to `Accepted` only when the accountable owner agrees.
9. When a later decision replaces it, retain the accepted record unchanged.
   Create a new record that references it, then update the old record's status
   to `Superseded by ADR <number>`.

## Suggested template

```md
# ADR <number>: <short, imperative decision title>

- Status: Proposed
- Date: YYYY-MM-DD
- Decision owner: <name or team>

## Context

<What problem, constraints, and forces require a decision?>

## Decision

<What have we decided, and where does it apply?>

## Alternatives considered

<What credible alternatives were considered and why were they not selected?>

## Consequences

<What becomes easier, harder, required, or out of scope as a result?>
```

Keep the record focused on the decision. Link to design documents, issues, or
pull requests for detailed evidence and implementation discussion instead of
duplicating them. This guidance follows the core ADR conventions documented by
[architecture-decision-record](https://github.com/architecture-decision-record/architecture-decision-record).
