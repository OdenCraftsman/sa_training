---
to: <%= abs_path %>/<%= hooks_name %>.tsx
---

type Args = {}
type ResultValues = {}
type ResultHandlers = {}

export const <%= hooks_name %> = (args: Args): [ResultValues, ResultHandlers] => {
    return [{}, {}]
}


