*How-to guide, for anyone preparing app store or game store listing art with the graphic-designer plugin.*

# How to prepare store assets for several stores

This guide shows you how to produce store icons, capsules, feature
graphics and screenshots for each store you ship to, using the
`store-art-batch` workflow.

## Before you start

- An approved identity and a layered master key art file in the design
  folder. If there is no master, the workflow stops and says so.
- The list of stores from the project profile.

## Run the batch

```
/graphic-designer:store-art-batch { "stores": ["Apple App Store", "Google Play", "Steam"] }
```

For localised screenshots and captions:

```
/graphic-designer:store-art-batch { "stores": ["Google Play"], "locales": ["en-US", "de-DE", "ja-JP"] }
```

## What happens

1. Each store's current official spec is fetched and compared with the
   project's spec table.
2. One agent per store writes into `<out dir>/<store>/`.
3. A checker opens every file against the spec and content rules; failing
   stores are fixed and rechecked up to three rounds.
4. One agent updates the spec table, manifests, provenance log and docs.

## If the result is blocked

- `unverified_specs`: the official page could not be read; check it
  yourself and add it to the spec table, then rerun for that store.
- `open`: issues still failing after three rounds, by store.
- `failed_stores`: the producing agent crashed; rerun with just those
  stores.

## Ship it

For a work package, ship it without rebuilding: pass the whole result as
`prior` to engineering-practices deliver-package
(`/engineering-practices:deliver-package { wp: "<the package>", prior: <the result> }`).
With no work package, land `handoff.branch` with engineering-practices
land-pr. `next` in the result gives both commands.

## Hand over for upload

Give the per-store manifests to the DevOps engineer, who uploads.

See the [store-art-batch reference](../reference/workflow-store-art-batch.md)
and the [store-and-marketing-art skill reference](../reference/skill-store-and-marketing-art.md).
